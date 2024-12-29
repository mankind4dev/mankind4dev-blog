import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import ProjectCard from "../components/ProjectCard";
import { Spinner } from "flowbite-react";

// export const projects = [
//   {
//     name: "Real Castle",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "React",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "MERN.JS",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: realCastle,
//     source_code_link: "https://github.com/mankind4dev/real-castle",
//   },
//   {
//     name: "Hotel Booking",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "React.tsx",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "MERN.JS",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: hotelbooking,
//     source_code_link: "https://github.com/mankind4dev/hotel_booking",
//   },
//   {
//     name: "Gogolive",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "Reactjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "React",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: gogolive,
//     source_code_link: "https://github.com/mankind4dev/capstone-project",
//   },
//   {
//     name: "My Portfolio",
//     description:
//       "My portfolio is a attestation to my expertise, providing concrete examples of my work. This compilation serves as a showcase of my ability to tackle intricate problems, navigate diverse technologies, effectively lead and manage projects. It stands as a comprehensive demonstration of my proficiency and experience in the field.",
//     tags: [
//       {
//         name: "React 3D",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Reactjs",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: myPortfolio,
//     source_code_link: "https://github.com/mankind4dev/Mankind4dev_3D_portfolio",
//   },
//   {
//     name: "HTML & CSS Protfolio",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "HTML/CSS",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Portfolio",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: htmlCssPortfolio,
//     source_code_link: "https://github.com/mankind4dev/portfolio_html_css_js",
//   },
// ];

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl">Welcome to my Blog</h1>
        <p className="text-gray-400 text-xs sm:text-sm w-full sm:w-[70%]">
          Discover a wealth of resources designed to ignite your curiosity and
          expand your expertise in technology. Dive deep into cutting-edge web
          development techniques, uncover the secrets of scalable software
          engineering practices, and master the art of programming with
          step-by-step guides. Whether you're a beginner taking your first steps
          into coding or a seasoned developer looking to refine your craft, our
          articles and tutorials provide practical knowledge, real-world
          examples, and actionable tips to elevate your skills. Stay ahead of
          the curve with trends, tools, and insights that shape the
          ever-evolving tech landscape.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      {/* <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div> */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 ? (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-start">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        ) : (
          <>
          <p className="flex w-full justify-center text-center self-center"></p>
            <Spinner size="lg" className="flex justify-center text-center self-center" />
          </>
        )}
      </div>
    </div>
  );
}
