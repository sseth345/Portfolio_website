// Portfolio Data
export const personalInfo = {
  name: "Siddharth Seth",
  email: "sethsiddharth345@gmail.com",
  phone: "+91-8521138416",
  linkedin: "https://linkedin.com/in/sseth345",
  github: "https://github.com/sseth345",
  title: "Computer Science Student with AI & Robotics | Full Stack Developer | ML Enthusiast",
  description: "I'm a passionate Computer Science student at VIT, specializing in AI and Robotics. With a strong foundation in full-stack development and machine learning, I enjoy building innovative solutions that solve real-world problems.",
  additionalDescription: "My experience spans from developing Android applications with advanced ML capabilities to creating comprehensive web platforms. I'm particularly interested in the intersection of AI, mobile development, and user experience design."
};

export const education = {
  degree: "Bachelor of Technology in Computer Science with AI and Robotics",
  university: "Vellore Institute of Technology",
  duration: "07/2023 – Expected 06/2027",
  cgpa: "8.37",
  relevantCourses: [
    'Data Structures and Algorithms',
    'Object-Oriented Programming',
    'Web Technologies',
    'Database Management Systems',
    'Computer Networks',
    'Operating Systems'
  ]
};

export const skills = {
  programming: [
    { name: 'C++', icon: '💻' },
    { name: 'Java', icon: '☕' },
    { name: 'JavaScript (ES6+)', icon: '🟨' },
    { name: 'Python', icon: '🐍' }
  ],
  web: [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Next.js', icon: '🔺' },
    { name: 'Express.js', icon: '🚀' },
    { name: 'REST APIs', icon: '🔗' }
  ],
  app: [
    { name: 'React Native', icon: '📱' },
    { name: 'Kotlin', icon: '🤖' },
    { name: 'Supabase', icon: '⚡' },
    { name: 'Firebase', icon: '🔥' }
  ],
  backend: [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Flask', icon: '🌶️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MySQL', icon: '🐬' }
  ],
  datascience: [
    { name: 'Data Analysis', icon: '📊' },
    { name: 'Visualization', icon: '📈' },
    { name: 'Azure AI', icon: '☁️' },
    { name: 'Excel', icon: '📋' }
  ],
  security: [
    { name: 'JWT', icon: '🔐' },
    { name: 'OAuth2', icon: '🛡️' },
    { name: 'RESTful APIs', icon: '🔄' },
    { name: 'GraphQL', icon: '⚡' }
  ]
};

export const softSkills = [
  'Project Leadership',
  'Agile Development', 
  'Cross-Functional Collaboration',
  'Effective Communication'
];

export const experiences = [
  {
    title: "Summer Intern",
    company: "Tata Power Central Odisha Distribution Limited",
    location: "Bhubaneswar, India",
    duration: "05/2025 – 07/2025",
    points: [
      "Developed Android apps, including a Spot Billing solution in Kotlin, reducing manual errors by 67% and improving billing efficiency by 43% through API integration and offline processing.",
      "Enabled efficient on-device face detection, emotional state assessment, and object analysis with Google ML Kit, increasing analysis speed by 80% and achieving over 90% detection accuracy."
    ]
  },
  {
    title: "Technical Lead",
    company: "IEEE Photonics Society",
    location: "Chennai, India",
    duration: "08/2024 – Present",
    points: [
      "Promoted to Technical Lead for session 2025-26.",
      "Spearheaded technical webinars and interactive workshops, engaging 100+ attendees and driving industry-academic collaboration as Core member."
    ]
  },
  {
    title: "Research Intern",
    company: "Dept. of Computer Science, Indian Institute of Technology(IIT), Patna",
    location: "Patna, India",
    duration: "05/2024 – 06/2024",
    points: [
      "Worked on deep learning models to forecast air pollutant exceedances across 6 Indian megacities. Conducted data preprocessing, model development, and analysis under HOD CSE Department.",
      "Gained hands-on experience in time series forecasting processed 5+ years of data."
    ]
  }
];

export const projects = [
  {
    title: "VitalVision",
    tech: "Kotlin, Jetpack Compose, Google ML Kit, Room Database",
    date: "06/2025",
    github: "github.com",
    description: [
      "Developed a real-time Android app for emotion detection and analysis, reducing processing time by 35% and automating emotion history tracking and analytics.",
      "Enabled secure local image sharing across platforms for collaborative review, cutting patient care response time by 30% and making the app suitable for healthcare, wellness, and user engagement scenarios."
    ]
  },
  {
    title: "IntelliLib",
    tech: "React.js, Node.js, Express.js, MongoDB, Flutter",
    date: "02/2025",
    github: "github.com",
    description: [
      "Tailored a full-stack library system with React.js (web) and Flutter (mobile), reducing manual data entry by 60% through real-time synchronization via Supabase and secure authentication with JWT.",
      "Automated workflows by integrating RFID/barcode scanning, cutting book check-in/out time by 40%, and deployed cloud-based document processing (Puppeteer, Cloudinary)."
    ]
  },
  {
    title: "AI Air Quality Forecasting",
    tech: "Python, TensorFlow, Keras, Pandas, NumPy",
    date: "06/2024",
    github: "kaggle.com",
    description: [
      "Engineered a deep learning-based air quality prediction system with the ConvTRANS model, analyzing 5+ years of pollutant trends across six major Indian cities.",
      "Designed an end-to-end ML pipeline for preprocessing, training, tuning, and deployment using LSTM, GRU, and Transformers, enhancing forecasting accuracy by 20% (RMSE, R2, MSE, MAE)."
    ]
  }
];

export const achievements = [
  {
    title: "Certificate of Internship (Tata Power Central Odisha Distribution Limited)",
    subtitle: "Summer Intern",
    date: "06/2025"
  },
  {
    title: "Winner – TechnoVIT 2024 Full-Stack Hackathon",
    subtitle: "Held by BandVIT competed among 100+ teams from VIT and different colleges, with a team of 3",
    date: "09/2024"
  },
  {
    title: "Certificate of Internship (IIT Patna)",
    subtitle: "Research Intern (Machine Learning & Deep Learning)",
    date: "06/2024"
  },
  {
    title: "World Robotics Olympiad India 2018",
    subtitle: "3rd Place, Regional Championship, Varanasi",
    date: "08/2018"
  }
];

export const navigationItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' }
];