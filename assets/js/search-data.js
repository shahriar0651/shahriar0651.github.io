// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-services",
          title: "Services",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-started-bsc-in-electrical-and-electronic-engineering-at-bangladesh-university-of-engineering-and-technology",
          title: 'Started BSc in Electrical and Electronic Engineering at Bangladesh University of Engineering and...',
          description: "",
          section: "News",},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-defended-bsc-thesis-transient-stability-analysis-of-smart-grid-with-impacts-of-distributed-generation",
          title: 'Defended BSc thesis: “Transient Stability Analysis of Smart Grid with Impacts of Distributed...',
          description: "",
          section: "News",},{id: "news-joined-uttara-university-dhaka-as-a-lecturer-in-eee",
          title: 'Joined Uttara University, Dhaka as a Lecturer in EEE.',
          description: "",
          section: "News",},{id: "news-paper-accepted-stability-analysis-of-grid-connected-pv-array-under-maximum-power-point-tracking-at-ieee-icece-dhaka-2016",
          title: 'Paper accepted: “Stability Analysis of Grid-connected PV Array Under Maximum Power Point Tracking”...',
          description: "",
          section: "News",},{id: "news-joined-egcb-ltd-as-an-assistant-engineer",
          title: 'Joined EGCB Ltd. as an Assistant Engineer.',
          description: "",
          section: "News",},{id: "news-started-msc-in-computer-engineering-at-florida-international-university",
          title: 'Started MSc in Computer Engineering at Florida International University.',
          description: "",
          section: "News",},{id: "news-presented-a-poster-on-false-data-injection-attacks-against-contingency-analysis-in-power-grids-at-the-fics-cybersecurity-conference-uf",
          title: 'Presented a poster on “False Data Injection Attacks against Contingency Analysis in Power...',
          description: "",
          section: "News",},{id: "news-poster-accepted-false-data-injection-attacks-against-contingency-analysis-in-power-grids-poster-at-the-acm-wisec-2019",
          title: 'Poster accepted: “False Data Injection Attacks against Contingency Analysis in Power Grids: Poster”...',
          description: "",
          section: "News",},{id: "news-paper-accepted-g-ids-generative-adversarial-networks-assisted-intrusion-detection-system-at-ieee-compsac-2020",
          title: 'Paper accepted: “G-IDS: Generative Adversarial Networks Assisted Intrusion Detection System” at IEEE COMPSAC...',
          description: "",
          section: "News",},{id: "news-paper-accepted-machine-learning-in-generation-detection-and-mitigation-of-cyberattacks-in-smart-grid-a-survey-at-naps-2020",
          title: 'Paper accepted: “Machine Learning in Generation, Detection, and Mitigation of Cyberattacks in Smart...',
          description: "",
          section: "News",},{id: "news-defended-ms-thesis-deception-defense-against-stealthy-attacks-in-power-grids",
          title: 'Defended MS thesis: “Deception Defense against Stealthy Attacks in Power Grids.”',
          description: "",
          section: "News",},{id: "news-started-ph-d-in-computer-science-at-virginia-tech-joined-cnsr-lab-as-a-graduate-research-assistant",
          title: 'Started Ph.D. in Computer Science at Virginia Tech; joined CNSR Lab as a...',
          description: "",
          section: "News",},{id: "news-paper-accepted-false-relay-operation-attacks-in-power-systems-with-high-renewables-at-ieee-pesgm-2021",
          title: 'Paper accepted: “False Relay Operation Attacks in Power Systems with High Renewables” at...',
          description: "",
          section: "News",},{id: "news-paper-accepted-ddaf-deceptive-data-acquisition-framework-against-stealthy-attacks-in-cyber-physical-systems-at-ieee-compsac-2021",
          title: 'Paper accepted: “DDAF: Deceptive Data Acquisition Framework against Stealthy Attacks in Cyber-Physical Systems”...',
          description: "",
          section: "News",},{id: "news-paper-accepted-iddaf-an-intelligent-deceptive-data-acquisition-framework-for-secure-cyber-physical-systems-at-eai-securecomm-2021",
          title: 'Paper accepted: “iDDAF: An Intelligent Deceptive Data Acquisition Framework for Secure Cyber-physical Systems”...',
          description: "",
          section: "News",},{id: "news-paper-accepted-iattackgen-generative-synthesis-of-false-data-injection-attacks-in-cyber-physical-system-at-ieee-cns-2021",
          title: 'Paper accepted: “iAttackGen: Generative Synthesis of False Data Injection Attacks in Cyber-physical System”...',
          description: "",
          section: "News",},{id: "news-paper-accepted-canshield-signal-based-intrusion-detection-for-controller-area-networks-at-escar-usa-2022",
          title: 'Paper accepted: “CANShield: Signal-based Intrusion Detection for Controller Area Networks” at ESCAR USA...',
          description: "",
          section: "News",},{id: "news-started-summer-internship-at-qualcomm-inc",
          title: 'Started Summer internship at Qualcomm Inc.',
          description: "",
          section: "News",},{id: "news-paper-accepted-cantropy-time-series-feature-extraction-based-intrusion-detection-systems-for-controller-area-networks-at-vehiclesec-2023-best-paper-runner-up-award",
          title: 'Paper accepted: “CANtropy: Time Series Feature Extraction-Based Intrusion Detection Systems for Controller Area...',
          description: "",
          section: "News",},{id: "news-paper-accepted-ms-ptp-protecting-network-timing-from-byzantine-attacks-at-acm-wisec-2023",
          title: 'Paper accepted: “MS-PTP: Protecting Network Timing from Byzantine Attacks” at ACM WiSec 2023....',
          description: "",
          section: "News",},{id: "news-started-summer-internship-at-qualcomm-inc",
          title: 'Started Summer internship at Qualcomm Inc.',
          description: "",
          section: "News",},{id: "news-paper-accepted-canshield-deep-learning-based-intrusion-detection-framework-for-controller-area-networks-at-the-signal-level-at-ieee-internet-of-things-journal",
          title: 'Paper accepted: “CANShield: Deep Learning-Based Intrusion Detection Framework for Controller Area Networks at...',
          description: "",
          section: "News",},{id: "news-paper-accepted-vehigan-generative-adversarial-networks-for-adversarially-robust-v2x-misbehavior-detection-systems-at-ieee-icdcs-2024",
          title: 'Paper accepted: “VehiGAN: Generative Adversarial Networks for Adversarially Robust V2X Misbehavior Detection Systems”...',
          description: "",
          section: "News",},{id: "news-attended-the-cybertruck-challenge-2024-in-warren-michigan-for-hands-on-experience-in-automotive-cybersecurity",
          title: 'Attended the CyberTruck Challenge 2024 in Warren, Michigan, for hands-on experience in automotive...',
          description: "",
          section: "News",},{id: "news-awarded-nsf-travel-grant-to-attend-ieee-icdcs-2024",
          title: 'Awarded NSF Travel Grant to attend IEEE ICDCS 2024.',
          description: "",
          section: "News",},{id: "news-presented-the-vehigan-paper-at-ieee-icdcs-2024-in-new-jersey-usa",
          title: 'Presented the VehiGAN paper at IEEE ICDCS 2024 in New Jersey, USA.',
          description: "",
          section: "News",},{id: "news-selected-as-amazon-fellow-by-amazon-virginia-tech-initiative-for-efficient-and-robust-machine-learning-for-academic-year-2024-25",
          title: 'Selected as Amazon Fellow by Amazon - Virginia Tech Initiative for Efficient and...',
          description: "",
          section: "News",},{id: "news-presented-research-on-securing-connected-and-autonomous-vehicles-from-in-vehicular-networks-to-multi-modal-fusion-at-amazon-vt-initiative-fall-24-retreat-at-blacksburg-va",
          title: 'Presented research on “Securing Connected and Autonomous Vehicles: From In-Vehicular Networks to Multi-Modal...',
          description: "",
          section: "News",},{id: "news-paper-accepted-let-the-noise-speak-harnessing-noise-for-a-unified-defense-against-adversarial-and-backdoor-attacks-at-esorics-2025",
          title: 'Paper accepted: “Let the Noise Speak: Harnessing Noise for a Unified Defense Against...',
          description: "",
          section: "News",},{id: "news-paper-accepted-vehigan-generative-adversarial-networks-for-adversarially-robust-v2x-misbehavior-detection-systems-at-acm-transactions-on-cyber-physical-systems-tcps",
          title: 'Paper accepted: “VehiGAN: Generative Adversarial Networks for Adversarially Robust V2X Misbehavior Detection Systems”...',
          description: "",
          section: "News",},{id: "news-i-am-serving-as-an-artifacts-evaluation-program-committee-member-for-acm-ccs-2025",
          title: 'I am serving as an Artifacts Evaluation Program Committee Member for ACM CCS...',
          description: "",
          section: "News",},{id: "news-successfully-completed-my-ph-d-preliminary-exam-titled-toward-trustworthy-autonomous-cyber-physical-systems-robust-machine-learning-for-secure-sensing-perception-and-control",
          title: 'Successfully completed my Ph.D. preliminary exam, titled “Toward Trustworthy Autonomous Cyber-Physical Systems: Robust...',
          description: "",
          section: "News",},{id: "news-presented-our-noisec-paper-at-esorics-2025-in-toulouse-france",
          title: 'Presented our NoiSec paper at ESORICS 2025 in Toulouse, France.',
          description: "",
          section: "News",},{id: "news-our-paper-on-dejavu-temporal-misalignment-attacks-against-autonomous-driving-is-now-available-on-arxiv",
          title: 'Our paper on “DejaVu: Temporal Misalignment Attacks against Autonomous Driving’’ is now available...',
          description: "",
          section: "News",},{id: "news-our-paper-dejavu-temporal-misalignment-attacks-against-multimodal-perception-in-autonomous-driving-has-been-accepted-to-the-ieee-conference-on-secure-and-trustworthy-machine-learning-satml-2026-acceptance-rate-26",
          title: 'Our paper “DejaVu: Temporal Misalignment Attacks against Multimodal Perception in Autonomous Driving’’ has...',
          description: "",
          section: "News",},{id: "projects-defending-autonomous-cps-against-adaptive-and-stealthy-cyber-attacks",
          title: 'Defending Autonomous CPS Against Adaptive and Stealthy Cyber Attacks',
          description: "Trustworthy ML-based intrusion detection systems for autonomous cyber-physical systems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-defense-against-adversarial-and-backdoor-ml-attacks-in-autonomous-cps",
          title: 'Defense Against Adversarial and Backdoor ML Attacks in Autonomous CPS',
          description: "Unified defenses for trustworthy perception in autonomous cyber-physical systems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-defense-against-cross-domain-cyber-ml-attacks-in-autonomous-cps",
          title: 'Defense Against Cross-Domain Cyber–ML Attacks in Autonomous CPS',
          description: "Securing multimodal perception pipelines against network-induced and timing attacks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%73%68%61%68%72%69%61%72@%76%74.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/shahriar0651", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=TcCzjTQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
