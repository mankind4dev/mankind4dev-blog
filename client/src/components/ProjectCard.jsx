import { Link } from "react-router-dom";
import {
  gogolive,
  hotelbooking,
  htmlCssPortfolio,
  myPortfolio,
  realCastle,
} from "/public";

export const projects = [
  {
    name: "Real Castle",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MERN.JS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: realCastle,
    source_code_link: "https://github.com/mankind4dev/real-castle",
  },
  {
    name: "Hotel Booking",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "React.tsx",
        color: "blue-text-gradient",
      },
      {
        name: "MERN.JS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hotelbooking,
    source_code_link: "https://github.com/mankind4dev/hotel_booking",
  },
  {
    name: "Gogolive",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gogolive,
    source_code_link: "https://github.com/mankind4dev/capstone-project",
  },
  {
    name: "My Portfolio",
    description:
      "My portfolio is a attestation to my expertise, providing concrete examples of my work. This compilation serves as a showcase of my ability to tackle intricate problems, navigate diverse technologies, effectively lead and manage projects.",
    tags: [
      {
        name: "React 3D",
        color: "blue-text-gradient",
      },
      {
        name: "Reactjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: myPortfolio,
    source_code_link: "https://github.com/mankind4dev/Mankind4dev_3D_portfolio",
  },
  {
    name: "HTML & CSS Protfolio",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "HTML/CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Portfolio",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: htmlCssPortfolio,
    source_code_link: "https://github.com/mankind4dev/portfolio_html_css_js",
  },
];

export default function ProjectCard() {
  return (
    <>
      {projects.map((project, index) => (
        <div key={index} className="group  relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all">
          <>
            <Link to={project.source_code_link} target="_blank">
              <img
                src={project.image}
                alt="project cover"
                className="h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20"
              />
            </Link>
            <div className="p-3 flex flex-col gap-2">
              <p className="text-lg font-semibold line-clamp-2">
                {project.name}
              </p>
              <span className="italic text-sm mb-5 ms:mb-6">{project.description}</span>
              <Link
                to={project.source_code_link}
                target="_blank"
                className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
              >
                Read article
              </Link>
            </div>
          </>
        </div>
      ))}
    </>
  );
}
