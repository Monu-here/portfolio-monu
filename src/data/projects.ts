import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Website',
    description: 'A comprehensive e-commerce platform built with Laravel, featuring both frontend and backend functionality. Includes product management, user authentication, and shopping cart features.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Laravel', 'MySQL', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Monu-here/Ecommerce-Laravel',
    featured: true,
  },
  {
    id: '2',
    title: 'School Management Software',
    description: 'A comprehensive API for school management, handling student records, attendance, grades, and administrative tasks.',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Laravel', 'MySQL', 'RESTful API', 'PHP'],
    githubUrl: 'https://github.com/Monu-here/School-Management-Software',
    featured: true,
  },
  {
    id: '3',
    title: 'Dairy Website',
    description: 'A website for a dairy business, featuring product showcasing, order management, and customer interaction.',
    image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Laravel', 'MySQL', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Monu-here/dairyweb',
    featured: true,
  },
  {
    id: '4',
    title: 'Cilentro Restaurant',
    description: 'A restaurant website with menu management, online ordering system, and reservation features.',
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Laravel', 'MySQL', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Monu-here/cilentro-resturent',
    featured: true,
  }
];