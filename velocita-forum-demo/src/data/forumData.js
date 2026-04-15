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

export const questions = [
  {
    id: 1,
    title: "What camber curve should we target for the front suspension in a tight autocross layout?",
    excerpt:
      "We are running -1.5° static camber but gaining too much positive camber in roll.",
    content:
      "For a tight autocross setup, the front suspension should preserve tire contact patch during transient cornering.",
    subsystem: "suspension",
    tags: ["Suspension", "Kinematics", "2024-25"],
    votes: 14,
    answers: 3,
    views: 289,
    author: "Arjun K.",
    status: "Answered",
    images: [],
  },
  {
    id: 2,
    title: "CAN bus wiring — recommended termination resistance?",
    excerpt:
      "Using a 2m harness. Should both ends be terminated at 120Ω?",
    content:
      "For a standard CAN bus, both physical ends of the trunk are usually terminated with 120Ω each.",
    subsystem: "electronics",
    tags: ["Electronics", "CAN Bus"],
    votes: 9,
    answers: 1,
    views: 142,
    author: "Priya M.",
    status: "Answered",
    images: [],
  },
];

export const stats = {
  questions: 347,
  answers: 891,
  unanswered: 28,
  members: 42,
};