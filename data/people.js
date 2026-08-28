// ============================================================
//  ICE Group — PI Profile Data (People page)
//  Everything on the People page's profile tabs — About,
//  Education, Awards & Grants, Patents, Industry — is rendered
//  from this file. Edit the arrays/objects below to update any
//  of them; people.html just renders whatever is here, so the
//  visual layout stays the same no matter what you put in it.
//
//  The "Current Group Members" grid at the bottom of the People
//  page is separate and lives in data/team.js instead.
// ============================================================

// ── ABOUT tab ──
const PI_ABOUT = {
  // Each string becomes its own paragraph.
  bio: [
    "William S. Y. Wong is an incoming Lecturer in the School of Chemical & Biomolecular Engineering at the University of Sydney. His research spans interfacial engineering, surface chemistry, and their applications into chemical-free and energy-passive processes.",
    "He received his B.Eng. (1st Class Hons.) in Chemical Engineering from the National University of Singapore and his Ph.D. in Materials Engineering and Applied Physics from the Australian National University in 2018. He subsequently held fellowship-funded research positions at the Max Planck Institute for Polymer Research (Germany) and Aalto University (Finland). His work has been funded by Marie-Curie fellowships (ESR and IF) and by the Research Council of Finland (RCF). He was also (briefly) a staff scientist at the Okinawa Institute of Science and Technology (Japan).",
    "His group in Sydney investigates the fundamental and applied science of interfaces between gas, liquid, and solid phases — targeting applications in chemical process engineering."
  ],
  // Short pill tags shown under "Research Interests"
  interests: [
    "Interfacial Engineering",
    "Sustainable Chemistry",
    "Materials Physics",
    "Advanced Surface Design",
    "Machine-Vision Aided Analysis",
    "Chemical Engineering Processes",

  ],
  // The contact/info list on the right. "link" is optional (mailto:, http(s), etc.)
  info: [
    { icon: "📍", label: "Address", value: "School of Chemical & Biomolecular Engineering<br>The University of Sydney, NSW 2006, Australia" },
    { icon: "✉️", label: "Email", value: "william.swong = sydney.edu.au (replace = with @)", link: "mailto:william.swong@sydney.edu.au" },
    { icon: "📱", label: "Phone", value: "+61 449 802 940" },
    { icon: "🌐", label: "Website (Personal)", value: "williamsywong.wix.com/bioinspiration ↗", link: "http://williamsywong.wix.com/bioinspiration" },
    { icon: "🌏", label: "Nationality", value: "Singaporean" },
    { icon: "🔍", label: "Peer Reviewer", value: "Nature, Science Advances, Nature Communications, Joule, Advanced Materials, ACS Nano, etc." }
  ]
};

// ── EDUCATION & EXPERIENCE tab (timeline) — list in whatever order you like,
// most recent first is just the convention used so far.
// "dot" is the short label shown inside the round timeline marker.
// "detail" may include simple HTML like <em>...</em> for a thesis title.
const PI_EDUCATION = [
  {
    dot: "USYD", year: "2026 – Present", degree: "Research Affliate and Incoming Lecturer",
    institution: "University of Sydney, Sydney, Australia",
    detail: "School of Chemical & Biomolecular Engineering. Group Leader of the Interfacial Chemical Engineering Laboratory."
  },
  {
    dot: "OIST", year: "2026 – 2026", degree: "Staff Scientist",
    institution: "Okinawa Institute of Science and Technology, Okinawa, Japan",
    detail: "Supporting the Droplet Laboratory (Dan Daniel)."
  },
  {
    dot: "AALTO", year: "2022 – 2026", degree: "Marie-Curie (IF) / Research Council of Finland Research Fellow",
    institution: "Aalto University, Helsinki, Finland",
    detail: "Independent PI (Department of Applied Physics). Host: Prof. Robin Ras."
  },
  {
    dot: "MPIP", year: "2018 – 2022", degree: "Marie-Curie ESR Postdoctoral Research Fellow",
    institution: "Max Planck Institute for Polymer Research, Mainz, Germany",
    detail: "Advisors: Prof. Dr. Doris Vollmer & Prof. Dr. Hans-Jürgen Butt."
  },
  {
    dot: "ANU", year: "2014 – 2018", degree: "Ph.D., Materials Engineering and Applied Physics",
    institution: "Australian National University, Canberra, Australia",
    detail: "Advisors: Prof. Antonio Tricoli, Dr. Zbigniew Stachurski, Prof. Vincent Craig."
  },
  {
    dot: "NUS", year: "2009 – 2013", degree: "B.Eng., Chemical Engineering (1st Class Hons.)",
    institution: "National University of Singapore, Singapore",
    detail: "Faculty and Departmental Prizes for Research Excellence"
  }
];

// ── AWARDS & GRANTS tab — "pi" (true/false) shows the small "PI" badge.
// "detail" is optional — omit it for a one-line award with no extra info.
const PI_AWARDS = [
  { year: "2022", name: "Research Council of Finland Fellowship", pi: true, detail: "" },
  { year: "2022", name: "Marie Skłodowska-Curie Independent Fellowship (IF)", pi: true, detail: "Evaluation: 100/100, Top 1% of all proposals" },
  { year: "2022", name: "Emerging Investigator Award — 17th International Conference of International Association of Colloid and Interface Scientists", detail: "" },
  { year: "2018", name: "Marie Skłodowska-Curie Early-Stage Researcher (ESR) Fellowship", detail: "" },
  { year: "2017", name: "ANU Discovery Translation Fund 2.0 (DTF238)", pi: true, detail: "" },
  { year: "2016", name: "\"Science as Art\" Award — Materials Research Society" },
  { year: "2016", name: "Graduate Student Award (Silver) with Travel Support — Materials Research Society" },
  { year: "2016", name: "Treloar Prize for Best Oral Presentation — 36th Australasian Polymer Symposium" },
  { year: "2016", name: "Australian National University Media and Outreach Awards" },
  { year: "2014", name: "ANU Research Scholarship + HDR Merit Scholarship", pi: true, detail: "" },
  { year: "2013", name: "NUS Outstanding Undergraduate Researcher Prize", detail: "One of two awardees, Department of Engineering (>1,000 students)" },
  { year: "2013", name: "Faculty of Engineering High Achievement Award (Innovation & Research)", detail: "Best project from the class of 2012/2013, ChBE, NUS" }
];

// ── PATENTS tab — "id" is the small badge text (e.g. "US Patent", "WIPO")
const PI_PATENTS = [
  { id: "US Patent", title: "Durable and Transparent Self-Cleaning Surfaces through Hierarchical Interpenetrated Polymer Networks", authors: "Wong, W. S. Y., Stachurski Z. H., Nisbet D. R., and Tricoli, A. · US11566148B2" },
  { id: "US Patent", title: "Anti-Scratch Coating Composed of Two Interlocked Hybrid Polymer Networks with Chain-To-Particle Connection", authors: "Hong, L., Tay, S. W., and Wong, W. S. Y. · US10851260B2" },
  { id: "WIPO", title: "Highly Adhesive Superhydrophobicity and the Ideal Rose Petal Effect", authors: "Wong, W. S. Y., Craig, V. S. J., and Tricoli, A. · WO/2016/149735" }
];

// ── INDUSTRY tab ──
const PI_INDUSTRY = {
  lead: "Collaborative R&D engagements on surface-enhanced process engineering and advanced coatings development.",
  partners: [
    { name: "Nanostratus", country: "🇦🇺 Australia", topic: "Co-founder & Technological Consultant for Surface Engineering" },
    { name: "Amphico", country: "🇬🇧 United Kingdom", topic: "Fluoro-free & Sustainable Surfaces for Waterproofed Textiles" },
    { name: "Carl Zeiss", country: "🇩🇪 Germany", topic: "Liquid Repellent Optical Surfaces" },
    { name: "Airbus", country: "🇩🇪 Germany", topic: "Anti-Icing Coatings" },
    { name: "AB InBev", country: "🇧🇪 Belgium", topic: "Anti-foaming Surfaces for Enhanced Food Processing" },

  ]
};
