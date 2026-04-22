import { lazy } from 'react';

// Lazy load components
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Careers = lazy(() => import('../pages/Careers/CareersPage'));
const JobDetails = lazy(() => import('../pages/Careers/JobDetails'));

// Management Pages
const WebDevelopment = lazy(() => import('../pages/management/WebDevelopment'));
const ProductDevelopment = lazy(() => import('../pages/management/ProductDevelopment'));
const ITStaffing = lazy(() => import('../pages/management/ITStaffing'));
const SalesforceSolutions = lazy(() => import('../pages/management/SalesforceSolutions'));

const Blog = lazy(() => import('../pages/Blog'));

// 404 Page
const NotFound = lazy(() => import('../pages/NotFound'));

export const routes = [
  {
    path: '/',
    element: Home,
    title: 'Orbintix Technologies | Home',
    label: 'Home',
    showInNavbar: true,
  },
  {
    path: '/about',
    element: About,
    title: 'About Us | Orbintix Technologies',
    label: 'About',
    showInNavbar: true,
  },
  {
    path: '/management',
    label: 'Services',
    showInNavbar: true,
    children: [
      {
        path: '/management/web-development',
        element: WebDevelopment,
        title: 'Web Development Services | Orbintix',
        label: 'Web Development',
        icon: 'Globe',
        description: 'Scalable architecture and high-performance digital experiences.',
      },
      {
        path: '/management/product-development',
        element: ProductDevelopment,
        title: 'Product Development | Orbintix',
        label: 'Product Development',
        icon: 'Rocket',
        description: 'Turning ambitious ideas into market-ready, scalable products.',
      },
      {
        path: '/management/it-staffing',
        element: ITStaffing,
        title: 'IT Staffing & US Recruitment | Orbintix',
        label: 'IT Staffing',
        icon: 'Users',
        description: 'Connecting you with top-tier tech talent and specialized experts.',
      },
      {
        path: '/management/salesforce-solutions',
        element: SalesforceSolutions,
        title: 'Salesforce Solutions | Orbintix',
        label: 'Salesforce Solutions',
        icon: 'Cloud',
        description: 'Maximizing operational efficiency with integrated CRM ecosystems.',
      },
    ],
  },
  {
    path: '/careers',
    element: Careers,
    title: 'Careers | Join Orbintix Technologies',
    label: 'Careers',
    showInNavbar: true,
  },
  {
    path: '/careers/:id',
    element: JobDetails,
    title: 'Job Details | Orbintix Technologies',
    label: 'Job Details',
    showInNavbar: false,
  },
  {
    path: '/blog',
    element: Blog,
    title: 'Blog | Orbintix Technologies',
    label: 'Blog',
    showInNavbar: true,
  },
  {
    path: '/contact',
    element: Contact,
    title: 'Contact Us | Orbintix Technologies',
    label: 'Contact',
    showInNavbar: true,
  },
  {
    path: '*',
    element: NotFound,
    title: '404 - Page Not Found',
    label: '404',
    showInNavbar: false,
  },
];
