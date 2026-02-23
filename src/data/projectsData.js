// data/projectsData.js

export const projectsData = [
  {
    id: 1,
    title: "Cinema Casting Company",
    slug: "cinema-casting-company",
    category: "Web Application Development",
    heroImage: "/ccc/cinema-1.jpeg", // change to your real path
    description:
      "A dedicated social media and casting platform connecting actors, directors, production houses, and casting teams. Features include talent search, casting calls, verified profiles, messages, and opportunities in film, short films, and digital media – with a focus on the Malayalam industry.",
    overview:
      "Talent Meets Opportunity – A full-stack social casting platform built for the Malayalam film industry, connecting verified actors, production houses, and casting directors. Users can post content, apply for roles, message connections, and build a professional profile — all in one place.",
    liveUrl: "https://www.cinemacastingcompany.com/",
    stats: [
      { label: "Active Users", value: "Real-time" },
      { label: "Industry", value: "Malayalam Cinema" },
      { label: "Platform", value: "Web App" },
    ],
   features: [
    "Social feed with photos, videos, likes, comments & shares",
    "Casting call board with salary, location & experience filters",
    "Verified production house & actor badge system",
    "Direct messaging with connected contacts",
    
    "Talent discovery with suggestions & follow system",
    "Rocket feature to boost talent visibility in search",
    "Mobile-first responsive design for on-the-go use",
    "Advanced talent search with filters (age, height, location, skills, experience level)",
    "Role application system with resume/portfolio upload and one-click apply",
    "Notifications for new casting calls, messages, follows, and application updates",
    
    
  
  
  ],
    highlights: [
      {
        icon: "🎬",
        title: "Casting Call Board",
        desc: "Production houses post roles (e.g. Actor/Actress for short films, reels, full features) with details like location, salary range, employment type, and experience level. Talents apply directly via Contact.",
      },
      {
        icon: "📱",
        title: "Social Feed",
        desc: "Instagram-style feed where talents share photos, videos, and updates. Followers can like, comment, and share posts. Real activity from users like ameensalaam9, jilskaleeda, and ashish is already live.",
      },
      {
        icon: "🔍",
        title: "Advanced Role Search",
        desc: "Filter casting calls by location (Near me / Flexible / Exact), salary (₹30k–₹1L+), date posted, experience (Short Films, Reels), and employment type (Full Time, Temporary, Part Time).",
      },
      {
        icon: "✅",
        title: "Verified Profiles",
        desc: "Production houses like JEEVAN CREATIVE PRODUCTIONS, VAANI INNOVATIVE CREATIONS, and CINEMACASTINGCOMPANY carry a verified badge, building trust for talents reaching out.",
      },
      {
        icon: "💬",
        title: "Direct Messaging",
        desc: "Built-in messaging system with a Connected tab and New Chat flow. Users can privately reach out to talents or production teams — all within the platform.",
      },
      {
        icon: "👤",
        title: "Talent Profiles",
        desc: "Each user has a profile with posts, followers, following, an editable bio, chosen role, education, achievements, and skills — designed to showcase talent professionally.",
      },
    ],
    gallery: [
      { src: "/ccc/cinema-1.jpeg", alt: "Cinema App Screen 1" },
      { src: "/ccc/cinema-2.jpeg", alt: "Casting Profile" },
      { src: "/ccc/cinema-3.jpeg", alt: "Social Feed" },
    ],
  },

   {
    id: 2,
    title: "Tasty Toast Cafe",
    slug: "tasty-toast-cafe",
    category: "Web Application Development",
    heroImage: "/ttc/ttc.jpg",
    description:
      "Modern cafe website with online menu, reservation system, and food gallery.",
    overview:
      "A powerful multi-restaurant admin panel built for café and food business owners to manage finances, staff, menu, vendors, and daily operations — all in one clean dashboard. Currently live across two restaurants: Tasty Toast (Mannarkkad) and Lassi Factory (Tirur).",
    liveUrl: "https://www.tastytoastcafe.in/",
    stats: [
      { label: "Industry", value: "Food & Beverage" },
      { label: "Platform", value: "Admin Panel" },
      { label: "Restaurants", value: "Multi-Branch" },
      { label: "Finance", value: "Real-time" },
    ],
    features: [
      "Multi-restaurant dashboard from a single admin login",
      "Real-time profit, expense & balance tracking",
      "Wallet system with deposit, withdraw & liability coverage",
      "Daily income/expense bar & composed charts",
      "Staff management with roles, salaries & attendance",
      "Fully customisable income & expense categories",
      "Financial reports with CSV export",
      "Purchase & vendor management",
      "Menu items & gallery per restaurant",
      "Salary settlement & advance tracking per staff member",
    ],
    highlights: [
      {
        icon: "📊",
        title: "Live Financial Dashboard",
        desc: "Real-time overview of Total Income, Total Expenses, Net Profit, and Available Balance. Profit is calculated as (Income + Deposits) − (Expenses + Withdrawals + Salaries + Advances) with margin percentage.",
      },
      {
        icon: "💳",
        title: "Wallet & Balance System",
        desc: "Each restaurant has a wallet with Available Balance, Locked funds, and Effective Balance after liabilities. Owners can Deposit or Withdraw directly and track coverage percentage in real time.",
      },
      {
        icon: "📈",
        title: "Daily Performance Charts",
        desc: "Visual bar and composed charts showing daily Income, Expense, and Profit Margin % across any date range. Tracks Avg Daily Income, Avg Daily Expense, and highlights the Best performing day.",
      },
      {
        icon: "🗂️",
        title: "Category Management",
        desc: "Fully customisable expense and income categories with subcategory support. Owners can define their own category structure to match how their business tracks purchases, income, and operational costs.",
      },
      {
        icon: "👨‍🍳",
        title: "Staff & Attendance",
        desc: "Manage staff with their assigned roles, monthly salary, join date, and contact details. Tracks attendance and handles salary settlements and advance payments per employee.",
      },
      {
        icon: "📋",
        title: "Financial Reports & Export",
        desc: "Detailed transaction history with filters for Daily Income, Vendor Reports, Withdrawals, and Deposits. Shows totals for Purchases, Inflows, Expenses, Salaries, Advances, and Unpaid Liabilities. Export to CSV supported.",
      },
      {
        icon: "🍽️",
        title: "Menu Management",
        desc: "Add and manage menu items with a Gallery view. Organised per restaurant so Tasty Toast and Lassi Factory each have their own independent menu structure.",
      },
      {
        icon: "🏪",
        title: "Multi-Restaurant Support",
        desc: "Admins can switch between multiple restaurant branches from a single login. Each branch has fully isolated data, staff, and financials — making it ideal for growing food businesses.",
      },
    ],
    gallery: [
      { src: "/ttc-1.png", alt: "Financial Dashboard" },
      { src: "/ttc/ttc-menu.jpg", alt: "Menu View" },
      { src: "/ttc/ttc-report.jpg", alt: "Reports" },
    ],
  },
  {
    id: 3,
    title: "Bus Book – Fleet Management",
    slug: "bus-book-fleet-management",
    category: "Web Application Development",
    heroImage: "/busbook/bus-1.png",
    description:
      "Complete financial tracking system for bus operators with income, expense & maintenance logs.",
    overview:
      "A dedicated fleet management and billing system built for bus operators to track daily collections, manage staff, monitor expenses, and view real-time financial health — all from a single owner dashboard. Currently live with real transaction history dating back across months.",
    liveUrl: "https://busbook.thinkverse.co.in/",
    stats: [
      { label: "Income Tracked", value: "Multi-Month" },
      { label: "Wallet System", value: "Live Balance" },
      { label: "Industry", value: "Transport" },
    ],
    features: [
      "Owner dashboard with live balance & todays profit",
      "Bus registration with route, type & commission rate",
      "Staff management: drivers, conductors, mechanics & more",
      "3-step daily entry: collection → staff → expenses",
      "Full transaction history with per-day net profit",
      "Maintenance expense tracking (separate from regular)",
      "Wallet with withdraw funds functionality",
      "Collection sheet for structured daily reconciliation",
      "Financial summary: income vs expenses vs balance",
      "Real data across months with Load More pagination",
    ],
    highlights: [
      {
        icon: "🚌",
        title: "Bus Management",
        desc: "Register and manage buses with Registration Number, Name, Route, Type, and Commission rate. Each bus entry supports registration number, nickname, route name, type, and commission rate.",
      },
      {
        icon: "👷",
        title: "Staff Management",
        desc: "Manage drivers, conductors, mechanics, cleaners & managers with Employee ID, role, phone, email, and status. All active employees are tracked in real time with their assigned roles and contact details.",
      },
      {
        icon: "📒",
        title: "Bill Book – Daily Entry",
        desc: "A 3-step daily entry flow: enter Collection amount → assign Staff Names → log Expenses. Each entry is tied to a specific Bus Number and Transaction Date for accurate per-bus tracking.",
      },
      {
        icon: "💰",
        title: "Owner Financial Dashboard",
        desc: "Live snapshot of Current Balance, Today's Net Profit, and quick-access actions: New Entry, Manage Buses, Manage Staff, and View Reports — designed for fast daily use.",
      },
      {
        icon: "📊",
        title: "Transaction Records",
        desc: "Full daily transaction history with Net profit per day. Each entry shows net profit or loss per day, giving owners clear insight into profitable and loss-making days across any period.",
      },
      {
        icon: "🔧",
        title: "Maintenance Tracking",
        desc: "Separate maintenance expense category tracked independently from regular expenses. Maintenance costs are tracked independently — keeping repair costs visible without mixing them into daily operational costs.",
      },
      {
        icon: "📈",
        title: "Financial Summary",
        desc: "At-a-glance totals: Total Income vs Regular Expenses vs Maintenance vs Wallet Balance — all updated in real time.",
      },
      {
        icon: "📋",
        title: "Collection Sheet",
        desc: "Dedicated Collection Sheet module for structured recording of conductor collections per trip or day, making reconciliation and commission calculation straightforward for multi-bus operators.",
      },
    ],
    gallery: [
      { src: "/busbook/bus-2.png", alt: "Main Dashboard" },
      { src: "/busbook/busbook.png", alt: "Fleet Overview" },
      { src: "/busbook/busbook2.png", alt: "Fleet Details" },
    ],
  },

 
{
    id: 4,
    title: "eMassh – Online Tuition Platform",
    slug: "emassh-online-tuition",
    category: "Website Development",
    heroImage: "/emash/emassh-1.png",
    description:
      "Live online tuition connecting students with expert tutors, structured notes, and personalized learning paths.",
    overview:
      "A full-featured online learning platform connecting students with industry-expert instructors. eMassh offers structured courses, live sessions, quizzes, progress tracking, and recognised certificates — making quality education accessible to everyone, everywhere.",
    liveUrl: "https://www.emassh.in/",
    stats: [
      { label: "Industry", value: "EdTech" },
      { label: "Platform", value: "Web App" },
      { label: "Sessions", value: "Live & Recorded" },
      { label: "Certificates", value: "Verified" },
    ],
    features: [
      "Live video classes and interactive sessions",
      "Structured course materials and downloadable notes",
      "Quiz and assessment engine with instant feedback",
      "Student progress tracking and analytics dashboard",
      "Tutor scheduling and 1-on-1 booking system",
      "Verified certificates upon course completion",
      "Expert instructor profiles with ratings",
      "Learner community with discussion forums",
      "Mobile-responsive design for learning on the go",
      "Newsletter and course update notifications",
    ],
    highlights: [
      {
        icon: "🎥",
        title: "Live & Recorded Classes",
        desc: "Students attend live interactive sessions with instructors or catch up via recorded lectures — flexible learning that fits any schedule.",
      },
      {
        icon: "📚",
        title: "Structured Course Library",
        desc: "Over 500 courses organised by subject and skill level, each with video lessons, downloadable notes, and practical projects to reinforce learning.",
      },
      {
        icon: "🧠",
        title: "Quizzes & Assessments",
        desc: "Built-in quiz engine lets instructors create timed assessments. Students get instant feedback and scores tracked against their learning path.",
      },
      {
        icon: "📈",
        title: "Progress Tracking Dashboard",
        desc: "Each student has a personal dashboard showing completed lessons, quiz scores, course completion %, and upcoming sessions at a glance.",
      },
      {
        icon: "🏆",
        title: "Recognised Certificates",
        desc: "Students earn verifiable certificates upon course completion — shareable on LinkedIn and résumés to validate real-world skills to employers.",
      },
      {
        icon: "👩‍🏫",
        title: "Expert Instructor Profiles",
        desc: "Platform features 50+ verified instructors from leading companies. Each profile shows credentials, courses taught, and student ratings — helping learners pick the right mentor.",
      },
      {
        icon: "🤝",
        title: "Learner Community",
        desc: "Students and mentors connect through discussion threads and course communities, enabling peer learning and networking beyond the classroom.",
      },
      {
        icon: "📅",
        title: "Tutor Booking & Scheduling",
        desc: "Students can book 1-on-1 sessions directly via the tutor scheduling system, with calendar integration and automated reminders before each class.",
      },
    ],
    gallery: [
      { src: "/emassh-1.png", alt: "Main Dashboard" },
      { src: "/emassh-2.png", alt: "Classes View" },
      { src: "/emassh-3.png", alt: "Analytics" },
    ],
  },

  {
    id: 5,
    title: "Gobelives",
    slug: "gobelives-hotel-booking",
    category: "Ongoing Projects",
    heroImage: "/gobelives/gobelives.jpg",
    description:
      "In-progress web platform for hotel booking, resort reservations, room management, guest profiles, dynamic pricing, availability calendar, and real-time analytics.",
    overview: "Hotel & resort booking platform (under development)",
    isOngoing: true,
    comingSoon: true,
    features: [
      "Room & suite management",
      "Dynamic pricing engine",
      "Real-time availability calendar",
      "Guest profiles & booking history",
      "Admin dashboard with analytics",
    ],
    gallery: [],
  },
 

  {
    id: 6,                                
    title: "Skera",
    slug: "skera-municipality-management", // unique, lowercase, kebab-case
    category: "Ongoing Projects",
    heroImage: "/skera/skera.png", // put one main screenshot in /public/skera/
    description:
      "A modern admin dashboard for municipality management, allowing officials to track public issues, manage municipalities, handle staff/users, and monitor status in real-time.",
    overview:
      "Skera is a comprehensive web-based admin panel designed for local government bodies (municipalities/panchayats) to efficiently manage citizen-reported issues, track resolution status, oversee staff performance, and maintain municipality records — all from a clean, responsive interface.",
    liveUrl: "",                          // add if live, otherwise leave empty or remove
    stats: [
      { label: "Issues Tracked", value: "Real-time" },
      { label: "Platform", value: "Admin Panel" },
      { label: "Users", value: "Multi-role" },
      { label: "Features", value: "Dashboard + CRUD" },
    ],
    features: [
      "Central dashboard with issue statistics, status overview, and municipality summaries",
      "Issue management: list, filter, view details, update status (Open → In Progress → Resolved)",
      "Add new issues with municipality selection, description, priority, and photo upload",
      "Municipality CRUD: add/edit municipalities with name, code, and contact details",
      "Staff & user management: add users, assign roles (Admin, Staff), manage access",
      "Responsive sidebar navigation for Dashboard, Issues, Municipalities, Users/Staff",
      "Real-time counters, progress indicators, and visual charts for quick insights",
      "Role-based access (e.g., staff see only assigned issues)",
      "Modern UI with cards, tables, forms, and status badges",
      "Mobile-friendly design for field staff usage",
    ],
    highlights: [
      {
        icon: "📊",
        title: "Dashboard Overview",
        desc: "At-a-glance view of total issues, pending/resolved counts, municipality stats, and visual charts showing issue distribution by status and type.",
      },
      {
        icon: "🛠️",
        title: "Issues Tracking",
        desc: "Detailed list of reported issues with filtering by municipality, status, priority. Each issue shows description, assigned staff, timestamps, and resolution progress.",
      },
      {
        icon: "🏢",
        title: "Municipality Management",
        desc: "Add and manage local bodies/municipalities with basic details. Easy to scale for multiple regions or panchayats.",
      },
      {
        icon: "👥",
        title: "Staff & User Administration",
        desc: "Create staff accounts, assign roles, and control access. Supports multi-user environment for different departments.",
      },
      {
        icon: "➕",
        title: "Quick Add Forms",
        desc: "Simple, intuitive forms to report new issues or add municipalities/staff with validation and photo upload support.",
      },
    ],
    gallery: [
      { src: "/skera/skera-dashboard.png", alt: "Main Dashboard with stats and charts" },
      { src: "/skera/skera-issues-list.png", alt: "Issues listing and filtering" },
      { src: "/skera/skera-issue-detail.png", alt: "Detailed issue view with status update" },
      { src: "/skera/skera-add-issue.png", alt: "Add new issue form" },
      { src: "/skera/skera-municipalities.png", alt: "Municipalities management table" },
      { src: "/skera/skera-add-municipality.png", alt: "Add municipality form" },
      { src: "/skera/skera-users.png", alt: "Users / Staff list" },
      { src: "/skera/skera-add-user.png", alt: "Add staff/user form" },
    ],
  },
  {
    id: 7,
    title: "Skera Solutions Website",
    slug: "skera-solutions-website",
    category: "Ongoing Projects",
    heroImage: "/skera/skera-1.png",  
    description:
      "Professional company website for Skera Solutions, highlighting end-to-end public lighting services, smart monitoring, AMC contracts, and director expertise.",
    overview:
      "A clean, responsive corporate site for Skera Solutions — a Kerala-based company specializing in smart public lighting infrastructure. It showcases LED/solar/high-mast systems, full lifecycle services (supply to maintenance), safety frameworks, smart tech integrations, directors' profiles, and easy contact options to attract municipal clients.",
    liveUrl: "https://main.d1594bsd7heps9.amplifyapp.com/",
    stats: [
      { label: "Services", value: "Lighting + Smart Ops" },
      { label: "Focus", value: "Sustainable Urban Infra" },
      { label: "Location", value: "Kochi, Kerala" },
    ],
    features: [
      "Hero section with powerful tagline and CTA",
      "About/Who We Are with company mission and lifecycle explanation",
      "Directors' profiles (Sameer Subair & Kousar) with qualifications and photos",
      "Lighting products showcase (LED, Solar, High Mast, Flood, etc.)",
      "Detailed services: LED installation, smart integration, AMC, safety protocols",
      "Contact form/section with WhatsApp, email, phone, address",
      "Responsive layout and modern design",
      "Footer with quick links and branding",
    ],
    highlights: [
  {
    icon: "💡",
    title: "End-to-End Lighting Expertise",
    desc: "Complete lifecycle management from supply and installation to smart monitoring and long-term maintenance contracts.",
  },
  {
    icon: "🔗",
    title: "Smart Technology Integration",
    desc: "Modern features including citizen complaint platforms, live monitoring dashboards, asset tracking systems, and predictive analytics tools.",
  },
  {
    icon: "🛡️",
    title: "Safety-First Operations",
    desc: "Structured safety protocols with proper equipment, digital checklists, incident reporting, and ongoing team training.",
  },
  {
    icon: "🤝",
    title: "Client-Focused Approach",
    desc: "Easy consultation process, site surveys, transparent reporting, and dedicated support for municipal and urban infrastructure projects.",
  },

    ],
    gallery: [
      { src: "/skera-website/skera-hero.png", alt: "Hero section with tagline" },
      { src: "/skera-website/skera-about.png", alt: "About / Who We Are section" },
      { src: "/skera-website/skera-directors.png", alt: "Directors profiles" },
      { src: "/skera-website/skera-services.png", alt: "Services and lighting systems" },
      { src: "/skera-website/skera-contact.png", alt: "Contact details" },
    ],
  },
    {
    id: 8,
    title: "Redtick QA Services",
    slug: "redtick-qa-website",
    category: "Website Development",
    heroImage: "/redtick-1.png",  // Upload main hero screenshot here
    description:
      "Professional corporate website for Redtick QA Services, offering independent audit, inspection, quality assurance, and compliance support for certification bodies, manufacturers, and organizations across multiple industries.",
    overview:
      "Redtick QA Services is an independent quality partner providing structured third-party audits, supplier audits, internal audits, inspections, verification, and quality system documentation. The site emphasizes accuracy, transparency, repeatable processes, and support for diverse sectors like manufacturing, food & beverage, pharmaceuticals, logistics, construction, and management systems certifications.",
    liveUrl: "https://www.redtickqa.com/",
    stats: [
      { label: "Services", value: "Audits & QA" },
      { label: "Industries", value: "6+ Sectors" },
      { label: "Focus", value: "Compliance & Integrity" },
      { label: "Platform", value: "Company Website" },
    ],
    features: [
      "Hero section with trust-focused tagline 'Independent Audit & Quality Assurance Services You Can Trust' and consultation CTA",
      "Detailed 'Your Partner in Audits & Quality Assurance' explanation of role and focus on accuracy/transparency",
      "Services list: Third-Party Audit Support, Second-Party (Supplier) Audits, Internal Audit Support, Inspection/Verification, Quality System Documentation",
      "Industries served showcase: Manufacturing, Food & Beverage, Logistics & Supply Chain, Pharmaceuticals, Construction & Engineering, Management Systems",
      "'Why Choose Redtick' section highlighting structured methodology, consistency, and repeatability",
      "Audit process steps: 01 Plan & Prepare, 02 Conduct & Evaluate, 03 Report & Support",
      "Call-to-action sections for consultation and working together on quality/compliance",
      "Responsive, minimal, professional layout with clear navigation (Home, About Us, Services, Why Choose Us, Contact Us)",
      "Footer with quick links, contact info, social media, and copyright",
    ],
    highlights: [
      {
        icon: "✅",
        title: "Independent & Trusted Audits",
        desc: "Supports certification bodies and organizations with reliable, transparent third-party and supplier audits.",
      },
      {
        icon: "📋",
        title: "Structured Audit Methodology",
        desc: "Systematic approach from planning and execution to reporting and follow-up support for continuous improvement.",
      },
      {
        icon: "🏭",
        title: "Multi-Industry Expertise",
        desc: "Tailored quality assurance for manufacturing, food safety, pharmaceuticals, logistics, construction, and ISO systems.",
      },
      {
        icon: "🤝",
        title: "Professional Integrity",
        desc: "Focus on accuracy, consistency, compliance, and practical outcomes to build confident decision-making.",
      },
    ],
    gallery: [
      { src: "/redtick/redtick-hero.png", alt: "Hero section with tagline 'Independent Audit & Quality Assurance Services You Can Trust'" },
      { src: "/redtick/redtick-services.png", alt: "Our Services section listing audit types and descriptions" },
      { src: "/redtick/redtick-industries.png", alt: "Industries We Serve grid with manufacturing, food, pharma, etc." },
      { src: "/redtick/redtick-why-choose.png", alt: "Why Choose Redtick section on structured approach" },
      { src: "/redtick/redtick-audit-process.png", alt: "Audit Approach steps: Plan, Conduct, Report & Support" },
      { src: "/redtick/redtick-contact.png", alt: "Let's Work Together contact and consultation section" },
    ],
  },
];

export const categories = [
  "All",
  "Website Development",
  "Web Application Development",
  "Ongoing Projects",
];