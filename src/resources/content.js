import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Volkan",
  lastName: "Ulker",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Back End Developer",
  avatar: "/images/avatar.jpg",
  email: "vlkn-ulkr@hotmail.com",
  timeZonelocation: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  locationToDisplay: "Turkey/Izmir", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Turkish (Native)", "English (Proficient)"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Personal Account",
    icon: "github",
    link: "https://github.com/volkanulker",
  },
  {
    name: "Work Account",
    icon: "github",
    link: "https://github.com/Volkan-Ulker",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/volkan-ulker",
  },
  {
    name: "Medium",
    icon: "medium",
    link: "https://medium.com/@vlkn-ulkr",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between ecommerce and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Vilebrequin</strong></>,
    href: "https://www.vilebrequin.com/eu/en/home",
  },
  subline: (
    <>
      I'm Volkan, a Back End Developer at OSF Digital, where I develop excellent
      ecommerce solutions.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.locationToDisplay}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Back End Developer with over three years of experience, excelling in creating robust solutions within the Salesforce Commerce Cloud environment. 
        Proven expertise in Node.js, React, and REST APIs, driving projects from inception to completion while enhancing team collaboration and productivity. 
        Adept at rewriting and optimizing applications, ensuring seamless integration between back-end and front-end components to meet client specifications. 
        Committed to continuous improvement and delivering high-quality code that elevates user experience. 
        Passionate about leveraging technical skills to tackle complex challenges and contribute to innovative web solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "OSF Digital",
        timeframe: "November 2024 - Present",
        role: "Back End Developer (Intermediate 2)",
        achievements: [
          <>
            Participated in the complete rewrite of Vilebrequin's project, a French luxury swimwear and clothing brand, 
            using Salesforce Commerce Cloud (SFCC) and Salesforce PWA Kit. 
            This involved ensuring seamless communication between the Back-End and Front-End, 
            supporting team members with limited experience in the Salesforce PWA Kit, identifying and implementing solutions, 
            and presenting these solutions to the client.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/vilebrequin/vilebrequin-home.jpg",
            alt: "Vilebrequin Home Page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/vilebrequin/vilebrequin-plp.jpg",
            alt: "Vilebrequin PLP Page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/vilebrequin/vilebrquin-pdp.jpg",
            alt: "Vileberquin PDP Page",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "OSF Digital",
        timeframe: "July 2023 - November 2024",
        role: "Back End Developer (Junior - Intermediate 1)",
        achievements: [
          <>
            To be a key member in the development of the Sarenza Spain and Sarenza France websites from scratch to their current state using the Salesforce PWA kit, 
            contributing to every aspect of the project's back-end, proposing solutions to problems, creating documentation, and collaborating with team members.
          </>,
        ],
        images: [
          {
            src: "/images/projects/sarenza/sarenza-home.jpg",
            alt: "Sarenza Home Page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/sarenza/sarenza-plp.jpg",
            alt: "Sarenza PLP Page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/sarenza/sarenza-pdp.jpg",
            alt: "Sarenza PDP Page",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "OSF Digital",
        timeframe: "May 2022 - June 2023",
        role: "Back End Developer (Junior)",
        achievements: [
          <>
            Developed features for Moleskine, one of Italy's most renowned luxury notebook manufacturers, 
            by implementing personalized product features, setting up REST API connections, fixing bugs, and improving code quality.
          </>,
        ],
        images: [
          {
            src: "/images/projects/moleskine/moleskine-home.jpg",
            alt: "Sarenza Home Page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/moleskine/moleskine-plp.jpg",
            alt: "Sarenza PLP Page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/moleskine/moleskine-pdp.jpg",
            alt: "Sarenza PDP Page",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Study",
    institutions: [
      {
        name: "Dokuz Eylül University",
        description: <>Computer Engineering</>,
      }
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Skill Title",
        description: <>Skill Description.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
