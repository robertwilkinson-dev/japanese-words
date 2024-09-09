import { RomajiAnswer, RomajiQuestion } from '@/types';
import { Card, Text } from '@chakra-ui/react';
import { FC } from 'react';

export type AnswerProps = {
  answer: RomajiAnswer;
  question: RomajiQuestion;
};

export const Answer: FC<AnswerProps> = ({ answer, question }) => (
  <Card p={4}>
    <Text fontWeight='bold' fontSize='2xl'>
      {answer.map((a, i) => (
        <Text as='span' key={i} color={a[2] ? 'green.500' : 'red.500'}>
          {a[0]}
        </Text>
      ))}
    </Text>

    <Text fontSize='lg' color='gray.500'>
      {question.answer.map((a, i) => `${a} ${i === question.answer.length - 1 ? '' : '/ '}`)}
    </Text>

    {question.meaning && (
      <Text fontSize='lg' color='gray.500'>
        {question.meaning}
      </Text>
    )}
  </Card>
);