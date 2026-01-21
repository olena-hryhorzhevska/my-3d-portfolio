import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  egged,
  yachtjet,
  clothica,
  booksy,
  notehub,
  nannies,
  nextjs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Egged Transportation Ltd',
    icon: egged,
    iconBg: '#383E56',
    date: '2024 – Present',
    points: [
      'Worked on website features using React, TypeScript, HTML, and CSS.',
      'Helped make pages responsive and mobile-friendly.',
      'Fixed layout and style issues in existing components.',
      'Assisted in improving overall user experience and UI consistency.',
    ],
  },
  {
    title: 'Data Analyst / Tableau Developer',
    company_name: 'Egged Transportation Ltd',
    icon: egged,
    iconBg: '#E6DEDD',
    date: '2022 – 2023',
    points: [
      'Managed and optimized company databases.',
      'Designed interactive Tableau dashboards for business reporting.',
      'Wrote SQL queries to extract and analyze data from multiple sources.',
      'Analyzed key performance metrics to support decision-making.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Nanny Services',
    description:
      'Nanny Services is a modern full-stack web application that helps families find, filter, and book trusted babysitters. Built with React, JavaScript, Zustand, Vite and Firebase (for backend), the app features secure authentication, advanced filtering, favorites management, appointment booking, and a fully responsive UI designed for real-world use.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'React Router',
        color: 'blue-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'green-text-gradient',
      },
      {
        name: 'Zustand',
        color: 'blue-text-gradient',
      },
      {
        name: 'Yup',
        color: 'green-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'blue-text-gradient',
      },
    ],
    image: nannies,
    source_code_link: 'https://github.com/olena-hryhorzhevska/nanny-app',
  },
  {
    name: 'Clothica',
    description:
      'A modern full-stack e-commerce project built with Next.js and React. Features include dynamic product pages, global state management with Zustand, secure authentication, server-side rendering, API routes, validation with Yup, and a clean responsive UI. Designed as a full real-world online store experience.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'React',
        color: 'green-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'pink-text-gradient',
      },
      {
        name: 'Zustand',
        color: 'blue-text-gradient',
      },
      {
        name: 'Yup',
        color: 'green-text-gradient',
      },
      {
        name: 'Swiper',
        color: 'pink-text-gradient',
      },
      {
        name: 'Axios',
        color: 'blue-text-gradient',
      },
    ],
    image: clothica,
    source_code_link: 'https://github.com/olena-hryhorzhevska/clothica-team-goit',
  },
  {
    name: 'Yacht Rent',
    description:
      'A sleek, responsive yacht rental website with elegant visuals, smooth interactions, and an easy-to-use booking form. Each yacht is showcased with refined design, clear details, and stunning imagery.',
    tags: [
      {
        name: 'Vite',
        color: 'blue-text-gradient',
      },
      {
        name: 'HTML',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'blue-text-gradient',
      },
    ],
    image: yachtjet,
    source_code_link: 'https://github.com/olena-hryhorzhevska/yacht-jet-team',
  },
  {
    name: 'Book Store',
    description:
      'Booksy is a modern online bookstore with dynamic features and a clean, user-friendly design. Books are fetched from the server, allowing users to browse by category, view details, and explore curated collections. Smooth pagination, custom dropdowns, and interactive modals make discovering books fast and enjoyable.',
    tags: [
      {
        name: 'Vite',
        color: 'blue-text-gradient',
      },
      {
        name: 'RestApi',
        color: 'green-text-gradient',
      },
      {
        name: 'HTML',
        color: 'pink-text-gradient',
      },
      {
        name: 'CSS',
        color: 'blue-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'green-text-gradient',
      },
    ],
    image: booksy,
    source_code_link: 'https://github.com/olena-hryhorzhevska/web-booksy',
  },
  {
    name: 'Notes Maker',
    description:
      'A clean and intuitive notes app designed to make organizing thoughts effortless. It helps users create, view, and manage notes seamlessly — with secure login and sign-up features for personalized access.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'NextJS',
        color: 'green-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'RestApi',
        color: 'pink-text-gradient',
      },
      {
        name: 'Turbopack',
        color: 'blue-text-gradient',
      },
      {
        name: 'HTML',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: notehub,
    source_code_link: 'https://github.com/olena-hryhorzhevska/09-auth',
  },
];

export { services, technologies, experiences, testimonials, projects };
