import "./Banner.css";

const Banner = () => {
  return (
    <div
      className={`xl:min-h-screen banner-container px-4 py-5 mx-auto md:px-24`}
    >
      <div className="grid grid-cols-1 justify-center items-center">
        <div className="my-20 xl:mt-52 md:w-11/12 lg:w-8/12 xl:w-7/12 text-white">
          <div>
            <h1 className=" text-3xl lg:text-4xl leading-snug font-semibold mb-5">
              Find the perfect <i>Courses</i> <br /> for your Carrier
            </h1>
          </div>
          <div className="mt-5 hidden md:block xl:block">
            <ul className="flex gap-3 items-center font-semibold flex-wrap">
              <li>
                <h2 className="text-2xl">Popular:</h2>
              </li>
              <li className="text-sm md:text-xs border border-white p-3 rounded-2xl">
                App Development
              </li>
              <li className="text-sm md:text-xs border border-white p-3 rounded-2xl">
                Web Development
              </li>
              <li className=" text-sm md:text-xs border border-white p-3 rounded-2xl">
                Programming
              </li>
              <li className="text-sm md:text-xs border border-white p-3 rounded-2xl">
                Assessment Test
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
