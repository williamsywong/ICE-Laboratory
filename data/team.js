// ============================================================
//  ICE Group — Team Data
//  Shared by BOTH index.html ("The Team" preview on the homepage)
//  and people.html (the full "The Team" grid) — edit this ONE
//  file and both pages update together.
//
//  Fields for a real team member:
//    name:     Full name, e.g. "Dr. Jane Smith"
//    role:     Title/role shown under the name
//    lead:     true for the group leader (adds a highlighted left
//              border on the People page) — normally only one entry
//    photo:    Filename in images/Headshots/, or "" to show initials
//    initials: 1–3 letters shown when there's no photo
//    color:    CSS background (gradient or colour) behind the initials
//
//  Fields for an open position (instead of a real member):
//    open:     true
//    role:     e.g. "PhD Position Open"
//    linkText: Button text, e.g. "Apply now →"
//    link:     URL for the button, e.g. "index.html#contact"
//
//  To add a member:
//    1. (Optional) put a headshot photo in images/Headshots/
//    2. Add an entry to the TEAM array
//    3. Push to GitHub — done, on both pages.
//
//  To remove a member: delete their entry from the array.
// ============================================================

const TEAM = [
  { name: "Dr. William S. Y. Wong", role: "Lecturer & Group Leader", lead: true, photo: "People-WW.png", initials: "WW", color: "linear-gradient(135deg,#5bb8e8,#1a3a5c)" },
  { open: true, role: "Funded PhD Position Open", linkText: "Apply now →", link: "index.html#contact" },
  { open: true, role: "Funded PhD Position Open", linkText: "Apply now →", link: "index.html#contact" },
  { open: true, role: "B.Eng. Thesis Project / Master's by Research", linkText: "Apply now →", link: "index.html#contact" },
  { open: true, role: "Self-funded Positions (Ph.D. / PD fellowships)", linkText: "Apply now →", link: "index.html#contact" },
];
