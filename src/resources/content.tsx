import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Volkan",
  lastName: "Ulker",
  name: `Volkan Ulker`,
  role: "Back End Engineer",
  avatar: "/images/avatar.jpg",
  email: "vlkn-ulkr@hotmail.com",
  timeZoneLocation: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  locationToDisplay: "Turkey/Izmir", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Turkish (Native)", "English (Proficient)"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "Personal Account",
    icon: "github",
    link: "https://github.com/volkanulker",
    essential: true,
  },
  {
    name: "Work Account",
    icon: "github",
    link: "https://github.com/Volkan-Ulker",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/volkan-ulker",
    essential: true,
  },
  {
    name: "Medium",
    icon: "medium",
    link: "https://medium.com/@vlkn-ulkr",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between e-commerce and software</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Recent Project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Tissot
        </Text>
      </Row>
    ),
    href: "https://www.tissotwatches.com/en-us",
  },
  subline: (
    <>
      I'm Volkan, a Back End Engineer at <Text as="span" size="xl" weight="strong">OSF Digital</Text>, where I develop excellent and scalable e-commerce solutions.
    </>
  ),
};

const about: About = {
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
Back End Engineer with over three years of experience, excelling in creating robust solutions within the Salesforce Commerce Cloud environment. Proven expertise in Node.js, React, and REST APIs, driving projects from scratch to completion while enhancing team collaboration and productivity.
<br />
<br />
Experienced at rewriting and optimizing applications, ensuring seamless integration between back-end and front-end components to meet client specifications.
<br />
<br />
Committed to continuous improvement and delivering high-quality code that elevates user experience. Passionate about leveraging technical skills to tackle complex challenges and contribute to innovative solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Tissot via OSF Digital",
        timeframe: "August 2025 - Present",
        role: "Back End Engineer (Senior 1)",
        achievements: [
          <>
           Develop features using Salesforce Commerce Cloud (SFCC) and SFRA for the Swiss luxury watchmaker Tissot.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/tissot/tissot-home.jpg",
            alt: "Tissot Home Page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/tissot/tissot-plp.jpg",
            alt: "Tissot PLP Page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/tissot/tissot-pdp.jpg",
            alt: "Tissot PDP Page",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Vilebrequin via OSF Digital",
        timeframe: "November 2024 - August 2025",
        role: "Back End Engineer (Intermediate 2)",
        achievements: [
          <>
           Participated in the complete rewrite of Vilebrequin's project, a French luxury swimwear and clothing brand, using Salesforce Commerce Cloud (SFCC) and Salesforce PWA Kit. This involved ensuring seamless communication between the Back-End and Front-End, supporting team members with limited experience in the Salesforce PWA Kit, identifying and implementing solutions, and presenting these solutions to the client.
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
            src: "/images/projects/vilebrequin/vilebrequin-pdp.jpg",
            alt: "Vilebrequin PDP Page",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Sarenza via OSF Digital",
        timeframe: "July 2023 - November 2024",
        role: "Back End Engineer (Junior - Intermediate 1)",
        achievements: [
          <>
            To be a key member in the development of the Sarenza Spain and Sarenza France applications and business flows from scratch to their current state using the Salesforce PWA kit and Salesforce Commerce Cloud(SFCC), contributing to every aspect of the project's back-end, proposing solutions to problems, creating documentation, and collaborating with team members.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
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
        company: "Moleskine via OSF Digital",
        timeframe: "May 2022 - June 2023",
        role: "Back End Engineer (Junior)",
        achievements: [
          <>
            Developed features for Moleskine, one of Italy's most renowned luxury notebook manufacturers, by implementing personalized product features, setting up REST API connections, fixing bugs, and improving code quality.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/moleskine/moleskine-home.jpg",
            alt: "Moleskine Home Page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/moleskine/moleskine-plp.jpg",
            alt: "Moleskine PLP Page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/moleskine/moleskine-pdp.jpg",
            alt: "Moleskine PDP Page",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
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
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
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
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
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
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
