import { Flex, Text } from '@chakra-ui/react';
import { StatsCardIcon } from './stats-card-icon';

export type StatsCardIconType = 'streak' | 'xp' | 'level' | 'division';

interface StatsCardProps {
  icon: StatsCardIconType;
  stat: string;
  description: string;
}

export const StatsCard = ({ icon, stat, description }: StatsCardProps) => {
  return (
    <Flex
      borderStyle='solid'
      borderWidth='1px'
      borderColor='gray.300'
      w='40'
      h='20'
      rounded='lg'
      pl='3'
      pt='2'
      gridGap='1.5'
    >
      <StatsCardIcon icon={icon} />

      <Flex direction='column'>
        <Text fontSize='xl' color='gray.900' fontWeight='bold'>
          {stat}
        </Text>

        <Text fontSize='small' color='gray.400'>
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};
