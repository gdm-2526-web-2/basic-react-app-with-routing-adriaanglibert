import { useEffect, useReducer } from "react";
import Heading from "../Heading/Heading";
import EventButton from "../EventButton/EventButton";
import voteReducer from "../../app/votes";
import { courses, defaultVotes } from "../../app/voteData";

const Voter = () => {
  const [votes, dispatch] = useReducer(voteReducer, defaultVotes);

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
              onClick={() => dispatch({ type: "VOTE", payload: course.id })}
            />

            <EventButton
              label={`Remove vote for ${course.label}`}
              onClick={() =>
                dispatch({ type: "REMOVE_VOTE", payload: course.id })
              }
            />
          </article>
        ))}
      </section>

      <aside>Total votes: {getTotalVotes()}</aside>
    </>
  );
};

export default Voter;
