import MainLayout from "@/layouts/MainLayout";
import Course from "@/pages/Course";
import Group from "@/pages/Group";
import Groups from "@/pages/Groups";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import Registration from "@/pages/Registration";
import { Route, Routes as ReactRoutes } from "react-router-dom";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<MainLayout />}>
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="groups">
          <Route index element={<Groups />} />
          <Route path=":id" element={<Group />} />
        </Route>
        <Route path="courses">
          <Route path=":id" element={<Course />} />
        </Route>
      </Route>
      <Route path="*" element={<h1>fdg</h1>} />
    </ReactRoutes>
  );
};

export default Routes;
