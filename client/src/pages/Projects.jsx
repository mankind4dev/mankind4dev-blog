import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <div className=" mx-auto flex justify-start items-start flex-col p-3">
        <h1 className="text-3xl font-semibold mb-3">Pojects</h1>
        <p className="text-md text-gray-400 w-full sm:w-[70%]">
          Build fun and engaging projects while continuously improving your
          skills in HTML, CSS, and JavaScript! As I work on exciting projects, I
          am also dedicated to expanding my knowledge in React.js and Next.js,
          enhancing my web development abilities. By combining hands-on
          experience with learning, I strive to stay ahead of the curve and
          build more dynamic, user-friendly applications. Each project is an
          opportunity to explore new concepts, refine my skills, and push the
          boundaries of what I can create!
        </p>
      </div>
      <div className="flex w-full gap-4 flex-wrap p-6">
      <ProjectCard />
      </div>
    </>
  );
}
