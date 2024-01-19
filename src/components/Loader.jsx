import { MoonLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full h-[100dvh] fixed top-0 left-0 bg-green-50 flex justify-center items-center z-[999]">
      <div className="md:w-1/3 w-[80%] text-[1.2rem] md:text-[2rem] font-bold p-[25px] md:py-[20px] rounded-2xl flex flex-col gap-4 justify-center items-center">
        <MoonLoader color={"#15803d"} size={100} />
      </div>
    </div>
  );
};

export default Loader;
