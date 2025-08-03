import React from 'react';
import Breadcrumb from '../Breadcrumb';
import Project1 from "../assets/Project-1.jpg";
import Project2 from "../assets/Project-2.jpg";
import Project3 from "../assets/Project-3.jpg";
import Project4 from "../assets/Project-4.jpg";
import ProjectCard from '../ProjectCard';

const projectdata = [
  {
    src:"",
    title : "Landing Page Redesign",
    button : "Finished",
    Para : "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
  },
  {
    src:"",
    title : "Company posters",
    button : "In Progress",
    Para : "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa."
  },
  {
    src:"",
    title : "Product page design",
    button : "Finished",
    Para : "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
  },
  {
    src:"",
    title : "LUpgrade CRM software",
    button : "In Progress",
    Para : "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris."
  },
  {
    src: Project1,
    title : "Fix form validation",
    button : "In Progress",
    Para : "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris."
  },
  {
    src:Project2,
    title : "New company logo",
    button : "On Hold",
    Para : "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
  },
  {
    src:Project3,
    title : "Upgrade to latest Maps API",
    button : "Finished",
    Para : "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris."
  },
  {
    src:Project4,
    title : "Refactor backend templates",
    button : "On Hold",
    Para : "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa."
  },
]

function Projects() {
  return (
   <div className="h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
         <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
           <div className="h-max w-max flex flex-col">
             <p className="text-3xl font-semibold">Projects</p>
             <Breadcrumb />
           </div>
         </div>
         <div className='h-max w-full flex lg:flex-row sm:flex-col flex-wrap justify-between gap-6  mt-6'>
          {
            projectdata.map((pro , i)=>(
              <ProjectCard img={pro.src} title={pro.title} btn={pro.button} para={pro.Para} key={i} />
            ))
          }
         </div>
    </div>
  );
}

export default Projects;
