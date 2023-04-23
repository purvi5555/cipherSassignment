import React from "react";
import { Link } from "react-router-dom";

const Upcoming = () => {
  return (
    <section
      className="h-screen bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1619364726002-dfd4fdaee5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">
            Coming Soon
          </h1>

          <p className="mt-6 lg:text-lg text-white">
            You can subscribe to our newsletter, and let you know when we are
            back
          </p>

          <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
            <Link to="/">
              <button className="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
