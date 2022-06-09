import { v4 as uuid } from "uuid";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  // Post 1
  {
    _id: uuid(),
    content: "The journey of a thousand miles begins with one step.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Prathmesh",
          lastName: "Jagtap",
          username: "prathmesh_20",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Yash",
    lastName: "Ghodekar",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
    username: "horsemaker",
    createdAt: new Date("June 1, 2022"),
    updatedAt: new Date("June 1, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rushikesh",
        lastName: "Tarapure",
        username: "Neo_MonkStar",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 1
  // Post 2
  {
    _id: uuid(),
    content: "That which does not kill us makes us stronger.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Narhari",
    lastName: "Kale",
    username: "NarhariKale4",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
    createdAt: new Date("May 31, 2022"),
    updatedAt: new Date("May 31, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 2
  // Post 3
  {
    _id: uuid(),
    content:
      "Memories warm you up from the inside. But they also tear you apart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Yash",
    lastName: "Ghodekar",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
    username: "horsemaker",
    createdAt: new Date("June 2, 2022"),
    updatedAt: new Date("June 2, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 3
  // Post 4
  {
    _id: uuid(),
    content:
      "Memories warm you up from the inside. But they also tear you apart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Yash",
    lastName: "Ghodekar",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
    username: "horsemaker",
    createdAt: new Date("June 3, 2022"),
    updatedAt: new Date("June 3, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 4
  // Post 5
  {
    _id: uuid(),
    content:
      "Memories warm you up from the inside. But they also tear you apart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Prathmesh",
    lastName: "Jagtap",
    username: "prathmesh_20",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    createdAt: new Date("May 28, 2022"),
    updatedAt: new Date("May 28, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 5
  // Post 6
  {
    _id: uuid(),
    content:
      "Memories warm you up from the inside. But they also tear you apart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Vijay",
    lastName: "Tembugade",
    username: "vijaytembugade",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1387873189917720581/3NfEA_sE_400x400.jpg",
    createdAt: new Date("June 4, 2022"),
    updatedAt: new Date("June 4, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 6
  // Post 7
  {
    _id: uuid(),
    content:
      "Memories warm you up from the inside. But they also tear you apart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Prathmesh",
    lastName: "Jagtap",
    username: "prathmesh_20",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    createdAt: new Date("May 27, 2022"),
    updatedAt: new Date("May 27, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 7
  // Post 8
  {
    _id: uuid(),
    content:
      "Memories warm you up from the inside. But they also tear you apart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Vijay",
    lastName: "Tembugade",
    username: "vijaytembugade",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1387873189917720581/3NfEA_sE_400x400.jpg",
    createdAt: new Date("June 5, 2022"),
    updatedAt: new Date("June 5, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 8
  // Post 9
  {
    _id: uuid(),
    content:
      "Memories warm you up from the inside. But they also tear you apart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Prathmesh",
    lastName: "Jagtap",
    username: "prathmesh_20",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    createdAt: new Date("May 24, 2022"),
    updatedAt: new Date("May 24, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 9
  // Post 10
  {
    _id: uuid(),
    content:
      "Memories warm you up from the inside. But they also tear you apart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Rushikesh",
    lastName: "Tarapure",
    username: "Neo_MonkStar",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
    createdAt: new Date("June 6, 2022"),
    updatedAt: new Date("June 6, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 10
  // Post 11
  {
    _id: uuid(),
    content:
      "Memories warm you up from the inside. But they also tear you apart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Prathmesh",
    lastName: "Jagtap",
    username: "prathmesh_20",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    createdAt: new Date("June 6, 2022"),
    updatedAt: new Date("June 6, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 11
  // Post 12
  {
    _id: uuid(),
    content:
      "Memories warm you up from the inside. But they also tear you apart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Prathmesh",
    lastName: "Jagtap",
    username: "prathmesh_20",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    createdAt: new Date("June 7, 2022"),
    updatedAt: new Date("June 7, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 12
  // Post 13
  {
    _id: uuid(),
    content:
      "Memories warm you up from the inside. But they also tear you apart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Rushikesh",
    lastName: "Tarapure",
    username: "Neo_MonkStar",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
    createdAt: new Date("May 6, 2022"),
    updatedAt: new Date("May 6, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 13
  // Post 14
  {
    _id: uuid(),
    content:
      "Memories warm you up from the inside. But they also tear you apart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Miheer",
    lastName: "Tamkhane",
    username: "miheertamkhane",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
    createdAt: new Date("May 16, 2022"),
    updatedAt: new Date("May 16, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 14
  // Post 15
  {
    _id: uuid(),
    content:
      "Memories warm you up from the inside. But they also tear you apart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Prathmesh",
    lastName: "Jagtap",
    username: "prathmesh_20",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    createdAt: new Date("May 26, 2022"),
    updatedAt: new Date("May 26, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 15
  // Post 16
  {
    _id: uuid(),
    content:
      "Memories warm you up from the inside. But they also tear you apart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Vedant",
    lastName: "Lahane",
    username: "LahaneVedant",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
    createdAt: new Date("May 20, 2022"),
    updatedAt: new Date("May 20, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 16
  // Post 17
  {
    _id: uuid(),
    content:
      "Memories warm you up from the inside. But they also tear you apart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Miheer",
    lastName: "Tamkhane",
    username: "miheertamkhane",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
    createdAt: new Date("May 18, 2022"),
    updatedAt: new Date("May 18, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 17
  // Post 18
  {
    _id: uuid(),
    content:
      "Memories warm you up from the inside. But they also tear you apart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Prathmesh",
    lastName: "Jagtap",
    username: "prathmesh_20",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    createdAt: new Date("May 15, 2022"),
    updatedAt: new Date("May 15, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 18
  // Post 19
  {
    _id: uuid(),
    content:
      "Memories warm you up from the inside. But they also tear you apart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Prathmesh",
    lastName: "Jagtap",
    username: "prathmesh_20",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    createdAt: new Date("May 15, 2022"),
    updatedAt: new Date("May 15, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 19
  // Post 20
  {
    _id: uuid(),
    content:
      "Memories warm you up from the inside. But they also tear you apart.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rushikesh",
          lastName: "Tarapure",
          username: "Neo_MonkStar",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Vedant",
          lastName: "Lahane",
          username: "LahaneVedant",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        },
        {
          _id: uuid(),
          firstName: "Narhari",
          lastName: "Kale",
          username: "NarhariKale4",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Vedant",
    lastName: "Lahane",
    username: "LahaneVedant",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
    createdAt: new Date("May 14, 2022"),
    updatedAt: new Date("May 14, 2022"),
    comments: [
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 20
];
