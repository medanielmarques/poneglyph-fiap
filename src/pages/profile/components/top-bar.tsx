import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { FaCog, FaShareAlt } from 'react-icons/fa';

export const TopBar = () => {
  return (
    <SimpleGrid columns={3} px='4'>
      <CoinsAndHearts />

      <Box textAlign='center'>
        <Text px='4' fontSize='xl' fontWeight='bold' color='gray.500'>
          Perfil
        </Text>
      </Box>

      <Flex gridGap='3' justify='right' align='center'>
        <FaShareAlt color='gray' size={24} />
        <FaCog color='gray' size={24} />
      </Flex>
    </SimpleGrid>
  );
};

const CoinsAndHearts = () => {
  return (
    <Flex gridGap='4'>
      <Flex align='center' gridGap='1'>
        <Text fontSize='2xl'>🪙</Text>

        <Text fontSize='md' fontWeight='medium' color='#ff9100'>
          50
        </Text>
      </Flex>

      <Flex align='center' gridGap='1'>
        <Text fontSize='2xl'>❤️‍🔥</Text>

        <Text fontSize='md' fontWeight='medium' color='#ff3f62'>
          5
        </Text>
      </Flex>
    </Flex>
  );
};
