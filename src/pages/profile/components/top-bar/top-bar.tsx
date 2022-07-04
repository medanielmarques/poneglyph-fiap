import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { FaCog, FaShareAlt } from 'react-icons/fa';
import { CoinsHeartsWrapper } from '../coins-and-hearts';

export const TopBar = () => {
  return (
    <SimpleGrid columns={3} px='4'>
      <CoinsHeartsWrapper />

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
