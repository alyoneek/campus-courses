import { Routes as ReactRoutes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import { Roles } from "@/modules/account";
import Course from "@/pages/Course";
import Group from "@/pages/Group";
import Groups from "@/pages/Groups";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import OwnCourses from "@/pages/OwnCourses";
import Profile from "@/pages/Profile";
import Registration from "@/pages/Registration";
import TeachingCourses from "@/pages/TeachingCourses";
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

          <Route path="courses">
            <Route path=":idCourse" element={<Course />} />
            <Route
              element={<RequireAuthRoute allowedRoles={[Roles.isStudent]} />}
            >
              <Route path="my" element={<OwnCourses />} />
            </Route>
            <Route
              element={<RequireAuthRoute allowedRoles={[Roles.isTeacher]} />}
            >
              <Route path="teaching" element={<TeachingCourses />} />
            </Route>
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  );
};

export default Routes;
