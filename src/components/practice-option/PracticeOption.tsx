import { Box, Card, Flex, Radio, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { motion } from 'framer-motion'


export type PracticeOptionProps = {
  prefix: string;
  label: string;
  value: string;
  onClick: (value: string) => void;
}

export const PracticeOption: FC<PracticeOptionProps> = ({ prefix, label, value, onClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
    onClick(value);
  };

  return (
    <Card variant='elevated' onClick={handleClick} as={motion.button} whileTap={{ scale: 0.95 }} cursor='pointer' _focus={{ boxShadow: 'none' }}>
      <Box py={4} px={6} w='100%'>
        <Flex flexDirection='row' alignItems='center' justifyContent='space-between'>
          <Flex flexDirection='row' gap={4} alignItems='center'>
            <Text
              fontWeight='bold'
              color='gray.900'
              fontSize='2xl'
            >
              {prefix}
            </Text>
            <Text
              fontWeight='normal'
              color='gray.900'
              fontSize='1xl'
            >
              {label}
            </Text>
          </Flex>
  
          <Radio colorScheme='green' isChecked={isChecked} />
        </Flex>
      </Box>
    </Card>
  )
};