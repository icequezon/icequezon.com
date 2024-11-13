const constants = {
  tabs: [
    {
      name: "Home",
      url:  "/",
      content: `
     ************************************************************
     *                                                          *
     *              FRANCIS SEBASTIAN J. QUEZON                 *
     *            Python Data Engineer & Developer              *
     *                                                          *
     ************************************************************
     
     Hello! 👋 I'm Francis Sebastian J. Quezon, a seasoned Python Data Engineer 
     and Software Developer based in Melbourne, Australia. With a strong 
     foundation in software development and data engineering, I specialize in 
     building efficient data pipelines, API integrations, and cloud-based solutions.

     My work spans various domains, focusing on creating secure, scalable, and 
     optimized systems using Python and cloud technologies. Dive in to explore 
     my experience, projects, and insights as I continue my journey in the tech world.

      `
    },
    {
      name: "About",
      url:  "/about",
      content: `
     ************************************************************
     *                                                          *
     *              FRANCIS SEBASTIAN J. QUEZON                 *
     *            Python Data Engineer & Developer              *
     *                                                          *
     ************************************************************

     I’m a software engineer with over 7 years of experience in the tech industry, 
     focusing on data engineering, full-stack development, and cloud infrastructure. 
     My expertise includes Python, AWS, Azure, and API design, with a commitment to 
     creating high-performance and scalable systems.
     
     Recently, I relocated to Melbourne, Australia, where I’m excited to continue my 
     journey, explore new opportunities, and deepen my skills in AI development. 
     Outside of work, I enjoy solving complex problems, exploring new technologies, 
     and continuously learning to stay at the cutting edge of the field.
     
     Thanks for visiting my site — I hope you enjoy learning more about my work and 
     experiences!

      `
    },
    {
      name: "Resume",
      url:  "/resume",
      content: `
     ************************************************************
     *                                                          *
     *              FRANCIS SEBASTIAN J. QUEZON                 *
     *            Python Data Engineer & Developer              *
     *                                                          *
     ************************************************************

     💼 Python Data Engineer | Complete Development
         - July 2023 - July 2024
         - Developed custom Airbyte connectors, optimized dbt models, and deployed 
           scalable data pipelines on AWS.
     
     💼 Python Full Stack Developer | Complete Development
         - January 2021 - July 2023
         - Built backend features for asset management, optimized SQL queries, 
           and collaborated on cloud integrations.
     
     💼 C++ Software Engineer | Nokia Technology Center
         - July 2020 - December 2021
         - Enhanced 5G features, developed testing frameworks, and contributed 
           to high-performance telecom solutions.
     
     For a full view of my work history, skills, and accomplishments, please see 
     my LinkedIn Profile!

      `
    },
    {
      name: "Blog",
      url:  "/blog",
      content: `
     ************************************************************
     *                                                          *
     *              FRANCIS SEBASTIAN J. QUEZON                 *
     *            Python Data Engineer & Developer              *
     *                                                          *
     ************************************************************

     Welcome to my blog, where I share insights on software development, data 
     engineering, cloud infrastructure, and more. Whether you're a beginner or an 
     experienced developer, I aim to provide valuable content that helps you 
     tackle real-world challenges.
     
     Stay tuned for updates and feel free to reach out if there's a specific topic 
     you'd like to see discussed!
      `
    },
    {
      name: "Contact",
      url:  "/contact",
      content: `
     ************************************************************
     *                                                          *
     *              FRANCIS SEBASTIAN J. QUEZON                 *
     *            Python Data Engineer & Developer              *
     *                                                          *
     ************************************************************

     📧 Email: {email}
     🔗 LinkedIn: {linkedin}
     🔗 GitHub: {github}
     
     I’d love to hear from you! Whether you have a question, want to collaborate, 
     or just want to connect, don’t hesitate to reach out. You can also find me 
     on LinkedIn and GitHub. Looking forward to connecting!
      `,
      data: {
        email: {
          type: "link",
          value: "mailto:aisukezon@gmail.com",
          display: "aisukezon@gmail.com"
        },
        linkedin: {
          type: "link",
          value: "https://www.linkedin.com/in/francis-sebastian-quezon-74182a193/",
          display: "https://www.linkedin.com/in/francis-sebastian-quezon-74182a193/"
        },
        github: {
          type: "link",
          value: "https://github.com/icequezon",
          display: "https://github.com/icequezon"
        },
      }
    },
    {
      name: "Portfolio",
      url:  "/portfolio",
      content: `
     ************************************************************
     *                                                          *
     *              FRANCIS SEBASTIAN J. QUEZON                 *
     *            Python Data Engineer & Developer              *
     *                                                          *
     ************************************************************

     Stay tuned for exciting projects and accomplishments! In the meantime, 
     feel free to explore my work on GitHub to see some of my code, contributions, 
     and ongoing projects.
     
     🔗 {github}

      `,
      data: {
        github: {
          type: "link",
          value: "https://github.com/icequezon",
          display: "Github Profile"
        },
      }
    },
  ],
};

export default constants;
