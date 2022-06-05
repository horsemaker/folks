import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  // User 1
  {
    _id: uuid(),
    firstName: "Yash",
    lastName: "Ghodekar",
    username: "horsemaker",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
    bio: "because, why not? 🦄",
    website: "https://peerlist.io/horsemaker",
    following: [
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
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Narhari",
        lastName: "Kale",
        username: "NarhariKale4",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vijay",
        lastName: "Tembugade",
        username: "vijaytembugade",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1387873189917720581/3NfEA_sE_400x400.jpg",
      },
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
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "miheertamkhane",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vedant",
        lastName: "Lahane",
        username: "LahaneVedant",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
      },
    ],
    password: "horsemaker123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 1
  // User 2
  {
    _id: uuid(),
    firstName: "Narhari",
    lastName: "Kale",
    username: "NarhariKale4",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
    bio: "The best things come from living outside of your comfort zone",
    website: "https://peerlist.io/narhari_k",
    following: [
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Vijay",
        lastName: "Tembugade",
        username: "vijaytembugade",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1387873189917720581/3NfEA_sE_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    password: "NarhariKale4123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 2
  // User 3
  {
    _id: uuid(),
    firstName: "Vijay",
    lastName: "Tembugade",
    username: "vijaytembugade",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1387873189917720581/3NfEA_sE_400x400.jpg",
    bio: "Success is in my veins",
    website: "https://peerlist.io/vijaytembugade",
    following: [
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Narhari",
        lastName: "Kale",
        username: "NarhariKale4",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
      },
    ],
    password: "vijaytembugade123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 3
  // User 4
  {
    _id: uuid(),
    firstName: "Rushikesh",
    lastName: "Tarapure",
    username: "Neo_MonkStar",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
    bio: "Simplicity is the key to happiness",
    website: "https://peerlist.io/t007rushi",
    following: [
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    password: "Neo_MonkStar123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 4
  // User 5
  {
    _id: uuid(),
    firstName: "Prathmesh",
    lastName: "Jagtap",
    username: "prathmesh_20",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    bio: "Simplicity is the key to happiness",
    website: "https://peerlist.io/prathmesh",
    following: [
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    password: "prathmesh_20123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 5
  // User 6
  {
    _id: uuid(),
    firstName: "Miheer",
    lastName: "Tamkhane",
    username: "miheertamkhane",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
    bio: "In a world of worriers, be a warrior",
    website: "https://peerlist.io/miheer",
    following: [
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    password: "miheertamkhane123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 6
  // User 7
  {
    _id: uuid(),
    firstName: "Vedant",
    lastName: "Lahane",
    username: "LahaneVedant",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg",
    bio: "Sometimes you gotta run before you can walk",
    website: "https://vedantlahane.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    password: "LahaneVedant123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 7
];
