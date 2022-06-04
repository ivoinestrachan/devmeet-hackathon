import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import { useSession, signOut } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/signup');
    }
  }, [])

  if (!session) {
    return null;
  }

  return (
      <>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Logout</button>
      </>
    )
}

export default Dashboard;