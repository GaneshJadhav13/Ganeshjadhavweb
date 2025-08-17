export const siteConfig = {
	name: 'GRJ Portfolio',
	description:
		'A professional portfolio website template for cs students.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		{
			title: 'Certificates',
			href: '/certificates',
		},
		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/GaneshJadhav13',
		linkedin: 'https://www.linkedin.com/in/ganeshjadhav13/',
		twitter: 'https://www.freecodecamp.org/ganeshjadhav',
		facebook: 'https://www.freecodecamp.org/ganeshjadhav',
		instagram: 'https://github.com/GaneshJadhav13',
		whatsapp: 'https://wa.me/917796548663',
		email: 'https://github.com/GaneshJadhav13',
		phone: 'https://github.com/GaneshJadhav13',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Engineering Intern',
		company: 'Tech Company',
		location: 'Pune, India',
		startDate: 'May 2025',
		endDate: 'Aug 2025',
		description: [
			'Worked on developing and testing software components for embedded systems',
			'Collaborated with senior engineers on project planning and execution',
			'Implemented test procedures for quality assurance',
		],
		technologies: ['C++', 'Python', 'MATLAB', 'Git'],
	},
	{
		title: 'Research Assistant',
		company: 'University Lab',
		location: 'Pune, India',
		startDate: 'Jan 2024',
		endDate: 'Apr 2024',
		description: [
			'Assisted in research focusing on advanced materials for mechanical applications',
			'Conducted literature reviews and compiled research findings',
			'Performed data analysis and visualization of experimental results',
		],
		technologies: ['ML', 'AI', 'Data Analysis', 'Python'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Smart Home Automation System',
		description:
			'Designed and implemented a smart home automation system using IoT technologies to control lighting, temperature, and security features.',
		image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
		tags: ['IoT', 'Arduino', 'C++', 'Mobile App'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Structural Analysis Software',
		description:
			'Developed software for structural analysis of beams and trusses using numerical methods and visualization techniques.',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: ['MATLAB', 'Python', 'FEA', 'Structural Engineering'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Renewable Energy Monitoring',
		description:
			'Created a system to monitor and analyze performance of solar panels and wind turbines for optimal energy production.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['Data Analysis', 'IoT', 'Renewable Energy', 'Visualization'],
		link: '#',
		repo: '#',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Computer Applications',
		field: 'Computer Science',
		institution: 'Savitribai Phule Pune University',
		location: 'Maharashtra, India',
		startDate: 'June 2023',
		endDate: 'Present',
		gpa: '9.4/10 (last semester)',
		achievements: [
			'Dean\'s List (All Semesters)',
			'Academic Excellence Scholarship',
			'Senior Design Project Award',
		],
	},
	
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'Machine Learning Certification',
		issuer: 'Excelr',
		date: 'JAN 2025',
		id: 'Cert No. 105971/EXCELR/EDL/04012025',
		url: '#',
		pdf: 'public/certificates/mlexclr.pdf',
	},
	{
		title: 'Cloud Computing Fundamentals',
		issuer: 'Excelr',
		date: 'May 2025',
		id: 'Cert No. 115561/EXCELR/EDL/270525',
		
		url: 'https://drive.google.com/file/d/1yqqgcYCmTYEjSWrXP1Tz45qJjTFckHV9/view?usp=drivesdk',
		pdf: '#',
	},
	{
		title: 'College Algebra with Python',
		issuer: 'FreeCodeCamp',
		date: 'Sept 2024',
		id: 'https://freecodecamp.org/certification/ganeshjadhav/college-algebra-with-python-v8',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'Python', level: 9, category: 'technical' },
	{ name: 'R', level: 8, category: 'technical' },
	{ name: 'SQL', level: 7, category: 'technical' },
	{ name: 'NumPy', level: 8, category: 'technical' },
	{ name: 'Statistics', level: 6, category: 'technical' },

	// Software Skills
	{ name: 'VS Code', level: 9, category: 'software' },
	{ name: 'Git & GitHub', level: 8, category: 'software' },
	{ name: 'PHP', level: 9, category: 'software' },
	{ name: 'Python', level: 7, category: 'software' },
	{ name: 'C', level: 6, category: 'software' },
	{ name: 'Java', level: 8, category: 'software' },

	// Soft Skills
	{ name: 'Problem Solving', level: 9, category: 'soft' },
	{ name: 'Team Leadership', level: 8, category: 'soft' },
	{ name: 'Project Management', level: 7, category: 'soft' },
	{ name: 'Technical Writing', level: 8, category: 'soft' },
	{ name: 'Presentation', level: 7, category: 'soft' },

	// Languages
	{ name: 'English', level: 10, category: 'language' },
	{ name: 'Hindi', level: 6, category: 'language' },
	{ name: 'Marathi', level: 4, category: 'language' },
];

