export const projectsData = [
  {
    id: "peaked-bouldering-website",
    featured: true,
    heroImage: "/images/peaked-bouldering/hero.png",
    cardImage: "/images/peaked-bouldering/hero.png",
    processImages: [
      "/images/peaked-bouldering/process1.png",
      "/images/peaked-bouldering/process2.png",
    ],
    solutionImages: [
      "/images/peaked-bouldering/solution1.png",
      "/images/peaked-bouldering/solution2.png",
      "/images/peaked-bouldering/solution3.png",
    ],
    title: "PEAKED Bouldering Website",
    role: "Designer & Developer",
    timeline: "Fall 2024",
    summary:
      "A responsive bouldering gym website with a complete membership purchase flow, built from scratch using vanilla HTML, CSS, and JavaScript.",
    techStack: ["HTML", "CSS", "JavaScript", "Git", "Figma"],

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

      For the cards, I followed the standard typography for pricing and visual weight.
      This helps users make quick decisions.
    `,

    solution: `
      The results show that this approach directly addressed competitor pain
      points. The side-by-side card layout eliminated table confusion for users
      who could instantly compare options. The three-step checkout helped with the flow to
      enhance user experience and with a responsive design, it maintained usability across
      devices.
    `,

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

  {
    id: "jitjots-website",
    featured: true,
    // cardImage: "",
    title: "JitJots Website",
    role: "Frontend Developer",
    timeline: "2024",
    summary:
      "A live science education website for JitJots, an organization that brings interactive science workshops and learning experiences to young children. Built with Next.js, TypeScript, and Tailwind CSS.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Git"],

    link: "https://github.com/ritchiexia/jitjots",
    liveLink: "https://jitjots.com/",

    problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

    research: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

    process: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

    solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

    reflection: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      `Ut enim ad minim veniam, quis nostrud exercitation ullamco.`,
    ],
  },

  {
    id: "pneumonia-detection-with-cnn-ml",
    featured: true,
    // cardImage: "",
    title: "Pneumonia Detection with CNN & ML",
    role: "ML Engineer",
    timeline: "2024",
    summary:
      "A deep learning classifier that detects pneumonia from chest X-ray images using transfer learning with EfficientNet B2. The model achieves binary classification (Normal vs. Pneumonia) and includes end-to-end pipelines for training, evaluation, and inference on individual images.",
    techStack: ["Python", "PyTorch", "EfficientNet B2", "Transfer Learning"],

    link: "https://github.com/derekchengg/Pneumonia-Detection-with-CNN-Models",

    problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

    research: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

    process: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

    solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

    reflection: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      `Ut enim ad minim veniam, quis nostrud exercitation ullamco.`,
    ],
  },
]
