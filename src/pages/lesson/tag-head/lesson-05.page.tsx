import CloseIcon from '@heroicons/react/20/solid/XMarkIcon';
import CodeIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon';
import SettingsIcon from '@heroicons/react/24/outline/Cog8ToothIcon';
import Link from 'next/link';

import { ProgressBar } from '../components/progress-bar';

export default function TagHeadLesson022() {
  return (
    <div className='p-6 flex flex-col justify-between h-screen'>
      <div className='flex flex-col gap-6'>
        <div className='flex justify-between items-center gap-4 text-gray-400'>
          <CloseIcon className='w-10 h-10' />
          <SettingsIcon className='w-10 h-10' />
          <ProgressBar progress={100} />
        </div>

        <h1 className='text-xl font-bold'> Dica de carreira do dia</h1>

        <p className='text-lg text-gray-500 text-justify'>
          O primeiro passo para iniciar a carreira no mercado de tecnologia é
          visualizar quais são as áreas de interesse. Por ser um mercado amplo e
          com infinitas ramificações, definir o nicho de atuação é um ponto
          fundamental para obter êxito mais facilmente, além de permitir
          estabelecer os principais objetivos na profissão.
        </p>

        <p className='text-lg text-gray-500 text-justify'>
          Aprimorar conhecimentos e contemplar as tendências são determinantes
          para evoluir no mercado de trabalho, sobretudo no de tecnologia.
        </p>
      </div>

      <div>
        <Link href='../../course-tag-class-finished'>
          <button className='bg-[#324274] container h-12 rounded-xl text-white font-semibold'>
            CONCLUIR
          </button>
        </Link>
      </div>
    </div>
  );
}
