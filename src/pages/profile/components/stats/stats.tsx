import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { DivisionPosition } from './division-position';
import { Level } from './level';
import { Streak } from './streak';
import { XP } from './xp';

export const Stats = () => {
  return (
    <Box px='4'>
      <Text fontSize='lg' fontWeight='500' color='gray.700' mb='3'>
        Estatísticas
      </Text>

      <SimpleGrid columns={2} gridGap='4'>
        <Streak />
        <XP />
        <Level />
        <DivisionPosition />
      </SimpleGrid>
    </Box>
  );
};
