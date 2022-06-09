import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../../components";
import {
  BookmarksPage,
  ExplorePage,
  FeedPage,
  ProfilePage,
  SignInPage,
  SignUpPage,
  SinglePostPage,
} from "../../pages";
import { Header } from "../Header";
import { SidebarWithHeader } from "../SidebarWithHeader";

const Main = () => {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
      <Route element={<RequireAuth />}>
        <Route element={<SidebarWithHeader />}>
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/" element={<FeedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          <Route path="/post/:postId" element={<SinglePostPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export { Main };
