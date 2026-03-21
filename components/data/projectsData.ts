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
    cardImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&h=400&fit=crop",
    title: "JitJots Website",
    role: "Frontend Developer",
    timeline: "2024",
    summary:
      "A live science education website for JitJots, an organization that brings interactive science workshops and learning experiences to young children. Built with Next.js, TypeScript, and Tailwind CSS.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Git"],

    link: "https://github.com/ritchiexia/jitjots",
    liveLink: "https://jitjots.com/",

    problem: `
      JitJots needed a web presence that clearly communicated their mission of
      instilling curiosity and wonder in young scientists. The challenge was
      presenting their programs — workshops, worksheets, and volunteering —
      in a way that was approachable for both parents and community organizations.
    `,

    research: `
      I reviewed existing science education and non-profit websites to identify
      common patterns. Key findings: effective sites lead with mission and impact,
      use age-appropriate imagery, and make it easy for organizations to inquire
      about booking. This informed the content hierarchy and call-to-action design.
    `,

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

    reflection: [
      `
        Working on a live production site reinforced the importance of
        accessibility and clear content hierarchy. With a young audience in mind,
        design decisions needed to balance visual appeal with readability.
      `,

      `
        Collaborating on an existing codebase taught me to navigate unfamiliar
        project structures quickly and contribute meaningfully without disrupting
        existing patterns.
      `,

      `
        Seeing the site go live and serve a real organization was rewarding.
        Future improvements could include an online booking flow for workshops
        and downloadable worksheet previews directly on the site.
      `
    ],
  },

  {
    id: "pneumonia-detection-with-cnn-ml",
    featured: true,
    cardImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=400&fit=crop",
    title: "Pneumonia Detection with CNN & ML",
    role: "ML Engineer",
    timeline: "2024",
    summary:
      "A deep learning classifier that detects pneumonia from chest X-ray images using transfer learning with EfficientNet B2. The model achieves binary classification (Normal vs. Pneumonia) and includes end-to-end pipelines for training, evaluation, and inference on individual images.",
    techStack: ["Python", "PyTorch", "EfficientNet B2", "Transfer Learning"],

    link: "https://github.com/derekchengg/Pneumonia-Detection-with-CNN-Models",

    problem: `
      Pneumonia is one of the leading causes of death worldwide, yet diagnosis
      relies heavily on radiologists manually reviewing chest X-rays — a process
      that is time-consuming and prone to human error, especially in under-resourced
      settings. The goal was to build an automated classifier that could assist in
      detecting pneumonia from X-ray images accurately and efficiently.
    `,

    research: `
      I reviewed existing approaches to medical image classification, focusing on
      transfer learning techniques. EfficientNet B2 stood out for its strong
      performance-to-parameter ratio compared to heavier architectures like ResNet
      or VGG. I also studied the Kaggle chest X-ray dataset structure to understand
      class imbalance issues between Normal and Pneumonia samples, which directly
      shaped the training strategy.
    `,

    process: `
      The pipeline was built end-to-end in Python using PyTorch. I fine-tuned a
      pretrained EfficientNet B2 model on the chest X-ray dataset, applying data
      augmentation (random flips, rotations, contrast adjustments) to improve
      generalization on the smaller Normal class.

      Training used a weighted loss function to address class imbalance, and
      evaluation metrics included accuracy, precision, recall, and F1-score —
      with recall prioritized to minimize false negatives, since missing a
      pneumonia case is more costly than a false alarm.
    `,

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
