import { FaChevronRight } from "react-icons/fa";
function Content() {
  const tocItems = [
    { id: "section1", text: "Why Is Web Design So Important" },
    {
      id: "service",
      text: "Web Services We Have For You",
    },
    {
      id: "speciaties",
      text: "What's Special In Our Services",
    },

    {
      id: "Technologies",
      text: "Technologies We Use For Design & Development",
    },
    {
      id: "features",
      text: "Why You Hire Us?",
    },
    {
      id: "Websites_FAQs",
      text: "Some FAQs For Your Convinience",
    },
    {
      id: "Contact",
      text: "Get Ready! Take Your Quotation",
    },
    {
      id: "more services",
      text: "Explore Our More Services",
    },
  ];
  return (
    <div className="bg-white text-black flex">
      <div className="container mx-auto flex flex-wrap py-8 px-6">
        <div className="w-full lg:w-2/3 p-4">
          <h1 id="section1" className="text-4xl font-bold mb-4">
            WHY IS WEB DESIGN SO IMPORTANT?
          </h1>
          <img
            src="/work.jpg"
            alt="Web Design Importance"
            className="w-96 h-auto mb-4 rounded"
          />
          <p className="text-lg leading-8 mb-4">
            In the bustling landscape of digital business, finding the right web
            design and development partner can be a game-changer. Your website
            isn't just a digital placeholder; it's a crucial tool for
            establishing your brand's online presence, connecting with your
            target audience, and driving conversions. In the vibrant tech hub of
            Bangalore, DigiMark Agency stands out as a leading web design and
            development company, delivering top-notch services to businesses of
            all sizes.
          </p>
          <p className="text-lg leading-9 mb-4">
            With a team of experienced professionals, Social Shine offers
            customized web design and development solutions tailored to your
            unique business needs. From responsive web design to bespoke
            e-commerce solutions, they have the expertise to create a website
            that not only looks great but also performs exceptionally well.
          </p>
          <p className="text-lg leading-9 mb-4">
            Investing in professional web design and development services can
            significantly boost your online presence, enhance user experience,
            and drive conversions. Whether you're a startup or an established
            business, partnering with Social Shine can help you achieve your
            digital objectives.
          </p>
        </div>

        <div className="w-full lg:w-1/3 xl:w-1/3 lg:h-auto  ">
          <div className="bg-[#2a2e2e] p-6 rounded-lg my-4 sm:mx-2 md:mx-0">
            <h2 className="text-xl font-bold mb-8 text-gray-100">
              TABLE OF CONTENTS
            </h2>
            <ul>
              {tocItems.map((item) => (
                <li key={item.id} className="mb-2">
                  <a
                    href={`#${item.id}`}
                    className="flex items-center justify-between text-white hover:text-[#1e2024] leading-9 hover:bg-gray-50 p-2 rounded-lg hover:font-semibold"
                  >
                    <span className="mr-2">{item.text}</span>
                    <FaChevronRight />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
