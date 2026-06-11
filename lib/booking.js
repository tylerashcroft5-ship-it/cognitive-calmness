// ============================================================
// BOOKING SETTINGS (Cal.com)
// 1. Create a free account at cal.com
// 2. Add event types matching the slugs below
// 3. Set CAL_USERNAME and flip CAL_CONFIGURED to true
// Until then, every Book button routes to the enquiry form.
// ============================================================
export const CAL_CONFIGURED = false;          // EDIT: flip to true when Cal.com is set up
export const CAL_USERNAME = "cognitive-calmness"; // EDIT: the client's Cal.com username

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
