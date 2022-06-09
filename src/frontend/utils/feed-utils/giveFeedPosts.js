import { giveFilteredFeedPosts } from "./giveFilteredFeedPosts";
import { giveSortedFeedPosts } from "./giveSortedFeedPosts";

const giveFeedPosts = (posts, following, currentUsername, sortBy) => {
  const filteredFeedPosts = giveFilteredFeedPosts(
    posts,
    following,
    currentUsername
  );

  const sortedFeedPosts = giveSortedFeedPosts(filteredFeedPosts, sortBy);

  return sortedFeedPosts;
};

export { giveFeedPosts };
