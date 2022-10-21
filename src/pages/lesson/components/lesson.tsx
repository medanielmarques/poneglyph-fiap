import CloseIcon from '@heroicons/react/20/solid/XMarkIcon';
import CodeIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon';
import SettingsIcon from '@heroicons/react/24/outline/Cog8ToothIcon';
import Link from 'next/link';

import { ProgressBar } from './progress-bar';

interface ILesson {
  title: string;
  texts: string[];
  progress: number;
  next: string;
}

export const Lesson = ({ title, texts = [], progress = 0, next }: ILesson) => {
  return (
    <div className='p-6 flex flex-col justify-between h-screen'>
      <div className='flex flex-col gap-6'>
        <div className='flex justify-between items-center gap-4 text-gray-400'>
          <CloseIcon className='w-10 h-10' />
          <SettingsIcon className='w-10 h-10' />
          <ProgressBar progress={progress} />
        </div>

        <h1 className='text-xl font-bold'>{title}</h1>

        {texts.map((text, i) => (
          <p key={i} className='text-gray-500 text-justify'>
            {text}
          </p>
        ))}

        <div className='flex justify-between px-4 py-6 bg-[#2d3748] text-white rounded-lg'>
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

          <CodeIcon className='w-7 h-7 text-gray-400' />
        </div>
      </div>

      <div className=''>
        <Link href={next}>
          <button className='bg-[#324274] container h-12 rounded-xl text-white font-semibold'>
            CONTINUAR
          </button>
        </Link>
      </div>
    </div>
  );
};
