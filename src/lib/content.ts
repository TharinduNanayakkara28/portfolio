import { PortfolioContent } from './types';

export const content: PortfolioContent = {
    personal: {
        name: "Tharindu Lakshan Nanayakkara",
        headline: "Computer Engineering Undergraduate | Full-Stack • Cloud/DevOps • IoT/Embedded • Security",
        location: "Gampaha District, Sri Lanka",
        email: "tharindunanayakkara2001@gmail.com",
        github: "https://github.com/TharinduNanayakkara28",
        linkedin: "https://www.linkedin.com/in/tharindu-nanayakkara-2a96b7292/",
        phone: "+94 76 969 4990",
        valueProp: "First-Class Computer Engineering student (GPA 3.84) building scalable full-stack, IoT/embedded, and cloud-native systems with a security & reliability mindset.",
        aboutParagraph: "I’m a First-Class Computer Engineering undergraduate focused on scalable full-stack development, embedded/IoT, and modern cloud-native architectures. I care about security, reliability, and performance—turning low-level efficiency into clean, intuitive user experiences.",
        aboutHighlights: [
            "Full-stack + system-level engineering (embedded → backend → UI)",
            "Cloud-native development and real-time IoT communication",
            "Security-minded: threat modeling, testing, and mitigation",
            "Strong foundations in DSA, OOP, and network security"
        ]
    },
    research: {
        title: "Security Testing and Threat prediction for Wi-Fi 7 MLO",
        status: "completed",
        bullets: [
            "Analyze Wi-Fi 7 MAC backoff mechanism across counter states to uncover protocol-level vulnerabilities",
            "Identify attack surfaces in Multi-Link Operation (MLO) and design mitigation strategies",
            "Current contribution: research gap analysis + GNN-based threat prediction implementation"
        ],
        techStack: ["ns-3", "C++", "Python", "Kafka", "TimescaleDB", "Grafana", "Docker", "Containerlab"],
        repoUrl: "#" // Placeholder
    },
    projects: [
        {
            title: "LIGHTIFY – Smart Home Lighting System",
            featured: true,
            type: "Group Project",
            description: "Intelligent lighting system using occupancy sensing and dynamic control",
            bullets: [
                "Spring Boot backend + MongoDB, deployed on AWS for real-time sync",
                "ESP32 + MQTT over AWS IoT Core for device control and communication",
                "My contribution: React Native app, selected backend features, MongoDB connectivity, PCB/circuit design, testing, 3D-printed enclosures"
            ],
            techStack: ["React Native", "Spring Boot", "AWS IoT Core", "MongoDB", "ESP32", "MQTT"],
            repoUrl: "#", // Placeholder
            websiteUrl: "#", // Placeholder
            images: [
                "/assets/Lightify_1.jpg",
                "/assets/Lightify_2.jpg",
                "/assets/Lightify_3.jpg"
            ]
        },
        {
            title: "CardioGuard – Cardiac Patient Monitoring System",
            featured: true,
            type: "Group Project",
            description: "Patient database + ML risk assessment for heart failure/cardiac risk",
            bullets: [
                "Spring Boot + React, secure JWT + role-based dashboards",
                "My contribution: frontend + backend features"
            ],
            techStack: ["Java", "Spring Boot", "React", "Python", "Tailwind CSS", "ML"],
            repoUrl: "#", // Placeholder
            websiteUrl: "#", // Placeholder
            images: [
                "/assets/cardio_1.jpg",
                "/assets/cardio_2.jpg",
                "/assets/cardio_3.jpg",
                "/assets/cardio_4.jpg"
            ]
        },
        {
            title: "Lakshan Home Collection – E-commerce Website",
            featured: false,
            type: "Individual Project",
            description: "React 18 + Redux Toolkit + Tailwind; search + filtering",
            bullets: [
                "Spring Boot 3.x backend + MongoDB Atlas + JWT + role-based access"
            ],
            techStack: ["React", "Redux Toolkit", "Spring Boot", "MongoDB Atlas", "JWT", "Tailwind", "shadcn/ui"],
            repoUrl: "#", // Placeholder
            images: [
                "/assets/commerce_1.jpg",
                "/assets/commerce_2.jpg",
                "/assets/commerce_3.jpg",
                "/assets/commerce_4.jpg",
                "/assets/commerce_5.jpg",
                "/assets/commerce_6.jpg"
            ]
        },
        {
            title: "SkinBot – CNN Skin Type Analyzer",
            featured: false,
            type: "Group Project",
            description: "TensorFlow CNN for skin-type classification + desktop UI workflow integration",
            bullets: [
                "My contribution: integration + collaboration on model/UI pipeline"
            ],
            techStack: ["Python", "TensorFlow"],
            repoUrl: "#" // Placeholder
        }
    ],
    skills: [
        { title: "Languages", skills: ["Java", "Python", "JavaScript/TypeScript", "C"] },
        { title: "Web & Mobile", skills: ["React", "React Native", "HTML", "CSS", "Tailwind CSS"] },
        { title: "Backend", skills: ["Spring Boot"] },
        { title: "Databases", skills: ["MySQL", "PostgreSQL", "MongoDB"] },
        { title: "Cloud & IoT", skills: ["AWS IoT Core", "AWS S3", "MQTT", "ESP32"] },
        { title: "ML & Data", skills: ["TensorFlow", "NumPy", "OpenCV", "Matplotlib", "Logistic Regression", "Neural Networks"] },
        { title: "Tools", skills: ["Git", "GitHub", "VS Code", "IntelliJ", "Postman", "Android Studio", "Cisco Packet Tracer", "Wireshark"] },
        { title: "Concepts", skills: ["OOP", "Data Structures & Algorithms", "AI/ML", "Network Security", "Embedded Systems"] }
    ],
    workExperience: [
        {
            role: "Software Engineer Intern in AI Integration team",
            company: "WSO2 (Pvt) Ltd.",
            duration: "Apr. 2026 – Present",
            items: [
                {
                    title: "Streaming Support for WSO2 Integrator AI Libraries.",
                    description: "Designed, implemented, and tested first-class AI streaming support for WSO2 Integrator, enabling token-by-token response streaming across the Ballerina AI ecosystem.",
                    bullets: [
                        "Introduced a unified streaming abstraction alongside vendor-specific streaming implementations for 7 LLM providers, including OpenAI, Anthropic, Azure, Mistral, DeepSeek, Ollama, and OpenRouter.",
                        "Ensured full backward compatibility with existing non-streaming APIs, delivering capabilities comparable to industry-standard frameworks such as the Vercel AI SDK and LlamaIndex."
                    ]
                },
                {
                    title: "Built Google Gemini model provider and embedding provider for the Ballerina AI ecosystem.",
                    description: "Added Gemini chat and embedding support to the framework’s model-provider interface."
                },
                {
                    title: "Built AI data loaders for the Ballerina AI ecosystem.",
                    description: "Enabled loading of documents from Azure Blob Storage and Azure File Storage into AI pipelines for RAG and downstream processing."
                },
                {
                    title: "Model Abstraction Improvements.",
                    description: "Fixed parallel tool-calling, patched Anthropic multi-round parallel tool calls, added Claude Opus 4.7/4.8 support, and raised output-token limits across 7+ providers."
                }
            ],
            techStack: ["Ballerina", "Java", "LLM APIs (OpenAI/Anthropic/Azure/Gemini)", "SSE", "RAG", "MCP", "Git"],
            providerLogos: [
                { name: "OpenAI", src: "/assets/openai.jpeg" },
                { name: "Anthropic", src: "/assets/anthropic.jpeg" },
                { name: "Azure OpenAI", src: "/assets/azure.png" },
                { name: "Google Gemini", src: "/assets/gemini.webp" },
                { name: "DeepSeek", src: "/assets/deepseek.jpeg" },
                { name: "Ollama", src: "/assets/ollama.png" }
            ]
        }
    ],
    experience: [
        {
            role: "Casual Instructor",
            duration: "2024–2025",
            description: "CO1010 – Programming for Engineers I, GP106 – Computing, CO225 – Software Construction, CO322 – Data Structures and Algorithms"
        },
        {
            role: "Pre-Coders v11.0",
            duration: "Jan 2024",
            description: "Hackers’ Club Assistant Secretary; organized + competed"
        },
        {
            role: "EngEx 2024 (75th Anniversary Exhibition)",
            duration: "2024",
            description: "Presented third-year undergraduate research project"
        }
    ],
    education: [
        {
            institution: "University of Peradeniya",
            degree: "BSc.Eng (Hons), Computer Engineering",
            duration: "2022–Present",
            details: "GPA 3.84/4.00 (First Class)"
        },
        {
            institution: "Royal College, Colombo 07",
            degree: "GCE A/L",
            duration: "2012–2020",
            details: "3 As"
        }
    ],
    certificates: [
        { title: "Fundamentals of Java Programming", issuer: "Coursera | Board Infinity" },
        { title: "Python Data Structures", issuer: "Coursera | University of Michigan" },
        { title: "C for Everyone: Programming Fundamentals", issuer: "Coursera | University of California, Santa Cruz" },
        { title: "JavaScript Basics", issuer: "Coursera | University of California, Davis" },
        { title: "Programming for Everybody (Getting Started with Python)", issuer: "Coursera | University of Michigan" },
        { title: "AI/ML Engineer – Stage 1 and Stage 2", issuer: "SLIIT UNI" },
        { title: "Introduction to Cybersecurity", issuer: "CISCO Networking Academy" }
    ]
};
