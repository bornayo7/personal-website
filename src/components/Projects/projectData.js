import mangatranslate from "../../Assets/Projects/mangatranslate.svg";
import toyotatinder from "../../Assets/Projects/toyotatinder.png";
import cometpark from "../../Assets/Projects/cometpark.png";
import musicGenre from "../../Assets/Projects/ais_utd_logo.png";
import leetcode from "../../Assets/Projects/leetcode.png";
import website from "../../Assets/Projects/website.svg";
import { REPO_URL, SITE_URL } from "../../data/links";

const projectsData = [
  {
    imgPath: mangatranslate,
    title: "MangaTranslate",
    description:
      "A Chrome extension that translates manga right on the page. It finds every image and canvas, runs OCR through engines like MangaOCR and PaddleOCR, routes the text through your choice of LLM provider, and redraws layout-aware translated overlays in place. It started as my HackSMU build and grew into a full project with a FastAPI backend and its own site.",
    ghLink: "https://github.com/bornayo7/Manga-Translate",
    tags: ["Chrome MV3", "React", "FastAPI", "OCR"],
  },
  {
    imgPath: toyotatinder,
    title: "ToyotaTinder",
    description:
      "HackUTD 2025: a swipe-style car matchmaker that pairs real Toyota inventory data with Gemini 2.5 Flash to generate personalized recommendations. Server-side filtering and scoring plus defensive JSON parsing keep the AI picks reliable even when the model returns something malformed.",
    ghLink: "https://github.com/bornayo7/toyota-tinder",
    demoLink: "https://toyotatinder.us",
    tags: ["Next.js", "Google Gemini", "Node.js"],
    imageClassName: "contain",
  },
  {
    imgPath: cometpark,
    title: "CometPark",
    description:
      "A full-stack app from HackUTD 2024 that crowdsources UTD parking-lot ratings, with user photo uploads stored on Pinata IPFS. A real-time analytics dashboard runs on WebSockets, with MongoDB queries tuned to handle 10,000+ user interactions.",
    ghLink: "https://github.com/kennnyq/Hackathon2024",
    demoLink: "https://cometpark.org",
    tags: ["Remix", "TypeScript", "MongoDB", "IPFS"],
    imageClassName: "contain",
  },
  {
    imgPath: musicGenre,
    title: "AI Music Genre Classifier",
    description:
      "A CNN built with Librosa and TensorFlow that classifies songs by genre from spectrograms, hitting 90% accuracy with augmentation and TensorBoard tracking. A React front end calls AWS Lambda for real-time inference. Built with the AIS club at UTD.",
    ghLink: "https://github.com/ly-sona/music-genre-classification",
    tags: ["Python", "TensorFlow", "AWS Lambda", "React"],
  },
  {
    imgPath: leetcode,
    title: "Daily LeetCode Bot",
    description:
      "A Discord bot that posts a daily algorithm problem, tracks who solved it, and calls out members who skip practice. Scheduled jobs and a lightweight MongoDB datastore keep our server accountable with zero upkeep.",
    ghLink: "https://github.com/bornayo7/Leetcode-Daily-Bot",
    tags: ["Node.js", "Discord.js", "MongoDB"],
  },
  {
    imgPath: website,
    title: "This Website",
    description:
      "The site you're on: React with a hand-rolled design system, light and dark themes, and GitHub Pages deployment. Updating featured work or my resume is a one-commit job.",
    ghLink: REPO_URL,
    demoLink: SITE_URL,
    tags: ["React", "CSS", "GitHub Pages"],
  },
];

export default projectsData;
