import { ProjectCard } from "../components/ProjectCard";
import { ProjectsNavBar } from "../components/ProjectsNavBar";
import { projects as projectsData } from "../data";
import {useState} from 'react'
import { Category } from "../type";

const Projects = () => {
    const [projects, setProjects] = useState(projectsData)
    const [active, setActive] = useState("all")

    const HandlerFilterCategory =(caterory:Category | "all") =>{
        if(caterory === "all"){
            setProjects(projectsData)
            setActive(caterory)
            return;
        }
      const newArray =  projectsData.filter((project) => project.category.includes(caterory));
      setProjects(newArray)
      setActive(caterory)
    }
    return (
        <div className="px-5 py-2 overflow-y-scroll" style={{height:"65vh"}}>
          <ProjectsNavBar HandlerFilterCategory={HandlerFilterCategory}/>

           <div className="relative grid grid-cols-12 gap-4 my-3">
               {
                   projects.map((project,i) => (
                       <div className="col-span-12 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200" key={i}>
                           <ProjectCard project={project} key={project.name}/>
                       </div>
                   ))
               }
           </div>
        </div>
    )
}

export default Projects
