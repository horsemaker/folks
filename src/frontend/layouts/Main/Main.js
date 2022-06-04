import { Route, Routes } from "react-router-dom";
import { SignInPage, SignUpPage } from "../../pages";
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
        <Route path="/profile" element={<>Profile</>} />
        <Route path="/" element={<>Feed</>} />
        <Route path="/explore" element={<>Explore</>} />
        <Route path="/bookmarks" element={<>Bookmarks</>} />
      </Route>
    </Routes>
  );
};

export { Main };
