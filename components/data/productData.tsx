import { Product } from "@/types/products";

export const products: Product[] = [
  {
    href: "https://github.com/derekchengg/Predicting-Stock-Volatility",
    title: "Stock Prediction via Reddit Sentiment",
    description: "Uses VADER sentiment analysis on r/wallstreetbets posts to correlate Reddit activity with stock volatility patterns in meme stocks.",
    stack: ["Python", "VADER", "praw", "yfinance"],
    slug: "stock-prediction",
  },
  {
    href: "https://github.com/derekchengg/Pneumonia-Detection-with-CNN-Models",
    title: "Pneumonia Detection with CNN Models",
    description: "Pneumonia detection comparing EfficientNet B2 transfer learning against a base CNN model on chest X-ray images.",
    stack: ["Python", "EfficientNetB2", "Base CNN"],
    slug: "pneumonia-detection",
  },
  {
    href: "https://github.com/derekchengg/SIAT-Issues-App",
    title: "SIAT Student Issues App Prototype",
    description: "SFU-branded issue tracking system with dashboard, voting, filtering, and mobile-responsive design using vanilla HTML/CSS/JS.",
    stack: ["HTML", "CSS", "JavaScript"],
    slug: "siat-issues-app",
  },
  {
    href: "https://github.com/derekchengg/Terminal-Chat",
    title: "Terminal Chat",
    description: "A C-based chat app using sockets and threads for communication between Linux machines.",
    stack: ["C", "Sockets", "Threading"],
    slug: "terminal-chat",
  },
  {
    href: "https://github.com/derekchengg/Sudoku-Vocab",
    title: "Sudoku Vocab",
    description: "A Sudoku-style language game using word pairs for vocabulary learning through grid-solving.",
    stack: ["Java", "Android Studio"],
    slug: "sudoku-vocab",
  },
  {
    href: "https://github.com/derekchengg/Transcript-Summarizer",
    title: "Transcript Summarizer",
    description: "A web app using AI to summarize YouTube transcripts, track word counts, and more.",
    stack: ["Python", "HTML", "CSS", "Flask", "Hugging Face Transformers", "YouTube API"],
    slug: "transcript-summarizer",
  },
  {
    href: "https://github.com/derekchengg/KavixBot",
    title: "Personal Discord Bot",
    description: "A Discord bot with commands for events, customization, message logging, and info retrieval.",
    stack: ["Discord.js", "Node.js"],
    slug: "discord-bot",
  },
];