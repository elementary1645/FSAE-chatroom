export const subsystems = [
  { name: "All Questions", slug: "all-questions", count: 347 },
  { name: "Chassis", slug: "chassis", count: 64 },
  { name: "Suspension", slug: "suspension", count: 58 },
  { name: "Powertrain", slug: "powertrain", count: 47 },
  { name: "Aerodynamics", slug: "aerodynamics", count: 39 },
  { name: "Electronics", slug: "electronics", count: 52 },
  { name: "Brakes", slug: "brakes", count: 31 },
  { name: "Cost / BOM", slug: "cost-bom", count: 18 },
  { name: "Rules & Regs", slug: "rules-regs", count: 38 },
];

export const subsystemDescriptions = {
  "all-questions": "Browse all technical discussions, archived questions, and active threads across the team.",
  chassis: "Frame design, packaging, stiffness targets, crash structure, mounting, and layout discussions.",
  suspension: "Geometry, kinematics, camber gain, damping, springs, setup, and handling balance.",
  powertrain: "Engine, drivetrain, gearing, cooling, differential setup, and acceleration performance.",
  aerodynamics: "Wings, endplates, CFD, downforce balance, drag reduction, and aero packaging.",
  electronics: "CAN bus, telemetry, sensors, data logging, wiring, embedded systems, and diagnostics.",
  brakes: "Brake bias, pedal box, master cylinders, rotor selection, thermal behavior, and testing.",
  "cost-bom": "BOM planning, procurement, costing, vendor comparison, and budgeting decisions.",
  "rules-regs": "Rulebook clarifications, compliance checks, packaging legality, and inspection readiness."
};

export const questions = [
  {
    id: 1,
    title: "What camber curve should we target for the front suspension in a tight autocross layout?",
    excerpt:
      "We are running -1.5° static camber but gaining too much positive camber in roll.",
    content:
      "For a tight autocross setup, the front suspension should preserve tire contact patch during transient cornering. Start with tire temperature spread, suspension kinematics, and test data, then tune your geometry accordingly.",
    subsystem: "suspension",
    tags: ["Suspension", "Kinematics", "2024-25"],
    votes: 14,
    answers: 3,
    views: 289,
    author: "Arjun K.",
    status: "Answered",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
  },
  {
    id: 2,
    title: "CAN bus wiring — recommended termination resistance?",
    excerpt:
      "Using a 2m harness. Should both ends be terminated at 120Ω?",
    content:
      "For a standard CAN bus, both physical ends of the trunk are usually terminated with 120Ω each. Keep stubs short and avoid star layouts for best signal integrity.",
    subsystem: "electronics",
    tags: ["Electronics", "CAN Bus"],
    votes: 9,
    answers: 1,
    views: 142,
    author: "Priya M.",
    status: "Answered",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
    ],
  },
  {
    id: 3,
    title: "How do we estimate brake bias before track testing?",
    excerpt:
      "Need an initial target for front-to-rear brake bias before driver validation.",
    content:
      "A first-pass brake bias estimate usually comes from dynamic axle loads, tire radius, caliper piston area, master cylinder choice, and expected deceleration.",
    subsystem: "brakes",
    tags: ["Brakes", "Setup", "Testing"],
    votes: 11,
    answers: 2,
    views: 208,
    author: "Nikhil R.",
    status: "Open",
    images: [],
  },
  {
    id: 4,
    title: "How should we package the accumulator and cooling lines inside the chassis?",
    excerpt:
      "Looking for the best compromise between safety, access, and center of gravity.",
    content:
      "Packaging usually balances serviceability, rule compliance, mass centralization, cooling performance, and crash safety.",
    subsystem: "chassis",
    tags: ["Chassis", "Packaging", "Cooling"],
    votes: 8,
    answers: 2,
    views: 177,
    author: "Megha D.",
    status: "Answered",
    images: [],
  },
  {
    id: 5,
    title: "What differential ratio should we test first for low-speed acceleration tracks?",
    excerpt:
      "We want better drive out of corners without hurting top speed too much.",
    content:
      "Initial ratio selection depends on engine power band, tire size, expected track speeds, and shift strategy.",
    subsystem: "powertrain",
    tags: ["Powertrain", "Gearing", "Acceleration"],
    votes: 13,
    answers: 5,
    views: 266,
    author: "Vivek L.",
    status: "Answered",
    images: [],
  },
  {
    id: 6,
    title: "How did we calculate the wing endplate geometry for the 2024 rear wing?",
    excerpt:
      "Trying to benchmark downforce numbers versus last year’s package.",
    content:
      "Endplate geometry should normally be tied to vortex control, pressure equalization, drag management, and rules compliance.",
    subsystem: "aerodynamics",
    tags: ["Aerodynamics", "CFD", "2024-25"],
    votes: 21,
    answers: 6,
    views: 571,
    author: "Rohit S.",
    status: "Answered",
    images: [
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80"
    ],
  },
  {
    id: 7,
    title: "What should be included in the BOM for the steering assembly?",
    excerpt:
      "Need to standardize part numbering and supplier references for costing and procurement.",
    content:
      "A BOM should include raw materials, purchased components, machining steps, surface treatment, labor assumptions, and revision references.",
    subsystem: "cost-bom",
    tags: ["Cost", "BOM", "Procurement"],
    votes: 7,
    answers: 4,
    views: 121,
    author: "Karan P.",
    status: "Answered",
    images: [],
  },
  {
    id: 8,
    title: "Rule check: minimum cockpit opening dimensions for current season?",
    excerpt:
      "Need to verify compliance before freezing chassis hard points.",
    content:
      "Cockpit opening and egress rules must be checked directly against the latest rulebook before freezing the chassis design.",
    subsystem: "rules-regs",
    tags: ["Rules", "Compliance", "Chassis"],
    votes: 5,
    answers: 1,
    views: 93,
    author: "Sanjay T.",
    status: "Open",
    images: [],
  },
];
export const stats = {
  questions: 347,
  answers: 891,
  unanswered: 28,
  members: 42,
};