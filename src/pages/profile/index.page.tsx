import { Box, Divider, color } from '@chakra-ui/react';

import { Courses } from './components/courses';
import { Stats } from './components/stats';
import { TopBar } from './components/top-bar';
import { UserInfo } from './components/user-info';

export default function ProfilePage() {
  return (
    <Box mt='2'>
      <button className='bg-red-500'>CLICKME</button>
      <TopBar />
      <UserInfo />
      <Divider my='4' />
      <Stats />
      <Divider mt='8' mb='4' />
      <Courses />
    </Box>
  );
}
