import CloseIcon from '@heroicons/react/20/solid/XMarkIcon';
import FeedbackIcon from '@heroicons/react/24/outline/ChatBubbleBottomCenterTextIcon';
import InfoIcon from '@heroicons/react/24/outline/InformationCircleIcon';
import '@prismicio/client';
import * as Progress from '@radix-ui/react-progress';
import { GetServerSideProps } from 'next';

import { createClient } from '../../../prismicio';

export default function ClassPage() {
  return (
    <div className='p-6 flex flex-col gap-6'>
      <div className='flex justify-between text-gray-400'>
        <CloseIcon className='w-6' />
        <span>Estrutura básica de um documento HTML</span>
        <FeedbackIcon className='w-6' />
      </div>

      <ProgressBar />

      <h1 className='text-xl font-bold'>A Tag &#60;head&#62;</h1>
      <p className='text-gray-500 text-justify'>
        Imediatamente após a abertura da tag HTML, você encontrará o cabeçalho
        do documento, que é identificada através da abertura e fechamento das
        tags de cabeçalho.
      </p>
      <p className='text-gray-500 text-justify'>
        O cabeçalho de um arquivo HTML contém todos os elementos que ajudam a
        fazer a página funcionar.
      </p>

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
  );
}

const ProgressBar = () => (
  <Progress.Root
    value={100}
    className='relative overflow-hidden bg-gray-300 rounded-xl container h-3'
  >
    <Progress.Indicator
      className='bg-teal-400 container h-full'
      style={{ transform: `translateX(-${100 - 43}%)` }}
    />
  </Progress.Root>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const client = createClient().getFirst();
  console.log(client);

  // const pages = await client.getAllByIDs([
  //   'o-cabecalho-de-um-arquivo-html-contem-todos-os-elementos',
  // ]);

  // console.log(pages);

  return {
    props: {},
  };
};
