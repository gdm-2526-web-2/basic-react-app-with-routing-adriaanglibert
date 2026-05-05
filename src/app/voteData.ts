export const courses = [
  {
    label: "Web 2",
    id: "web-2",
  },
  {
    label: "Tech 2",
    id: "tech-2",
  },
  {
    label: "Dev 2",
    id: "dev-2",
  },
] as const;

export type CourseId = (typeof courses)[number]["id"];

export type Votes = Record<CourseId, number>;

export const defaultVotes: Votes = {
  "web-2": 0,
  "tech-2": 0,
  "dev-2": 0,
};
