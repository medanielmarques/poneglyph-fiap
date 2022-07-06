import { Box, Stack, Text } from '@chakra-ui/react';
import { FaHtml5, FaJs } from 'react-icons/fa';
import { CourseCard } from './course-card';

export const Courses = () => {
  return (
    <Box px='4'>
      <Text fontSize='lg' fontWeight='500' color='gray.700' mb='3'>
        Cursando
      </Text>

      <Stack spacing='4'>
        <CourseCard
          icon={<FaHtml5 color='#e44d26' />}
          name='HTML'
          currentClass='Entendendo acessibilidade'
        />

        <CourseCard
          icon={<FaJs color='#f7df1e' />}
          name='Javascript'
          currentClass='Primeiros passos com a linguagem'
        />
      </Stack>
    </Box>
  );
};
