import React from "react";
import bg2 from "../assets/bg2.jpg";

const Home = ({ setStep }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-full bg-cover"
      // style={{ backgroundImage: `url(${bg2})` }}
    >
      <div className="bg-gray-800 bg-opacity-70 p-8 rounded-3xl text-center border-orange-500 border-2">
        <h1 className="text-4xl font-semibold text-white mb-4">Welcome to</h1>
        <h2 className="text-3xl font-extrabold text-orange-400 mb-4">
          REGISTRATION PORTAL
        </h2>
        <p className="text-white mb-8 border-dotted border-orange-500 border-2">
          Please read all the necessary details about the event before filling
          the form.
        </p>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded"
          onClick={() => setStep(2)}
        >
          Proceed to
        </button>
      </div>
    </div>
  );
};

export default Home;
