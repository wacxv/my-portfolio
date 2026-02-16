import TaskEval1 from '../assets/img-project-temp/TaskEval/TaskEval1.png';
import TaskEval2 from '../assets/img-project-temp/TaskEval/TaskEval2.png';
import TaskEval3 from '../assets/img-project-temp/TaskEval/TaskEval3.png';

import HavenBloom1 from '../assets/img-project-temp/HavenBloom/HavenBloom1.png';
import HavenBloom2 from '../assets/img-project-temp/HavenBloom/HavenBloom2.png';

import AWSCalcu1 from '../assets/img-project-temp/AWSCalcu/AWSCalcu1.png';
import AWSCalcu2 from '../assets/img-project-temp/AWSCalcu/AWSCalcu2.png';

export const projectsData = [
  {
    id: 'task-evaluator',
    title: 'Task Evaluator',
    shortDescription: 'A .NET 9 + PostgreSQL task API evaluator for assessing CRUD, auth, and EF Core usage.',
    fullDescription: `A comprehensive task evaluation system built with .NET 9 and PostgreSQL. This project demonstrates modern API development with Entity Framework Core, implementing role-based authentication, CRUD operations, and advanced data modeling. The evaluator assesses task management APIs for code quality, security practices, and database optimization.`,
    thumbnail: TaskEval1,
    images: [TaskEval1, TaskEval2, TaskEval3],
    tech: ['C#', '.NET 9', 'PostgreSQL', 'Entity Framework', 'REST API'],
    date: 'December 2024',
    github: 'https://github.com/wacxv/task-evaluator',
    live: null,
    category: 'Backend'
  },
  {
    id: 'havenbloom',
    title: 'HavenBloom',
    shortDescription: 'A Telehealth platform for maternal health with real-time video consultations and IoT device monitoring.',
    fullDescription: `HavenBloom is a comprehensive telehealth platform focused on maternal health care. The platform enables real-time video consultations between healthcare providers and patients, integrated IoT device monitoring for vital signs, appointment scheduling, and secure health record management. Built with a focus on accessibility and user experience for expecting mothers.`,
    thumbnail: HavenBloom2,
    images: [HavenBloom1, HavenBloom2],
    tech: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'MongoDB', 'IoT Integration'],
    date: 'November 2024',
    github: 'https://github.com/wacxv/havenbloom',
    live: 'https://havenbloom-demo.com',
    category: 'Full Stack'
  },
  {
    id: 'aws-calculator',
    title: 'AWS Calculator',
    shortDescription: 'Angular-based AWS pricing calculator with auth, cost modeling, and collection management.',
    fullDescription: `An enterprise-grade AWS cost calculator built with Angular, designed for cloud architects and DevOps teams. Features include user authentication, sophisticated cost modeling for various AWS services, collection management for saving configurations, and comprehensive reporting. Deployed on AWS CloudFront for global performance and scalability.`,
    thumbnail: AWSCalcu1,
    images: [AWSCalcu1, AWSCalcu2],
    tech: ['Angular', 'TypeScript', 'AWS', 'CloudFront', 'Firebase Auth'],
    date: 'October 2024',
    github: 'https://github.com/wacxv/aws-calculator',
    live: 'https://aws-calc-demo.com',
    category: 'Frontend'
  }
];

// Helper functions
export const getAllProjects = () => projectsData;

export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id);
};

export const getProjectsByCategory = (category) => {
  if (category === 'All') return projectsData;
  return projectsData.filter(project => project.category === category);
};

export const getFeaturedProjects = (count = 3) => {
  return projectsData.slice(0, count);
};