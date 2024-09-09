'use client'
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { Logo } from '../../components/logo';
import { questions } from './questions';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { RomajiAnswer, RomajiQuestion } from '@/types';
import { checkRomajiQuestion } from '@/utils/check-romaji-question/check-romaji-question';
import { useSearchParams } from 'next/navigation';
import { Answer } from '../../components/answer';
import Link from 'next/link';

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Page = () => {
  const params = useSearchParams();

  const [questionList, setQuestionList] = useState<RomajiQuestion[]>([]);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answeredCurrentQuestion, setAnsweredCurrentQuestion] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const [input, setInput] = useState<string>('');
  const [answer, setAnswer] = useState<RomajiAnswer>([]);
  const [questionHistory, setQuestionHistory] = useState<RomajiAnswer[]>([]);

  const checkButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  
  const handleCheckAnswer = (e?: FormEvent) => {
    e?.preventDefault();
    
    if (!input) return;
    
    const questionAnswer = checkRomajiQuestion(questionList[questionIndex], input);
    setAnsweredCurrentQuestion(true);
    setAnswer(questionAnswer);

    if (questionAnswer.every(a => a[2])) {
      setScore(score + 1);
    }
  }
  
  const handleNextQuestion = () => {
    setQuestionHistory([...questionHistory, answer]);
    
    if (questionIndex === questionList.length - 1) {
      setQuizCompleted(true);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
    
    setAnsweredCurrentQuestion(false);
    setInput('');
    setAnswer([]);
  };

  useEffect(() => {
    // we should fetch the questions from the server
    // for now, we'll just use the questions we have

    const type = params.get('type');
    const types = type ? type.split(',') : [];

    if (!types.length) {
      window.location.href = '/';
    }
    
    const filteredQuestions = questions.filter(q => types?.includes(q.type));
    const shuffledQuestions = shuffleArray(filteredQuestions);
    const selectedQuestions = shuffledQuestions.slice(0, 10);
    setQuestionList(selectedQuestions);
  }, [params]);

  useEffect(() => {
    if (answeredCurrentQuestion && !quizCompleted) {
      nextButtonRef?.current?.focus();
    } else {
      inputRef?.current?.focus();
    }
  }, [answeredCurrentQuestion, quizCompleted]);

  return (
    <Box backgroundColor='#f1f1f1'>
      <Flex minH='100vh' flexDirection='column' px={5} justifyContent='space-between' gap={10} maxW={500} margin='0 auto'>
        <Flex flexDirection='column' gap={10}>
          <Flex justifyContent='center' py={4}>
            <Logo />
          </Flex>

          {quizCompleted && (
            <>
              <Text fontWeight='bold' fontSize='2xl' textAlign='center'>
                Score {score} / {questionList.length}
              </Text>

              <Text>
                Heres a recap of your answers:
              </Text>

              <Flex flexDirection='column' gap={2}>
                {questionHistory.map((q, i) => (
                  <Answer key={i} answer={q} question={questionList[i]} />
                ))} 
              </Flex>
            </>
          )}
        </Flex>

        {!quizCompleted && (
          <>
            {questionList.length && (
              <Flex flexDirection='column' gap={3} as='form' onSubmit={handleCheckAnswer}>
                {answeredCurrentQuestion && (
                  <Text
                    fontSize='4xl'
                    fontWeight='bold'
                    textAlign='center'
                  >
                    {answer.map((a, i) => (
                      <Text
                      key={i}
                        as='span'
                        color={a[2] ? 'green.400' : 'red.500'}
                      >
                        {a[0]}
                      </Text>
                    ))}
                  </Text>
                )}

                {!answeredCurrentQuestion && (
                  <Text
                    fontSize='4xl'
                    fontWeight='bold'
                    textAlign='center'
                  >
                    {questionList[questionIndex].question}
                  </Text>
                )}
                <Input
                  placeholder='romaji'
                  onChange={handleInputChange}
                  autoComplete='off'
                  value={input}
                  ref={inputRef}
                />
              </Flex>
            )}
            
            <Button
              display={answeredCurrentQuestion ? 'none' : 'block'}
              colorScheme='green'
              variant='solid'
              h='75px'
              w='100%'
              fontWeight='bold'
              alignSelf='flex-end'
              fontSize='lg'
              mb={5}
              ref={checkButtonRef}
              onClick={handleCheckAnswer}
            >
              Check
            </Button>

            <Button
              display={answeredCurrentQuestion ? 'block' : 'none'}
              colorScheme='green'
              variant='solid'
              h='75px'
              w='100%'
              fontWeight='bold'
              alignSelf='flex-end'
              fontSize='lg'
              mb={5}
              ref={nextButtonRef}
              onClick={handleNextQuestion}
            >
              Next
            </Button>
          </>
        )}

        {quizCompleted && (
          <Button
            as={Link}
            href='/'
            colorScheme='green'
            variant='solid'
            h='75px'
            w='100%'
            fontWeight='bold'
            alignSelf='flex-end'
            fontSize='lg'
            mb={5}
          >
            Again
          </Button>
        )}
      </Flex>
    </Box>
  )
}

export default Page;
