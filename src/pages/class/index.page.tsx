import CloseIcon from '@heroicons/react/20/solid/XMarkIcon';
import FeedbackIcon from '@heroicons/react/24/outline/ChatBubbleBottomCenterTextIcon';
import InfoIcon from '@heroicons/react/24/outline/InformationCircleIcon';
import * as Progress from '@radix-ui/react-progress';

export default function ClassPage() {
  return (
    <div className='p-6 flex flex-col gap-6 font-Roboto'>
      <div className='flex justify-between text-gray-400'>
        <CloseIcon className='w-6' />
        <span>Estrutura básica de um documento HTML</span>
        <FeedbackIcon className='w-6' />
      </div>

      <ProgressBar />

      <h1 className='text-xl font-bold'>The &#60;head&#62; Tag</h1>
      <p className='text-gray-500'>
        Imediatamente após a abertura da tag HTML, você encontrará o cabeçalho
        do documento, que é identificada através da abertura e fechamento das
        tags de cabeçalho.
      </p>
      <p className='text-gray-500'>
        O cabeçalho de um arquivo HTML contém todos os elementos que ajudam a
        fazer a página funcionar.
      </p>

      <div className='flex justify-between p-4 bg-gray-700 text-white rounded-lg'>
        <div>
          <p>&#60;html&#62;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp; &#60;head&#62;&#60;/head&#62;</p>
          <p>&#60;/html&#62;</p>
        </div>

        <div className='bg-orange-500 w-16 h-8 rounded-full flex justify-center items-center'>
          HTML
        </div>
      </div>

      <div className='flex gap-6 bg-yellow-200 rounded-lg p-4'>
        <InfoIcon className='w-12 text-yellow-600' />
        <p>Os elementos da seção head serão discutidos em capítulos futuros.</p>
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
      className='bg-green-500 container h-full'
      style={{ transform: `translateX(-${100 - 43}%)` }}
    />
  </Progress.Root>
);
