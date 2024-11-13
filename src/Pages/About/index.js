import { NavBar } from "../../Components";

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <h1 className="text-xl font-bold text-red-700">About Us</h1>
      <div className="flex flex-col md:flex-row mx-2 md:mx-5 h-full mt-10">
        <div className="border-[3px] border-black md:w-1/2 mr-3 h-full h-80">
          content
        </div>
        <div className="border-[3px] border-black md:w-1/2 mr-3 mt-2 md:mt-0 h-80">
          content
        </div>
      </div>
    </>
  );
};

export default AboutUs;
