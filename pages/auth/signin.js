import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
const signin = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img
          src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg"
          alt="google"
          className="w-32 h-32"
        />
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className=" bg-red-400 rounded-md p-3 font-bold hover:bg-pink-500 mt-5 text-white"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}

export default signin;
