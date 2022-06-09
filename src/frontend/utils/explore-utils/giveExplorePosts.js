const giveExplorePosts = (posts, show) => {
  if (show === "Latest") {
    return [...posts].sort(
      (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
    );
  } else if (show === "Trending") {
    return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
  }
  return posts;
};

export { giveExplorePosts };
