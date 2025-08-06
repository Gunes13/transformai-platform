// 12-Dimension Fashion Retail AI Transformation Assessment Framework
// Data Structure - Headless Implementation

export const assessmentFramework = {
  metadata: {
    title: "AI-Powered Digital Transformation Assessment for Fashion Retail",
    version: "1.0.0",
    totalDimensions: 12,
    totalCategories: 36,
    totalQuestions: 72,
    description: "Comprehensive maturity assessment framework incorporating Penti Digital Fashion insights and real-world retail AI use cases"
  },

  scoringFramework: {
    scales: {
      advanced: { min: 4.0, max: 5.0, label: "Advanced", description: "Leading-edge implementation with sophisticated capabilities" },
      proficient: { min: 3.0, max: 3.9, label: "Proficient", description: "Strong foundation with integrated capabilities" },
      developing: { min: 2.0, max: 2.9, label: "Developing", description: "Basic implementation with some capabilities" },
      initial: { min: 1.0, max: 1.9, label: "Initial", description: "Limited or traditional approach" }
    },
    weighting: {
      strategic: 0.3, // Dimensions 1, 12
      operational: 0.25, // Dimensions 2, 3, 4, 5, 7
      technical: 0.25, // Dimensions 6, 8, 9
      organizational: 0.2 // Dimensions 10, 11
    }
  },

  dimensions: [
    {
      id: "dimension-1",
      title: "Digital Transformation Strategy & AI Vision",
      description: "Comprehensive strategic approach to digital transformation utilizing 3DVD technologies and AI-driven value creation",
      weight: 0.3,
      type: "strategic",
      categories: [
        {
          id: "cat-1-1",
          title: "Strategic Digital & AI Vision Leadership",
          description: "Leadership commitment and strategic vision for AI-powered transformation",
          questions: [
            {
              id: "q-1-1-1",
              text: "How comprehensive is your organization's digital transformation strategy utilizing 3DVD technologies (3D modeling, VR/AR, digital twinning) and AI-driven value creation?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Traditional strategic planning with limited digital vision, basic technology adoption, minimal AI consideration" },
                2: { label: "Developing", description: "Some digital initiatives with departmental technology adoption, basic AI exploration, limited strategic integration" },
                3: { label: "Defined", description: "Structured digital strategy with comprehensive technology roadmap, integrated AI planning, cross-functional alignment" },
                4: { label: "Managed", description: "Advanced digital transformation strategy with sophisticated 3DVD integration, comprehensive AI vision, strategic value creation focus" },
                5: { label: "Optimizing", description: "Autonomous strategic evolution with predictive transformation planning, AI-native strategic thinking, continuous value architecture optimization" }
              },
              insights: [
                "3DVD Technology Strategy - Microservices, API-first, Cloud-native, Headless approach",
                "Fashion as a Service to Fashion as a Lifestyle transformation",
                "Value Architecture Framework for comprehensive transformation",
                "Real-world examples: Bonprix 30+ day time reduction, Kookai virtual-only workflows"
              ]
            }
          ]
        },
        {
          id: "cat-1-2", 
          title: "Digital Transformation Maturity & Implementation Approach",
          description: "Organizational maturity in executing digital transformation initiatives",
          questions: [
            {
              id: "q-1-2-1",
              text: "What level of digital transformation cluster does your organization represent in terms of supply chain digitalization?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Traditional sequential supply chain with physical samples, manual processes, limited digital integration" },
                2: { label: "Developing", description: "Partial digitalization with some virtual samples, basic digital workflows, departmental digital adoption" },
                3: { label: "Defined", description: "Full digitalization with virtual/physical hybrid approach, integrated digital workflows, cross-functional digital processes" },
                4: { label: "Managed", description: "Advanced virtual-first operations with comprehensive digital twins, sophisticated workflow automation, predictive process optimization" },
                5: { label: "Optimizing", description: "Full virtualization (virtual-only) with autonomous digital workflows, AI-driven process evolution, continuous optimization" }
              },
              insights: [
                "Digital Transformation Clusters: Partial → Full Hybrid → Full Virtual",
                "Speed-to-market improvements through digital workflows",
                "Collaborative 3D creation workspaces bridging product lifecycle",
                "Case study: Dainese virtual prototyping revolution"
              ]
            }
          ]
        }
      ]
    },

    {
      id: "dimension-2",
      title: "AI-Driven Product Intelligence & Demand Forecasting",
      description: "Advanced AI capabilities for trend prediction, demand sensing, and intelligent product development",
      weight: 0.25,
      type: "operational",
      categories: [
        {
          id: "cat-2-1",
          title: "Advanced Trend Forecasting & Market Intelligence",
          description: "AI-powered trend detection and market analysis capabilities",
          questions: [
            {
              id: "q-2-1-1",
              text: "How sophisticated is your use of AI for fashion trend detection, analysis, and prediction using unstructured data sources?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Traditional trend research with manual analysis, basic market reports, limited data sources" },
                2: { label: "Developing", description: "Some AI-assisted trend analysis, basic image recognition, departmental trend intelligence, simple prediction models" },
                3: { label: "Defined", description: "Integrated AI trend forecasting with multi-source data analysis, sophisticated pattern recognition, cross-functional trend intelligence" },
                4: { label: "Managed", description: "Advanced ML trend prediction analyzing millions of images, real-time market intelligence, predictive trend modeling with high accuracy" },
                5: { label: "Optimizing", description: "Autonomous trend intelligence with continuous learning, predictive market shifts, AI-generated trend insights, self-evolving forecasting models" }
              },
              insights: [
                "Heuritech AI Model: ML analyzing millions of images for pattern recognition",
                "SHEIN Real-Time Analytics: Demand-driven production with market intelligence",
                "Generative AI for unstructured data analysis and trend modeling",
                "Computer vision for social media and runway trend detection"
              ]
            }
          ]
        },
        {
          id: "cat-2-2",
          title: "Digital Twins & Product Intelligence Systems", 
          description: "Comprehensive product lifecycle management through digital twin technology",
          questions: [
            {
              id: "q-2-2-1",
              text: "How comprehensively do you utilize digital twins for product lifecycle management and intelligence?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Limited product data with basic documentation, manual product management, traditional development processes" },
                2: { label: "Developing", description: "Some digital product records with basic 3D capabilities, departmental product intelligence, simple digital workflows" },
                3: { label: "Defined", description: "Comprehensive digital twins with integrated product data, cross-functional product intelligence, structured digital development" },
                4: { label: "Managed", description: "Advanced digital twin ecosystem with real-time product intelligence, sophisticated lifecycle management, predictive product optimization" },
                5: { label: "Optimizing", description: "Autonomous digital twin evolution with AI-driven product intelligence, self-optimizing lifecycle management, continuous product innovation" }
              },
              insights: [
                "Fashion Digital Twins: Complete electronic documents with 3D representations",
                "Comprehensive product data: fabrics, textures, sizes, colors, campaign photos, inventory",
                "CLO-SET collaborative 3D workspaces bridging entire product lifecycle",
                "Virtual prototyping: Hours instead of days/weeks for sample creation"
              ]
            }
          ]
        }
      ]
    },

    {
      id: "dimension-3", 
      title: "AI-Powered Personalization & Customer Intelligence",
      description: "Advanced customer understanding and hyper-personalization capabilities using AI",
      weight: 0.25,
      type: "operational",
      categories: [
        {
          id: "cat-3-1",
          title: "Fashion Hyper-Personalization & Customer Segmentation",
          description: "Sophisticated personalization engines and customer intelligence",
          questions: [
            {
              id: "q-3-1-1", 
              text: "How sophisticated is your approach to fashion hyper-personalization using advanced data analytics and machine learning?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Basic customer segmentation with limited personalization, traditional marketing approaches, minimal data utilization" },
                2: { label: "Developing", description: "Some personalized recommendations with basic customer analytics, departmental personalization efforts, simple ML models" },
                3: { label: "Defined", description: "Comprehensive personalization strategy with integrated customer intelligence, cross-channel personalization, advanced analytics" },
                4: { label: "Managed", description: "Sophisticated hyper-personalization with real-time customer intelligence, advanced ML models, predictive customer behavior" },
                5: { label: "Optimizing", description: "Autonomous personalization evolution with continuous learning, predictive customer needs, self-optimizing customer experiences" }
              },
              insights: [
                "THE YES Case Study: Sophisticated fashion taxonomy and gamified UX",
                "AI-based product attribution with consumer-centric language",
                "Advanced customer segmentation with behavioral prediction",
                "Real-time personalization across all customer touchpoints"
              ]
            }
          ]
        },
        {
          id: "cat-3-2",
          title: "AI-Driven Fit Technology & Virtual Try-On",
          description: "Advanced fit prediction and virtual try-on experiences",
          questions: [
            {
              id: "q-3-2-1",
              text: "How advanced is your implementation of AI-powered fit prediction and virtual try-on experiences utilizing digital twins?",
              type: "scale", 
              scale: {
                1: { label: "Initial", description: "Traditional sizing with basic size charts, limited fit guidance, manual customer service for fit issues" },
                2: { label: "Developing", description: "Some fit technology with basic measurements, departmental fit initiatives, simple virtual try-on features" },
                3: { label: "Defined", description: "Integrated fit prediction with comprehensive body modeling, cross-platform virtual try-on, structured fit optimization" },
                4: { label: "Managed", description: "Advanced AI fit prediction with sophisticated body measurement technology, immersive virtual try-on, predictive fit satisfaction" },
                5: { label: "Optimizing", description: "Autonomous fit optimization with continuous learning, predictive fit preferences, self-evolving virtual experiences" }
              },
              insights: [
                "Digital avatars with precise body measurement approaches",
                "AR virtual fitting rooms with real-time fit visualization", 
                "AI-powered fit prediction reducing returns and improving satisfaction",
                "Body scanning technology integration for precise measurements"
              ]
            }
          ]
        }
      ]
    },

    {
      id: "dimension-4",
      title: "Intelligent Commerce & Omnichannel Integration", 
      description: "Seamless commerce experiences across all channels with AI-driven optimization",
      weight: 0.25,
      type: "operational",
      categories: [
        {
          id: "cat-4-1",
          title: "Connected Retail & Seamless Channel Integration",
          description: "Comprehensive omnichannel commerce capabilities",
          questions: [
            {
              id: "q-4-1-1",
              text: "How sophisticated is your connected retail approach that seamlessly merges online and in-store experiences?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Siloed channels with limited integration, separate online/offline operations, basic channel management" },
                2: { label: "Developing", description: "Some channel integration with basic omnichannel features, departmental channel coordination, simple cross-channel capabilities" },
                3: { label: "Defined", description: "Comprehensive connected retail with integrated channel management, cross-functional omnichannel strategy, unified customer experience" },
                4: { label: "Managed", description: "Advanced connected retail with sophisticated channel orchestration, real-time inventory sync, predictive channel optimization" },
                5: { label: "Optimizing", description: "Autonomous channel evolution with intelligent experience optimization, self-adapting channel strategies, continuous commerce innovation" }
              },
              insights: [
                "Connected Retail Framework: 26+ functionalities for seamless integration",
                "3D asset utilization from design to e-commerce to AR/VR experiences",
                "Real-time inventory synchronization across all channels",
                "Unified customer profiles and purchase history across touchpoints"
              ]
            }
          ]
        },
        {
          id: "cat-4-2",
          title: "Immersive Virtual Environments & Metaverse Integration",
          description: "Advanced virtual commerce and metaverse capabilities",
          questions: [
            {
              id: "q-4-2-1", 
              text: "How advanced is your integration of metaverse and Web3 technologies for commerce experiences?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Traditional commerce with limited virtual experiences, basic online presence, minimal immersive technology" },
                2: { label: "Developing", description: "Some virtual experiences with basic AR/VR features, departmental metaverse exploration, simple immersive commerce" },
                3: { label: "Defined", description: "Integrated virtual commerce with comprehensive metaverse strategy, cross-platform virtual experiences, structured immersive retail" },
                4: { label: "Managed", description: "Advanced metaverse integration with sophisticated virtual stores, comprehensive Web3 commerce, predictive virtual experience optimization" },
                5: { label: "Optimizing", description: "Autonomous virtual evolution with continuous metaverse innovation, self-adapting virtual experiences, AI-driven immersive commerce" }
              },
              insights: [
                "Virtual store experiences with AR virtual fitting rooms",
                "Web3 and blockchain integration for digital commerce",
                "NFT strategies and digital collectibles commerce",
                "Metaverse brand presence: Nike, Gucci, Tommy Hilfiger examples"
              ]
            }
          ]
        }
      ]
    },

    {
      id: "dimension-5",
      title: "AI-Enhanced Marketing & Customer Engagement",
      description: "Intelligent marketing automation and customer engagement powered by AI",
      weight: 0.25, 
      type: "operational",
      categories: [
        {
          id: "cat-5-1",
          title: "Generative AI Content Creation & Marketing Automation",
          description: "AI-powered content creation and campaign automation",
          questions: [
            {
              id: "q-5-1-1",
              text: "How advanced is your use of generative AI for marketing content creation and campaign automation?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Traditional content creation with manual processes, basic marketing automation, limited AI integration" },
                2: { label: "Developing", description: "Some AI-assisted content with basic automation, departmental AI tools, simple content generation" },
                3: { label: "Defined", description: "Integrated generative AI with comprehensive content automation, cross-functional AI marketing, structured content intelligence" },
                4: { label: "Managed", description: "Advanced AI content creation with sophisticated automation, real-time campaign optimization, predictive content performance" },
                5: { label: "Optimizing", description: "Autonomous content evolution with continuous creative learning, self-optimizing campaigns, AI-native marketing intelligence" }
              },
              insights: [
                "Generative AI for marketing content automation and prototyping",
                "AI-powered campaign optimization and A/B testing",
                "Automated social media content creation and scheduling",
                "Personalized marketing content at scale"
              ]
            }
          ]
        },
        {
          id: "cat-5-2",
          title: "Digital Models, Influencer Strategy & Virtual Brand Experiences",
          description: "AI-generated models and virtual brand experiences",
          questions: [
            {
              id: "q-5-2-1",
              text: "How sophisticated is your use of AI-generated digital models and virtual influencer marketing?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Traditional models with basic photography, limited digital marketing, conventional brand experiences" },
                2: { label: "Developing", description: "Some digital model usage with basic virtual experiences, departmental digital marketing, simple brand innovation" },
                3: { label: "Defined", description: "Integrated digital model strategy with comprehensive virtual brand experiences, cross-platform digital marketing, structured virtual engagement" },
                4: { label: "Managed", description: "Advanced AI-generated model ecosystem with sophisticated virtual influencer strategy, immersive brand experiences, predictive engagement optimization" },
                5: { label: "Optimizing", description: "Autonomous digital model evolution with continuous virtual innovation, self-adapting influencer strategies, AI-native brand experiences" }
              },
              insights: [
                "AI-generated digital models and virtual influencer marketing",
                "NFT marketing strategy and blockchain-based community engagement", 
                "Immersive brand experiences: virtual fashion shows, metaverse activation",
                "Conversational commerce with advanced AI shopping assistants"
              ]
            }
          ]
        }
      ]
    },

    {
      id: "dimension-6",
      title: "Fashion AI Applications & Industry Innovation",
      description: "Cutting-edge AI applications specific to fashion retail innovation",
      weight: 0.25,
      type: "technical", 
      categories: [
        {
          id: "cat-6-1",
          title: "3DVD Technologies & Digital Twins Integration",
          description: "Comprehensive 3D modeling, VR/AR, and digital twin implementation",
          questions: [
            {
              id: "q-6-1-1",
              text: "How comprehensively do you utilize digital twins and 3DVD technologies (3D modeling, VR/AR, digital twinning) throughout your value chain?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Limited 3D capabilities with basic modeling, minimal VR/AR usage, traditional product development processes" },
                2: { label: "Developing", description: "Some 3DVD adoption with basic digital twins, departmental 3D initiatives, simple virtual experiences" },
                3: { label: "Defined", description: "Integrated 3DVD strategy with comprehensive digital twin ecosystem, cross-functional 3D workflows, structured virtual development" },
                4: { label: "Managed", description: "Advanced 3DVD implementation with sophisticated digital twin orchestration, immersive VR/AR experiences, predictive 3D optimization" },
                5: { label: "Optimizing", description: "Autonomous 3DVD evolution with continuous digital twin learning, self-optimizing virtual experiences, AI-driven 3D innovation" }
              },
              insights: [
                "Fashion digital twins: Complete electronic documents with 3D representations",
                "3DVD technologies: 3D modeling, VR/AR, 2D/3D scanning throughout supply chain",
                "Collaborative 3D workspaces: CLO-SET bridging entire product lifecycle",
                "Virtual prototyping: Hours instead of days/weeks for sample creation"
              ]
            }
          ]
        },
        {
          id: "cat-6-2",
          title: "Advanced Visual AI & Virtual Reality Applications",
          description: "Sophisticated visual AI and immersive technology implementation",
          questions: [
            {
              id: "q-6-2-1",
              text: "How sophisticated is your implementation of visual AI for product recognition, search, and discovery?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Basic text search with limited visual capabilities, traditional product discovery, manual tagging processes" },
                2: { label: "Developing", description: "Some visual search with basic image recognition, departmental visual AI tools, simple computer vision applications" },
                3: { label: "Defined", description: "Integrated visual AI with comprehensive image recognition, cross-platform visual search, structured computer vision workflows" },
                4: { label: "Managed", description: "Advanced visual AI with sophisticated product recognition, immersive AR/VR discovery, predictive visual intelligence" },
                5: { label: "Optimizing", description: "Autonomous visual evolution with continuous recognition learning, self-optimizing visual experiences, AI-native product discovery" }
              },
              insights: [
                "Computer vision for product recognition and visual search",
                "AR commerce integration: Snapchat AR sales, virtual fitting rooms",
                "Immersive fashion experiences: digital runways, virtual fashion shows",
                "Connected retail AR: Real-time product information and storytelling"
              ]
            }
          ]
        },
        {
          id: "cat-6-3",
          title: "Generative AI Design & Creative Innovation",
          description: "AI-powered design assistance and creative capabilities",
          questions: [
            {
              id: "q-6-3-1",
              text: "How effectively do you leverage generative AI for fashion design creation and creative assistance?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Traditional design processes with limited AI assistance, manual creative workflows, basic design tools" },
                2: { label: "Developing", description: "Some AI design assistance with basic generation tools, departmental creative AI exploration, simple design automation" },
                3: { label: "Defined", description: "Integrated generative AI with comprehensive design assistance, cross-functional creative workflows, structured AI-human collaboration" },
                4: { label: "Managed", description: "Advanced generative design with sophisticated AI creativity, real-time design optimization, predictive creative intelligence" },
                5: { label: "Optimizing", description: "Autonomous creative evolution with continuous design learning, self-optimizing creative processes, AI-native design innovation" }
              },
              insights: [
                "Generative AI fashion design: Refabric, CALA examples of AI design assistants",
                "AI analyzing unstructured data for trend modeling and design assistance",
                "Digital material marketplaces: Swatchbook high-resolution textile digitization",
                "Real-time design optimization with AI-powered creative feedback"
              ]
            }
          ]
        },
        {
          id: "cat-6-4",
          title: "Web3, Metaverse & Digital Fashion Innovation",
          description: "Blockchain, NFT, and virtual fashion capabilities",
          questions: [
            {
              id: "q-6-4-1",
              text: "How advanced is your integration of Web3 technologies, NFTs, and blockchain for digital fashion experiences?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Traditional fashion business with limited blockchain awareness, basic digital presence, conventional business models" },
                2: { label: "Developing", description: "Some Web3 exploration with basic NFT initiatives, departmental blockchain projects, simple digital fashion experiments" },
                3: { label: "Defined", description: "Integrated Web3 strategy with comprehensive NFT programs, cross-platform blockchain integration, structured digital fashion offerings" },
                4: { label: "Managed", description: "Advanced Web3 ecosystem with sophisticated NFT marketplace, comprehensive metaverse presence, predictive digital fashion intelligence" },
                5: { label: "Optimizing", description: "Autonomous Web3 evolution with continuous blockchain innovation, self-optimizing digital fashion, AI-native virtual economy" }
              },
              insights: [
                "Fashion NFTs & blockchain: Digital collectibles and authenticity verification",
                "Virtual fashion economy: Digital-only garments, crypto-currency transactions",
                "Brand metaverse presence: Nike, Gucci, Tommy Hilfiger case studies",
                "Gaming integration: Fashion crossing into entertainment and gaming sectors"
              ]
            }
          ]
        }
      ]
    },

    {
      id: "dimension-7",
      title: "Intelligent Operations & AI-Driven Supply Chain",
      description: "AI-optimized operations and intelligent supply chain management",
      weight: 0.25,
      type: "operational",
      categories: [
        {
          id: "cat-7-1", 
          title: "Digital Supply Chain Transformation & 3DVD Integration",
          description: "Comprehensive supply chain digitalization with 3DVD technologies",
          questions: [
            {
              id: "q-7-1-1",
              text: "How comprehensively have you transformed your traditional supply chain using 3DVD technologies and digital workflows?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Traditional sequential supply chain with physical samples, manual processes, limited digital integration" },
                2: { label: "Developing", description: "Some digital workflows with basic virtual samples, departmental process automation, simple supply chain digitization" },
                3: { label: "Defined", description: "Integrated digital supply chain with comprehensive virtual workflows, cross-functional process optimization, structured supply chain intelligence" },
                4: { label: "Managed", description: "Advanced digital supply chain with sophisticated 3DVD integration, real-time process optimization, predictive supply chain intelligence" },
                5: { label: "Optimizing", description: "Autonomous supply chain evolution with continuous workflow learning, self-optimizing processes, AI-native supply chain innovation" }
              },
              insights: [
                "3DVD supply chain evolution: Traditional sequential → Complete digital workflow transformation",
                "Speed-to-market optimization: Virtual samples in hours, 30+ day time reduction",
                "Digital workflow integration: Pattern-making, fitting, testing in virtual space",
                "Real-world examples: Bonprix, Kookai, Dainese digital transformation"
              ]
            }
          ]
        },
        {
          id: "cat-7-2",
          title: "AI-Powered Demand Sensing & Production Intelligence", 
          description: "Intelligent demand prediction and production optimization",
          questions: [
            {
              id: "q-7-2-1",
              text: "How sophisticated is your AI-powered demand sensing and responsive production capability?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Traditional demand planning with basic forecasting, reactive production, limited market intelligence" },
                2: { label: "Developing", description: "Some AI demand sensing with basic production automation, departmental intelligence systems, simple responsive capabilities" },
                3: { label: "Defined", description: "Integrated demand intelligence with comprehensive production optimization, cross-functional responsive manufacturing, structured AI-driven planning" },
                4: { label: "Managed", description: "Advanced AI demand sensing with sophisticated production intelligence, real-time market responsiveness, predictive manufacturing optimization" },
                5: { label: "Optimizing", description: "Autonomous demand evolution with continuous market learning, self-optimizing production, AI-native responsive manufacturing" }
              },
              insights: [
                "Real-time demand orchestration: SHEIN model insights for responsive manufacturing",
                "Small batch testing with real-time inventory adjustment",
                "Trend-responsive operations: AI-powered market intelligence driving production",
                "Autonomous production adjustment: Continuous optimization based on market signals"
              ]
            }
          ]
        }
      ]
    },

    {
      id: "dimension-8",
      title: "Data Strategy & AI Governance",
      description: "Comprehensive data foundation and AI governance framework",
      weight: 0.25,
      type: "technical",
      categories: [
        {
          id: "cat-8-1",
          title: "AI Data Foundation & Architecture",
          description: "Robust data infrastructure supporting AI operations",
          questions: [
            {
              id: "q-8-1-1",
              text: "How comprehensive is your data architecture to support AI-driven fashion retail operations?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Basic data systems with limited integration, manual data processes, siloed information architecture" },
                2: { label: "Developing", description: "Some data integration with basic AI support, departmental data initiatives, simple data governance" },
                3: { label: "Defined", description: "Comprehensive data architecture with integrated AI foundation, cross-functional data strategy, structured data governance" },
                4: { label: "Managed", description: "Advanced data ecosystem with sophisticated AI support, real-time data intelligence, predictive data optimization" },
                5: { label: "Optimizing", description: "Autonomous data evolution with continuous learning, self-optimizing data architecture, AI-native data intelligence" }
              },
              insights: [
                "Unified customer data platform across all touchpoints",
                "Real-time data processing and analytics capabilities",
                "AI-ready data lakes with structured and unstructured data",
                "Advanced data quality management and governance frameworks"
              ]
            }
          ]
        }
      ]
    },

    {
      id: "dimension-9",
      title: "Technology Infrastructure & MACH Architecture", 
      description: "Modern, scalable technology foundation supporting AI initiatives",
      weight: 0.25,
      type: "technical",
      categories: [
        {
          id: "cat-9-1",
          title: "MACH Architecture Foundation & Implementation",
          description: "Microservices, API-first, Cloud-native, Headless architecture",
          questions: [
            {
              id: "q-9-1-1", 
              text: "How comprehensively have you implemented MACH (Microservices, API-first, Cloud-native, Headless) architecture principles?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Monolithic legacy systems with limited API integration, on-premise infrastructure, tightly coupled architecture" },
                2: { label: "Developing", description: "Some microservices adoption with basic API development, hybrid cloud approach, partial headless implementation" },
                3: { label: "Defined", description: "Structured MACH migration with comprehensive API strategy, cloud-first approach, systematic headless architecture" },
                4: { label: "Managed", description: "Advanced MACH implementation with sophisticated API ecosystem, cloud-native operations, fully decoupled architecture" },
                5: { label: "Optimizing", description: "Autonomous MACH optimization with self-healing infrastructure, intelligent cloud orchestration, adaptive architecture" }
              },
              insights: [
                "Microservices architecture with containerization and service mesh",
                "API-first strategy with comprehensive developer experience",
                "Cloud-native foundation with multi-cloud capabilities",
                "Headless commerce enabling omnichannel experiences"
              ]
            }
          ]  
        }
      ]
    },

    {
      id: "dimension-10",
      title: "Workforce Transformation & AI Collaboration",
      description: "Human-AI collaboration and organizational change management",
      weight: 0.2,
      type: "organizational", 
      categories: [
        {
          id: "cat-10-1",
          title: "AI Literacy & Skills Development",
          description: "Comprehensive AI education and skill development programs",
          questions: [
            {
              id: "q-10-1-1",
              text: "How comprehensively do you develop AI literacy and skills across your organization?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Limited AI awareness with traditional skill focus, ad-hoc training, technology-focused learning" },
                2: { label: "Developing", description: "Basic AI education with some skill development programs, departmental training initiatives, introductory AI concepts" },
                3: { label: "Defined", description: "Structured AI literacy program with comprehensive skill development, cross-functional AI education, practical application training" },
                4: { label: "Managed", description: "Advanced AI competency development with sophisticated skill assessment, predictive skill gap analysis, personalized learning paths" },
                5: { label: "Optimizing", description: "Autonomous skill development with self-adapting learning systems, continuous competency evolution, AI-native workforce capabilities" }
              },
              insights: [
                "Executive AI leadership and strategic decision-making capability",
                "Cross-functional AI skills and collaborative project capability",
                "Technical AI competency: data science, ML understanding, tool proficiency",
                "AI ethics and responsibility: bias awareness, ethical decision-making"
              ]
            }
          ]
        }
      ]
    },

    {
      id: "dimension-11",
      title: "Performance Measurement & AI ROI Analytics",
      description: "Comprehensive measurement and optimization of AI transformation impact",
      weight: 0.2,
      type: "organizational",
      categories: [
        {
          id: "cat-11-1",
          title: "AI Impact Measurement & Business Value Tracking",
          description: "Sophisticated measurement of AI business impact and ROI",
          questions: [
            {
              id: "q-11-1-1",
              text: "How comprehensively do you measure and track the business impact of AI investments across fashion retail operations?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Basic reporting with traditional retail metrics, limited AI-specific KPIs, manual measurement processes" },
                2: { label: "Developing", description: "Some AI performance tracking with basic ROI calculations, departmental measurement silos, manual business value assessment" },
                3: { label: "Defined", description: "Structured AI impact measurement with cross-functional KPIs, regular business value assessments, integrated performance tracking" },
                4: { label: "Managed", description: "Advanced analytics dashboards with real-time AI performance monitoring, comprehensive ROI modeling, predictive impact analysis" },
                5: { label: "Optimizing", description: "Predictive impact modeling with autonomous performance optimization, continuous value creation measurement, self-evolving KPIs" }
              },
              insights: [
                "Customer experience impact: conversion rates, personalization effectiveness, satisfaction scores",
                "Operational efficiency gains: supply chain optimization, inventory turnover, forecasting accuracy",
                "Revenue generation: AI-driven sales attribution, upselling performance, customer lifetime value",
                "Cost optimization: process automation savings, reduced manual effort, operational cost reductions"
              ]
            }
          ]
        }
      ]
    },

    {
      id: "dimension-12",
      title: "Strategic Growth & Future-Ready Innovation",
      description: "AI-driven business model innovation and future technology readiness",
      weight: 0.3,
      type: "strategic",
      categories: [
        {
          id: "cat-12-1",
          title: "AI-Driven Business Model Innovation & Market Expansion",
          description: "Leveraging AI for new business models and growth opportunities",
          questions: [
            {
              id: "q-12-1-1",
              text: "How effectively do you leverage AI to drive new business model innovation and market growth opportunities?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Traditional business models with limited AI integration, reactive market approach, basic digital services" },
                2: { label: "Developing", description: "Basic AI-enhanced services with some digital business model exploration, departmental innovation initiatives" },
                3: { label: "Defined", description: "Integrated AI business models with structured innovation processes, cross-functional growth strategies, systematic market expansion" },
                4: { label: "Managed", description: "Advanced AI-driven services with multiple business model innovation, predictive market expansion, sophisticated growth strategies" },
                5: { label: "Optimizing", description: "Autonomous business model evolution with AI-native growth strategies, continuous market innovation, self-optimizing value creation" }
              },
              insights: [
                "New revenue streams: AI-powered services, data monetization, subscription models",
                "Market expansion strategy: AI-driven market entry, customer segment expansion",
                "Product innovation pipeline: AI-assisted development, trend-responsive innovation",
                "Ecosystem development: partner networks, API business models, collaborative platforms"
              ]
            }
          ]
        },
        {
          id: "cat-12-2",
          title: "Emerging Technology Integration & Future Readiness",
          description: "Preparedness for adopting emerging AI and fashion technologies",
          questions: [
            {
              id: "q-12-2-1",
              text: "How prepared is your organization to adopt and integrate emerging AI and fashion technology innovations?",
              type: "scale",
              scale: {
                1: { label: "Initial", description: "Limited emerging technology awareness with reactive adoption approach, traditional technology focus" },
                2: { label: "Developing", description: "Basic emerging technology exploration with some pilot programs, departmental innovation initiatives" },
                3: { label: "Defined", description: "Structured emerging technology evaluation with cross-functional innovation programs, planned technology adoption" },
                4: { label: "Managed", description: "Advanced technology integration with predictive technology adoption, comprehensive innovation strategy" },
                5: { label: "Optimizing", description: "Autonomous technology evolution with continuous innovation integration, future-native capabilities" }
              },
              insights: [
                "Web3 & metaverse readiness: NFT strategies, virtual fashion experiences, blockchain integration",
                "Advanced AI technologies: generative AI integration, computer vision advancement, conversational AI",
                "Sustainable technology innovation: circular economy AI, environmental impact optimization",
                "Next-generation commerce: voice commerce, IoT integration, ambient commerce"
              ]
            }
          ]
        }
      ]
    }
  ],

  useCases: [
    {
      id: "hyper-personalization-cases",
      title: "Hyper-Personalization Use Cases",
      examples: [
        {
          company: "Zalando",
          useCase: "Algorithmic Fashion Companion",
          description: "AI-powered personal styling with deep customer preference learning",
          dimensions: ["dimension-3", "dimension-5"]
        },
        {
          company: "Amazon",
          useCase: "AI Fashion & Fit Experience", 
          description: "Comprehensive fit prediction and personalized recommendations",
          dimensions: ["dimension-3", "dimension-6"]
        },
        {
          company: "Stitch Fix",
          useCase: "Data Science-Driven Styling",
          description: "Algorithm-driven personal styling service with human stylist augmentation",
          dimensions: ["dimension-3", "dimension-10"]
        }
      ]
    },
    {
      id: "intelligent-operations-cases",
      title: "Intelligent Operations Use Cases",
      examples: [
        {
          company: "SHEIN",
          useCase: "Agile Pricing & Demand Response",
          description: "Real-time demand sensing with responsive production and pricing",
          dimensions: ["dimension-2", "dimension-7"]
        },
        {
          company: "H&M",
          useCase: "Markdown Optimization",
          description: "AI-powered pricing optimization and inventory management",
          dimensions: ["dimension-2", "dimension-7"]
        },
        {
          company: "Levi's",
          useCase: "Agentic AI Operations",
          description: "Autonomous operational decision-making and optimization",
          dimensions: ["dimension-7", "dimension-8"]
        }
      ]
    },
    {
      id: "customer-engagement-cases", 
      title: "Customer Engagement Use Cases",
      examples: [
        {
          company: "Saks",
          useCase: "Agentforce Customer Service",
          description: "AI-powered customer service with human agent augmentation",
          dimensions: ["dimension-5", "dimension-10"]
        },
        {
          company: "PacSun", 
          useCase: "Conversational Commerce",
          description: "AI shopping assistants with natural language interaction",
          dimensions: ["dimension-4", "dimension-5"]
        }
      ]
    }
  ],

  insights: {
    pentiDocument: {
      title: "Digital Fashion - An Industry Perspective",
      keyInsights: [
        "3DVD Technologies transforming supply chains: 3D modeling, VR/AR, digital twinning",
        "Speed-to-market improvements: 30+ day reductions through digital workflows",
        "Collaborative 3D creation workspaces bridging product lifecycle stages",
        "Digital transformation clusters: Partial → Full Hybrid → Full Virtual",
        "Fashion as a Service to Fashion as a Lifestyle strategic evolution"
      ]
    },
    retailAIUseCases: {
      title: "Comprehensive Retail AI Use Cases",
      categories: [
        "Hyper-Personalization & Customer Intelligence",
        "Intelligent Operations & Supply Chain",
        "Customer Engagement & Conversational Commerce",
        "Generative/Agentic AI Applications",
        "Phygital Experiences & Platform Enablers"
      ]
    }
  }
};

// Assessment scoring and calculation functions
export const assessmentUtils = {
  calculateDimensionScore: (responses) => {
    // Calculate weighted average for dimension
    const totalWeight = responses.reduce((sum, r) => sum + (r.weight || 1), 0);
    const weightedSum = responses.reduce((sum, r) => sum + (r.score * (r.weight || 1)), 0);
    return weightedSum / totalWeight;
  },

  calculateOverallScore: (dimensionScores) => {
    // Calculate weighted overall score based on dimension types
    const strategic = dimensionScores.filter(d => d.type === 'strategic').reduce((sum, d) => sum + d.score, 0) / 2;
    const operational = dimensionScores.filter(d => d.type === 'operational').reduce((sum, d) => sum + d.score, 0) / 5;
    const technical = dimensionScores.filter(d => d.type === 'technical').reduce((sum, d) => sum + d.score, 0) / 3;
    const organizational = dimensionScores.filter(d => d.type === 'organizational').reduce((sum, d) => sum + d.score, 0) / 2;
    
    return (strategic * 0.3) + (operational * 0.25) + (technical * 0.25) + (organizational * 0.2);
  },

  getMaturityLevel: (score) => {
    if (score >= 4.0) return { level: 'Advanced', color: '#10B981', description: 'Leading-edge implementation' };
    if (score >= 3.0) return { level: 'Proficient', color: '#3B82F6', description: 'Strong foundation' };
    if (score >= 2.0) return { level: 'Developing', color: '#F59E0B', description: 'Basic implementation' };
    return { level: 'Initial', color: '#EF4444', description: 'Limited approach' };
  },

  generateRecommendations: (dimensionScores) => {
    // Generate prioritized recommendations based on scores
    const lowScores = dimensionScores.filter(d => d.score < 3.0).sort((a, b) => a.score - b.score);
    return lowScores.slice(0, 3).map(dimension => ({
      dimension: dimension.title,
      priority: dimension.score < 2.0 ? 'High' : 'Medium',
      recommendation: `Focus on improving ${dimension.title.toLowerCase()} capabilities`
    }));
  }
};