import { defaultVotes, type CourseId, type Votes } from "./voteData";

type VoteAction =
  | { type: "VOTE"; payload: CourseId }
  | { type: "REMOVE_VOTE"; payload: CourseId }
  | { type: "RESET_VOTE"; payload: CourseId }
  | { type: "RESET_ALL_VOTES" };

const voteReducer = (votes: Votes, action: VoteAction) => {
  switch (action.type) {
    case "VOTE":
      return {
        ...votes,
        [action.payload]: votes[action.payload] + 1,
      };
    case "REMOVE_VOTE":
      return {
        ...votes,
        [action.payload]: votes[action.payload] - 1,
      };
    case "RESET_VOTE":
      return {
        ...votes,
        [action.payload]: 0,
      };
    case "RESET_ALL_VOTES":
      return defaultVotes;
    default:
      return votes;
  }
};

export default voteReducer;
