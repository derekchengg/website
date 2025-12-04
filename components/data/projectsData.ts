export const projectsData = [
  {
    id: "peaked-bouldering-website",
    title: "PEAKED Bouldering Website",
    role: "Frontend Developer & Designer",
    timeline: "October 2025 - November 2025",
    summary:
      "A responsive bouldering gym website with a complete membership purchase flow, built from scratch using vanilla HTML, CSS, and JavaScript.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Git", "Figma"],

    link: "https://github.com/derekchengg/PEAKED-Bouldering",

    problem: `
      The issue with most bouldering gym websites is that they have confusing 
      navigation and unclear pricing structures. Users struggle to compare 
      membership options and often abandon purchases mid-checkout.
    `,

    research: `
      So I analyzed competitor sites (Hive Climbing, Progression Bouldering, 
      Approach Climbing). Key findings: most sites buried pricing 2-3 clicks 
      deep, used dense tables requiring scrolling, and had lengthy checkout 
      flows. These friction points informed my focus on visual comparison and 
      streamlined purchasing.
    `,

    process: `
      I wireframed a simplified user journey in Figma, prioritizing immediate 
      pricing visibility. The reason I designed a three-step flow is to reduce 
      cognitive load: (1) membership selection with side-by-side cards, (2) user 
      details with progressive disclosure, (3) order confirmation with transparent 
      pricing.
      
      For the cards, I followd the standard typography for pricing and visual weight.
      This helps users make quick decisions. 
    `,

    "process-image": "/images/projects/peaked-bouldering/process.png",

    solution: `
      The results show that this approach directly addressed competitor pain 
      points. The side-by-side card layout eliminated table confusion for users 
      who could instantly compare options. The three-step checkout helped with the flow to 
      enhance user experience and with a responsive design, it maintained usability across 
      devices.
    `,

    "solution-image": "/images/projects/peaked-bouldering/solution.png",

    reflection: [
      `
        Building with vanilla JavaScript taught me DOM manipulation fundamentals. 
        The constraint forced creative problem-solving. However, the trade-off 
        is that vanilla JS requires more code than frameworks for complex features.
      `,

      `
        Balancing aesthetics with functionality proved challenging. The main 
        lesson I learned is that great design is more important than flashy visuals. Users tend
        to prioritize clarity and ease of use over aesthetic elements.
      `,

      `
        User testing revealed unexpected pain points that weren't apparent 
        during design. This reinforced the importance of early feedback. Future 
        improvements would include membership comparison tools and backend 
        payment integration.
      `
    ],
  },
]