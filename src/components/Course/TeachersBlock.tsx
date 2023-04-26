import { Button, List } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";

import TeacherItem from "@/components/Course/TeacherItem";
import ModalForm from "@/components/ModalForm";
import TeacherForm from "@/components/forms/TeacherForm";
import { useAppSelector } from "@/store";

const TeachersBlock = () => {
  const [isTeacherModalOpen, setTeacherModalOpen] = useState(false);
  const [teacherForm] = useForm();

  const teachers = useAppSelector((state) => state.courses.allTeachers);

  const showTeacherModal = () => {
    setTeacherModalOpen(true);
  };

  const handleTeacherModalCancel = () => {
    setTeacherModalOpen(false);
  };

  return (
    <>
      <ModalForm
        title="Создание уведомления"
        open={isTeacherModalOpen}
        onCancel={handleTeacherModalCancel}
        form={teacherForm}
      >
        <TeacherForm />
      </ModalForm>

      <Button type="primary" className="my-3" onClick={showTeacherModal}>
        Добавить преподавателя
      </Button>

      <List
        itemLayout="horizontal"
        dataSource={teachers}
        renderItem={(item) => <TeacherItem teacherInfo={item} />}
      />
    </>
  );
};

export default TeachersBlock;
