import CoursesList from "@/components/CoursesList";
import CreateCourseForm from "@/components/forms/CreateCourseForm";
import ModalForm from "@/components/ModalForm";
import DataContent from "@/layouts/content/DataContent";
import { history } from "@/router/history";
import { useAppDispatch, useAppSelector } from "@/store";
import { getCourses } from "@/store/features/groups/groupsActions";
import { Button, Form } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Group = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [createCourseForm] = Form.useForm();

  const { idGroup } = useParams();
  const groupName = history.location?.state?.groupName;

  const dispatch = useAppDispatch();
  const courses = useAppSelector((state) => state.groups.currentGroupCourses);

  useEffect(() => {
    if (idGroup) dispatch(getCourses(idGroup));
  }, [idGroup]);

  const showCreateModal = () => {
    setCreateModalOpen(true);
  };

  const handleCreateModalCancel = () => {
    setCreateModalOpen(false);
  };

  return (
    <DataContent title={`Группа - ${groupName}`}>
      <Button
        type="primary"
        htmlType="button"
        className="mb-2"
        onClick={showCreateModal}
      >
        Создать
      </Button>

      <CoursesList courses={courses} />

      <ModalForm
        title="Создание курса"
        open={isCreateModalOpen}
        onCancel={handleCreateModalCancel}
        form={createCourseForm}
      >
        <CreateCourseForm afterFinish={handleCreateModalCancel} />
      </ModalForm>
    </DataContent>
  );
};

export default Group;
