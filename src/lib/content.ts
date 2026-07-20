import { PortfolioContent } from './types';

export const content: PortfolioContent = {
    personal: {
        name: "Tharindu Lakshan Nanayakkara",
        headline: "Computer Engineering Undergraduate | AI Integration • Full-Stack • Cloud-Native • Security",
        location: "Gampaha District, Sri Lanka",
        email: "tharindunanayakkara2001@gmail.com",
        github: "https://github.com/TharinduNanayakkara28",
        linkedin: "https://www.linkedin.com/in/tharindu-nanayakkara-2a96b7292/",
        phone: "+94 76 969 4990",
        resumeUrl: "/Tharindu_Nanayakkara_Resume.pdf",
        valueProp: "First-Class Computer Engineering undergraduate (GPA 3.84) with a strong foundation in AI, full-stack development, and cloud-native systems—building scalable, user-focused applications with a security- and reliability-minded approach.",
        aboutParagraph: "Enthusiastic Computer Engineer with a strong foundation in AI, full-stack web development, and cloud-native systems. Experienced in real-world projects and passionate about building scalable, user-focused applications, with a security- and reliability-minded approach and the ability to adapt quickly. Eager to grow by contributing to impactful development work, integrating AI capabilities where they add value.",
        aboutHighlights: [
            "AI integration: LLM APIs, RAG, MCP, and SSE streaming",
            "Full-stack development across React, Spring Boot, and cloud-native microservices",
            "Cloud & DevOps: AWS, Oracle Cloud, Docker, and CI/CD pipelines",
            "Security- and reliability-minded engineering, with strong DSA & OOP foundations"
        ]
    },
    research: {
        title: "Security Testing and Threat prediction for Wi-Fi 7 MLO",
        status: "completed",
        bullets: [
            "Analyzed the Wi-Fi 7 MAC backoff mechanism across different counter states to uncover protocol-level vulnerabilities",
            "Identified potential attack surfaces in Multi-Link Operation (MLO) and designed mitigation strategies to strengthen overall Wi-Fi 7 security",
            "Contribution: research gap analysis, GNN-based threat prediction implementation, and dashboard design"
        ],
        techStack: ["ns-3", "C++", "Python", "Kafka", "TimescaleDB", "Grafana", "Docker", "Containerlab"],
        repoUrl: "https://github.com/cepdnaclk/e20-4yp-wifi-7-backoff-security-testing-and-threat-prediction"
    },
    projects: [
        {
            title: "LIGHTIFY – Smart Home Lighting System",
            featured: true,
            type: "Group Project",
            description: "Intelligent home lighting system that detects room occupancy via sensors and dynamically adjusts lighting.",
            bullets: [
                "Spring Boot backend + MongoDB deployed on AWS for real-time synchronization",
                "ESP32 embedded systems with MQTT over AWS IoT Core for reliable, real-time device control between lighting circuits and the mobile app",
                "My contribution: built the React Native mobile app and selected backend features; designed and assembled the hardware"
            ],
            techStack: ["React Native", "Spring Boot", "AWS IoT Core", "MongoDB", "ESP32", "MQTT"],
            repoUrl: "https://github.com/cepdnaclk/e20-3yp-Smart-IOT-Indoor-Lighting-System",
            images: [
                "/assets/Lightify_1.jpg",
                "/assets/Lightify_2.jpg",
                "/assets/Lightify_3.jpg"
            ]
        },
        {
            title: "Smart Parking Management System – Cloud-Native Microservices Platform",
            featured: true,
            type: "Individual Project",
            description: "A cloud-native platform for drivers to find, reserve, and pay for parking on a live map—with real-time availability, overstay alerts, and an operator analytics dashboard for occupancy and revenue.",
            bullets: [
                "Engineered as an event-driven system of 10 Spring Boot microservices over Apache Kafka, with a choreographed reservation → payment Saga",
                "Geospatial search (PostGIS), real-time WebSocket updates, and JWT-secured APIs behind Spring Cloud Gateway",
                "CI/CD to Oracle Cloud with Docker, GitHub Actions, and Terraform; monitoring via Prometheus/Grafana"
            ],
            techStack: ["Java 21", "Spring Boot 3.3", "Spring Cloud Gateway", "Apache Kafka", "PostgreSQL/PostGIS", "Redis", "React 18", "Flutter", "Docker", "GitHub Actions", "Terraform", "Prometheus/Grafana", "Oracle Cloud"],
            repoUrl: "https://github.com/TharinduNanayakkara28/cloud-native-Smart-Parking-Management-System"
        },
        {
            title: "CardioGuard – Cardiac Patient Monitoring System",
            featured: true,
            type: "Group Project",
            description: "Cardiac patient database and health-monitoring system powered by machine learning to assess heart-failure probability and overall cardiac risk.",
            bullets: [
                "Spring Boot + React with secure JWT-based, role-specific dashboards for doctors, patients, and admins",
                "My contribution: developed features across both the React frontend and Spring Boot backend"
            ],
            techStack: ["Java", "Spring Boot", "React", "Python", "Tailwind CSS", "Machine Learning"],
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
            description: "Responsive full-stack e-commerce site with product search and filtering, built with React 18, Redux Toolkit, and Tailwind CSS.",
            bullets: [
                "Spring Boot backend with MongoDB Atlas, JWT authentication, and role-based access control for product management and uploads",
                "Deployed to AWS EC2 via a GitHub Actions CI/CD pipeline"
            ],
            techStack: ["React 18", "Redux Toolkit", "Spring Boot 3.x", "MongoDB Atlas", "JWT", "Tailwind CSS", "shadcn/ui", "GitHub Actions", "AWS EC2"],
            repoUrl: "https://github.com/TharinduNanayakkara28/Lakshan_Home_Collection_E_Commerce_Platform",
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
            techStack: ["Python", "TensorFlow"]
        }
    ],
    skills: [
        { title: "AI & LLM", skills: ["LLM APIs (OpenAI, Anthropic, Gemini, Azure)", "RAG", "MCP", "SSE Streaming", "Prompt Engineering"] },
        { title: "Cloud & DevOps", skills: ["AWS (S3, EC2, IoT Core)", "Oracle Cloud", "Vercel", "Docker", "GitHub Actions", "Terraform", "MQTT"] },
        { title: "Languages", skills: ["Java", "Python", "JavaScript/TypeScript", "C"] },
        { title: "Web & Backend", skills: ["React", "React Native", "HTML", "CSS", "Tailwind CSS", "Spring Boot"] },
        { title: "Databases", skills: ["MySQL", "PostgreSQL", "MongoDB"] },
        { title: "ML & Data", skills: ["TensorFlow", "NumPy", "OpenCV", "Matplotlib", "Logistic Regression", "Neural Networks"] },
        { title: "Concepts", skills: ["OOP", "Data Structures & Algorithms", "Network Security", "Embedded Systems"] },
        { title: "Tools", skills: ["Git", "GitHub", "VS Code", "IntelliJ", "Postman", "Android Studio", "Cisco Packet Tracer", "Wireshark"] }
    ],
    workExperience: [
        {
            role: "Software Engineer Intern in AI Integration team",
            company: "WSO2 (Pvt) Ltd.",
            duration: "Apr. 2026 – Present",
            items: [
                {
                    title: "Streaming Support for WSO2 Integrator AI Libraries.",
                    description: "Designed, implemented, and tested first-class token-by-token AI streaming across the WSO2 Integrator ecosystem.",
                    bullets: [
                        "Introduced a unified streaming abstraction with vendor-specific implementations for 7 LLM providers, keeping full backward compatibility with existing non-streaming APIs."
                    ]
                },
                {
                    title: "Google Gemini Model & Embedding Provider.",
                    description: "Built a Gemini chat and embedding provider for the framework’s model-provider interface."
                },
                {
                    title: "Built AI data loaders for the WSO2 Integrator AI ecosystem.",
                    description: "Enabled loading of documents from Azure Blob Storage, Azure File Storage, and Google Drive into AI pipelines for RAG and downstream processing."
                },
                {
                    title: "Added parallel tool-calling support across model providers.",
                    description: "Implemented concurrent tool execution for OpenAI, Azure OpenAI, and Anthropic providers, cutting latency for multi-tool agent workflows."
                },
                {
                    title: "Expanded AI support.",
                    description: "Added Claude Opus 4.7/4.8 support and raised output-token limits across 7+ providers."
                }
            ],
            techStack: ["Java", "LLM APIs", "Azure", "Embeddings", "SSE", "RAG", "MCP", "Git", "Apache Tika", "Apache POI"],
            providerLogos: [
                { name: "OpenAI", src: "/assets/openai.jpeg" },
                { name: "Anthropic", src: "/assets/anthropic.jpeg" },
                { name: "Azure OpenAI", src: "/assets/azure.png" },
                { name: "Google Gemini", src: "/assets/gemini.jpeg" },
                { name: "DeepSeek", src: "/assets/deepseek.jpeg" },
                { name: "Ollama", src: "/assets/ollama.png" }
            ]
        }
    ],
    experience: [
        {
            role: "Undergraduate Teaching Assistant",
            duration: "2023–2025",
            description: "Casual Instructor for CO1010 – Programming for Engineers I, GP106 – Computing, CO225 – Software Construction, and CO322 – Data Structures & Algorithms (Dept. of Computer Engineering, University of Peradeniya)."
        },
        {
            role: "Assistant Secretary – Hackers’ Club",
            duration: "2023–2024",
            description: "Organized the PreCoders 2024 6-hour coding competition and competed in the event."
        },
        {
            role: "Member – Rotaract Club",
            duration: "2023–Present",
            description: "University of Peradeniya."
        },
        {
            role: "Member – AeroGenz Club",
            duration: "2024–2025",
            description: "University of Peradeniya."
        }
    ],
    education: [
        {
            institution: "University of Peradeniya",
            degree: "BSc.Eng (Hons), Specializing in Computer Engineering",
            duration: "2022–2026",
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
        { title: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services (AWS)" },
        { title: "Fundamentals of Java Programming", issuer: "Coursera | Board Infinity" },
        { title: "Python Data Structures", issuer: "Coursera | University of Michigan" },
        { title: "C for Everyone: Programming Fundamentals", issuer: "Coursera | University of California, Santa Cruz" },
        { title: "JavaScript Basics", issuer: "Coursera | University of California, Davis" },
        { title: "Programming for Everybody (Getting Started with Python)", issuer: "Coursera | University of Michigan" },
        { title: "AI/ML Engineer – Stage 1 and Stage 2", issuer: "SLIIT UNI" },
        { title: "Introduction to Cybersecurity", issuer: "CISCO Networking Academy" }
    ]
};
