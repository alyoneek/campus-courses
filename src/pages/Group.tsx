import { Button, Form } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CoursesList from "@/components/CoursesList";
import ModalForm from "@/components/ModalForm";
import CourseForm from "@/components/forms/CourseForm";
import DataContent from "@/layouts/content/DataContent";
import RequireAuthComponent from "@/router/RequireAuthComponent";
import { history } from "@/router/history";
import { useAppDispatch, useAppSelector } from "@/store";
import { Roles } from "@/store/features/account/accountSlice";
import { getCourses } from "@/store/features/groups/groupsActions";

const Group = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [createCourseForm] = Form.useForm();

  const { idGroup } = useParams();
  const groupName = history.location?.state?.groupName;

  const dispatch = useAppDispatch();
  const courses = useAppSelector((state) => state.groups.currentGroupCourses);

  useEffect(() => {
    if (idGroup) dispatch(getCourses(idGroup));
  }, [dispatch, idGroup]);

  const showCreateModal = () => {
    setCreateModalOpen(true);
  };

  const handleCreateModalCancel = () => {
    setCreateModalOpen(false);
  };

  return (
    <DataContent title={`Группа - ${groupName}`}>
      <RequireAuthComponent allowedRoles={[Roles.isAdmin]}>
        <Button
          type="primary"
          htmlType="button"
          className="mb-2"
          onClick={showCreateModal}
        >
          Создать
        </Button>
      </RequireAuthComponent>

      <CoursesList courses={courses} />

      <ModalForm
        title="Создание курса"
        open={isCreateModalOpen}
        onCancel={handleCreateModalCancel}
        form={createCourseForm}
      >
        <CourseForm idGroup={idGroup as string} />
      </ModalForm>
    </DataContent>
  );
};

export default Group;
