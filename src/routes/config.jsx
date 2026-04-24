import { lazy } from 'react';
import SignIn from '../pages/Login/SignIn';
import SignUp from '../pages/Login/SignUp';

// Lazy load components
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Careers = lazy(() => import('../pages/Careers/CareersPage'));
const JobDetails = lazy(() => import('../pages/Careers/JobDetails'));

// Management Pages (Unified into ServicesPage)
const ServicesPage = lazy(() => import('../pages/ServicesPage'));

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
    path: '/services',
    element: ServicesPage,
    title: 'Services | Orbintix Technologies',
    label: 'Services',
    showInNavbar: true,
    children: [
      {
        path: '/services#web-development',
        title: 'Web Development Services | Orbintix',
        label: 'Web Development',
        icon: 'Globe',
        description: 'Scalable architecture and high-performance digital experiences.',
      },
      {
        path: '/services#product-development',
        title: 'Product Development | Orbintix',
        label: 'Product Development',
        icon: 'Rocket',
        description: 'Turning ambitious ideas into market-ready, scalable products.',
      },
      {
        path: '/services#it-staffing',
        title: 'IT Staffing & US Recruitment | Orbintix',
        label: 'US IT Staffing',
        icon: 'Users',
        description: 'Connecting you with top-tier tech talent and specialized experts.',
      },
      {
        path: '/services#salesforce-solutions',
        title: 'Salesforce Solutions | Orbintix',
        label: 'Salesforce Solutions',
        icon: 'Cloud',
        description: 'Maximizing operational efficiency with integrated CRM ecosystems.',
      },
      {
        path: '/services#it-infrastructure',
        title: 'IT Infrastructure Services | Orbintix',
        label: 'IT Infrastructure Services',
        icon: 'Shield',
        description: 'Comprehensive protection against digital threats and data breaches.',
      },
      {
        path: '/services#cyber-security',
        title: 'Cyber Security Services | Orbintix',
        label: 'Cyber Security Services',
        icon: 'Database',
        description: 'Streamlining business processes with integrated enterprise systems.',
      },
      {
        path: '/services#cloud-transformation',
        title: 'Cloud Transformation | Orbintix',
        label: 'Cloud Transformation',
        icon: 'Cloud',
        description: 'Seamless migration and scalable architecture for modern enterprises.',
      },
      {
        path: '/services#ai-ml',
        title: 'AI & Machine Learning | Orbintix',
        label: 'AI & Machine Learning',
        icon: 'Rocket',
        description: 'Intelligent automation and predictive modeling for business growth.',
      },
      {
        path: '/services#data-analytics',
        title: 'Data & Analytics | Orbintix',
        label: 'Data & Analytics',
        icon: 'Database',
        description: 'Turning complex datasets into actionable business intelligence.',
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
    path: '/signin',
    element: SignIn,
    title: 'Sign In | Orbintix Technologies',
    label: 'Sign In',
    showInNavbar: false,
  },
  {
    path: '/signup',
    element: SignUp,
    title: 'Sign Up | Orbintix Technologies',
    label: 'Sign Up',
    showInNavbar: false,
  },
  {
    path: '*',
    element: NotFound,
    title: '404 - Page Not Found',
    label: '404',
    showInNavbar: false,
  },
];
