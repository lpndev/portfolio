import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const email = 'work.leoaugusto@gmail.com'
const githubUser = 'lpndev'
const phone = '+1 (123) 456-7890'

const contact = [
  {
    hash: `mailto:${email}`,
    icon: <Mail size={18} />,
    title: 'Email',
    body: email,
  },
  {
    hash: `tel:${phone}`,
    icon: <Phone size={18} />,
    title: 'SMS',
    body: phone,
  },
]

const platforms = [
  {
    hash: 'https://www.upwork.com/freelancers/~01a59d83c3ba132fff',
    icon: '/images/upwork-logo.png',
    title: 'Upwork',
  },
  {
    hash: 'https://fiverr.com',
    icon: '/images/fiverr-logo.png',
    title: 'Fiverr',
  },
]

const projects = [
  {
    hash: `https://github.com/${githubUser}/project-name`,
    img: '/images/placeholder.png',
    badges: ['Badge-1', 'Badge-2', 'Badge-3'],
    title: 'Anime Streaming',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    hash: `https://github.com/${githubUser}/project-name`,
    img: '/images/placeholder.png',
    badges: ['Badge-1', 'Badge-2', 'Badge-3'],
    title: 'Interactive Dashboard',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    hash: `https://github.com/${githubUser}/project-name`,
    img: '/images/placeholder.png',
    badges: ['Badge-1', 'Badge-2', 'Badge-3'],
    title: 'Cloud Drive',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    hash: `https://github.com/${githubUser}/project-name`,
    img: '/images/placeholder.png',
    badges: ['Badge-1', 'Badge-2', 'Badge-3'],
    title: 'Banking App',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

const socials = [
  {
    hash: `https://github.com/${githubUser}`,
    icon: <Github size={18} />,
    title: 'Github',
  },
  {
    hash: `https://linkedin.com/in/leodnz`,
    icon: <Linkedin size={18} />,
    title: 'Linkedin',
  },
]

export { contact, email, githubUser, phone, platforms, projects, socials }
