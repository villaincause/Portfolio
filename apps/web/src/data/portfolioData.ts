export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  role: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Capability {
  category: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "NAHIDUL ISLAM PRINCE",
    role: "Computer Engineer & Software Developer",
    location: "Dhaka, Bangladesh",
    email: "prince.islam.v11@outlook.com",
    github: "https://github.com/villaincause",
    linkedin: "https://linkedin.com/in/nahidul-islam-prince",
    codeforces: "https://codeforces.com/profile/Villaincause",
    resumeUrl: "https://1drv.ms/b/c/d930c70f6eda3e94/IQDs3-od57syS4Lo6-IQ0rXAAem70CoZDAM4MFoR8x_21jk?e=PPRbvB",
    bio: "Computer Science and Engineering student and software developer with hands-on experience building full-stack web applications, computer vision and machine-learning projects, games, and IoT prototypes.",
    aboutDetailed: "I work with technologies including C++, Java, Python, JavaScript, TypeScript, React, Node.js, and Express, and have built projects involving APIs, databases, real-time features, and AI-powered systems. I enjoy solving practical problems, exploring new technologies, and turning ideas into useful software.",
  },
  projects: [
    {
      id: "elegance-others",
      title: "Elegance & Others",
      description: "Full-stack e-commerce platform featuring dynamic product cataloging, responsive order processing, admin panel management, and modern UI performance.",
      category: "Full Stack Web",
      year: "2026",
      role: "Lead Web Developer",
      image: "https://res.cloudinary.com/dorpdfe8d/image/upload/v1794083728/Gemini_Generated_Image_o4cz2xo4cz2xo4cz_rv7f2u.jpg",
      githubUrl: "https://github.com/villaincause/elegance-and-others-frontend",
      liveUrl: "https://elegance-and-others.onrender.com/",
    },
    {
      id: "anger-management",
      title: "Anger Management",
      description: "Turn-based card strategy game built with interactive damage calculations, stat modifiers, and psychological effect mechanics.",
      category: "Game Development",
      year: "2026",
      role: "Game Developer",
      image: "https://res.cloudinary.com/dorpdfe8d/image/upload/v1794083423/Screenshot_3-11-2026_11451_anger-management.onrender.com_p6kbso.jpg",
      githubUrl: "https://github.com/villaincause/anger-management",
      liveUrl: "https://anger-management.onrender.com/",
    },
    {
      id: "overtake-safety",
      title: "Overtake Safety Project",
      description: "Computer vision overtaking safety system utilizing an 11-class vehicle segmentation model trained on Roboflow traffic datasets.",
      category: "Artificial Intelligence & CV",
      year: "2026",
      role: "AI & CV Engineer",
      image: "https://res.cloudinary.com/dorpdfe8d/image/upload/v1794082649/overtake-safety-cover_1600x900_z9ouwm.png",
      githubUrl: "https://github.com/villaincause/Overtake-Safety-Project",
    }
  ] as Project[],
  capabilities: [
    "C++", "Java", "Python", "JavaScript", "TypeScript", 
    "React", "React Native", "Node.js", "Express", 
    "MySQL", "Oracle Database", "YOLO / OpenCV", "Tailwind CSS", "Git & GitHub"
  ],
  experiences: [
    {
      role: "Digital Service and E-KYC Management Officer",
      company: "PeopleScape Under bKash, Dhaka",
      period: "Nov 2023 - Sep 2026",
      description: "Managed digital service workflows, e-KYC compliance verification, and operational support. Awarded Top Performer in bKash Digital Service Department 10x for operational excellence.",
    }
  ] as Experience[]
};