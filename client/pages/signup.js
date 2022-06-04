import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"

const Signup = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <div>
      <form>
        <div>
          <input type="text" placeholder="username"/>
        </div>
        <div>
          <input type="password" placeholder="password"/>
        </div>
        <div>
          <input type="password" placeholder="comfirm password"/>
        </div>
        <button>signup</button>
      </form>
      <div>
      <button onClick={() => signIn()}>Login with github or google</button>
      </div>
      <Link href="/login">
      <a>have a account</a>
      </Link>
    </div>
  );
}

export default Signup;