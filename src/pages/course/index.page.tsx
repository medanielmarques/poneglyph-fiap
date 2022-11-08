import course from 'assets/course.png';
import Image from 'next/image';
import { TopBar } from 'pages/new-profile/index.page';
import { FaHtml5 } from 'react-icons/fa';

export default function Course() {
  return (
    <div>
      <div className='p-4'>
        <TopBar />
      </div>

      <div className='text-white bg-gray-700 text-center p-4'>
        <span>HTML</span>
        <FaHtml5 size={65} className='text-orange-500 mx-auto mb-4' />

        <p className='text-xs text-justify'>
          Esse curso vai te ensinar como criar uma página web usando HTML.
          Complete uma série de exercícios e pratique enquanto escreve um
          autêntico código HTML.
        </p>
      </div>

      <Image
        //
        src={course}
        alt='course'
        width='828px'
        height='1136px'
      />
    </div>
  );
}
