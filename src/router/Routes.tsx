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
import RequireAuth from "./RequireAuth";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<MainLayout />}>
        {/* public routes */}
        <Route index element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[Roles.isAdmin]} />}>
          <Route path="groups">
            <Route index element={<Groups />} />
            <Route path=":id" element={<Group />} />
          </Route>
          <Route path="courses">
            <Route path=":id" element={<Course />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  );
};

export default Routes;
