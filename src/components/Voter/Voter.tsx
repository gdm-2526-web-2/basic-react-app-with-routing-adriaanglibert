import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import EventButton from "../EventButton/EventButton";

type Votes = {
  [key in (typeof courses)[number]["id"]]: number;
};

const courses = [
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
];

const defaultVotes = {
  "web-2": 0,
  "tech-2": 0,
  "dev-2": 0,
};

const Voter = () => {
  const [votes, setVotes] = useState<Votes>(defaultVotes);

  const webVotes = votes["web-2"];

  useEffect(() => {
    console.log("Web votes aangepast");
  }, [webVotes]);

  useEffect(() => {
    console.log("Component geladen!");
  }, []);

  const getTotalVotes = () => {
    return Object.values(votes).reduce((total, value) => total + value, 0);
  };

  const handleVoting = (id: string) => {
    setVotes({
      ...votes,
      [id]: votes[id] + 1,
    });
  };

  return (
    <>
      <header>
        <Heading level={2}>Pick your favorites!</Heading>
      </header>

      <section className="grid">
        {courses.map((course) => (
          <article key={course.id}>
            <header>{course.label}</header>
            <p>Votes: {votes[course.id]}</p>

            <EventButton
              label={`Vote for ${course.label}`}
              onClick={() => handleVoting(course.id)}
            />
          </article>
        ))}
      </section>

      <aside>Total votes: {getTotalVotes()}</aside>
    </>
  );
};

export default Voter;
