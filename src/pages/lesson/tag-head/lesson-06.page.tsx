import codingImage from 'assets/coding.png';
import Image from 'next/image';
import Link from 'next/link';

export default function TagHeadLesson022() {
  return (
    <div className='p-6 flex flex-col justify-between h-screen'>
      <div className='flex flex-col gap-6'>
        <h1 className='text-2xl font-bold mt-16'> Dica do dia</h1>

        <p className='text-lg text-gray-500 text-justify'>
          Esteja sempre pronto e disposto a se{' '}
          <span className='text-green-500 font-bold'>adaptar!</span>
        </p>

        <p className='text-lg text-gray-500 text-justify'>
          A indústria de TI está em constante mudança. Um dev de sucesso se
          adapta facilmente às mudanças do mercado.
        </p>
      </div>

      <Image
        //
        src={codingImage}
        alt='course'
        width='1027px'
        height='732px'
      />

      <div>
        <Link href='../../course-tag-class-finished'>
          <button className='bg-[#324274] container h-12 rounded-xl text-white font-semibold'>
            CONTINUAR
          </button>
        </Link>
      </div>
    </div>
  );
}
