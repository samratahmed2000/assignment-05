import BannerImage from "../assets/banner-image.png";

const Banner = () => {
  return (
    <header className="flex flex-col my-8 md:flex-row justify-between items-center min-h-[90vh] container mx-auto">
      <div className="text-center md:text-left">
        <h1 className="text-[60px] font-inter font-extrabold leading-15">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-[18px] mt-7 mb-10 text-[#475569]">
          Explore frontend, backend, database, and tooling options, <br />
          compare them side by side, and put together the stack that fits your
          <br /> next project.
        </p>

        <button className="text-[14px] text-white font-semibold font-inter bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-[10px] px-3 py-2 mr-4">
          Explore Technologies
        </button>

        <button className="text-[14px] text-[#374151] font-normal font-inter border border-[#E5E7EB] rounded-[10px] px-12 py-2">
          Learn More
        </button>
      </div>

      <div>
        <img className="md:w-80 h-80" src={BannerImage} alt="Banner Image" />
      </div>
    </header>
  );
};

export default Banner;
