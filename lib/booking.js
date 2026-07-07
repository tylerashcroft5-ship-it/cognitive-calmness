// ============================================================
// BOOKING SETTINGS (Cal.com)
// Live calendar: https://cal.com/cassieann
//
// Each session below links to https://cal.com/cassieann/<slug>.
// For the Book buttons to work, Cassie-Anne's Cal.com account must
// have an event type whose link matches each slug EXACTLY:
//
//   wellbeing-30  -> Guided Wellbeing check-in   (30 min · £40/mo)
//   wellbeing-60  -> Guided Wellbeing Plus        (60 min · £60/mo)
//   cbt-session   -> CBT therapy session          (60 min · £200/mo)
//   one-off       -> One-off support session      (60 min)
//   supervision   -> Clinical supervision         (60 min · £45/session)
//
// To change a slug in Cal.com: open the event type -> its URL/slug
// is the text after cal.com/cassieann/ -> set it to match above.
// ============================================================
export const CAL_CONFIGURED = true;           // booking is live
export const CAL_USERNAME = "cassieann";       // Cassie-Anne's Cal.com username

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
    slug: "one-off",
    name: "One-off support session",
    length: "60 minutes",
    note: "A single supportive appointment — no ongoing commitment.",
  },
  {
    slug: "supervision",
    name: "Clinical supervision",
    length: "60 minutes",
    note: "For trainee CBT therapists and mental health professionals.",
  },
];

export function calUrl(slug) {
  return `https://cal.com/${CAL_USERNAME}/${slug}`;
}
