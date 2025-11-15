import { Spinner } from "@/components/shared/Spinner";

const LoginPage = () => {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-12 h-screen">
      <div className="flex justify-center items-center py-12 h-full">
        <h1 className="text-2xl font-bold">Login</h1>
        <Spinner className="size-8" />
      </div>
    </section>
  );
};

export default LoginPage;
