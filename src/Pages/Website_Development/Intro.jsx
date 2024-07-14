function Intro() {
  return (
    <>
      <div className="relative bg-black overflow-hidden font-normal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative z-10 max-w-lg w-full bg-white p-8 rounded-lg shadow-lg order-2 md:order-1">
            <main className="sm:text-center lg:text-left">
              <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-xl md:text-3xl mb-1">
                <span className="">Website Design & Development</span>
                <br />
                <span className=" text-indigo-600">
                  Provide solutions to small Buisness
                </span>
              </h1>
              <p className="mt-3 text-base text-[#0e0f11] sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-lg">
                Building a website is essential to building a solid online
                presence, increasing brand awareness, and propelling company
                expansion. A well-designed website is crucial for attracting
                clients, exhibiting goods or services, and maintaining market
                competitiveness in the digital age.
              </p>
            </main>
          </div>
          <div className="relative z-10 max-w-lg w-full ml-8 order-1 md:order-2">
            <img
              src="/social-networking-animate-seprate.svg" // replace with your animated SVG URL
              alt="Animated SVG"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
