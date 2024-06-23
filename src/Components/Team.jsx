import { FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
function Team() {
  return (
    <div className="bg-white p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Our team
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        <div className="text-center w-full md:w-auto">
          <div className="relative inline-block">
            <img
              src="/Palak.jpg"
              alt="Palak Sahu"
              className="w-64 h-80 object-cover rounded-lg mb-4"
            />
            <div className="absolute top-2 right-2 p-2 flex flex-col space-y-2">
              <a
                href="#"
                className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
              >
                <FaPhoneAlt size={16} />
              </a>
              <a
                href="#"
                className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
          <h3 className="text-xl font-semibold">Palak Sahu</h3>
          <p className="text-gray-600">Marketing Head</p>
        </div>

        <div className="text-center w-full md:w-auto">
          <div className="relative inline-block">
            <img
              src="/Chirag.jpg"
              alt="Chirag Gupta"
              className="w-64 h-80 object-cover rounded-lg mb-4"
            />
            <div className="absolute top-2 right-2 p-2 flex flex-col space-y-2">
              <a
                href="#"
                className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
              >
                <FaPhoneAlt size={16} />
              </a>
              <a
                href="#"
                className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
          <h3 className="text-xl font-semibold">Chirag Gupta</h3>
          <p className="text-gray-600">Head Technical Officer</p>
        </div>

        <div className="text-center w-full md:w-auto">
          <div className="relative inline-block">
            <img
              src="/Chetan.jpg"
              alt="Chetan Khandait"
              className="w-64 h-80 object-cover rounded-lg mb-4"
            />
            <div className="absolute top-2 right-2 p-2 flex flex-col space-y-2">
              <a
                href="#"
                className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
              >
                <FaPhoneAlt size={16} />
              </a>
              <a
                href="#"
                className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="bg-white hover:bg-black hover:text-white p-2 rounded-full shadow-md"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
          <h3 className="text-xl font-semibold">Chetan Khandait</h3>
          <p className="text-gray-600">Chief Technical Officer (Owner)</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="bg-[url('/Talk.jpg')] bg-cover bg-center text-white p-8 rounded-lg inline-block w-full">
          <h3 className="text-2xl font-bold mb-4">
            Enough talk, let's get to work
          </h3>
          <button className="bg-white text-gray-800 py-2 px-4 rounded-full shadow-md hover:bg-gray-100">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Team;
