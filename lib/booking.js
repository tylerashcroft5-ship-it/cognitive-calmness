// ============================================================
// BOOKING SETTINGS (Cal.com)
// Live calendar: https://cal.com/cassieann
//
// The site refers to each session by a short internal key (below).
// SLUG_MAP translates each key to the real Cal.com event-type slug,
// so the Book buttons open Cassie-Anne's actual calendar:
//
//   internal key   ->  cal.com/cassieann/<slug>
//   wellbeing-30   ->  guided-wellbeing        (30 min · £40/mo)
//   wellbeing-60   ->  guided-wellbeing-plus   (60 min · £60/mo)
//   cbt-session    ->  cbt-therapy-programme   (60 min · £200/mo)
//   supervision    ->  clinical-supervision    (60 min · £45/session)
//
// If a Cal.com link ever changes, update SLUG_MAP — nothing else.
// ============================================================
export const CAL_CONFIGURED = true;           // booking is live
export const CAL_USERNAME = "cassieann";       // Cassie-Anne's Cal.com username

// Site session key -> real Cal.com event slug.
const SLUG_MAP = {
  "wellbeing-30": "guided-wellbeing",
  "wellbeing-60": "guided-wellbeing-plus",
  "cbt-session": "cbt-therapy-programme",
  "supervision": "clinical-supervision",
};

export const sessions = [
  {
    slug: "wellbeing-30",
    name: "Guided Wellbeing check-in",
    length: "30 minutes",
    note: "Monthly appointment for Guided Wellbeing members.",
  },
  {
    slug: "wellbeing-60",
    name: "Guided Wellbeing Plus session",
    length: "60 minutes",
    note: "Monthly appointment for Guided Wellbeing Plus members.",
  },
  {
    slug: "cbt-session",
    name: "CBT therapy session",
    length: "60 minutes",
    note: "Weekly session within the CBT Therapy Programme.",
  },
  {
    slug: "supervision",
    name: "Clinical supervision",
    length: "60 minutes",
    note: "For trainee CBT therapists and mental health professionals.",
  },
];

export function calUrl(slug) {
  const eventSlug = SLUG_MAP[slug] || slug;
  return `https://cal.com/${CAL_USERNAME}/${eventSlug}`;
}
