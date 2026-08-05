import { Project } from '../types';

export const projects: Project[] = [
  {
  id: '1',
  title: 'MeroStock',
  description: 'A modern inventory and business management system built with Laravel. It helps businesses manage products, stock, sales, purchases, customers, suppliers, and reports through an intuitive dashboard. Designed to support multiple business types, including grocery stores, hardware shops, clothing stores, electronics, pharmacies, and mobile shops.',
  image: 'https://images.unsplash.com/photo-1707761918029-1295034aa31e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  technologies: [
    'Laravel',
    'PHP',
    'MySQL',
    'React Native',
    'REST API',
    'Bootstrap',
    'JavaScript'
  ],
  githubUrl: 'https://github.com/Monu-here/inventory',
  featured: true,
},
   {
    id: '2',
    title: 'E-Commerce Website',
    description: 'A comprehensive e-commerce platform built with Laravel, featuring both frontend and backend functionality. Includes product management, user authentication, and shopping cart features.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Laravel', 'MySQL', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Monu-here/Ecommerce-Laravel',
    featured: true,
  },
  {
    id: '3',
    title: 'School Management Software',
    description: 'A comprehensive API for school management, handling student records, attendance, grades, and administrative tasks.',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Laravel', 'MySQL', 'RESTful API', 'PHP'],
    githubUrl: 'https://github.com/Monu-here/School-Management-Software',
    featured: true,
  },
  {
    id: '4',
    title: 'Dairy Website',
    description: 'A website for a dairy business, featuring product showcasing, order management, and customer interaction.',
    image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Laravel', 'MySQL', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Monu-here/dairyweb',
    featured: true,
  },
  {
    id: '5',
    title: 'Cilentro Restaurant',
    description: 'A restaurant website with menu management, online ordering system, and reservation features.',
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Laravel', 'MySQL', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Monu-here/cilentro-resturent',
    featured: true,
  }
];
