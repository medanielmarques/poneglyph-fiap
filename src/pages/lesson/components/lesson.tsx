import CloseIcon from '@heroicons/react/20/solid/XMarkIcon';
import FeedbackIcon from '@heroicons/react/24/outline/ChatBubbleBottomCenterTextIcon';
import InfoIcon from '@heroicons/react/24/outline/InformationCircleIcon';
import Link from 'next/link';

import { ProgressBar } from './progress-bar';

interface ILesson {
  lesson: string;
  title: string;
  texts: string[];
  progress: number;
  previous: string;
  next: string;
}

export const Lesson = ({
  lesson,
  title,
  texts = [],
  progress = 0,
  previous,
  next,
}: ILesson) => {
  return (
    <div className='p-6 flex flex-col justify-between h-screen'>
      <div className='flex flex-col gap-6'>
        <div className='flex justify-between text-gray-400'>
          <CloseIcon className='w-6' />
          <span>{lesson}</span>
          <FeedbackIcon className='w-6' />
        </div>

        <ProgressBar progress={progress} />

        <h1 className='text-xl font-bold'>{title}</h1>

        {texts.map((text, i) => (
          <p key={i} className='text-gray-500 text-justify'>
            {text}
          </p>
        ))}

        <div className='flex justify-between px-4 py-6 bg-gray-800 text-white rounded-lg'>
          <div className='font-JetBrainsMono text-lg'>
            <p>
              &#60;<span className='text-red-500'>html</span>&#62;
            </p>
            <strong>
              &nbsp;&nbsp; &#60;
              <span className='text-red-500'>head</span>&#62;...&#60;/
              <span className='text-red-500'>head</span>&#62;
            </strong>
            <p>
              &#60;/<span className='text-red-500'>html</span>&#62;
            </p>
          </div>

          <div className='bg-orange-500 w-16 h-8 rounded-full flex justify-center items-center'>
            HTML
          </div>
        </div>

        <div className='flex gap-6 bg-amber-100 rounded-lg p-4 mt-4'>
          <InfoIcon className='w-12 text-yellow-500' />
          <p className='text-gray-500'>
            Os elementos da seção head serão discutidos em capítulos futuros.
          </p>
        </div>
      </div>

      <div className='flex justify-between'>
        <Link href={previous}>
          <button className='bg-cyan-400 w-32 h-12 rounded-lg text-white font-bold'>
            Previous
          </button>
        </Link>

        <Link href={next}>
          <button className='bg-cyan-400 w-32 h-12 rounded-lg text-white font-bold'>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};
