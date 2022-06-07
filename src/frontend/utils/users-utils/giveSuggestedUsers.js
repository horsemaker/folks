const giveSuggestedUsers = (users, username, following) => {
  const followingUsernames = following.map((user) => user.username);
  return users.filter(
    (user) =>
      !followingUsernames.includes(user.username) && user.username !== username
  );
};

export { giveSuggestedUsers };
