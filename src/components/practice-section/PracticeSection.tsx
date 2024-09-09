import { Flex, Heading } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export type PracticeSectionProps = {
  heading: string;
  children?: ReactNode;
}

export const PracticeSection: FC<PracticeSectionProps> = ({ heading, children }) => (
  <Flex flexDirection='column' gap={4}>
    <Heading as='h2' size='md'>{heading}</Heading>

    {children}
  </Flex>
);
