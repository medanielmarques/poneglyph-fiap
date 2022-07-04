import { Box, Flex, Text } from '@chakra-ui/react';
import { FaCoins, FaConciergeBell, FaStar, FaViacoin } from 'react-icons/fa';

export const Coins = () => {
  return (
    <Flex align='center' gridGap='1'>
      {/* <Box
        bg='#ff9100'
        rounded='full'
        w='10'
        h='10'
        display='flex'
        alignItems='center'
      > */}
      {/* <Box
        display='flex'
        alignItems='center'
        bg='yellow.300'
        rounded='full'
        w='9'
        h='9'
        mx='auto'
      > */}
      <Text fontSize='2xl'>🪙</Text>

      {/* <FaCoins color='#ff9100' size={24} /> */}
      {/* </Box> */}
      {/* </Box> */}
      <Text fontSize='md' fontWeight='medium' color='#ff9100'>
        50
      </Text>
    </Flex>
  );
};
