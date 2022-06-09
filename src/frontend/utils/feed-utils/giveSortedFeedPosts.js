const giveSortedFeedPosts = (posts, sortBy) => {
  if (sortBy === "New to Old") {
    return [...posts].sort(
      (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
    );
  } else if (sortBy === "Old to New") {
    return [...posts].sort(
      (a, b) => Date.parse(a.updatedAt) - Date.parse(b.updatedAt)
    );
  }
  return posts;
};

export { giveSortedFeedPosts };
