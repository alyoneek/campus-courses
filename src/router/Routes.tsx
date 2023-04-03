import MainLayout from "@/layouts/MainLayout";
import Course from "@/pages/Course";
import Group from "@/pages/Group";
import Groups from "@/pages/Groups";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Profile from "@/pages/Profile";
import Registration from "@/pages/Registration";
import { Roles } from "@/store/features/account/accountSlice";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import RequireAuthRoute from "./RequireAuthRoute";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<MainLayout />}>
        {/* public routes */}
        <Route index element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuthRoute />}>
          <Route path="profile" element={<Profile />} />
          <Route path="groups">
            <Route index element={<Groups />} />
            <Route path=":idGroup" element={<Group />} />
          </Route>
        </Route>

        <Route element={<RequireAuthRoute allowedRoles={[Roles.isAdmin]} />}>
          <Route path="courses">
            <Route path=":idCourse" element={<Course />} />
            <Route path="my" element={<Course />} />
            <Route path="teaching" element={<Course />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  );
};

export default Routes;
