export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  videoUrl?: string;
  tags: string[];
  techStack: { name: string; purpose: string }[];
  features: string[];
  featured: boolean;
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  year: string;
  role: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "real-time-object-detection",
    title: "Real-time Object Detection & Tracking",
    description:
      "A low-latency computer vision pipeline designed for edge devices. Features custom-trained YOLO models with TensorRT optimization for high-speed industrial inspection and autonomous surveillance.",
    longDescription:
      "An end-to-end computer vision system built for sub-30ms inference on edge hardware. The pipeline ingests multi-camera RTSP streams, runs custom-trained YOLOv10 models accelerated with TensorRT, and tracks objects across frames using a ByteTrack-based multi-object tracker. Designed for industrial inspection lines and autonomous surveillance, it ships with a web dashboard for live monitoring, alert configuration, and historical analytics.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHb-fO5-HL2shufTbiCeYsjAws9uCCAW3HeTuznxVP5fpRmX2GfEXogy5_T-KIFqihu9hrJvuGL6_WBE5jR-WO5YFwjqMYNTuJJEsmC0btQnkd-83dwaT7MFD6Uv7mFeXNS0B3zpskTwAiHLIRac9Xp_nLYV00Uwm7KI7GOhio6y2eigL8DdVwwL-ltRC2FuvQmbbOerhJsxYyZwFDCJIEIMKbM8OBeAVWgf7kJS0ZWIA6PYmK82v9Q4aU67viWEHtEm7CLj4LfRE",
    gallery: [
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/MPV2METPeJU",
    tags: ["Python", "PyTorch", "YOLOv10"],
    techStack: [
      { name: "Python", purpose: "Core implementation language" },
      { name: "PyTorch", purpose: "Model training & fine-tuning" },
      { name: "YOLOv10", purpose: "Object detection backbone" },
      { name: "TensorRT", purpose: "GPU inference optimization" },
      { name: "OpenCV", purpose: "Frame preprocessing & overlays" },
      { name: "FastAPI", purpose: "Streaming + REST API" },
      { name: "React", purpose: "Live monitoring dashboard" },
    ],
    features: [
      "Sub-30ms end-to-end inference on Jetson Orin",
      "Multi-camera RTSP ingestion with auto-reconnect",
      "ByteTrack-based persistent ID tracking",
      "Configurable zone & line-crossing alerts",
      "Historical analytics dashboard",
    ],
    featured: true,
    category: "Computer Vision",
    githubUrl: "https://github.com",
    year: "2024",
    role: "Lead ML Engineer",
  },
  {
    id: 2,
    slug: "omniverse-digital-twins",
    title: "Omniverse Digital Twins",
    description:
      "Industrial robotic arm simulation using USD and CUDA for physics-accurate reproduction. Integrated with synthetic data generation for training reinforcement learning agents in diverse environments.",
    longDescription:
      "A digital twin platform built on NVIDIA Omniverse that mirrors real factory cells in USD. CUDA-accelerated physics provides contact-rich, sub-millimeter accurate simulation of robotic arms and conveyors. The system auto-generates labeled synthetic datasets across randomized lighting, textures, and camera poses, then trains reinforcement learning policies that transfer to real hardware via ROS2.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6MT-X-aawwmbggvPnd-M0_agk84eGVJ_tvDlJx6rKo-x9FDZf89SRPWBXWu6BsP8RxSBxhLTJe_Ih97g8KaLT0HH54ZTh-ka9IP_cTS_MU1c-a0y4oEkyjZZIm-FQ92erOj0YATm1Wa9GXXsVCn-KL3hpavqHx4g4l-fY_05VhZ3kRfqu_HnFtykjnbZB-_T5Htnu3n5iLbhIJAhCpNVgKSLFP7CX3E9hQVZUdHc9h_sLsh7V9gaiKMiHtYDI9dnN5A_e5BhK9LE",
    gallery: [
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    ],
    tags: ["CUDA", "Omniverse", "ROS2"],
    techStack: [
      { name: "NVIDIA Omniverse", purpose: "Simulation environment" },
      { name: "USD", purpose: "Scene description format" },
      { name: "CUDA", purpose: "Physics acceleration" },
      { name: "ROS2", purpose: "Sim-to-real bridge" },
      { name: "Isaac Sim", purpose: "Robot kinematics & sensors" },
      { name: "PyTorch", purpose: "RL policy training" },
    ],
    features: [
      "Physics-accurate digital twin of factory cells",
      "Synthetic data generation with domain randomization",
      "RL policy training with sim-to-real transfer",
      "Live ROS2 telemetry mirrored to twin",
    ],
    featured: false,
    category: "Robotics",
    githubUrl: "https://github.com",
    year: "2023",
    role: "Robotics Engineer",
  },
  {
    id: 3,
    slug: "multi-agent-systems",
    title: "Multi-Agent Systems",
    description:
      "Autonomous coordination framework for robotic swarms using decentralized LLM reasoning. Enables complex mission planning through natural language instruction and hierarchical agent orchestration.",
    longDescription:
      "A decentralized orchestration framework where each agent runs a local LLM and negotiates tasks with peers via a lightweight messaging protocol. Operators issue high-level mission goals in natural language; a planner agent decomposes them into a task graph that worker agents bid on based on capability and cost. Used to coordinate fleets of mobile robots in warehouse and inspection scenarios.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkRu5WMMhvbiIMiJq95Y7uF3rpkNT_gV4gWyBLCbmSxbTr5qPU-K-RLUqlCCuc-sFOOyX-n-nciywt8zhQJLd6026HOQ09da2GHZa8VF7t0mPsOzvBs_siSWDEHJXd-6LD9WDSQ0RVhrow19UWCSV3co0xvZoNbjurO1Cq6anZFHYUVn6mSZ9KzaK0rKEfdEazyvtbqmAgeyEVjPLK97yclgXrL39lvB9ypv_NushXmZ8IfHYvwuNK5K0qQs9H7tElwZmCgOq9X1s",
    gallery: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=80",
    ],
    tags: ["LangChain", "Llama-3", "FastAPI"],
    techStack: [
      { name: "LangChain", purpose: "Agent reasoning chains" },
      { name: "Llama-3", purpose: "Local LLM per agent" },
      { name: "FastAPI", purpose: "Inter-agent messaging API" },
      { name: "Redis", purpose: "Shared task queue" },
      { name: "ROS2", purpose: "Robot fleet integration" },
    ],
    features: [
      "Natural language mission planning",
      "Decentralized task bidding & assignment",
      "Hierarchical planner / worker agent roles",
      "Per-agent local inference, no cloud dependency",
    ],
    featured: false,
    category: "AI Agents",
    githubUrl: "https://github.com",
    year: "2025",
    role: "AI Systems Architect",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
