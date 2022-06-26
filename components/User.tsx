import { useSession, signIn, signOut } from "next-auth/react";
const User = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <img
        className="w-10 rounded-full cursor-pointer"
        src={session.user?.image}
        alt="user"
        onClick={signOut}
      />
    );
  }
  return (
    <>
      <button
        className="bg-blue-500 text-white px-5 py-2 font-medium rounded-md uppercase hover:bg-blue-400 hover:shadow-md"
        onClick={signIn}
      >
        Sign in
      </button>
    </>
  );
};

export default User;
