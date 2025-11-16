import AIS from "../../Assets/Projects/ais_utd_logo.png";
import cometpark from "../../Assets/Projects/cometpark.png";
import leetcode from "../../Assets/Projects/leetcode.png";
import website from "../../Assets/Projects/website.png";

const projectsData = [
  {
    imgPath: AIS,
    title: "AI Music Genre Classification",
    description:
      "Training a CNN on mel-spectrograms with TensorFlow and Librosa preprocessing, then surfacing experiments through a React + Node.js interface for uploading tracks, reviewing logits, and exporting metrics.",
    ghLink: "https://github.com/ly-sona/music-genre-classification",
    tags: ["Python", "TensorFlow", "React", "Node.js"],
  },
  {
    imgPath: cometpark,
    title: "CometPark",
    description:
      "A TypeScript web application for the UT Dallas community that aggregates parking lot telemetry. I architected the React front end, Node/Express APIs, and MongoDB pipelines so students can quickly reason about capacity trends.",
    ghLink: "https://github.com/yourusername/CometPark",
    demoLink: "https://cometpark.org",
    tags: ["TypeScript", "React", "Node.js", "MongoDB"],
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
