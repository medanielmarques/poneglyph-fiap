import { Flex, Text } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

export const Hearts = () => {
  return (
    <Flex align='center' gridGap='1'>
      {/* <FaHeart color='#ff3f62' size={24} /> */}
      {/* <Text fontSize='2xl'>💓</Text> */}
      {/* <Text fontSize='2xl'>💞</Text> */}
      <Text fontSize='2xl'>❤️‍🔥</Text>
      {/* <Text fontSize='2xl'>💗</Text> */}

      <Text fontSize='md' fontWeight='medium' color='#ff3f62'>
        5
      </Text>
    </Flex>
  );
};
