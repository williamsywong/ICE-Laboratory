// ============================================================
//  ICE Group — Abstracts Data
//  Add new entries by adding items to the ABSTRACTS array below.
//  This is the ONLY place you need to edit to add, remove, or
//  reorder abstracts — no HTML editing needed.
//
//  Fields:
//    file:     filename in images/Abstracts/ for the graphical abstract
//              e.g. "2025-acsnano.jpg". Leave "" to show a placeholder
//              (icon) until a real image is added — or just add one from
//              the Site Editor: hover an abstract's icon on the Abstracts
//              tab and click 📷 to upload an image (✂ to crop it after).
//              Saving there fills in this field automatically.
//    icon:     Emoji shown on the placeholder (only used when file is "") 💧 🩸 🫧 ❄️ 🧪 🧴 🍾 🌍 🔬 🧬 🌡 ⚡ 🕯 🌊 🧫 🧩
//    journal:  Journal name and year, e.g. "ACS Nano · 2025"
//    title:    Paper title
//    authors:  Author list string
//    text:     Short summary / abstract (1–3 sentences)
//    link:     Optional URL to the full paper, or "" for none
//
//  To add an entry:
//    1. Put the image file in the images/Abstracts/ folder (optional)
//    2. Add an entry to the ABSTRACTS array
//    3. Push to GitHub — done.
//
//  To remove an entry: delete it from the array.
//  To reorder: rearrange the entries in the array.
// ============================================================

const ABSTRACTS = [

  {
    file: "2026_Caustic.jpg", icon: "🔬",
    journal: "Advanced Functional Materials · 2026",
    title: "Rolling and Impacting Caustic Drops on Super Liquid-Repellent Surfaces: In Situ Force and Energy Monitoring of Surface Degradation",
    authors: "Koochak, P., Liu, K., and Wong, W. S. Y.*",
    text: "Super liquid-repellent surfaces can degrade under prolonged exposure to corrosive liquids, yet conventional durability tests provide only coarse and discontinuous measurements. Here, two continuous drop-based techniques quantify degradation through rolling and impacting caustic drops, resolving retention forces and energy dissipation at ≈0.1 µN and ≈1 µJ, respectively. Applied to three superhydrophobic surfaces, the methods reveal degradation-rate differences of up to an order of magnitude despite similar wetting properties, providing a precise approach for evaluating chemically durable liquid-repellent materials.",
    link: "https://doi.org/10.1002/adfm.202527264"
  },

  {
    file: "2025_Accelerating.jpg", icon: "⚡",
    journal: "ACS Nano · 2025",
    title: "Self-Accelerating Drops on Silicone-Based Super Liquid Repellent Surfaces",
    authors: "Koochak, P., Lin, M., Afzalifar, A., Hashemi, A., Arunachalam, S., Shoaib, A., Turkki, V., Ala-Nissila, T., Daniel, D., Vuckovac, M., and Wong, W. S. Y.*",
    text: "Drop mobility on super liquid-repellent surfaces depends not only on surface structure but also on chemistry and electrostatic charging. Comparing perfluoroalkyl- and silicone-based surfaces, we show that rolling drops are governed primarily by adhesion and electrostatic effects rather than friction, with silicone surfaces rapidly reaching charge saturation, whereas perfluoroalkyl surfaces continue to accumulate charge. Combined experiments and quantum-mechanical calculations reveal how surface chemistry controls charge retention and, consequently, sequential drop mobility, providing design principles for sustainable antistatic liquid-repellent surfaces.",
    link: "https://doi.org/10.1021/acsnano.5c04250"
  },

  {
    file: "2024_Plastrons.jpg", icon: "🔬",
    journal: "Advanced Science · 2024",
    title: "Designing Plastrons for Underwater Bubble Capture: From Model Microstructures to Stochastic Nanostructures",
    authors: "Wong, W. S. Y.*, Naga, A., Neef, T., Karunakaran, B., Poulikakos, D., and Ras, R. H. A.",
    text: "Super liquid-repellent surfaces can capture underwater bubbles through plastron-induced coalescence, offering a passive route to bubble management. We investigate how surface feature size and gas fraction control the two stages of capture: rupture and subsequent bubble absorption. Smaller features accelerate rupture, while higher gas fractions enhance absorption, with rupture preferentially initiated near solid-feature edges. These findings establish design principles for rapidly capturing bubbles on structured surfaces for applications including electrolysis and flotation.",
    link: "https://doi.org/10.1002/advs.202403366"
  },

  {
    file: "2023_Fluoro-Free.jpg", icon: "🌍",
    journal: "Advanced Materials · 2023",
    title: "Design of Fluoro-Free Surfaces Super-Repellent to Low-Surface-Tension Liquids",
    authors: "Wong, W. S. Y.*, Kiseleva, M. S., Zhou, S., Junaid, M., Pitkänen, L., and Ras, R. H. A.*",
    text: "Super-repellency toward low-surface-tension liquids commonly relies on persistent perfluoroalkyl chemistries. Here, stochastic nanoparticle surfaces functionalized with silicone and hydrocarbon groups are developed and benchmarked against perfluoroalkyl surfaces. Dimethyl-silicone and hydrocarbon chemistries achieve super-liquid-repellency down to surface tensions of approximately 32–33 and 40–41 mN/m, respectively. The results demonstrate that perfluoroalkyls are not essential for achieving super liquid-repellency and provide phase-diagram-based guidelines for designing more sustainable liquid-repellent surfaces.",
    link: "https://doi.org/10.1002/adma.202300306"
  },

  {
    file: "2022_Effervescence.jpg", icon: "🧪",
    journal: "Advanced Functional Materials · 2022",
    title: "Effervescence-Inspired Self-Healing Plastrons for Long-Term Immersion Stability",
    authors: "Wong, W. S. Y.* and Vollmer, D.*",
    text: "Superhydrophobic and superamphiphobic surfaces lose their protective air layer during prolonged immersion as gas dissolves into the surrounding liquid. We introduce a passive self-healing strategy in which an underlying effervescent layer generates gas when localized wetting occurs after partial Cassie-state collapse. A moisture-protective, water-soluble polymer enables controlled activation during immersion, allowing the surface to recover its plastron without external energy or intervention. This provides a scalable approach to maintaining liquid repellency under prolonged immersion.",
    link: "https://doi.org/10.1002/adfm.202107831"
  },

  {
    file: "2021_Foam.jpg", icon: "🫧",
    journal: "Nature Communications · 2021",
    title: "Super liquid repellent surfaces for anti-foaming and froth management",
    authors: "Wong, W. S. Y.*, Naga, A., Hauer, L., et al., Butt, H-J., and Vollmer, D.*",
    text: "Uncontrolled foaming causes losses and operational problems across many industries, while conventional defoamers require chemical additives or mechanical energy. We demonstrate that chemically and morphologically modified surfaces can instead promote passive defoaming and active anti-foaming, with superamphiphobic surfaces showing the most potential in scalability. Experiments with beer and aqueous soap foams reveal that amphiphobic nanostructures destabilize contacting bubbles and facilitate gas escape through Cassie-state air gaps, providing a low-energy strategy for foam and froth management.",
    link: "https://doi.org/10.1038/s41467-021-25556-w"
  },

  {
    file: "2020_Capillary.jpg", icon: "❄️",
    journal: "Nano Letters · 2020",
    title: "Capillary Balancing: Designing Frost-Resistant Lubricant-Infused Surfaces",
    authors: "Wong, W. S. Y.*, Hegner, K. I., Donadei, V., Hauer, L., Naga, A., and Vollmer, D.*",
    text: "Frost-induced capillary forces can deplete lubricants from lubricant-infused surfaces, compromising their anti-icing performance. We introduce the concept of capillary balancing, in which densely packed nanoparticles create nanointerstitial spaces that generate sufficient capillary pressure to stabilize the lubricant against frost-induced drainage. Confocal imaging confirms lubricant stability during condensation, frosting, and ice-shearing tests even at -100°C, while the optimized surfaces maintain low ice adhesion over 50 icing cycles. The work establishes a structural design principle for durable frost-resistant surfaces.",
    link: "https://doi.org/10.1021/acs.nanolett.0c02956"
  },

  {
    file: "2019_Enhancement.jpg", icon: "🧪",
    journal: "Nano Letters · 2019",
    title: "Surface Chemistry Enhancements for the Tunable Super-Liquid Repellency of Low-Surface-Tension Liquids",
    authors: "Wong, W. S. Y.*",
    text: "Extreme liquid repellency is commonly attributed to re-entrant surface geometries, particularly for low-surface-tension liquids. Here, we demonstrate an alternative route based on controlled surface-chemistry enhancement without explicitly designed re-entrant structures. By tuning the density of fluoroalkyl groups on nanoparticle surfaces, super-repellent states with contact angles above 150° and sliding angles below 10° are achieved for liquids with surface tensions as low as approximately 23.8 mN/m. These results show that surface-chemistry enhancement provides a facile means of tuning the limits of super-liquid repellency.",
    link: "https://doi.org/10.1021/acs.nanolett.8b04972"
  },

  {
    file: "2018_RAF.jpg", icon: "🌊",
    journal: "Advanced Functional Materials · 2018",
    title: "Dynamically Gas-Phase Switchable Super(de)Wetting States by Reversible Amphiphilic Functionalization: A Powerful Approach for Smart Fluid Gating Membranes",
    authors: "Wong, W. S. Y., Gengenbach, T., Nguyen, H. T., Gao, X., Craig, V. S. J., and Tricoli, A.",
    text: "Artificial fluid-gating membranes typically require complex stimuli-responsive mechanisms to switch between wetting states. We introduce a room-temperature gas-phase approach that reversibly transforms porous surfaces between superhydrophobic and superhydrophilic states through the adsorption of bipolar amphiphiles. Applied to nanofibrous membranes, this temporary superhydrophilic state enables pressure-less liquid permeation and can be reversed by changes in the ambient environment. The approach provides a simple route toward valve-less flow control, fluid-erasable microfluidics, and other adaptive fluidic systems.",
    link: "https://doi.org/10.1002/adfm.201704423"
  },

  {
    file: "2017_Omnidirectional.jpg", icon: "🕯",
    journal: "ACS Nano · 2017",
    title: "Omnidirectional Self-Assembly of Transparent Superoleophobic Nanotextures",
    authors: "Wong, W. S. Y., Gengenbach, T., Nguyen, H. T., Gao, X., Craig, V. S. J., and Tricoli, A.",
    text: "Fabricating transparent surfaces that repel water, oils, and other low-surface-tension liquids remains challenging, particularly on complex and curved substrate geometries. We demonstrate an omnidirectional self-assembly process that rapidly forms flexible nanoparticle textures with up to 99.97% optical transparency while providing superhydrophobic and superoleophobic behavior. The resulting multi-re-entrant morphology forms spontaneously from nanoparticle aerosols, and we present a mathematical model describing the self-assembly process. This approach enables the development of functional liquid-repellent coatings on substrates with diverse and complex geometries.",
    link: "https://doi.org/10.1021/acsnano.6b06715"
  },

  {
    file: "2016_Mimosa.jpg", icon: "🧩",
    journal: "Science Advances · 2016",
    title: "Mimosa Origami: a Nanostructure-enabled Directional Self-Organization Regime of Materials",
    authors: "Wong, W. S. Y., Li, M., Nisbet, D. R., Craig, V. S. J., Wang, Z., and Tricoli, A.",
    text: "Living systems can rapidly transform local stimuli into directional structural motion, but reproducing such self-organization in inorganic materials remains challenging. We develop a Janus bilayer that converts localized water stimuli into rapid, directional folding through the propagation of a programmed mechanical response. The resulting structures can self-organize over several centimeters, while simultaneously transporting water at velocities up to 8 cm/s and flow rates of 4.7 µL/s. This stimulus-driven organization enables flexible three-dimensional channels for applications in microfluidics, biosensing, and water purification.",
    link: "https://doi.org/10.1126/sciadv.1600417"
  },

];
