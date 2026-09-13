import { PortfolioData } from '../types';

export const initialPortfolioData: PortfolioData = {
  name: 'Shrushti Raut',
  roleTitle: 'Computer Engineering Student & Aspiring Software Developer',
  tagline: 'I enjoy building practical software solutions and exploring Artificial Intelligence, web development, and emerging technologies.',
  about: {
    paragraphs: [
      "I am a passionate Computer Engineering student in my second year with a strong foundation in computer science fundamentals, algorithm design, and software engineering principles.",
      "My primary interests lie in developing robust web applications, exploring applied Artificial Intelligence & Machine Learning, and translating complex challenges into intuitive, high-impact digital tools.",
      "As an aspiring software developer, I am constantly learning modern frameworks, writing maintainable code, and eager to contribute to forward-thinking engineering teams through internships, hackathons, and collaborative open-source projects."
    ],
    focusAreas: [
      {
        title: 'Software Development',
        desc: 'Writing clean, modular, and efficient code with emphasis on object-oriented design and architectural best practices.',
        icon: 'Code2'
      },
      {
        title: 'Artificial Intelligence',
        desc: 'Exploring machine learning fundamentals, intelligent agents, generative models, and algorithmic automation.',
        icon: 'Sparkles'
      },
      {
        title: 'Web Development',
        desc: 'Crafting responsive, accessible, and fast full-stack interfaces with React, modern JavaScript, and Tailwind CSS.',
        icon: 'Layout'
      },
      {
        title: 'Problem Solving',
        desc: 'Analyzing algorithmic efficiency, practicing core Data Structures & Algorithms, and optimizing runtime performance.',
        icon: 'Cpu'
      },
      {
        title: 'Real-World Projects',
        desc: 'Transforming theoretical CS knowledge into working software applications that solve actual student & user pain points.',
        icon: 'Rocket'
      }
    ]
  },
  contact: {
    email: 'shrushtiraut9075@gmail.com',
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-profile',
    location: 'Open to Remote & On-site Internships'
  },
  resumeUrl: '/Shrushti_Raut_Resume.pdf',
  skills: [
    {
      category: 'Programming',
      description: 'Core languages for system development, object-oriented design, and algorithms.',
      skills: [
        { name: 'Python', level: 'Intermediate / Core' },
        { name: 'Java', level: 'OOP & Core Fundamentals' },
        { name: 'C/C++', level: 'Data Structures & Low-Level' }
      ]
    },
    {
      category: 'Web Development',
      description: 'Modern front-end stack for building responsive, user-friendly applications.',
      skills: [
        { name: 'HTML', level: 'Semantic Markup' },
        { name: 'CSS', level: 'Responsive & Modern Layouts' },
        { name: 'JavaScript', level: 'ES6+ & Async/Await' },
        { name: 'React', level: 'Hooks & Component Architecture' }
      ]
    },
    {
      category: 'AI & Computer Science',
      description: 'Foundational computer science principles and artificial intelligence.',
      skills: [
        { name: 'Artificial Intelligence', level: 'Intelligent Systems' },
        { name: 'Machine Learning Fundamentals', level: 'Algorithms & Models' },
        { name: 'Data Structures & Algorithms', level: 'Problem Solving' },
        { name: 'Problem Solving', level: 'Logical & Analytical Thinking' }
      ]
    },
    {
      category: 'Tools',
      description: 'Version control and development environments for collaborative engineering.',
      skills: [
        { name: 'Git', level: 'Version Control & Branching' },
        { name: 'GitHub', level: 'Collaboration & Repositories' },
        { name: 'VS Code', level: 'Primary IDE & Extensions' }
      ]
    }
  ],
  projects: [
    {
      id: 'tripmate',
      name: 'TripMate – AI-Powered Travel Planner',
      badge: 'Featured AI Project',
      description: 'An AI-powered travel planning application that helps users organize trips with personalized itineraries, map views, checklists, notes, and budget planning.',
      features: [
        'AI-assisted itinerary planning',
        'Interactive Map View',
        'Smart Travel Checklist',
        'Notes & Itinerary Scratchpad',
        'Integrated Budget Management'
      ],
      techStack: ['React', 'Artificial Intelligence', 'TypeScript', 'Tailwind CSS', 'Map Integration'],
      liveUrl: 'https://ai.studio/apps/f64f390d-0e75-4a0a-91cd-2c1ea1127267',
      githubUrl: 'https://github.com/your-username/tripmate-ai-planner',
      isFeatured: true
    },
    {
      id: 'opportunityx',
      name: 'OpportunityX – AI-Powered Student Opportunity Engine',
      badge: 'Career & AI Platform',
      description: 'An AI-powered platform designed to help students discover relevant internships, hackathons, scholarships, competitions, projects, and other career opportunities based on their skills, interests, education, and career goals.',
      features: [
        'Personalized opportunity recommendations',
        'Student profile & skills assessment',
        'Skill-based matching algorithm',
        'Career-focused suggestions & tracking',
        'Comprehensive opportunity discovery'
      ],
      techStack: ['React', 'AI Recommendation Engine', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
      liveUrl: 'https://opportunityx-demo.example.com',
      githubUrl: 'https://github.com/your-username/opportunityx-engine',
      isFeatured: true
    },
    {
      id: 'finance-manager',
      name: 'Finance Management Web Application',
      badge: 'Web Application',
      description: 'A web-based finance management application designed to help users track and manage financial activities through a simple and user-friendly interface.',
      features: [
        'Income & expense activity tracking',
        'Category-wise expenditure breakdowns',
        'Simple, clean user interface',
        'Financial summaries & balance calculation',
        'Responsive mobile-friendly design'
      ],
      techStack: ['React', 'JavaScript', 'HTML5/CSS3', 'Component State', 'Tailwind CSS'],
      liveUrl: 'https://financemanager-demo.example.com',
      githubUrl: 'https://github.com/your-username/finance-management-app',
      isFeatured: false
    }
  ],
  education: [
    {
      id: 'be-comp',
      degree: 'Bachelor of Engineering – Computer Engineering',
      institution: 'University / Engineering College [Click to edit or update]',
      status: 'Second Year Computer Engineering',
      period: 'Expected Graduation: 2028',
      highlights: [
        'Core coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management, Discrete Mathematics',
        'Active focus on software design patterns, computational problem solving, and modern development stacks',
        'Preparing for software engineering internships and technical hackathons'
      ]
    }
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'Certificate Name [e.g., Python / DSA / Web Development]',
      organization: 'Issuing Organization [e.g., Coursera / Udemy / HackerRank]',
      date: 'Month Year [e.g., 2025]',
      credentialUrl: 'https://example.com/certificate/placeholder',
      isPlaceholder: true
    },
    {
      id: 'cert-2',
      name: 'Machine Learning & AI Foundations',
      organization: 'Issuing Organization [e.g., DeepLearning.AI / Google / Stanford Online]',
      date: 'Month Year [e.g., 2025]',
      credentialUrl: 'https://example.com/certificate/placeholder',
      isPlaceholder: true
    },
    {
      id: 'cert-3',
      name: 'Front-End Development with React',
      organization: 'Issuing Organization [e.g., Meta / freeCodeCamp / Coursera]',
      date: 'Month Year [e.g., 2024]',
      credentialUrl: 'https://example.com/certificate/placeholder',
      isPlaceholder: true
    }
  ],
  experiences: [
    {
      id: 'exp-1',
      role: 'Software Developer Intern / Technical Role [Editable Placeholder]',
      organization: 'Organization / Company / Lab Name',
      duration: 'Summer / Month Year – Present',
      description: [
        'Contributed to software development lifecycle, building responsive UI components and integrating backend APIs.',
        'Collaborated in an agile setting, writing clean, maintainable code and participating in technical reviews.',
        'Applied problem-solving and algorithmic skills to optimize real-world system workflows.'
      ],
      isPlaceholder: true
    }
  ],
  achievements: [
    {
      id: 'ach-1',
      category: 'Hackathons',
      title: 'Hackathon Participation & Project Presentation [Editable]',
      subtitle: 'Technical Hackathon / Innovation Challenge',
      date: '2025',
      description: 'Collaborated in a fast-paced team environment to develop a functional software prototype tackling real-world problem statements within 24–48 hours.',
      isPlaceholder: true
    },
    {
      id: 'ach-2',
      category: 'Technical competitions',
      title: 'Coding Competition & Problem Solving [Editable]',
      subtitle: 'Algorithmic Challenge / Competitive Programming',
      date: '2025',
      description: 'Solved Data Structures and Algorithms problems under timed conditions, demonstrating analytical thinking in C++, Python, and Java.',
      isPlaceholder: true
    },
    {
      id: 'ach-3',
      category: 'Academic achievements',
      title: 'Academic Excellence in Computer Engineering [Editable]',
      subtitle: 'Engineering Department / University',
      date: '2024 – 2025',
      description: 'Demonstrated strong academic performance across core Computer Engineering subjects and practical programming lab sessions.',
      isPlaceholder: true
    },
    {
      id: 'ach-4',
      category: 'Projects',
      title: 'Full-Stack & AI Project Deployments [Editable]',
      subtitle: 'Independent Software Engineering',
      date: '2025',
      description: 'Built and publicly deployed AI and web applications including TripMate (AI Travel Planner) and OpportunityX with functional user interfaces.',
      isPlaceholder: true
    },
    {
      id: 'ach-5',
      category: 'Workshops',
      title: 'Advanced Technology & AI Workshops [Editable]',
      subtitle: 'Technical Workshops & Seminars',
      date: '2024 – 2025',
      description: 'Attended hands-on technical sessions on modern web frameworks, cloud deployment pipelines, and practical Machine Learning applications.',
      isPlaceholder: true
    }
  ]
};
