export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I study cybersecurity currently but also have deep knowledge in International Relations. Right now my aim is to be a blue team security engineer",
    description: "",
    className:
      "lg:col-span-3 md:col-span-3 md:row-span-2 lg:min-h-[50vh] flex items-center justify-center", // Center content
    imgClassName: "w-full h-full",
    titleClassName:
      "w-full text-justify text-center text-red-500  mt-8 text-xl md:text-2xl lg:text-3xl", // Center text horizontally and apply color
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm open to work remotely timezone wise I'm quite flexible.",
    description: "remote",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly learn",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "I love languages currently speak 4: Hungarian, Turkish, English & Japanese n4",
    description: "Languages I speak:",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building a crypto journal app and a crypto academy site.",
    description: "I'm focused on",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Have a job opportunity for me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

/**
 * Array of project objects containing information about each project.
 * Each object has the following properties:
 * - id: unique identifier for the project
 * - title: title of the project
 * - des: short description of the project
 * - img: file path of the project image
 * - iconLists: array of file paths for the icons used in the project
 * - liveSiteUrl: URL of the live site for the project
 */

export const projects = [
  {
    id: 1,
    title: "Coin academy",
    des: "A gamefied website to learn about crypto",
    img: "/bg.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "/",
  },
  {
    id: 2,
    title: "Coinbyte",
    des: "A crypto pokedex similar from pokemon but crypto with a crypto journal",
    img: "/bg.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "/",
  },
  {
    id: 3,
    title: "StixPix",
    des: "Mobile app micro sass",
    img: "/stixpixbg.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    liveSiteUrl: "https://stixpix.alparslanabdik.cloud",
  },
  {
    id: 4,
    title: "CBD Webshop",
    des: "A minimalist next js shop",
    img: "/bg.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "/https://lifeisnatural.hu/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "CIO Cashier Basket",
    desc: "3+ years of experience from the university startup. Agile development, git version control.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Vice- President of foreign affairs IDSA",
    desc: "Within University, Student organization. Vice President: PR Communications.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Diplomatic Intern at US Embassy Budapest",
    desc: "Assisting in the cultural events.Educational programs or exchange programs Research and Analysis, Assistance to ConsularServices, Language Support",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Community Moderator of Kimba gang",
    desc: "Twitch streams,  international Discord managing a big discord crypto community.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },

  {
    id: 3,
    img: "/link.svg",
  },
];
