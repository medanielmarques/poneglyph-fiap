import CloseIcon from '@heroicons/react/20/solid/XMarkIcon';
import CodeIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon';
import SettingsIcon from '@heroicons/react/24/outline/Cog8ToothIcon';
import Link from 'next/link';

import { ProgressBar } from '../components/progress-bar';

const title = 'A Tag <head>';

export default function TagHeadLesson022() {
  return (
    <div className='p-6 flex flex-col justify-between h-screen'>
      <div className='flex flex-col gap-6'>
        <div className='flex justify-between items-center gap-4 text-gray-400'>
          <CloseIcon className='w-10 h-10' />
          <SettingsIcon className='w-10 h-10' />
          <ProgressBar progress={50} />
        </div>

        <h1 className='text-xl font-bold'>{title}</h1>

        <p className='text-gray-500 text-justify'>
          Selecione dentre as várias opções abaixo para criar um documento HTML
          válido:
        </p>

        <div className='flex justify-between px-4 py-6 bg-[#2d3748] text-white rounded-lg'>
          <div className='font-JetBrainsMono text-lg flex flex-col gap-3'>
            <div className='flex justify-between w-32 items-center'>
              &#60;
              <div className='w-24 h-8 bg-green-300 rounded-md flex items-center'>
                <span className='mx-auto text-black font-bold'>html</span>
              </div>
              &#62;
            </div>

            <strong className='flex mt-3'>
              <div>
                &nbsp;&nbsp; &#60;
                <span className='text-red-500'>head</span>
                &#62;
              </div>

              <p>...</p>

              <div className='flex justify-between gap-2 w-36 items-center'>
                &#60;/
                <div className='w-28 h-8 bg-white rounded-md' />
                &#62;
              </div>
            </strong>
            <p>
              &#60;/<span className='text-red-500'>html</span>&#62;
            </p>
          </div>

          <CodeIcon className='w-7 h-7 text-gray-400' />
        </div>
      </div>

      <div className='flex flex-col gap-5 mx-auto mb-40 font-bold'>
        <div className='flex gap-8'>
          <button className='rounded-md shadow-sm border-2 w-32 h-14'>
            tag
          </button>

          <Link href='lesson-04'>
            <button className='rounded-md shadow-sm border-2 w-32 h-14'>
              head
            </button>
          </Link>
        </div>

        <div className='flex gap-8'>
          <button className='rounded-md shadow-sm border-2 w-32 h-14 mx-auto'>
            &#60;/html&#62;
          </button>

          <button className='rounded-md shadow-sm border-2 w-32 h-14'>
            &#60;/&#62;
          </button>
        </div>
      </div>

      <div>
        <button className='bg-[#324274] container h-12 rounded-xl text-white font-semibold'>
          CONTINUAR
        </button>
      </div>
    </div>
  );
}
