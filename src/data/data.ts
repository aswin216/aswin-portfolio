export interface NavItem {
  label: string;
  path: string;
}

export const NavItems: NavItem[] = [
  { label: "Home", path: "home" },
  { label: "About", path: "about" },
  { label: "Skills", path: "skills" },
  { label: "Projects", path: "projects" },
  { label: "Contact", path: "contact" },
];

//==============Projects=============//

export interface ProjectDetails {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  link: string;
}

export const Projects: ProjectDetails[] = [
  {
    number: "01",
    title: "Go Ye Missions",
    category: "Church Management Website",
    description:
      "A modern responsive website and content management system built for managing church information, events, services, and media.",
    technologies: ["React", "TypeScript", "SCSS", "REST API"],
    link: "https://www.goyemission.org/",
  },
  {
    number: "02",
    title: "IJCOA Journal",
    category: "Academic Journal Platform",
    description:
      "A responsive journal platform with editorial board, indexing, publications, and content management features.",
    technologies: ["React", "TypeScript", "SCSS", "API"],
    link: "https://www.ijcoa.com/",
  },
  {
    number: "03",
    title: "The Dale View",
    category: "Pharmacy Journal Website",
    description:
      "A modern academic journal website focused on current issues, archives, articles, editorial information, and publications.",
    technologies: ["React", "TypeScript", "SCSS"],
    link: "https://www.daleviewjournals.com/",
  },
];