export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  videoUrl?: string;
  linkedInPostUrls?: string[];
  tags: string[];
  techStack: { name: string; purpose: string }[];
  features: string[];
  featured: boolean;
  status: string;
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  year: string;
  role: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "intelligent-robotic-arm",
    title: "Robotic Arm Automation",
    description:
      "A highly precise 5 DOF robotic arm control system leveraging inverse kinematics and computer vision for dynamic pick-and-place operations.",
    longDescription:
      "Engineered an advanced control architecture for an industrial robotic arm. The project required writing custom inverse kinematics solvers to achieve sub-millimeter precision. Integrated with a computer vision feedback loop, the arm can dynamically identify, track, and sort moving objects on a conveyor belt. The system was digitally twinned in NVIDIA Omniverse for rigorous testing prior to real-world execution.",
    image:
      // "/public/images/project_images/Avishka Nirmitha portfolio site robotic arm project.jpeg",
      "/images/project_images/Avishka Nirmitha portfolio site robotic arm project 3.jpeg",
    gallery: [
      "/images/project_images/Avishka Nirmitha portfolio site robotic arm project 2.jpeg",
      "/images/project_images/Avishka Nirmitha portfolio site robotic arm project.jpeg",
      "/images/project_images/Avishka Nirmitha portfolio site robotic arm project 4.jpeg",
    ],
    tags: ["Robotics", "Kinematics", "C++", "Omniverse"],
    techStack: [
      { name: "C++", purpose: "High-performance kinematics solver" },
      { name: "Python", purpose: "Vision integration scripting" },
      { name: "NVIDIA Omniverse", purpose: "Digital twin simulation" },
      { name: "ROS2", purpose: "Hardware communication" },
    ],
    features: [
      "Custom inverse kinematics algorithms",
      "Sub-millimeter positioning accuracy",
      "Vision-guided dynamic object tracking",
      "Digital twin simulation for safe testing",
    ],
    featured: true,
    status: "On Going",
    category: "Robotics",
    githubUrl: "",
    year: "2023",
    role: "Robotics Engineer",
  },
  {
    id: 2,
    slug: "self-driving-car-pipeline",
    title: "Self-Driving Car Software Pipeline",
    description:
      "A full-stack autonomous driving system integrating computer vision, sensor fusion, and control algorithms for navigating complex environments safely.",
    longDescription:
      "Developed a comprehensive autonomous driving pipeline focusing on perception, planning, and control. The system utilizes deep convolutional neural networks for lane detection, dynamic object tracking, and traffic sign recognition. It integrates sensor fusion techniques to process multi-modal data in real-time. Extensively trained and validated using MetaDrive simulation to ensure robust performance before hardware deployment.",
    image:
      "/images/project_images/Avishka Nirmitha portfolio site self driving car project.jpeg",
    gallery: [
      "/images/project_images/Avishka Nirmitha portfolio site self driving car project.jpeg",
    ],
    videoUrl: "",
    tags: ["Python", "PyTorch", "ROS2", "Computer Vision"],
    techStack: [
      { name: "Python", purpose: "Core system logic" },
      { name: "PyTorch", purpose: "Deep learning perception models" },
      // { name: "MetaDrive", purpose: "Autonomous driving simulation" },
      { name: "OpenCV", purpose: "Real-time image processing" },
      { name: "ROS2", purpose: "Node-based communication architecture" },
    ],
    features: [
      "Real-time lane and dynamic object detection",
      "Sensor fusion for robust environmental mapping",
      "Reinforcement learning-based path planning",
      "High-fidelity simulation validation",
    ],
    featured: true,
    status: "On Going",
    category: "Autonomous Systems",
    githubUrl: "https://github.com/AvishkaN",
    year: "2024",
    role: "Machine Learning Engineer",
    linkedInPostUrls: [
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7459220559718035457",
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7274002561525788673",
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7274004667443884032?collapsed=1",
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7276504573542850560",
    ],

  },
  {
    id: 4,
    slug: "fire-detection-model",
    title: "Fire Detection Model",
    description:
      "A robust real-time fire and smoke detection system utilizing computer vision for early warning and rapid response.",
    longDescription:
      "Developed a custom deep learning pipeline specialized in early fire and smoke detection. Trained on diverse environmental conditions to maintain high precision and minimize false positives. The architecture is optimized to run efficiently on edge devices, enabling immediate on-site alerts for enhanced safety and rapid incident response.",
    image: "/images/project_images/Avishka Nirmitha portfolio fire detection model.jpg",
    gallery: [],
    tags: ["Computer Vision", "Object Detection", "Deep Learning"],
    techStack: [
      { name: "Python", purpose: "Core application logic" },
      { name: "PyTorch", purpose: "Model training and optimization" },
      { name: "OpenCV", purpose: "Real-time video feed processing" },
      { name: "YOLO", purpose: "Custom Trained Object detection model" },
    ],
    features: [
      "Real-time early fire and smoke detection",
      "Optimized for edge device deployment",
      "High accuracy across varying environmental conditions",
      "Low false-positive rate"
    ],
    featured: false,
    status: "Finished",
    category: "Computer Vision",
    githubUrl: "",
    year: "2024",
    role: "Machine Learning Engineer",
    linkedInPostUrls: [
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7211790847065907200"
    ]
  },
  {
    id: 3,
    slug: "high-accuracy-face-recognition",
    title: "High-Accuracy Face Recognition System",
    description:
      "A state-of-the-art facial recognition engine capable of identifying individuals in crowded environments with 99.8% accuracy under varying conditions.",
    longDescription:
      "Built a robust, high-performance facial recognition and identity verification system utilizing Siamese neural networks. The pipeline performs lightning-fast face detection, alignment, feature vector extraction, and matching against a high-dimensional database. It maintains a 99.8% true-positive rate even under challenging occlusions, varied lighting, and diverse angles, making it suitable for secure access control and monitoring.",
    image:
      "/images/project_images/Avishka Nirmitha portfolio face recognition1.png",
    gallery: [
      // "/public/images/project_images/Avishka Nirmitha portfolio face recognition.png"
    ],
    tags: ["Computer Vision", "Deep Learning", "TensorFlow"],
    techStack: [
      { name: "Python", purpose: "Application backend" },
      { name: "TensorFlow", purpose: "Model training and inference" },
      { name: "OpenCV", purpose: "Face detection and alignment" },
      { name: "FAISS", purpose: "High-speed vector similarity search" },
    ],
    features: [
      "99.8% accuracy in unconstrained environments",
      "Real-time face detection and alignment",
      "Resilient to lighting changes and partial occlusions",
      "Highly scalable vector database integration",
    ],
    featured: false,
    status: "Finished",
    category: "Computer Vision",
    githubUrl: "",
    year: "2025",
    role: "Machine Learning Engineer",
  },
  {
    id: 5,
    slug: "local-llm-fine-tuning-pipeline",
    title: "Local LLM Fine-Tuning Pipeline",
    description:
      "An end-to-end pipeline for fine-tuning open-source Large Language Models (like Llama 3 and Mistral) on custom domain-specific datasets.",
    longDescription:
      "Developed a comprehensive fine-tuning pipeline for customizing open-source Large Language Models. The system utilizes Parameter-Efficient Fine-Tuning (PEFT) techniques such as QLoRA to train large models on consumer-grade hardware. It includes automated data preprocessing, model 4-bit quantization, distributed training using Hugging Face Accelerate, and a customized evaluation framework to assess task-specific performance.",
    image: "",
    gallery: [],
    tags: ["LLMs", "NLP", "Fine-Tuning", "PyTorch"],
    techStack: [
      { name: "Python", purpose: "Core training scripts" },
      { name: "Hugging Face", purpose: "Model architecture and weights" },
      { name: "PEFT/LoRA", purpose: "Parameter-efficient training" },
      { name: "PyTorch", purpose: "Deep learning framework" },
    ],
    features: [
      "QLoRA fine-tuning for low VRAM usage",
      "Automated dataset formatting and tokenization",
      "Support for Llama 3, Mistral, and other open weights",
      "Custom evaluation metrics for domain-specific tasks"
    ],
    featured: true,
    status: "Finished",
    category: "Open Source LLMs",
    githubUrl: "",
    year: "2024",
    role: "AI Engineer",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
