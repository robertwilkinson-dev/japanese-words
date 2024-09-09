'use client'
import { useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Logo } from '../components/logo';
import { PracticeSection } from '../components/practice-section';
import { PracticeOption } from '../components/practice-option';
import Link from 'next/link';

const Page = () => {
  const [query, setQuery] = useState<string[]>([]);

  const handleQueryChange = (value: string) => {
    if (query.includes(value)) {
      setQuery(query.filter((item) => item !== value));
    } else {
      setQuery([...query, value]);
    }
  };

  return (
    <Box backgroundColor='#f1f1f1'>
      <Flex minH='100vh' flexDirection='column' px={5} justifyContent='space-between' gap={10} maxW={500} margin='0 auto'>
        <Flex flexDirection='column' gap={10}>
          <Flex justifyContent='center' py={4}>
            <Logo />
          </Flex>

          <Text fontSize='md'>Begin practicing by selecting from the options you&apos;d like to cover below</Text>

          <PracticeSection heading='Basic Spelling'>
            <PracticeOption prefix='あ' label='Hiragana' value='hiragana' onClick={handleQueryChange} />
            <PracticeOption prefix='ア' label='Katakana' value='katakana' onClick={handleQueryChange} />
          </PracticeSection>

          <PracticeSection heading='Kanji'>
            <PracticeOption prefix='漢字' label='Kanji' value='kanji' onClick={handleQueryChange} />
          </PracticeSection>
        </Flex>

        <Button
          as={Link}
          href={{
            pathname: '/practice',
            query: { type: query.join(',') },
          }}
          colorScheme='green'
          variant='solid'
          h='75px'
          w='100%'
          fontWeight='bold'
          alignSelf='flex-end'
          fontSize='lg'
          mb={5}
        >
          Begin
        </Button>
      </Flex>
    </Box>
  )
}

export default Page;
