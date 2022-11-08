import { FaCog, FaShareAlt } from 'react-icons/fa';

const luffy =
  'http://pm1.narvii.com/7857/96c0736f007f9dff413d02504db056fcd81db20ar1-1080-1080v2_00.jpg';

export default function Profile() {
  return (
    <div className='p-4'>
      <TopBar />

      <div className='text-center mt-8'>
        <img
          src={luffy}
          alt='profile'
          className='rounded-full mx-auto'
          width={125}
          height={125}
        />

        <div className='flex flex-col mt-4'>
          <span className='text-xl font-bold'>Monkey D. Luffy</span>
          <span className='text-sm text-gray-400'>peko_mamushi_56</span>
        </div>
      </div>

      <div className='my-6'>
        <span className='text-lg font-medium'>Estatísticas</span>
      </div>

      <div className='flex flex-col'>
        <div className='z-10 -mb-4 ml-4 w-8 h-8 rounded-xl bg-orange-400 flex justify-center items-center'>
          IK
        </div>

        <div className='relative overflow-hidden flex flex-col gap-7 w-40 h-44 bg-gray-100 px-5 pt-7 rounded-3xl'>
          <span className='font-semibold text-lg'>Dias seguidos</span>
          <span className='font-bold text-5xl'>56</span>
        </div>
      </div>
    </div>
  );
}

const TopBar = () => {
  return (
    <div className='flex justify-between'>
      <CoinsAndHearts2 />

      <div className='flex gap-3 items-center'>
        <FaShareAlt color='gray' size={24} />
        <FaCog color='gray' size={24} />
      </div>
    </div>
  );
};

const CoinsAndHearts2 = () => {
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
