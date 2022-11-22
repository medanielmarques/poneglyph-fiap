import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { StatsCard } from './stats-card';

export const Stats = () => {
  return (
    <Box px='4'>
      <Text fontSize='lg' fontWeight='500' color='gray.700' mb='3'>
        Estatísticas
      </Text>

      <SimpleGrid columns={2} gridGap='4'>
        <StatsCard icon='streak' stat='13' description='Dias seguidos' />
        <StatsCard icon='xp' stat='1760' description='Total de XP' />
        <StatsCard icon='level' stat='Pleno' description='Nível do usuário' />
        <StatsCard icon='division' stat='1º' description='Posição na divisão' />
      </SimpleGrid>
    </Box>
  );
};
