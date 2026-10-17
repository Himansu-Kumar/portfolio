// About section content. Professional details mirror context/experience.md;
// personal details are exactly what Himansu provided (2026-10-18). Do not add
// other personal facts, stats, or quotes.

export const about = {
  headline: "I build things for the web",
  aside: "Off the clock, there’s usually a match on, or something good to eat.",
  // Professional snapshot, deliberately short: the projects show the work.
  spec: [
    { key: "Studying", value: "B.Tech, Computer Science & Engineering" },
    { key: "At", value: "NIT Rourkela · 2024 — 2028" },
    { key: "Into", value: "Software engineering, full-stack, backend systems" },
    { key: "Building", value: "Practical projects, end to end" },
  ],
  cricket: {
    index: "2.1",
    title: "Cricket",
    headline: "Watching matches. Following Kohli.",
    // Shirt number used as a typographic motif only, not a statistic.
    numeral: "18",
    card: [
      { key: "Batter", value: "V. Kohli" },
      { key: "No.", value: "18" },
      { key: "Me", value: "Watching" },
    ],
  },
  football: {
    index: "2.2",
    title: "Football",
    headline: "Two clubs, one idol.",
    numeral: "7",
    clubs: ["Manchester United", "Real Madrid"],
    idol: "Cristiano",
    // Provided by Himansu; attributed to Cristiano Ronaldo.
    quote: "Your love makes me strong, your hate makes me unstoppable.",
  },
  mentality: {
    label: "Why Kohli & Ronaldo",
    traits: ["Consistency", "Competitiveness", "Discipline"],
    note: "Worth bringing to code too.",
  },
  food: {
    index: "2.3",
    title: "Food",
    headline: "Always up for discovering good food.",
    menu: [
      { dish: "Biryani", note: "always" },
      { dish: "Dahi Bara", note: "yes, please" },
    ],
  },
  movies: {
    index: "2.4",
    title: "Movies",
  },
} as const;
