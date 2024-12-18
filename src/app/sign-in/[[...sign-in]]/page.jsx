import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <>
      <div className="flex justify-center text-center">
        <div className="my-6">
          <SignIn />
        </div>
      </div>
    </>
  );
};

export default SignInPage;
