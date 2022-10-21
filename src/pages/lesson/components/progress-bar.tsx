import * as Progress from '@radix-ui/react-progress';

export const ProgressBar = ({ progress }: { progress: number }) => (
  <Progress.Root
    value={progress}
    className='relative overflow-hidden bg-gray-300 rounded-xl container h-3.5'
  >
    <Progress.Indicator
      className='bg-teal-400 container h-full'
      style={{ transform: `translateX(-${100 - progress || 0}%)` }}
    />
  </Progress.Root>
);
