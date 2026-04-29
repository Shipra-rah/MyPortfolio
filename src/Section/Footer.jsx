import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10">

      <div className="max-w-6xl mx-auto px-6 md:px-20 py-10 flex flex-col gap-8">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          {/* LEFT */}
          <div className="flex items-center gap-4">
            <img
              src="/ShipraProfile.jpg"   // ✅ FIXED PATH
              alt=""
              className="h-10 w-10 rounded-full"
            />

            <div>
              <p className="text-sm font-semibold">Shipra</p>
              <p className="text-xs text-white/40">
                Full Stack Java Developer
              </p>
            </div>
          </div>

          {/* RIGHT (ICONS) */}
          <div className="flex items-center gap-4">

            {[FaXTwitter, FaLinkedin, FaGithub, MdOutlineEmail].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="
                    flex items-center justify-center
                    w-10 h-10 rounded-full cursor-pointer
                    bg-[#111] border border-white/10
                    text-white/60 hover:text-white

                    shadow-[-4px_-4px_8px_rgba(255,255,255,0.05),_4px_4px_8px_rgba(0,0,0,0.9)]
                    hover:shadow-[-2px_-2px_6px_rgba(255,255,255,0.1),_6px_6px_12px_rgba(0,0,0,0.9)]
                    active:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.05),_inset_2px_2px_6px_rgba(0,0,0,0.8)]

                    transition-all duration-200
                  "
                >
                  <Icon size={16} />
                </div>
              )
            )}

          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-white/10"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">

          {/* LEFT TEXT */}
          <p className="text-center md:text-left">
            Building scalable web applications with Java & modern frontend.
          </p>

          {/* CENTER */}
          <p className="text-center">
            © 2025 Shipra
          </p>

          {/* RIGHT */}
          <p className="text-center md:text-right">
            Crafted with ♥
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;