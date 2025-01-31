import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
         I'm a full-stack web developer specializing in creating interactive and responsive web applications using ReactJS and Tailwind CSS for the frontend. 
         On the backend, I have studied Java with Spring Boot and am capable of implementing CRUD operations, such as user signup and signin functionalities. 
         While I am currently enhancing my backend development skills, I am committed to strengthening them further to achieve excellence in full-stack development.
         Additionally, I possess knowledge in RESTful API development, database management, and web security practices. I am dedicated to continuously updating 
         my skills with the latest web development technologies to deliver user-centric and scalable solutions.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
