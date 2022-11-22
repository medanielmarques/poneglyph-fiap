import division from 'assets/division.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
  return (
    <Link href='new-profile'>
      <div className=' -mt-4'>
        <Image
          //
          src={division}
          alt='course'
          width='414px'
          height='846px'
        />
      </div>
    </Link>
  );
}
