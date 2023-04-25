import { Button, List } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";

import TeacherItem from "@/components/Course/TeacherItem";
import ModalForm from "@/components/ModalForm";
import TeacherForm from "@/components/forms/TeacherForm";

const teachers = [
  { name: "Препод1111111111111111", email: "cool@gmail.com", isMain: true },
  { name: "Препод2", email: "cool2@gmail.com", isMain: false },
  { name: "Препод3", email: "cool3@gmail.com", isMain: false },
];

const TeachersBlock = () => {
  const [isTeacherModalOpen, setTeacherModalOpen] = useState(false);
  const [teacherForm] = useForm();

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
        renderItem={(item) => <TeacherItem data={item} />}
      />
    </>
  );
};

export default TeachersBlock;
