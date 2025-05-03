
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string; // ISO string
  time: string;
  location: string;
  college: string;
  type: 'hackathon' | 'techtalk' | 'workshop';
  link?: string;
  image?: string;
  featured?: boolean;
}

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'AI Innovation Hackathon',
    description: 'A 48-hour hackathon focused on developing AI solutions for real-world problems. Open to all students with prizes up to $5000.',
    date: '2025-06-15',
    time: '09:00 AM - 09:00 PM',
    location: 'Engineering Building, Room E101',
    college: 'MIT',
    type: 'hackathon',
    link: 'https://example.com/ai-hackathon',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop',
    featured: true
  },
  {
    id: '2',
    title: 'Web3 Development Workshop',
    description: 'Learn the fundamentals of Web3 development in this hands-on workshop. Bring your laptop and be ready to code.',
    date: '2025-05-25',
    time: '02:00 PM - 05:00 PM',
    location: 'Computer Science Building, Lab 204',
    college: 'Stanford University',
    type: 'workshop',
    link: 'https://example.com/web3-workshop'
  },
  {
    id: '3',
    title: 'Future of Quantum Computing',
    description: 'A talk by Dr. Jane Smith on the future of quantum computing and its implications for cybersecurity.',
    date: '2025-06-02',
    time: '03:30 PM - 05:00 PM',
    location: 'Physics Auditorium',
    college: 'Caltech',
    type: 'techtalk',
    link: 'https://example.com/quantum-talk',
    featured: true
  },
  {
    id: '4',
    title: 'Mobile App Development Bootcamp',
    description: 'A weekend bootcamp covering Android and iOS development fundamentals. Perfect for beginners.',
    date: '2025-06-10',
    time: '10:00 AM - 04:00 PM',
    location: 'Innovation Center',
    college: 'UC Berkeley',
    type: 'workshop',
    link: 'https://example.com/mobile-bootcamp',
    image: 'https://images.unsplash.com/photo-1551651653-c5186a1fbba2?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Sustainability Hackathon',
    description: 'Build solutions for environmental sustainability challenges. Sponsored by Green Tech Alliance.',
    date: '2025-07-08',
    time: '09:00 AM - 06:00 PM',
    location: 'Student Union Building',
    college: 'Harvard University',
    type: 'hackathon',
    link: 'https://example.com/sustainability-hack'
  },
  {
    id: '6',
    title: 'Cybersecurity Essentials Talk',
    description: 'Industry experts discuss the latest trends and best practices in cybersecurity.',
    date: '2025-05-28',
    time: '05:00 PM - 07:00 PM',
    location: 'Online (Zoom)',
    college: 'Carnegie Mellon',
    type: 'techtalk',
    link: 'https://example.com/cyber-talk'
  },
  {
    id: '7',
    title: 'Data Science for Social Good',
    description: 'Learn how data science can be applied to solve social issues and improve communities.',
    date: '2025-06-05',
    time: '02:00 PM - 04:00 PM',
    location: 'Statistics Building, Room 302',
    college: 'University of Michigan',
    type: 'techtalk',
    link: 'https://example.com/datasci-social',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: '8',
    title: 'IoT Healthcare Hackathon',
    description: 'Develop innovative IoT solutions for healthcare challenges. Open to all skill levels.',
    date: '2025-07-20',
    time: '09:00 AM - 09:00 PM',
    location: 'Medical Sciences Building',
    college: 'Johns Hopkins University',
    type: 'hackathon',
    link: 'https://example.com/iot-healthcare',
    featured: true
  },
  {
    id: '9',
    title: 'UI/UX Design Workshop',
    description: 'A comprehensive workshop on user interface and user experience design principles.',
    date: '2025-06-12',
    time: '01:00 PM - 05:00 PM',
    location: 'Design Studio',
    college: 'Rhode Island School of Design',
    type: 'workshop',
    link: 'https://example.com/uiux-workshop'
  },
  {
    id: '10',
    title: 'Blockchain Technology Fundamentals',
    description: 'An introductory talk on blockchain technology and its applications beyond cryptocurrency.',
    date: '2025-06-18',
    time: '04:00 PM - 06:00 PM',
    location: 'Business School Auditorium',
    college: 'NYU',
    type: 'techtalk',
    link: 'https://example.com/blockchain-basics'
  },
  {
    id: '11',
    title: 'Game Development Weekend',
    description: 'A weekend-long workshop on game development using Unity. All materials provided.',
    date: '2025-06-25',
    time: '09:00 AM - 05:00 PM',
    location: 'Media Arts Center',
    college: 'USC',
    type: 'workshop',
    link: 'https://example.com/game-dev',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1471&auto=format&fit=crop'
  },
  {
    id: '12',
    title: 'Women in Tech Hackathon',
    description: 'A hackathon promoting diversity in tech fields. Open to all genders, with a focus on inclusivity.',
    date: '2025-07-05',
    time: '10:00 AM - 08:00 PM',
    location: 'Engineering Commons',
    college: 'Georgia Tech',
    type: 'hackathon',
    link: 'https://example.com/women-tech-hack'
  }
];
