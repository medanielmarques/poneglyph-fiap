import { Flex } from '@chakra-ui/react';
import { Coins } from './coins';
import { Hearts } from './hearts';

export const CoinsHeartsWrapper = () => {
  return (
    <Flex gridGap='4'>
      <Coins />
      <Hearts />
    </Flex>
  );
};
