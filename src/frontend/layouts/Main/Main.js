import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../../components";
import {
  BookmarksPage,
  ExplorePage,
  FeedPage,
  ProfilePage,
  SignInPage,
  SignUpPage,
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
      <Route element={<SidebarWithHeader />}>
        <Route
          path="/profile/:username"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route
          path="/"
          element={
            <RequireAuth>
              <FeedPage />
            </RequireAuth>
          }
        />
        <Route
          path="/explore"
          element={
            <RequireAuth>
              <ExplorePage />
            </RequireAuth>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <RequireAuth>
              <BookmarksPage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
};

export { Main };
