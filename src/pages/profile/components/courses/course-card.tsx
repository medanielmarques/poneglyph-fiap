import { Box, Flex, Progress, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { FaHtml5 } from 'react-icons/fa';

interface StatsCardProps {
  icon?: ReactElement<IconType>;
  name: string;
  currentClass: string;
}

export const CourseCard = ({ icon, name, currentClass }: StatsCardProps) => {
  return (
    <Flex
      borderStyle='solid'
      borderWidth='1px'
      borderColor='gray.300'
      // w={300}
      h={100}
      rounded='lg'
      pl='4'
      pt='2'
      gridGap='1.5'
      cursor='pointer'
    >
      <Box mt='1' fontSize='2xl'>
        {icon}
      </Box>

      <Flex direction='column'>
        <Text fontSize='xl' color='gray.900' fontWeight='bold'>
          {name}
        </Text>

        <Text fontSize='small' color='gray.400'>
          {currentClass}
        </Text>

        <Flex align='center' gridGap='2'>
          <Progress value={100} size='lg' w={150} rounded='full' />
          <Text>100%</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
