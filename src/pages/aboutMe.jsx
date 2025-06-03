import profile from '../assets/usual.jpg';
import { useState } from 'react';
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { CSSTransition } from 'react-transition-group';
import '../styles/Homepage.css';

const data = [
  {
    id: 1,
    title: 'About Me',
    content: `Hi, I’m <b>Khye Jac Low</b>, a Software Engineering student at UNSW with a WAM of 85.0 (HD). I’m passionate about building impactful software and enjoy working across the stack. I’ve held leadership and teaching roles, and I thrive in collaborative, real-world environments.`
  },
  {
    id: 2,
    title: 'Experience',
    content: `
    <ul>
      <li><b>Academic Tutor</b> @ UNSW (2025–Present): Teaching COMP2041 and SENG2021. Led sprint planning and mentored full-stack project teams.</li>
      <li><b>Training Program Director</b> @ DevSoc (2024–Present): Ran JavaScript/React/Figma training for 30+ trainees, with 20+ mentors.</li>
    </ul>`
  },
  {
    id: 3,
    title: 'Projects',
    content: `
    <ul>
      <li><b>Eggs Invoicing:</b> React, TypeScript, Express, PostgreSQL. Nominated for Macquarie Bank Prize.</li>
      <li><b>Propex:</b> AWS, Docker, Terraform, React. Nominated for Optiver Prize.</li>
      <li><b>Airtable Clone:</b> T3 Stack, TanStack, PostgreSQL, Google OAuth, tRPC hooks, Vercel.</li>
      <li><b>Competitive Programming:</b> Bootcamp + ICPC participation using C++.</li>
    </ul>`
  },
  {
    id: 4,
    title: 'Extracurricular Activities',
    content: `
    <ul>
      <li><b>CSESoc Socials Subcommittee:</b> Helped organize 20+ events for 7000+ students.</li>
      <li><b>Training Lead @ DevSoc:</b> Led MERN project with real-time Socket.io chat.</li>
      <li><b>Peer Mentor:</b> Supported first-year students through academic and social transition.</li>
    </ul>`
  },
  {
    id: 5,
    title: 'Technical Skills',
    content: `
    <b>Languages:</b> C/C++, Python, JavaScript/TypeScript, SQL, Java, Assembly<br />
    <b>Frameworks:</b> React, Node.js, Next.js, Express, JUnit, Material-UI<br />
    <b>Tools:</b> AWS, Terraform, Git, GitLab CI/CD, MongoDB, Postman, Jest
    `
  },
  {
    id: 6,
    title: 'Contact',
    content: `
    <b>Email:</b> lowkhyejac@gmail.com<br />
    <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/khye-jac-low-134946218/"><u>linkedin.com/in/khye-jac-low</u></a><br />
    <b>GitHub:</b> <a href="https://github.com/kj4c"><u>github.com/kj4c</u></a>`
  }
];

const AboutMe = () => {
    const initialOpenState = Object.fromEntries(data.map((section) => [section.id, true]));
    const [isOpen, setIsOpen] = useState(initialOpenState);

  const toggle = (id) => {
    setIsOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
      <div className='flex flex-col items-center justify-center w-full bg-secondary py-10 px-6 text-center '>
        <img className='border-8 border-primary rounded-full h-60 w-60 object-cover animate-fadeIn transition-all duration-500' src={profile} alt="Khye Jac Low" />
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
          <p className='pt-5 text-4xl font-semibold transition-opacity duration-700 animate-fadeIn ease-in-out'>Khye Jac Low</p>
        </CSSTransition>
        <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
          <p className="text-lg transition-opacity duration-700 ease-in-out animate-fadeIn delay-200">Software Engineering Student @ UNSW</p>
        </CSSTransition>
      </div>
      <div className="px-6 md:px-20 py-10 space-y-6">
        {data.map((section) => (
          <div key={section.id} className='border-b border-gray-300 pb-4'>
            <div className='flex items-center gap-3 cursor-pointer' onClick={() => toggle(section.id)}>
              {isOpen[section.id] ? <FaAngleDown /> : <FaAngleRight />}
              <h2 className='text-2xl font-medium'>{section.title}</h2>
            </div>
            <CSSTransition in={isOpen[section.id]} timeout={200} classNames="my-node" unmountOnExit>
              <div className='pl-7 pt-3' dangerouslySetInnerHTML={{ __html: section.content }} />
            </CSSTransition>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
