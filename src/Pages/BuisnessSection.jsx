 
import Whatmakesdifferent from "./Whatmakesdifferent";
const BuisnessSection = () => {
  return (
    <>
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <img
                src="/about-us-page-animate.svg"
                alt="About Us"
                loading="lazy"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-start">
              <h2 className="text-3xl font-semibold my-4">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2023 , Social Shine  has been dedicated to helping
                businesses grow their online presence through innovative and
                data-driven social media strategies.
              </p>
              <p className="text-gray-300 mb-4">
                From our humble beginnings to our current success, our journey
                has been fueled by creativity, expertise, and a commitment to
                excellence.
              </p>
              <p className="text-gray-300">
                From our humble beginnings to our current success, our journey
                has been fueled by creativity, expertise, and a commitment to
                excellence.
              </p>
            </div>
          </section>

           
        </div>
        
        <Whatmakesdifferent />
      </div>
    </>
  );
};

export default BuisnessSection;
