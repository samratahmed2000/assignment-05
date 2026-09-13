const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="container mx-auto px-4 pt-12 pb-6 text-[12px] text-[#64748B]">
        {/* Top Footer */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 justify-items-center">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="rounded brand-gradient px-1.5 py-1 text-[12px] font-medium text-white">
                DS
              </span>

              <p className="text-[18px] font-bold text-[#0F172A]">
                Dev<span className="text-[#DB2777]">Stack</span>
              </p>
            </div>

            <p className="my-4">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <ul className="flex gap-4 font-semibold text-[#334155]">
              <li>
                <a href="#">GitHub</a>
              </li>

              <li>
                <a href="#">Twitter</a>
              </li>

              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 font-bold text-[#0F172A]">PRODUCT</h3>

            <ul className="space-y-2">
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">Technologies</a>
              </li>

              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-bold text-[#0F172A]">COMPANY</h3>

            <ul className="space-y-2">
              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>

              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-bold text-[#0F172A]">LEGAL</h3>

            <ul className="space-y-2">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 flex justify-between gap-4 border-t border-gray-200 pt-6">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <ul className="flex gap-4">
            <li>
              <a href="#">Privacy</a>
            </li>

            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
