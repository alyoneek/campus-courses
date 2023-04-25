import { Button, Card } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import ModalForm from "../ModalForm";
import CourseForm from "../forms/CourseForm";
import CourseStatusForm from "../forms/CourseStatusForm";
import ShortCourseForm from "../forms/ShortCourseForm";

const gridFullStyle: React.CSSProperties = {
  width: "100%",
};

const gridHalfStyle: React.CSSProperties = {
  width: "50%",
};

const GeneralInfo = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isStatusModalOpen, setStatusModalOpen] = useState(false);
  const [editCourseForm] = useForm();
  const [statusCourseForm] = useForm();
  const test = false;

  const handleEditModalCancel = () => {
    setEditModalOpen(false);
  };

  const handleStatusModalCancel = () => {
    setStatusModalOpen(false);
  };

  const showEditModal = () => {
    setEditModalOpen(true);
  };

  const showStatusModal = () => {
    setStatusModalOpen(true);
  };

  return (
    <div className="mb-10">
      <ModalForm
        title="Редактирование курса"
        open={isEditModalOpen}
        onCancel={handleEditModalCancel}
        form={editCourseForm}
      >
        {test ? <ShortCourseForm /> : <CourseForm />}
      </ModalForm>

      <ModalForm
        title="Изменение статуса курса"
        open={isStatusModalOpen}
        onCancel={handleStatusModalCancel}
        form={statusCourseForm}
      >
        <CourseStatusForm />
      </ModalForm>

      <div className="flex justify-between mb-3">
        <h2>Основные данные курса</h2>
        <Button type="primary" size="large" onClick={showEditModal}>
          Редактировать
        </Button>
      </div>

      <Card>
        <Card.Grid hoverable={false} style={gridFullStyle}>
          <div className="flex justify-between align-middle">
            <div>
              <h3>Статус курса</h3>
              <p className="text-base">Открыт для записи</p>
            </div>
            <Button type="primary" onClick={showStatusModal}>
              Изменить
            </Button>
          </div>
        </Card.Grid>

        <Card.Grid hoverable={false} style={gridHalfStyle}>
          <h3>Учебный год</h3>
          <p className="text-base">2022-2023</p>
        </Card.Grid>

        <Card.Grid hoverable={false} style={gridHalfStyle}>
          <h3>Семестр</h3>
          <p className="text-base">Осенний</p>
        </Card.Grid>

        <Card.Grid hoverable={false} style={gridHalfStyle}>
          <h3>Всего мест</h3>
          <p className="text-base">100</p>
        </Card.Grid>

        <Card.Grid hoverable={false} style={gridHalfStyle}>
          <h3>Студентов зачислено</h3>
          <p className="text-base">5</p>
        </Card.Grid>

        <Card.Grid hoverable={false} style={gridFullStyle}>
          <h3>Зявок на рассмотрении</h3>
          <p className="text-base">3</p>
        </Card.Grid>
      </Card>
    </div>
  );
};

export default GeneralInfo;
