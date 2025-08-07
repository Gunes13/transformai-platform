// Enhanced TransformAI Assessment Framework - Headless Data Structure
// 14-Dimension AI-Powered Digital Transformation Assessment for Fashion Retail
// No brand names - industry-focused terminology only

const assessmentFramework = {
  metadata: {
    title: "AI-Powered Digital Transformation Assessment for Fashion Retail",
    version: "2.0.0",
    totalDimensions: 14,
    totalQuestions: 90,
    maturityLevels: 5,
    lastUpdated: "2025-01-08"
  },

// Question types definition - ADD THIS HERE
  questionTypes: {
    "Given the rapid AI adoption rates and market growth projections, where do you see the most immediate competitive pressure or untapped opportunity within your specific market segment?": "open-ended",
    "How do you approach transformation planning across the four key areas: Aspiration → Strategy → Operating Model → Execution?": "open-ended"
  },

  dimensions: {
    1: {
      title: "Digital Transformation Strategy & AI Vision",
      categories: {
        "1.1": {
          title: "Strategic Alignment & Transformation Scope",
          questions: [
            "How well is your digital transformation strategy aligned with your core business strategy?",
            "What is the scope and ambition of your digital transformation?"
          ]
        },
        "1.2": {
          title: "Competitive Intelligence & Market Positioning", 
          questions: [
            "Given the rapid AI adoption rates and market growth projections, where do you see the most immediate competitive pressure or untapped opportunity within your specific market segment?",
            "How do you currently benchmark your AI adoption and investment strategy against industry leaders?"
          ]
        },
        "1.3": {
          title: "Strategic Planning Framework",
          questions: [
            "How do you approach transformation planning across the four key areas: Aspiration → Strategy → Operating Model → Execution?"
          ]
        },
        "1.4": {
          title: "AI Strategy & Use Case Development",
          questions: [
            "How strategic is your approach to AI adoption and use case development?"
          ]
        },
        "1.5": {
          title: "Leadership & Governance",
          questions: [
            "How does leadership drive and govern digital transformation initiatives?"
          ]
        }
      }
    },

    2: {
      title: "AI-Driven Product Intelligence & Demand Forecasting",
      categories: {
        "2.1": {
          title: "PLM Integration & Product Development",
          questions: [
            "How integrated and digitized is your Product Lifecycle Management (PLM) process from concept to delivery?",
            "How do you leverage AI and data analytics in your merchandise planning and product development decisions?"
          ]
        },
        "2.2": {
          title: "Merchandise Financial Planning & Forecasting",
          questions: [
            "How sophisticated is your merchandise financial planning process from strategic objectives to execution?",
            "How advanced is your demand forecasting and inventory optimization approach?"
          ]
        },
        "2.3": {
          title: "Integrated Planning & Market Intelligence",
          questions: [
            "How effectively do you integrate market intelligence, trend analysis, and competitive insights into your product and financial planning?",
            "How well do you optimize pricing, markdown, and promotional strategies through the product lifecycle?"
          ]
        }
      }
    },

    3: {
      title: "AI-Powered Personalization & Customer Intelligence",
      categories: {
        "3.1": {
          title: "Algorithmic Personal Shopping & Curation",
          questions: [
            "How advanced is your approach to creating personalized product discovery and curation experiences?",
            "How sophisticated is your product attribution and semantic search capability?"
          ]
        },
        "3.2": {
          title: "AI-Powered Fit & Style Intelligence",
          questions: [
            "How do you leverage AI to solve fit uncertainty and style discovery challenges?",
            "How effectively do you provide personalized styling and outfit recommendations?"
          ]
        },
        "3.3": {
          title: "Real-Time Personalization & Dynamic Engagement",
          questions: [
            "How real-time and dynamic is your personalization engine?",
            "How sophisticated is your approach to personalized promotions and loyalty optimization?"
          ]
        },
        "3.4": {
          title: "Visual Search & Discovery Innovation",
          questions: [
            "How advanced are your visual search and discovery capabilities?"
          ]
        }
      }
    },

    4: {
      title: "Intelligent Commerce & Omnichannel Integration",
      categories: {
        "4.1": {
          title: "Unified Commerce Foundation & Order Management",
          questions: [
            "How sophisticated is your unified commerce approach to eliminating context loss between digital and physical channels?",
            "How advanced is your order management and fulfillment orchestration system?"
          ]
        },
        "4.2": {
          title: "Unified Basket & Context Preservation",
          questions: [
            "How effectively do you provide unified cart, wishlist, and purchase history across all channels and devices?",
            "How advanced are your payment flexibility and checkout capabilities across channels?"
          ]
        },
        "4.3": {
          title: "Dynamic Promising & Fulfillment Intelligence",
          questions: [
            "How sophisticated is your approach to dynamic promising and delivery optimization?",
            "How flexible and customer-centric are your fulfillment and post-purchase modification capabilities?"
          ]
        },
        "4.4": {
          title: "Comprehensive Service & Experience Integration",
          questions: [
            "How comprehensive and unified is your customer service and support across all touchpoints?",
            "How effectively do you leverage store associates and frontline employees as unified commerce enablers?"
          ]
        },
        "4.5": {
          title: "Commerce Platform Architecture & Technology Foundation",
          questions: [
            "How sophisticated is your commerce platform architecture and its alignment with modern MACH principles?",
            "How advanced are your fashion-specific commerce capabilities and industry-focused features?"
          ]
        },
        "4.6": {
          title: "Integration Ecosystem & Vendor Strategy",
          questions: [
            "How strategic is your approach to commerce platform selection and vendor ecosystem integration?",
            "How effectively does your commerce platform enable rapid deployment while maintaining scalability and flexibility?"
          ]
        }
      }
    },

    5: {
      title: "AI-Enhanced Marketing & Customer Engagement",
      categories: {
        "5.1": {
          title: "AI-Powered Customer Segmentation & Analytics",
          questions: [
            "How sophisticated is your approach to AI-driven customer segmentation and behavioral analytics?",
            "How effectively do you leverage AI to optimize customer acquisition, retention, and lifetime value?"
          ]
        },
        "5.2": {
          title: "Intelligent Content & Campaign Optimization",
          questions: [
            "How advanced is your use of AI for content creation, optimization, and campaign management?",
            "How sophisticated is your approach to AI-powered marketing automation and customer journey orchestration?"
          ]
        },
        "5.3": {
          title: "Advanced Personalization & Recommendation Engines",
          questions: [
            "How advanced are your AI-powered recommendation systems and personalization capabilities?",
            "How effectively do you use AI for dynamic pricing, promotion optimization, and offer personalization?"
          ]
        },
        "5.4": {
          title: "Conversational AI & Customer Engagement",
          questions: [
            "How advanced is your use of conversational AI and chatbot technology for customer engagement?",
            "How sophisticated is your approach to AI-driven social media marketing and influencer engagement?"
          ]
        }
      }
    },

    6: {
      title: "Fashion AI Applications & Industry Innovation",
      categories: {
        "6.1": {
          title: "AI-Driven Fashion Intelligence & Trend Analysis",
          questions: [
            "How advanced is your use of AI for fashion trend detection, analysis, and prediction?",
            "How sophisticated is your approach to AI-powered style intelligence and fashion curation?"
          ]
        },
        "6.2": {
          title: "Visual AI & Product Intelligence",
          questions: [
            "How effectively do you leverage visual AI for product recognition, tagging, and catalog management?",
            "How advanced is your implementation of visual search and style matching capabilities?"
          ]
        },
        "6.3": {
          title: "Fit Technology & Sizing Intelligence",
          questions: [
            "How sophisticated is your use of AI for fit prediction, sizing recommendations, and virtual try-on experiences?",
            "How effectively do you use AI to reduce returns and improve customer satisfaction through fit optimization?"
          ]
        },
        "6.4": {
          title: "Supply Chain & Inventory Intelligence",
          questions: [
            "How advanced is your use of AI for demand forecasting and inventory optimization in fashion retail?",
            "How sophisticated is your approach to AI-powered fashion product development and design assistance?"
          ]
        },
        "6.5": {
          title: "Sustainability & Circular Economy AI",
          questions: [
            "How effectively do you leverage AI to support sustainability initiatives and circular economy practices?",
            "How advanced is your use of AI for ethical sourcing, supply chain transparency, and responsible fashion practices?"
          ]
        }
      }
    },

    7: {
      title: "Digital Supply Chain & Smart Manufacturing",
      categories: {
        "7.1": {
          title: "Smart Manufacturing & Production Intelligence",
          questions: [
            "How advanced is your implementation of smart manufacturing technologies and Industry 4.0 principles?",
            "How sophisticated is your approach to AI-powered quality management and defect prediction?"
          ]
        },
        "7.2": {
          title: "Supply Chain Visibility & Orchestration",
          questions: [
            "How comprehensive is your end-to-end supply chain visibility and real-time tracking capabilities?",
            "How effectively do you leverage AI for supply chain risk management and resilience planning?"
          ]
        },
        "7.3": {
          title: "Sustainable Supply Chain & Circular Manufacturing",
          questions: [
            "How advanced is your integration of sustainability metrics and circular economy principles into supply chain operations?"
          ]
        }
      }
    },

    8: {
      title: "Data Architecture & Analytics Intelligence",
      categories: {
        "8.1": {
          title: "Data Foundation & Architecture",
          questions: [
            "How sophisticated is your data architecture and infrastructure for supporting AI-driven digital transformation?",
            "How advanced are your data governance, quality management, and security practices?"
          ]
        },
        "8.2": {
          title: "Analytics & Business Intelligence",
          questions: [
            "How sophisticated is your approach to advanced analytics and business intelligence across the organization?",
            "How effectively do you leverage real-time analytics and streaming data for operational decision-making?"
          ]
        },
        "8.3": {
          title: "Machine Learning & AI Model Management",
          questions: [
            "How mature is your machine learning operations (MLOps) and AI model lifecycle management?"
          ]
        }
      }
    },

    9: {
      title: "Digital Foundation & Intent-Driven Architecture",
      categories: {
        "9.1": {
          title: "MACH Architecture Implementation",
          questions: [
            "How advanced is your implementation of MACH (Microservices, API-first, Cloud-native, Headless) architecture principles?",
            "How effectively does your architecture enable rapid deployment while maintaining enterprise scalability and flexibility?"
          ]
        },
        "9.2": {
          title: "Intent-Driven vs Instruction-Driven Systems",
          questions: [
            "How advanced is your transition from instruction-driven to intent-driven systems powered by AI?",
            "How sophisticated is your composable integration approach for enabling dynamic resource orchestration?"
          ]
        },
        "9.3": {
          title: "Digital Foundation & Infrastructure Excellence",
          questions: [
            "How mature is your cloud-native infrastructure and digital foundation architecture?",
            "How effectively do you balance technical debt remediation with strategic innovation investments?"
          ]
        }
      }
    },

    10: {
      title: "DevOps Excellence & Security Architecture",
      categories: {
        "10.1": {
          title: "DevOps & Continuous Integration/Deployment",
          questions: [
            "How mature are your DevOps practices and CI/CD pipeline capabilities?",
            "How effectively do you implement infrastructure as code and automated operations management?"
          ]
        },
        "10.2": {
          title: "Security Architecture & Zero-Trust Implementation",
          questions: [
            "How comprehensive is your security architecture and zero-trust implementation?",
            "How advanced is your approach to AI-powered threat detection and autonomous security response?"
          ]
        }
      }
    },

    11: {
      title: "Organizational Capabilities & Change Management",
      categories: {
        "11.1": {
          title: "Digital Culture & Mindset Transformation",
          questions: [
            "How effectively has your organization developed a digital-first culture and growth mindset?",
            "How sophisticated is your approach to employee experience and digital workplace transformation?"
          ]
        },
        "11.2": {
          title: "Skills Development & Capability Building",
          questions: [
            "How advanced is your approach to digital skills development and continuous learning programs?"
          ]
        },
        "11.3": {
          title: "Agile Organization & Operating Model",
          questions: [
            "How effectively has your organization adopted agile operating models and cross-functional collaboration?"
          ]
        }
      }
    },

    12: {
      title: "Innovation Management & Future Readiness",
      categories: {
        "12.1": {
          title: "Innovation Strategy & Ecosystem",
          questions: [
            "How sophisticated is your approach to innovation management and ecosystem development?",
            "How effectively do you leverage emerging technologies and maintain technology foresight capabilities?"
          ]
        },
        "12.2": {
          title: "Future-Ready Business Models",
          questions: [
            "How advanced is your exploration and development of future-ready business models and revenue streams?"
          ]
        }
      }
    },

    13: {
      title: "Data & AI Democratization",
      categories: {
        "13.1": {
          title: "Data Foundation & Trustworthy Data Products",
          questions: [
            "How advanced is your unified data foundation and data product approach?",
            "How effectively do you treat data as a strategic asset with product-level governance and reusability?"
          ]
        },
        "13.2": {
          title: "Data Citizen Empowerment & Self-Service Analytics",
          questions: [
            "How effectively have you enabled employees to become confident 'data citizens' with self-service analytics capabilities?",
            "How sophisticated is your approach to building data-driven culture and collaborative data usage across departments?"
          ]
        },
        "13.3": {
          title: "AI Democratization & Citizen AI Development",
          questions: [
            "How effectively have you democratized AI capabilities to enable non-technical users to leverage AI in their workflows?",
            "How advanced is your implementation of AI agents and assistants to augment employee capabilities across functions?"
          ]
        },
        "13.4": {
          title: "Governance for Responsible Democratization",
          questions: [
            "How comprehensive is your governance framework for managing the risks of democratized data and AI access?",
            "How effectively do you balance innovation enablement with responsible AI and data usage across your democratized environment?"
          ]
        }
      }
    },

    14: {
      title: "Performance Management & Continuous Improvement",
      categories: {
        "14.1": {
          title: "Digital Transformation ROI & Value Measurement",
          questions: [
            "How sophisticated is your approach to measuring and optimizing digital transformation ROI and business value?",
            "How effectively do you implement continuous improvement frameworks and optimization processes?"
          ]
        },
        "14.2": {
          title: "Strategic Performance Monitoring & Governance",
          questions: [
            "How advanced is your strategic performance monitoring and transformation governance framework?"
          ]
        }
      }
    }
  },

  // Question-specific answer definitions for sophisticated maturity-based responses
  questionAnswers: {
    // Dimension 1 - Strategic answers
    "How well is your digital transformation strategy aligned with your core business strategy?": [
      "Digital initiatives exist in isolation from business strategy",
      "Some digital projects support business goals but limited integration", 
      "Digital strategy clearly derived from and supports business objectives",
      "Digital and business strategies are fully integrated with mutual reinforcement",
      "Digital transformation IS the business strategy - inseparable and holistic"
    ],
    "What is the scope and ambition of your digital transformation?": [
      "Focus only on improving existing processes and offerings (Core)",
      "Some exploration of adjacent markets/capabilities (Core + Adjacent)",
      "Strategic approach spanning core, adjacent, and some transformational opportunities", 
      "Comprehensive transformation across all three horizons with clear prioritization",
      "Dynamic portfolio approach balancing core optimization, adjacent expansion, and transformational innovation"
    ],

    // Dimension 9 - MACH Architecture answers
    "How advanced is your implementation of MACH (Microservices, API-first, Cloud-native, Headless) architecture principles?": [
      "Legacy monolithic architecture with limited API capabilities and basic integration patterns",
      "Some microservices adoption with basic API development and partial cloud migration",
      "Comprehensive MACH implementation with microservices architecture, API gateway, and headless capabilities",
      "Advanced MACH compliance with composable architecture, extensive API ecosystem, and cloud-native operations", 
      "Full MACH maturity with zero vendor lock-in, 300+ APIs, complete composability, and autonomous scaling"
    ],

    // Dimension 13 - Data Democratization answers  
    "How effectively have you enabled employees to become confident 'data citizens' with self-service analytics capabilities?": [
      "Limited data access with traditional IT-dependent reporting and minimal data literacy",
      "Basic self-service BI tools with some data visualization capabilities and introductory training programs",
      "Comprehensive self-service analytics platform with data visualization tools, guided analytics, and structured data literacy programs",
      "Advanced self-service ecosystem with intelligent data discovery, automated insights, and widespread data citizen capabilities",
      "Autonomous self-service platform with AI-powered data assistance, predictive insights, and organization-wide data citizenship"
    ],

    // Manufacturing questions with N/A options
    "How advanced is your implementation of smart manufacturing technologies and Industry 4.0 principles?": [
      "N/A - We do not own or operate manufacturing facilities (contract/outsourced manufacturing only)",
      "Traditional manufacturing processes with limited automation and basic quality control systems",
      "Some automated manufacturing with basic IoT sensors and digital monitoring capabilities", 
      "Connected manufacturing with IoT integration, digital twin modeling, and predictive maintenance capabilities",
      "Advanced smart manufacturing with AI-powered quality control, autonomous production optimization, and real-time supply chain integration",
      "Fully autonomous manufacturing ecosystem with AI-driven production orchestration, predictive quality management, and self-optimizing production systems"
    ],

    // Generic fallback options for remaining questions
    "default": [
      "Initial Stage - Limited capabilities with basic manual processes",
      "Developing Stage - Some automation and basic digital tools in place", 
      "Defined Stage - Structured approach with integrated systems and clear processes",
      "Managed Stage - Advanced capabilities with AI enhancement and optimization",
      "Optimized Stage - Autonomous operations with predictive intelligence and continuous evolution"
    ]
  },

  maturityLevels: {
    1: { name: "Initial", range: [1.0, 1.8], description: "Basic digital capabilities with limited AI integration" },
    2: { name: "Developing", range: [1.9, 2.8], description: "Emerging digital transformation with basic AI experimentation" },
    3: { name: "Defined", range: [2.9, 3.8], description: "Structured digital transformation with integrated AI capabilities" }, 
    4: { name: "Managed", range: [3.9, 4.8], description: "Advanced AI-powered transformation with intelligent optimization" },
    5: { name: "Optimized", range: [4.9, 5.0], description: "Autonomous AI-native organization with continuous evolution" }
  },

  useCases: [
    {
      title: "Hyper-Personalization Engine",
      description: "AI-powered product recommendations and personalized shopping experiences",
      dimensions: [3, 5, 13],
      impact: "25-40% increase in conversion rates"
    },
    {
      title: "Intelligent Demand Forecasting", 
      description: "AI-driven inventory optimization and demand prediction",
      dimensions: [2, 6, 8],
      impact: "30-50% reduction in inventory costs"
    },
    {
      title: "Omnichannel Commerce Platform",
      description: "Unified customer experience across all touchpoints",
      dimensions: [4, 9, 10],
      impact: "20-35% improvement in customer satisfaction"
    },
    {
      title: "Fashion Trend Intelligence",
      description: "AI-powered trend detection and product development",
      dimensions: [6, 12, 13],
      impact: "40-60% faster time-to-market"
    },
    {
      title: "Data-Driven Organization",
      description: "Enterprise-wide data democratization and citizen analytics", 
      dimensions: [8, 13, 14],
      impact: "50-70% improvement in decision-making speed"
    }
  ]
};
console.log('Assessment framework loaded:', assessmentFramework.metadata);