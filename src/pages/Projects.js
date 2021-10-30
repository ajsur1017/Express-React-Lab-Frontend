import { useState, useEffect } from "react";

const getProjectsData = async () => {
  const response = await fetch("https://frozen-stream-41139.herokuapp.com/projects");
  const data = await response.json();
  return data
};
const Loaded = ({ projects }) => {
  return projects.map((project) => (
    <div id="projectCards">
      <div id="projectCard">
        <h1>{project.name}</h1>
        <img src={project.image} alt="it's broken" id="projectImg" />
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
      </div>
    </div>
  ));
};

function Projects(props) {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    async function load() {
      const data = await getProjectsData()
      setProjects(data)
    }
    load()
  }, []);
  return projects ? <Loaded projects={projects} /> : <h1>Loading...</h1>;
}

export default Projects;