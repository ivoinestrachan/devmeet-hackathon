import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => {
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
        <button>login</button>
      </form>
      <div>
      <button onClick={() => signIn()}>Login with github or google</button>
      </div>
    <Link href="/signup">
      <a>Dont have a account</a>
      </Link>
      
    </div>
  );
}

export default Login;
