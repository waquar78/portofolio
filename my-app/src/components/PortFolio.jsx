import lms from "../../public/lmsfull.png";
import chat from "../../public/chat.png";
import ecommerce from "../../public/ecommerce.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: lms,
      name: "LMS",
      sourceLink: "https://github.com/waquar78/LMS_FULL_STACK",
      livelink: "https://jade-khapse-e352b9.netlify.app/"
    },
    {
      id: 2,
      logo: chat,
      name: "Chat-App",
      sourceLink: "https://github.com/waquar78/chat-app",
      livelink: "https://zesty-donut-27bed4.netlify.app/"
    },
    {
      id: 3,
      logo: ecommerce,
      name: "E-commerce",
      sourceLink: "https://github.com/waquar78/full-stack-E-commerce",
      livelink: "https://jazzy-florentine-742c43.netlify.app/"
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
          {cardItem.map(({ id, logo, name, sourceLink,livelink }) => (
            <div
              className="border-[2px] rounded-lg shadow-lg cursor-pointer hover:scale-105 duration-300 overflow-hidden"
              key={id}
            >
              <img
                src={logo}
                className="w-full h-[200px] object-cover"
                alt={name}
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{name}</h2>
                <p className="text-gray-700 mb-4">
                  full fledge mern stack application...
                </p>
                <div className="flex space-x-3">
                   <a
                    href={livelink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                    live-link
                  </button>
                  </a>
                  <a
                    href={sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                      Source code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
