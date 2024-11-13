import { useEffect, useState } from "react";
import { NavBar } from "../../Components";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col md:flex-row my-10 mx-10">
        <div className="w-full md:w-1/2 border-2 border-black text-xl font-normal md:font-bold text-blue-500">
          First box
        </div>
        <div className="w-full md:w-1/2 border-2 border-red-500 text-xl font-bold text-green-500">
          Second box
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4  gap-4 mx-5">
        <div className="text-center bg-blue-400 md:bg-red-500">01</div>
        <div className="text-center bg-blue-500">02</div>
        <div className="text-center bg-blue-600">03</div>
        <div className="text-center bg-blue-700">04</div>
        <div className="text-center bg-green-400">05</div>
        <div className="text-center bg-green-500">06</div>
        <div className="text-center bg-green-600">07</div>
        <div className="text-center bg-green-700">08</div>
        <div className="text-center bg-green-700">09</div>
      </div>
    </>
  );
};

export default Home;
