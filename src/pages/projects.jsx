import profile from '../assets/profilepic.jpg'
import eggsPic from '../assets/eggs.png'
import propexPic from '../assets/propex.png'
import airtablePic from '../assets/airtable.jpg'

const eggs = `A full-stack invoicing web application developed using React, TypeScript, Express, and PostgreSQL. 
Designed to streamline invoice creation, validation, and analytics for businesses. 
Features include customizable templates, real-time status tracking, and automated reminders. 
Utilized XML validation and role-based authentication. 
Nominated for the Macquarie Bank Prize as one of the top projects in the course.`

const propex = `A cloud-based property analytics platform designed to help users identify high-potential investment opportunities using real-time data. 
Built with AWS Lambda, API Gateway, and Docker for a serverless backend, alongside a React frontend. 
Integrated Terraform for infrastructure-as-code deployment. 
Enabled suburb livability scoring and dynamic data ingestion. 
Nominated for the Optiver Prize for best project of the cohort.`

const airtable = `A performant Airtable-like application built using the T3 Stack (Next.js, TypeScript, tRPC, TailwindCSS), TanStack Table, and PostgreSQL. 
Users can log in via Google, create "bases" and dynamically define tables with editable text/number columns. 
Built-in virtualized scrolling supports datasets up to 1 million rows without performance loss. 
Users can create and save views with filters, sorting, column visibility toggles, and full-text search—all processed at the database level for scalability. 
The project is deployed on Vercel and demonstrates strong frontend optimization and backend querying techniques.`

const ProjectCard = ({ image, title, description, reverse, link }) => (
  <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-10 py-12 px-6 md:px-20 animate-fadeIn`}> 
    <div className="flex-1">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="rounded-2xl shadow-md max-w-full h-auto transform transition-transform duration-300 hover:scale-105" />
      </a>
    </div>
    <div className="flex-1 text-left space-y-4">
      <h2 className="text-4xl font-semibold border-b border-gray-300 pb-2 text-primary dark:text-white">{title}</h2>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="w-full bg-white dark:bg-neutral-900 overflow-hidden">
      <ProjectCard image={eggsPic} title="Eggs Invoicing" description={eggs} reverse={false} link="https://invoice-seng2021-24t1-eggs-frontend.vercel.app/" />
      <div className="bg-secondary/10 dark:bg-secondary/30">
        <ProjectCard image={propexPic} title="Propex" description={propex} reverse={true} link="https://alphas-propex.vercel.app/" />
      </div>
      <ProjectCard image={airtablePic} title="Airtable Visualizer" description={airtable} reverse={false} link="https://airtable-69ry.vercel.app/" />
    </section>
  );
};

export default Projects;
