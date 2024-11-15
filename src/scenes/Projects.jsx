import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, context }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  // title = "Project 1"
  // convert = "project-1"
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-3xl font-playfair">{title}</p>
        <p className="text-2xl font-playfair mt-2">{subtitle}</p>
        <a
          href={context}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl mt-5 text-blue underline"
        >
          {context}
        </a>
      </div>
      <img src={`../assets/${projectTitle}.jpg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48 ">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          2Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center ">
        {/* PARENT VARIANT MOTION */}
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          {/* <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div> */}
          <div className="p-2">
            {/* padding to add space around each project */}
            <Project
              title="Project 1"
              subtitle="FRESH HARVEST"
              context="https://www.freshharvestphil.com/"
            />
          </div>
          <div className="p-2">
            <Project
              title="Project 2"
              subtitle="JairoJobs"
              context="https://jairojobs.com/"
            />
          </div>
          <div className="p-2">
            <Project
              title="Project 3"
              subtitle="Truspace"
              context="https://truspace.ca/"
            />
          </div>
          {/* <Project title="Project 4" subtitle="PROJECT 4 subtitle" />
          <Project title="Project 5" subtitle="PROJECT 5 subtitle" /> */}

          {/* ROW 3 */}
          {/* <Project title="Project 6" subtitle="PROJECT 6 subtitle" />
          <Project title="Project 7" subtitle="PROJECT 7 subtitle" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
