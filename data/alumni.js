// ============================================================
//  ICE Group — Alumni & Collaborators Data
//  Add new people by adding entries to the ALUMNI or
//  COLLABORATORS array below — alumni.html renders both
//  sections entirely from this file.
//
//  ALUMNI fields:
//    name:        Full name
//    level:       "Postdoc" | "PhD" | "Masters" | "Bachelor"
//                 (see ALUMNI_LEVELS below — controls the small
//                 badge text AND the automatic seniority ordering:
//                 Postdocs are always listed first, then PhD, then
//                 Masters, then Bachelor, regardless of the order
//                 entries appear in this file)
//    focus:       Research focus / thesis / dissertation / project topic
//    position:    Current position (where they are now)
//    institution: Where they did their postdoc/PhD/degree (optional —
//                 shown in the stats strip's institution count)
//    color:       Optional CSS background (gradient/colour) for their
//                 avatar initials; if omitted one is auto-assigned
//
//  To add an alumnus/alumna: add an entry anywhere in the ALUMNI
//  array — entries are entered in roughly date order for your own
//  bookkeeping, but the page always displays them ranked by
//  seniority (level), not by the order below.
//  
//  Template: 
//  { name: "Postdoctoral Researcher A", level: "Postdoc", focus: "Research focus: [add topic]", position: "[Current position]", institution: "Aalto University" },
//  { name: "PhD Student A", level: "PhD", focus: "[Dissertation title]", position: "[Current position and institution]", institution: "Aalto University" },
//  { name: "B.Eng. Student A", level: "Bachelor", focus: "[Project title]", position: "[Current position]", institution: "Australian National University" },
//
//
//
//  COLLABORATORS fields:
//    name:        Full name (with title)
//    institution: Institution and location
//    topic:       Shared research interests
//    lat, lng:    Coordinates for the collaborators map above this section —
//                 just look up "<city> latitude longitude" and paste the two
//                 numbers in. Collaborators sharing the same institution can
//                 share the same coordinates — they'll share one pin, with
//                 all their names listed in that pin's popup.
//
//
//
//
//
// ============================================================

const ALUMNI = [
  // ── Postdoctoral researchers ──

  // ── PhD alumni ──
  { name: "Alex Drago-Gonzalez", level: "PhD", focus: "2023-2026", position: "As co-advisor w/ Heikki Nieminen and Robin Ras. Current: ICEYE", institution: "Aalto University" },
  { name: "Katharina Hegner", level: "PhD", focus: "2020-2023", position: "As co-advisor w/ Doris Vollmer and Hans-Jürgen Butt. Current: Infineon", institution: "Max Planck Institute" },

  // ── Masters students ──
  { name: "Parham Koochak", level: "Masters", focus: "2024-2026", position: "Current: Ph.D. Candidate, University of Pennsylvania", institution: "Aalto University" },
  { name: "Lukas Hauer", level: "Masters", focus: "2019-2021", position: "Current: Postdoctoral Researcher, University of Cologne", institution: "Max Planck Institute" },

  // ── Undergraduate researchers ──

];

// Seniority order (rank: lower = more senior = listed first) and badge label
// for each level. Edit "rank" here to change the seniority ordering rule.
const ALUMNI_LEVELS = {
  Postdoc:  { rank: 0, label: "Postdoctoral Fellow" },
  PhD:      { rank: 1, label: "PhD" },
  Masters:  { rank: 2, label: "M.Sc." },
  Bachelor: { rank: 3, label: "B.Eng." },
};

const COLLABORATORS = [
  { name: "Prof. Doris Vollmer", institution: "Max Planck Institute for Polymer Research, Mainz", lat: 49.9977, lng: 8.2364, topic: "Superamphiphobic, lubricated, and self-cleaning surfaces" },
  { name: "Prof. Hans-Jürgen Butt", institution: "Max Planck Institute for Polymer Research, Mainz", lat: 49.9977, lng: 8.2364, topic: "Wetting, drops, adaptation, electrification" },
  { name: "Prof. Robin Ras", institution: "Aalto University, Helsinki", lat: 60.1841, lng: 24.8281, topic: "Superhydrophobicity and wetting characterization" },
  { name: "Prof. Tapio Ala-Nissilä", institution: "Aalto University, Helsinki", lat: 60.1841, lng: 24.8281, topic: "Molecular dynamics and ab initio simulations" },
  { name: "Prof. Vincent Craig", institution: "Australian National University, Canberra", lat: -35.2777, lng: 149.1185, topic: "Surface forces and wetting" },
  { name: "Prof. Antonio Tricoli", institution: "University of Sydney, Sydney", lat: -33.8888, lng: 151.1873 , topic: "Nanostructure design" },
];

// ── Extended collaborator network (map pins only — no cards) ──
// A wider list of institutions with individual collaborators, shown on the
// map above as a second, lighter-coloured set of pins alongside the
// featured COLLABORATORS above. Since these don't get a name/topic card,
// each entry just needs "institution", "lat", and "lng" — one entry per
// person, even if several people share the same institution (they'll
// share one pin, with a count in its popup).

const COLLABORATOR_NETWORK = [

  { institution: "Macquarie University", lat: -33.7738, lng: 151.1123 },
  { institution: "Tongji University", lat: 31.2823, lng: 121.5051 },
  { institution: "Royal Melbourne Institute of Technology", lat: -37.8076, lng: 144.9631 },
  { institution: "National University of Singapore", lat: 1.2966, lng: 103.7764 },
  { institution: "Harbin Institute of Technology", lat: 45.7411, lng: 126.6613 },
  { institution: "CSIRO", lat: -35.2459, lng: 149.0879 },
  { institution: "Federico Santa María Technical University", lat: -33.0333, lng: -71.5981 },
  { institution: "University of Ioannina", lat: 39.6180, lng: 20.8522 },
  { institution: "Max Planck Institute for Polymer Research", lat: 49.9977, lng: 8.2364 },
  { institution: "Southeast University China", lat: 32.0537, lng: 118.7969 },
  { institution: "New Jersey Institute of Technology", lat: 40.7420, lng: -74.1787 },
  { institution: "University of Silesia Katowice", lat: 50.2649, lng: 19.0238 },
  { institution: "CIC energiGUNE", lat: 42.8482, lng: -2.6304 },
  { institution: "Nanyang Technological University", lat: 1.3483, lng: 103.6831 },
  { institution: "Cambridge University", lat: 52.2043, lng: 0.1149 },
  { institution: "UC Berkeley", lat: 37.8719, lng: -122.2585 },
  { institution: "Max Planck Institute for Polymer Research", lat: 49.9977, lng: 8.2364 },
  { institution: "Boise State University", lat: 43.6023, lng: -116.2029 },
  { institution: "University of Oregon", lat: 44.0448, lng: -123.0726 },
  { institution: "University of Stuttgart", lat: 48.7784, lng: 9.1815 },
  { institution: "Aalto University", lat: 60.1841, lng: 24.8281 },
  { institution: "ETH Zurich", lat: 47.3763, lng: 8.5480 },
  { institution: "University of Cincinnati", lat: 39.1329, lng: -84.5150 },
  { institution: "University of Edinburgh", lat: 55.9445, lng: -3.1892 },
  { institution: "Dalian University of Technology", lat: 38.8586, lng: 121.5453 },
  { institution: "Shandong University of Technology", lat: 36.8131, lng: 118.0552 },
  { institution: "University of Tokyo", lat: 35.7128, lng: 139.7621 },
  { institution: "University of Eastern Finland", lat: 62.6009, lng: 29.7369 },
  { institution: "King Abdullah University of Science and Technology", lat: 22.3046, lng: 39.1019 },
  { institution: "Okinawa Institute of Science and Technology", lat: 26.4636, lng: 127.8412 },
  { institution: "Aalto University", lat: 60.1841, lng: 24.8281 },
  { institution: "University of Cologne", lat: 50.9279, lng: 6.9204 },
  { institution: "Tampere University", lat: 61.4498, lng: 23.8580 },
  { institution: "University of Pennsylvania", lat: 39.9522, lng: -75.1932 },
];
