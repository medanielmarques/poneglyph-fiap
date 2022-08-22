import { signIn } from 'next-auth/react';

export default function Home() {
  return (
    <div>
      <button onClick={() => signIn()}>Signin next auth</button>
    </div>
  );
}
