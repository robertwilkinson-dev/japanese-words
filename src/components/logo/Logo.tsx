import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';

export const Logo: FC = () => (
  <Box width='fit-content' mt={5}>
    <Flex flexDirection='column'>
      <Heading as='h1' size='3xl' color='gray.900'>JP Spell</Heading>
      <Text
        as='h2'
        fontSize='md'
        alignSelf='flex-end'
        mt={1}
        color='green.400'
        fontWeight='bold'
      >
        日本 スペリング
      </Text>
    </Flex>
  </Box>
)