import { Flex, Text } from '@chakra-ui/react';
import { FaBolt, FaBug, FaFireAlt, FaMedal } from 'react-icons/fa';

type StatsCardIconType = 'streak' | 'xp' | 'level' | 'division';

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

export const StatsCardIcon = ({ icon }: { icon: StatsCardIconType }) => {
  const style = {
    marginTop: '5px',
    fontSize: '24px',
  };

  if (icon === 'streak') {
    return <FaFireAlt color='#ff9601' style={style} />;
  }

  if (icon === 'xp') {
    return <FaBolt color='#ffda00' style={style} />;
  }

  if (icon === 'level') {
    return <FaBug color='#3cbaf8' style={style} />;
  }

  if (icon === 'division') {
    return <FaMedal color='#ff7c91' style={style} />;
  }

  return <></>;
};
