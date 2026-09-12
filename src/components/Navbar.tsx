import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="border-b sticky top-0 z-50 bg-white/70 backdrop-blur-md border-gray-200">
      <nav className="flex justify-around gap-4 py-4 container mx-auto">
        <div className="text-2xl p-2 m-2 flex justify-center items-center md:hidden">
          <RxHamburgerMenu />
        </div>

        <div className="flex gap-2 items-center">
          <p className="bg-linear-to-tr from-[#EC4899] to-[#7C3AED] text-[14px] text-white px-1.5 py-1 rounded">
            DS
          </p>
          <p className="text-[20px] font-bold">
            Dev<span className="text-[#DB2777]">Stack</span>
          </p>
        </div>

        <ul className="hidden md:flex gap-4 items-center nav-text text-[#475569]">
          <li>
            <a href="#" className="text-[#DB2777]">
              Home
            </a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="flex gap-4 items-center">
          <button>Sign In</button>
          <button className="bg-[#D91B7E] px-5 py-2 text-white rounded-full">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
