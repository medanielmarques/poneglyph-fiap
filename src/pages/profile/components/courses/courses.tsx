import { Box, Stack, Text } from '@chakra-ui/react';
import { CourseCard } from './course-card';

export const Courses = () => {
  return (
    <Box px='4'>
      <Text fontSize='lg' fontWeight='500' color='gray.700' mb='3'>
        Cursando
      </Text>

      <Stack spacing='4'>
        <CourseCard name='HTML' currentClass='Entendendo acessibilidade' />
        <CourseCard
          name='Javascript'
          currentClass='Primeiros passos com a linguagem'
        />
      </Stack>
    </Box>
  );
};
