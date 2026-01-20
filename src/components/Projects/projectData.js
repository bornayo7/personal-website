import AIS from "../../Assets/Projects/ais_utd_logo.png";
import cometpark from "../../Assets/Projects/cometpark.png";
import leetcode from "../../Assets/Projects/leetcode.png";
import website from "../../Assets/Projects/website.png";
import toyotatinder from "../../Assets/Projects/toyotatinder.png";

const projectsData = [
  {
    imgPath: toyotatinder,
    title: "ToyotaTinder: AI Car Matchmaker",
    description:
      "HackUTD 2025 project that ingests a Toyota inventory CSV, calls Google Gemini 2.5 Flash for scoring, and serves a Framer Motion swipe deck with localStorage sync, lightweight auth, and resilient fallbacks for offline demos.",
    ghLink: "https://github.com/bornayo7/toyota-tinder",
    demoLink: "https://toyotatinder.us",
    tags: ["Next.js", "Google Gemini", "Framer Motion", "Tailwind CSS"],
    imageClassName: "project-image-contain",
  },
  {
    imgPath: AIS,
    title: "AI Music Genre Classification",
    description:
      "Built a Librosa + TensorFlow CNN with spectrogram normalization, augmentation, and TensorBoard tracking to hit 90% accuracy, then shipped a React interface calling AWS Lambda for real-time genre inference.",
    ghLink: "https://github.com/ly-sona/music-genre-classification",
    tags: ["Python", "TensorFlow", "Librosa", "React"],
  },
  {
    imgPath: cometpark,
    title: "CometPark",
    description:
      "Remix + TypeScript full-stack tool for UT Dallas that stores parking lot image uploads in Pinata IPFS, streams ratings with WebSockets, and optimizes MongoDB queries for 10,000+ user interactions.",
    ghLink: "https://github.com/kennnyq/Hackathon2024",
    demoLink: "https://cometpark.org",
    tags: ["Remix", "TypeScript", "Pinata IPFS", "MongoDB"],
    imageClassName: "project-image-contain",
  },
  {
    imgPath: leetcode,
    title: "Daily LeetCode Discord Bot",
    description:
      "A Node.js + Discord.js bot that assigns algorithm prompts, tracks completions, and nudges members who skip practice. The automation keeps our server accountable with scheduled jobs and a lightweight Mongo datastore.",
    ghLink: "https://github.com/bornayo7/Leetcode-Daily-Bot",
    tags: ["Node.js", "Discord.js", "Automation"],
  },
  {
    imgPath: website,
    title: "Personal Website",
    description:
      "This React application serves as my portfolio hub with accessible theming, ML-focused copy, and GitHub Pages deployments so I can quickly update experiments, resume links, and featured work.",
    ghLink: "https://github.com/bornayo7/personal-website",
    demoLink: "https://bornayo7.github.io/personal-website/",
    tags: ["React", "Design Systems", "Portfolio"],
  },
];

export default projectsData;
