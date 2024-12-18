import { SignUp } from "@clerk/nextjs"; 

const SignUpPage = () => {
  return (
    <>
      <div className="flex justify-center text-center">
        <div className="my-3">
          <SignUp />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
