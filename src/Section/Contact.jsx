function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent px-4">

      {/* Main Container */}
      <div className="
        w-full md:w-10/12 lg:w-9/12
        min-h-[70vh]
        bg-[#111] border border-white/10 rounded-2xl
        px-6 md:px-10 py-8
        flex flex-col justify-between
      ">

        {/* Top Bar */}
        <div className="flex justify-between items-center">
          <div className="w-24 h-6 bg-white/10 rounded-full"></div>

          <div className="flex gap-2 md:gap-4">
            <div className="w-5 h-2 bg-white/20 rounded"></div>
            <div className="w-5 h-2 bg-white/20 rounded"></div>
            <div className="w-5 h-2 bg-white/20 rounded"></div>
          </div>
        </div>

        {/* Content */}
        <div className="
          flex flex-col md:flex-row
          gap-10 md:gap-12
          h-full mt-6
        ">

          {/* LEFT */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 text-white">

            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Let’s chat.
            </h1>

            <p className="text-white/50 text-sm max-w-sm">
              Feel free to reach out for opportunities, collaborations, or any ideas.
            </p>

            {/* subtle lines */}
            <div className="space-y-2">
              <div className="h-1 w-32 bg-white/20 rounded"></div>
              <div className="h-1 w-24 bg-white/20 rounded"></div>
            </div>
          </div>

          {/* RIGHT (FORM) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 text-white">

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/40 tracking-wider">Name</label>
              <input
                type="text"
                className="w-full bg-white/[0.02] border border-white/10 px-3.5 py-2.5 rounded-lg focus:outline-none focus:border-white/30 backdrop-blur-sm transition text-sm text-white"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/40 tracking-wider">Email</label>
              <input
                type="email"
                className="w-full bg-white/[0.02] border border-white/10 px-3.5 py-2.5 rounded-lg focus:outline-none focus:border-white/30 backdrop-blur-sm transition text-sm text-white"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-white/40 tracking-wider">Message</label>
              <textarea
                rows="3"
                className="w-full bg-white/[0.02] border border-white/10 px-3.5 py-2.5 rounded-lg focus:outline-none focus:border-white/30 backdrop-blur-sm transition resize-none text-sm text-white"
              ></textarea>
            </div>

            {/* Button */}
            <button className="
              w-fit bg-white text-black px-6 py-2.5 rounded-lg font-medium
              hover:bg-gray-200 transition-all duration-300 text-sm mt-2
              transform hover:-translate-y-0.5 active:translate-y-0
            ">
              Send message
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;