import { Box, Divider } from '@chakra-ui/react';
import { TopBar } from './components/top-bar';
import { UserInfo } from './components/user-info';
import { Stats } from './components/stats';
import { Courses } from './components/courses';

export default function Profile() {
  return (
    <Box mt='2'>
      <TopBar />
      <UserInfo />

      <Divider my='4' />

      <Stats />

      <Divider mt='8' mb='4' />

      <Courses />
    </Box>
  );
}
