import {
  Monitor,
  Globe,
  Bot,
  Radio,
  Zap,
  Cog,
  Car,
  Building,
  FlaskConical,
  BarChart,
  type LucideIcon
} from 'lucide-react';

import hodApplied from '../../assets/hod image/applied-hod-BEFu4VvI.webp';
import hodCe from '../../assets/hod image/ce-hod-BkVD-K-X.webp';
import hodCse from '../../assets/hod image/cse-hod-BuMtQafq.webp';
import hodEc from '../../assets/hod image/ec-hod-CqRTpWJK.webp';
import hodEx from '../../assets/hod image/ex-hod-BliYQEAZ.webp';
import hodIt from '../../assets/hod image/it-hod-Bo9PrSrj.webp';
import hodMba from '../../assets/hod image/mba-hod-CbQKF6vQ.webp';
import hodMe from '../../assets/hod image/me-hod-UjHjA6hG (1).webp';
import hodAe from '../../assets/hod image/me-hod-UjHjA6hG.webp';
import hodAiml from '../../assets/hod image/hod-cs-B8sIAze7.webp';


export interface Faculty {
  name: string;
  role: string;
  experience: string;
  qualification: string;
  research: string;
  isHOD?: boolean;
}

export interface Department {
  id: string;
  name: string;
  shortName: string;
  icon: LucideIcon; // LucideIcon component
  color: string;
  gradient: string;
  hodName: string;
  hodDesk: string;
  overview: string;
  faculties: Faculty[];
  established?: string;
  intake?: string;
  hodImage?: string;
}

export const departments: Department[] = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    icon: Monitor,
    color: '#C62828',
    gradient: 'linear-gradient(135deg, #0F172A, #1E293B)',
    hodName: 'Mr. Pratyush Sharma',
    hodImage: hodCse,
    hodDesk: `The mission and the vision of the department are to produce and impart theory, principles, practice and know-importance of computing in the information age. This is requiring for the critical analysis, design, evolution and improvement of computing system in context of computers and industry services. MIT offers M. Tech. in Computer Science and Engineering as well. These courses prepare young graduates to take state of art challenges as required by the industry and R & D organizations. Computer Technology is a field that continues to evolve at a rate faster than other disciplines. Our Department has produced hundreds of professionals and has established a name for itself in the country and abroad.`,
    overview: `B.E Computer Science and Engineering is one of the most demanded programs. The program imparts all the basics as well as latest knowledge pertaining to the rapidly developing field of computers. The course is designed to keep students in pace with the practical field. The scope of computer science is endless. Booming IT sector in India has plenty of jobs for fresh computer science graduates. Career in IT is considered one of the most high-paying jobs and is full of opportunities; particularly when India's progress in information technology industry is recognized across the globe.`,
    faculties: [
      { name: 'Mr. Pratyush Sharma', role: 'Assistant Professor & HOD', experience: '12 Years', qualification: 'M.Tech. (CSE), PhD Pursuing', research: 'WiMAX Networks', isHOD: true },
      { name: 'Mr Raghvendra Prasad', role: 'Assistant Professor', experience: '12 years', qualification: 'MTech', research: 'Machine Learning' },
      { name: 'Ms Nilofer Khan', role: 'Assistant Professor', experience: '3 years', qualification: 'MTech', research: 'Mobile AdHoc Network' },
      { name: 'Ms Praneeta Bisen', role: 'Assistant Professor', experience: '4 years', qualification: 'MTech CSE', research: 'Data Analytics' },
      { name: 'Ms Shruti Lakhotiya', role: 'Assistant Professor', experience: '4 years', qualification: 'MTech', research: 'Cloud Computing' },
      { name: 'Ms Poonam Chourasiya', role: 'Assistant Professor', experience: '5 years', qualification: 'MTech', research: 'Cloud Computing' },
      { name: 'Ms Sudha Yadav', role: 'Assistant Professor', experience: '2 years', qualification: 'MTech', research: 'Machine Learning' },
      { name: 'Ms Priyanka Pawar', role: 'Assistant Professor', experience: '3 years', qualification: 'MTech', research: 'Machine Learning' },
    ],
  },
  {
    id: 'it',
    name: 'Information Technology',
    shortName: 'IT',
    icon: Globe,
    color: '#C62828',
    gradient: 'linear-gradient(135deg, #1E293B, #334155)',
    hodName: 'Mr. Vijay Kumar Malviya',
    hodImage: hodIt,
    hodDesk: `The department has the vision to develop creative software and hardware engineers, who can lead our nation to international recognition and market place. The curriculum for Information Technology Engineering is primarily designed to provide students with both the theoretical knowledge and technical skills. It also enables the aspirants to solve various complex problems. The curriculum also intends to improve a technological depth of knowledge and skills in analysis, design, implementation, and use of both information technology core skills and specialization skills. The students are also taught various fundamental concepts including information security, web systems, computer networking and software engineering.`,
    overview: `B.E. Information Technology plays a vital role in our modern lifestyles. It has touched each and every aspect of human life. With the emergence of computers, we are witnessing a sea change in the business world. Starting from multi-national corporations to small businesses, IT plays a stupendous role. Information Technology is an engineering division, which concentrates on the study of utilizing computers and telecommunications in order to control, gather, store and circulate information. Both software and hardware sectors are parts of Information Technology.`,
    faculties: [
      { name: 'Mr. Vijay Kumar Malviya', role: 'Assistant Professor & HOD', experience: '12 Years', qualification: 'M.Tech.', research: 'Image Processing', isHOD: true },
      { name: 'Ms Shilpa Raghuvanshi', role: 'Assistant Professor', experience: '10 Years', qualification: 'M.Tech.', research: 'Network Security' },
      { name: 'Mr Abhishek Pipliya', role: 'Assistant Professor', experience: '15 years', qualification: 'PhD (Pursuing)', research: 'Machine Learning' },
      { name: 'Ms Bhanupriya Vyas', role: 'Assistant Professor', experience: '9 years', qualification: 'M.Tech.', research: 'Data Science' },
      { name: 'Ms Abhilasha Vyas', role: 'Assistant Professor', experience: '10 years', qualification: 'M.Tech.', research: 'Data Mining' },
    ],
  },
  {
    id: 'aiml',
    name: 'Artificial Intelligence & Machine Learning',
    shortName: 'AI/ML',
    icon: Bot,
    color: '#C62828',
    gradient: 'linear-gradient(135deg, #0A1628, #1E293B)',
    hodName: 'Mr. Pratyush Sharma',
    hodImage: hodAiml,
    hodDesk: `The department has the vision to develop creative software and hardware engineers, who can lead our nation to international recognition and market place. The curriculum for AI/ML is primarily designed to provide students with both the theoretical knowledge and technical skills. It enables the aspirants to solve various complex problems and develops expertise in Artificial Intelligence, Machine Learning, Deep Learning, and related cuttingedge technologies that are transforming industries worldwide.`,
    overview: `B.E. in AI/ML plays a vital role in our modern society. Artificial Intelligence and Machine Learning are transforming every aspect of human life. Starting from healthcare to automotive, AI/ML plays a stupendous role. This branch concentrates on the study of algorithms, neural networks, data science, and intelligent systems. Both theoretical and practical aspects of AI are covered comprehensively.`,
    faculties: [
      { name: 'Mr Pratyush Sharma', role: 'Assistant Professor & HOD', experience: '12 Years', qualification: 'M.Tech.', research: 'WiMAX Networks', isHOD: true },
      { name: 'Ms Shruti Lakhotiya', role: 'Assistant Professor', experience: '4 years', qualification: 'M.Tech.', research: 'Cloud Computing' },
      { name: 'Ms Poonam Chourasiya', role: 'Assistant Professor', experience: '5 years', qualification: 'M.Tech.', research: 'Cloud Computing' },
      { name: 'Ms Praneeta Bisen', role: 'Assistant Professor', experience: '4 years', qualification: 'M.Tech.', research: 'Data Analytics' },
      { name: 'Mr Raghvendra Prasad', role: 'Assistant Professor', experience: '12 years', qualification: 'M.Tech.', research: 'Machine Learning' },
    ],
  },
  {
    id: 'ec',
    name: 'Electronics & Communication Engineering',
    shortName: 'EC',
    icon: Radio,
    color: '#C62828',
    gradient: 'linear-gradient(135deg, #131929, #1E3A5F)',
    hodName: 'Ms. Deepika Sharma',
    hodImage: hodEc,
    hodDesk: `The Department of Electronics and Communication Engineering stands with a vision to produce highly knowledgeable, competent and resourceful engineers not only in the specific stream but who can perform best in a wide variety of interdisciplinary and technology centric job profiles. Contents beyond syllabus and learning latest technological trends are key features. Scopes & opportunities of Electronics & Communication Engineer are diverse in various domains like Maharatna, Miniratna companies, Defense Services, Software industries, RF Engineer, Automation Industry, and SSC/UPSC examinations.`,
    overview: `Established in 2004 with an intake of 120, the department has always remained on the forefront in producing quality engineers in the field of Electronics & Communication. The branch has a tradition of attracting the topmost merit students at UG from across the state. The department has got well-equipped hardware and software laboratories. Faculty members are working in research areas related to VLSI and Embedded Systems, Communication, Signal Processing, Optical Communication, and Wireless Communication.`,
    established: '2004',
    intake: '120',
    faculties: [
      { name: 'Ms Deepika Sharma', role: 'Assistant Professor & HOD', experience: '15 years', qualification: 'MTech', research: 'Throughput and Goodput Measurement', isHOD: true },
      { name: 'Mr Deepak Pancholi', role: 'Assistant Professor', experience: '15 years', qualification: 'PhD (Pursuing)', research: 'Artifacts Removal of EEG Signal' },
      { name: 'Ms Neelu Pareek', role: 'Assistant Professor', experience: '17 years', qualification: 'MTech', research: 'VHDL, Matlab' },
    ],
  },
  {
    id: 'ex',
    name: 'Electrical & Electronics Engineering',
    shortName: 'EX',
    icon: Zap,
    color: '#C62828',
    gradient: 'linear-gradient(135deg, #0F172A, #1E293B)',
    hodName: 'Mr. Pawan Pandey',
    hodImage: hodEx,
    hodDesk: `The field of Electrical and Electronics Engineering plays a vital role in improving living conditions of the people and powering different industries. Thus the graduates of Electrical and Electronics Engineering are considered to be crucial man power for generation and utilization of electricity. The courses are being taught are adequately supplemented through practical training in the laboratories and visits to industries. The department is Running UG (EX) as well as PG (Power Electronics) Program. Our faculty members have published papers in National & International conferences & Journals.`,
    overview: `Welcome to one of the Engineering department of MIT Indore, which offers a sound background in the areas of Electrical & Electronics Engineering by providing B.E (EX) & M.Tech. (Power Electronics) degree programs. This department has been playing a vital role in producing 60 engineers and technologists of highest potential since 2004 every year. Our greatest strength is our highly skilled and committed Staff members having a positive work culture and participative style of management.`,
    established: '2004',
    intake: '60',
    faculties: [
      { name: 'Mr. Pawan Pandey', role: 'Assistant Professor & HOD', experience: '14 Years', qualification: 'M.E. (Power Electronics)', research: 'Non conventional energy sources (Wind Energy)', isHOD: true },
      { name: 'Mrs. Meenal Tomar', role: 'Assistant Professor', experience: '17 Years', qualification: 'M.E.(Digital Instrumentation)', research: 'Application of Artificial Intelligence in Power System' },
      { name: 'Mr. Tapish Rathore', role: 'Assistant Professor', experience: '7 Years', qualification: 'M.Tech (Power Electronics)', research: 'Power Electronics' },
      { name: 'Ms Anamika Malviya', role: 'Lecturer', experience: '3 years', qualification: 'MTech', research: 'Power Electronics' },
    ],
  },
  {
    id: 'me',
    name: 'Mechanical Engineering',
    shortName: 'ME',
    icon: Cog,
    color: '#C62828',
    gradient: 'linear-gradient(135deg, #1E293B, #334155)',
    hodName: 'Mr. Pushpendra Mishra',
    hodImage: hodMe,
    hodDesk: `Welcome to Mechanical Engineering Department at MIT. Our goal for the students is to make them respond effectively to the needs of the industry and changing world and to give them a high quality engineering education that includes hands-on experience. Each of our faculty members is ready and willing to work for betterment of our students in their interested field which includes diverse field of Automobile, Power Sector, Robotics, Petro-chemical, Manufacturing and many research areas. SAE BAJA, SAE Effie-cycle have been among the most attractive and fruitful activities.`,
    overview: `Mechanical Engineering is the art of using problem-solving techniques and applying them to the design and manufacturing of an object. Mechanical Engineering plays a critical role in manufactured technologies, from cars to airplanes to refrigerators. It is one of the most important subdivisions of engineering. Mechanical Engineering is at the forefront of developing new technologies for a number of industries including transport, healthcare, construction, and robotics.`,
    faculties: [
      { name: 'Mr Pushpendra Mishra', role: 'Assistant Professor & HOD', experience: '14 years', qualification: 'M.Tech (Machine Design)', research: 'Battery Thermal Management System, Gear Design', isHOD: true },
      { name: 'Mr. Dilip Gehlot', role: 'Assistant Professor', experience: '15 years', qualification: 'M.Tech (Thermal Engineering)', research: 'Heat & Mass Transfer, I.C.Engine, Renewable Energy' },
      { name: 'Mr. Dheeraj Mandliya', role: 'Assistant Professor', experience: '6 Years', qualification: 'M.E.(Machine Design)', research: 'Advanced Production, Machine design' },
      { name: 'Mr. Ishan Patel', role: 'Assistant Professor', experience: '7 Years', qualification: 'M.E.(Machine Design)', research: 'Automobile Parts Design, Assembly Design' },
    ],
  },
  {
    id: 'ae',
    name: 'Automobile Engineering',
    shortName: 'AE',
    icon: Car,
    color: '#C62828',
    gradient: 'linear-gradient(135deg, #0A1628, #1E293B)',
    hodName: 'Mr. Pushpendra Agrawal',
    hodImage: hodAe,
    hodDesk: `Welcome to Automobile Engineering Department at MIT. Our goal for the students is to make them respond effectively to the needs of the industry and changing world and to give them a high quality engineering education that includes hands-on experience. Faculty members of the department are active in professional services with editorial appointments to professional journals, organizing conferences and providing leadership to professional societies & organizations. We strive to ensure that all our undergraduate students have a strong education with team spirit & leadership skills.`,
    overview: `Automobile Engineering is the art of using problem-solving techniques and applying them to the design and manufacturing of vehicles. It plays a critical role in manufactured technologies — from cars to electric vehicles to autonomous systems. It is at the forefront of developing new technologies for transport, sustainable mobility, and intelligent vehicle systems. Students gain hands-on experience through SAE BAJA, SAE Effie-cycle and other industry-level competitions.`,
    faculties: [
      { name: 'Mr Pushpendra Agrawal', role: 'Assistant Professor & HOD', experience: '15 Years', qualification: 'M.Tech.', research: 'Automobile Engineering', isHOD: true },
      { name: 'Mr Dheeraj Mandliya', role: 'Assistant Professor', experience: '6 Years', qualification: 'M.E. (Machine Design)', research: 'Advanced Production' },
      { name: 'Mr Pushpendra Mishra', role: 'Assistant Professor', experience: '14 years', qualification: 'M.Tech. (Machine Design)', research: 'Battery Thermal Management' },
      { name: 'Mr Dilip Gehlot', role: 'Assistant Professor', experience: '15 years', qualification: 'M.Tech. (Thermal Engineering)', research: 'Renewable Energy' },
      { name: 'Mr Sunil Meshram', role: 'Assistant Professor', experience: '4 Years', qualification: 'M.E. (Tribology & Maintenance)', research: 'Noise & Acoustic Emission' },
    ],
  },
  {
    id: 'ce',
    name: 'Civil Engineering',
    shortName: 'CE',
    icon: Building,
    color: '#C62828',
    gradient: 'linear-gradient(135deg, #131929, #1E3A5F)',
    hodName: 'Mr. Pushpendra Soni',
    hodImage: hodCe,
    hodDesk: `Civil Engineering Department of MIT Indore is a center of excellence where we nurture young talents in the different fields of Civil Engineering. We emphasis on imparting training to encourage curiosity and innovative zeal among our students and lay a firm foundation from where they can acquire quick learning ability and adaptivity with the rapidly changing world. Our program offers excellent research training along with a strong and up to date curriculum. Our laboratories are equipped with latest equipment and technologies.`,
    overview: `Civil engineering is the most attractive & ancient engineering discipline that deals with the planning, design, construction and maintenance of structures like buildings, roads, bridges, canals, dams, water supply and treatment systems. It has a broader spectrum and comprises of many sub-disciplines such as Structural Engineering, Environmental Engineering, Construction Engineering, Transportation Engineering, Geotechnical Engineering, Surveying & Material Engineering, and Water Resource Engineering.`,
    faculties: [
      { name: 'Mr. Pushpendra Soni', role: 'Assistant Professor & HOD', experience: '4 Years', qualification: 'M.E. (Structural Engineering)', research: 'RCC Steel Structure', isHOD: true },
      { name: 'Akancha Chourasia', role: 'Assistant Professor', experience: '1 year', qualification: 'M.Tech', research: 'Water Resources Engineering' },
      { name: 'Chinmayee Ray', role: 'Assistant Professor', experience: '6 years', qualification: 'M.Tech', research: 'Transportation Engineering' },
    ],
  },
  {
    id: 'applied',
    name: 'Applied Sciences & Humanities',
    shortName: 'ASH',
    icon: FlaskConical,
    color: '#C62828',
    gradient: 'linear-gradient(135deg, #0F172A, #1E293B)',
    hodName: 'Dr. Garima Dubey',
    hodImage: hodApplied,
    hodDesk: `I feel rapturous to introduce you to Department of Applied Sciences, which is the foundation of engineering. Department of Applied Sciences and Humanities strives for increasing the knowledge, enhancing the critical thinking, ability to change information into knowledge and command of analysing the things technically of each individual. We always intend to impart knowledge through a closed weave family of highly competent faculty. The purpose of Applied Sciences in Engineering study is to lay a strong foundation of basic principles of various disciplines such as Mathematics, Physics, Chemistry and Communication Skills.`,
    overview: `Basic Science propensity plays a vital role in developing technical approach and methodical thinking. These are the subjects on which the strong building of all modern innovations is based. Applied Science and Humanities being an integral part of technical education focuses on promoting the applications of scientific knowledge in a manner that prepares the students to contribute effectively, intellectually and ethically as citizens of a dynamic scientific community. This is a full-fledged department decorated with highly qualified faculties in Physics, Chemistry, Mathematics and English.`,
    faculties: [
      { name: 'Dr. Garima Dubey', role: 'Assistant Professor & HOD', experience: '11 Years', qualification: 'Ph.D. (English Literature), M.A. English', research: 'Indian Literature, Writing, Soft skills & Personality Development', isHOD: true },
      { name: 'Mr. Basant Chaudhary', role: 'Assistant Professor', experience: '8 years', qualification: 'M.Sc. Mathematics, M.Phil., Pursuing Ph.D.', research: 'Fixed Point Theory (Applied Mathematics)' },
      { name: 'Ms Hemlata Patel', role: 'Assistant Professor', experience: '2 years', qualification: 'M.Sc', research: 'Applied Mathematics' },
      { name: 'Ms Sushila Sahu', role: 'Assistant Professor', experience: '15 years', qualification: 'M.Phil(Environmental science), M.Sc. (Chemistry)', research: 'EIA' },
      { name: 'Mr Aaditya Bhatore', role: 'Assistant Professor', experience: '3 years', qualification: 'MSc', research: 'Environmental Chemistry' },
      { name: 'Ms Neha Gupta', role: 'Assistant Professor', experience: '17 years', qualification: 'MPhil', research: 'Applied Mathematics' },
      { name: 'Mr Praveen Sahu', role: 'Assistant Professor', experience: '7 years', qualification: 'M.Sc. (Applied Physics), B.Ed., PGDCA', research: 'Applied Physics' },
      { name: 'Ms Iti Patel', role: 'Assistant Professor', experience: '1 year', qualification: 'MA (English literature), B.Ed', research: 'English Literature' },
      { name: 'Mr Rakesh More', role: 'Assistant Professor', experience: '4 years', qualification: 'M.Sc. Mathematics', research: 'Applied Mathematics' },
    ],
  },
  {
    id: 'mba',
    name: 'Master of Business Administration',
    shortName: 'MBA',
    icon: BarChart,
    color: '#C62828',
    gradient: 'linear-gradient(135deg, #1E293B, #334155)',
    hodName: 'Dr. Kranti Pandey',
    hodImage: hodMba,
    hodDesk: `The foremost Professional Institutions are on the sturdy progress towards the global benchmark having strengthening the research drive and ardently providing all amenities. It has become obligatory to be aware by closing gaps and cracks in technological skills with increasing mastery over technology and broaden our horizons in diversified fields. We have been striving for excellent teacher-learner ambience since the outset and so we are concerned in bringing in celebrated, illustrious, lively and accessible teaching staff that are committed and dedicated towards the students.`,
    overview: `In the current scenario of globalization, higher education has come to dwell in the core stage. The professional society has been transformed into a round-the-world society sharing conceptions, collaboration with a global benchmark. The foremost Professional Institutions are on the sturdy progress towards the global benchmark. It has become obligatory to be aware by closing gaps and cracks in technological skills with increasing mastery over technology and broaden our horizons in diversified fields.`,
    faculties: [
      { name: 'Dr. Kranti Pandey', role: 'HOD MBA Department', experience: '18 Years', qualification: 'PhD', research: 'Business Management', isHOD: true },
      { name: 'Mr Priyank Shinde', role: 'Assistant Professor', experience: '7 years', qualification: 'MBA', research: 'International Marketing' },
      { name: 'Ms Madhuri Kriplani', role: 'Assistant Professor', experience: '7 years', qualification: 'MBA', research: 'Business Management' },
      { name: 'Mr Himanshu Matre', role: 'Assistant Professor', experience: '6 years', qualification: 'MBA', research: 'Marketing Management' },
    ],
  },
];

export const getDepartmentById = (id: string): Department | undefined =>
  departments.find((d) => d.id === id);
