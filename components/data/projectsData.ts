export const projectsData = [
  {
    id: "jitjots-website",
    featured: true,
    heroImage: "/images/jitsjots/hero.png",
    cardImage: "/images/jitsjots/hero.png",
    title: "JitJots",
    role: "Frontend Developer & Designer",
    timeline: "2025 – Present",
    summary:
      "Live website for JitJots, a science education non-profit bringing hands-on workshops to K-12 students. Built with Next.js and TypeScript as a volunteer contributor. The site is how schools and community centers discover programs, and is actively maintained.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Git"],

    link: "https://github.com/ritchiexia/jitjots",
    liveLink: "https://jitjots.com/",

    problem: `
      JitJots needed a web presence that clearly communicated their mission of
      instilling curiosity and wonder in young scientists. The challenge was
      presenting their programs, workshops, worksheets, and volunteering,
      in a way that was approachable for both parents and community organizations.
    `,

    research: `
      I reviewed existing science education and non-profit websites to identify
      common patterns, which informed the content hierarchy and call-to-action design.
    `,
    researchFindings: [
      "Effective sites lead with mission and impact, not just a list of services",
      "Age-appropriate imagery builds trust with parents and educators",
      "Making it easy for organizations to inquire about booking reduces drop-off",
    ],

    process: `
      The site was built using Next.js for server-side rendering and fast page
      loads, with Tailwind CSS handling responsive styling. I collaborated with
      the team to structure the content across pages for workshops, worksheets,
      and volunteer opportunities, ensuring the layout scaled cleanly across
      device sizes.
    `,

    solution: `
      The resulting website clearly presents JitJots' programs and mission to
      prospective partners and families. The responsive design works across
      desktop and mobile, and the clean layout makes it easy for community
      centers and schools to understand offerings and get in touch.
    `,

    reflection: [],
    impact: [
      "Weekly workshops reaching hundreds of attendees, from ages 5 to high school",
      "Partnered with several community centers across the Lower Mainland",
      "The website is the primary way schools and organizations discover and book programs",
    ],
  },

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
    title: "PEAKED Bouldering",
    role: "Designer & Developer",
    timeline: "Fall 2024",
    summary:
      "Most climbing gym websites bury pricing and use dense tables that slow decisions. I redesigned the membership flow around visual comparison: side-by-side cards, three-step checkout with progressive disclosure, and a layout that holds up across every screen size.",
    techStack: ["HTML", "CSS", "JavaScript", "Git", "Figma"],

    link: "https://github.com/derekchengg/PEAKED-Bouldering",

    problem: `
      The issue with most bouldering gym websites is that they have confusing
      navigation and unclear pricing structures. Users struggle to compare
      membership options and often abandon purchases mid-checkout.
    `,

    research: `
      I analyzed competitor sites — Hive Climbing, Progression Bouldering, and
      Approach Climbing — to find the friction points that informed my focus
      on visual comparison and streamlined purchasing.
    `,
    researchFindings: [
      "Pricing was buried 2-3 clicks deep on most competitor sites",
      "Dense comparison tables required excessive scrolling",
      "Checkout flows were long and lost users partway through",
    ],

    process: `
      I wireframed a simplified user journey in Figma, prioritizing immediate
      pricing visibility with a three-step flow designed to reduce cognitive
      load. For the membership cards, I followed standard pricing typography
      and visual weight conventions to help users make quick decisions.
    `,
    processSteps: [
      "Membership selection with side-by-side comparison cards",
      "User details collected through progressive disclosure",
      "Order confirmation with transparent, itemized pricing",
    ],

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
    id: "pneumonia-detection-with-cnn-ml",
    featured: false,
    cardImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=400&fit=crop",
    title: "Pneumonia Detection with CNN & ML",
    role: "ML Engineer",
    timeline: "2024",
    summary:
      "Binary classifier for pneumonia detection from chest X-ray images using transfer learning with EfficientNet B2. Training was recall-optimized to minimize false negatives, because in a medical context, missing a case costs more than a false alarm.",
    techStack: ["Python", "PyTorch", "EfficientNet B2", "Transfer Learning"],

    link: "https://github.com/derekchengg/Pneumonia-Detection-with-CNN-Models",

    problem: `
      Pneumonia is one of the leading causes of death worldwide, yet diagnosis
      relies heavily on radiologists manually reviewing chest X-rays, a process
      that is time-consuming and prone to human error, especially in under-resourced
      settings. The goal was to build an automated classifier that could assist in
      detecting pneumonia from X-ray images accurately and efficiently.
    `,

    research: `
      I reviewed existing approaches to medical image classification, focusing
      on transfer learning techniques and the dataset structure that would
      shape the training strategy.
    `,
    researchFindings: [
      "EfficientNet B2 had a stronger performance-to-parameter ratio than heavier architectures like ResNet or VGG",
      "The Kaggle chest X-ray dataset showed significant class imbalance between Normal and Pneumonia samples",
    ],

    process: `
      The pipeline was built end-to-end in Python using PyTorch, fine-tuning a
      pretrained EfficientNet B2 model on the chest X-ray dataset with recall
      prioritized to minimize false negatives, since missing a pneumonia case
      is more costly than a false alarm.
    `,
    processSteps: [
      "Data augmentation — random flips, rotations, and contrast adjustments to improve generalization on the smaller Normal class",
      "A weighted loss function to address class imbalance between the two classes",
      "Evaluation across accuracy, precision, recall, and F1-score, with recall as the priority metric",
    ],

    solution: `
      The fine-tuned model achieved strong binary classification performance on
      the test set, significantly outperforming a baseline CNN trained from scratch.
      The inference pipeline allows a single X-ray image to be passed in and returns
      a prediction with confidence score, making it usable as a screening assistance
      tool.
    `,

    reflection: [
      `
        Transfer learning dramatically reduced the training data and compute
        needed to achieve good results. EfficientNet B2's pretrained features
        generalized well to medical imagery despite being trained on natural images.
      `,

      `
        Handling class imbalance was the trickiest part. Weighted loss and
        careful metric selection (prioritizing recall) were more impactful than
        architecture changes.
      `,

      `
        Future improvements would include expanding to multi-class classification
        (bacterial vs. viral pneumonia), integrating Grad-CAM visualizations to
        highlight the regions driving predictions, and testing on external datasets
        to validate generalization.
      `
    ],
  },
]
