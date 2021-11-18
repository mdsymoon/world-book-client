import React from "react";
import { FaHome } from "react-icons/fa";

const DrawerContainer = () => {
  return (
    <main style={{ minWidth: 200 }}>
      <h3 className="text-2xl text-center font-semibold mt-3 px-5 ">World Book</h3>
      <div className="mt-8 pl-5 border-t-4 ">
        <div className="flex mt-5 cursor-pointer">
          <FaHome style={{fontSize: 30}}/>
          <p className="text-xl ml-2 font-semibold">Home</p>
        </div>
        <div className="flex mt-5 cursor-pointer">
          <FaHome style={{fontSize: 30}}/>
          <p className="text-xl ml-2 font-semibold">Home</p>
        </div>
        <div className="flex mt-5 cursor-pointer">
          <FaHome style={{fontSize: 30}}/>
          <p className="text-xl ml-2 font-semibold">Home</p>
        </div>
      </div>
    </main>
  );
};

export default DrawerContainer;
