import Link from 'next/link';
import { ReactNode } from 'react';
import {
  FaBolt,
  FaCheckCircle,
  FaCog,
  FaFire,
  FaGraduationCap,
  FaPencilAlt,
  FaShareAlt,
  FaShoppingBag,
  FaTrophy,
  FaUser,
} from 'react-icons/fa';

const luffy =
  'http://pm1.narvii.com/7857/96c0736f007f9dff413d02504db056fcd81db20ar1-1080-1080v2_00.jpg';

export default function Profile() {
  return (
    <div className='p-4'>
      <TopBar />

      <div className='text-center mt-6'>
        <div className='flex flex-col'>
          <img
            src={luffy}
            alt='profile'
            className='rounded-full mx-auto'
            width={125}
            height={125}
          />

          <div className='flex bg-[#324274] items-center justify-center text-white w-10 h-10 rounded-full mx-auto z-10 -mt-6 border-[3px] border-white'>
            <FaPencilAlt size={18} />
          </div>
        </div>

        <div className='flex flex-col mt-4'>
          <span className='text-xl font-bold'>Monkey D. Luffy</span>
          <span className='text-sm text-gray-400'>peko_mamushi_56</span>
        </div>
      </div>

      <div className='my-2 '>
        <span className='text-lg font-medium'>Estatísticas</span>
      </div>

      <div className='flex gap-6 mt-6'>
        <StatsCard label='Streak' value='56'>
          <FaFire size={23} />
        </StatsCard>

        <StatsCard label='XP' value='3000'>
          <FaBolt size={23} />
        </StatsCard>
      </div>

      <div className='flex gap-6 mt-6'>
        <StatsCard label='Ranking' value='3º'>
          <FaTrophy size={23} />
        </StatsCard>

        <StatsCard label='Aulas feitas' value='42'>
          <FaCheckCircle size={23} />
        </StatsCard>
      </div>

      <div className='h-0.5 container bg-gray-200 mt-6' />

      <div className='text-gray-300 flex mt-5 container justify-between px-6 items-center'>
        <Link href='course'>
          <FaGraduationCap size={35} />
        </Link>

        <Link href='division'>
          <FaTrophy size={35} />
        </Link>

        <FaShoppingBag size={35} />

        <div className='text-gray-700 flex flex-col gap-2'>
          <FaUser size={35} />
        </div>
      </div>
    </div>
  );
}

const StatsCard = ({
  children,
  label,
  value,
}: {
  children: ReactNode;
  label: string;
  value: string;
}) => {
  return (
    <div className='flex flex-col'>
      <div className='text-white z-10 -mb-5 ml-6 w-10 h-10 rounded-xl bg-[#fe4c24] flex justify-center items-center'>
        {children}
      </div>

      <div className='flex flex-col gap-4 w-40 h-36 bg-gray-100 px-7 pt-7 rounded-3xl'>
        <span className='font-medium text-lg'>{label}</span>
        <span className='font-bold text-4xl'>{value}</span>
      </div>
    </div>
  );
};

export const TopBar = () => {
  return (
    <div className='flex justify-between'>
      <CoinsAndHearts />

      <div className='flex gap-3 items-center'>
        <FaShareAlt color='gray' size={24} />
        <FaCog color='gray' size={24} />
      </div>
    </div>
  );
};

const CoinsAndHearts = () => {
  return (
    <div className='flex gap-4'>
      <div className='flex gap-1 items-center'>
        <span className='text-2xl'>🪙</span>
        <span className='text-2xl font-bold text-[#ff9100]'>50</span>
      </div>

      <div className='flex gap-1 items-center'>
        <span className='text-2xl'>❤️‍🔥</span>
        <span className='text-2xl font-bold text-[#ff9100]'>5</span>
      </div>
    </div>
  );
};
