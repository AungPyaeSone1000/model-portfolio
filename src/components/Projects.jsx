import { PROJECTS } from "../constant";
import Card from "../components/Card";

const Project = () => {
  return (
    <div id="projects">
      <h2 className="mt-20 text-center text-4xl font-semibold ">Projects</h2>
      <div className="flex flex-wrap justify-center py-8">
        {PROJECTS.map((project, index) => {
          return ( 
            <div key={index}>
              <Card
                image={project.image}
                title={project.title}
                subtitle={project.subtitle}
                link="#"
              ></Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Project;
