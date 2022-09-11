import CloseIcon from '@heroicons/react/20/solid/XMarkIcon';
import FeedbackIcon from '@heroicons/react/24/outline/ChatBubbleBottomCenterTextIcon';
import * as Progress from '@radix-ui/react-progress';

export default function ClassPage() {
  return (
    <div className='p-5 flex flex-col gap-4'>
      <div className='flex gap-3 text-gray-400'>
        <CloseIcon className='w-6' />
        <span>Estrutura básica de um documento HTML</span>
        <FeedbackIcon className='w-6' />
      </div>

      <ProgressBar />
    </div>
  );
}

const ProgressBar = () => (
  <Progress.Root
    value={100}
    className='relative overflow-hidden bg-gray-300 rounded-xl container h-3'
  >
    <Progress.Indicator
      className='bg-green-500 container h-full'
      style={{ transform: `translateX(-${100 - 43}%)` }}
    />
  </Progress.Root>
);
