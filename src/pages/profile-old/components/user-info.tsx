import { Box, Flex, Text } from '@chakra-ui/react';
import { FaRegClock } from 'react-icons/fa';

export const UserInfo = () => {
  return (
    <Flex justify='space-between' mt='6' px='4'>
      <Flex direction='column' gridGap='1'>
        <Text fontSize='lg' fontWeight='500' color='gray.700'>
          Wagner D. Jesus
        </Text>

        <Text fontSize='small' color='gray.400'>
          wagner_dj_2019
        </Text>

        <Flex align='center' gridGap='1'>
          <FaRegClock color='#a0b6d2' />
          <Text fontSize='small' color='gray.500'>
            Por aqui desde março de 2022
          </Text>
        </Flex>
      </Flex>

      <Box>
        <Box w='20' h='20' rounded='full' bg='gray.100' />
      </Box>
    </Flex>
  );
};
