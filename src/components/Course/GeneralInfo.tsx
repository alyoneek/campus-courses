import { Button, Card } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";

import ModalForm from "@/components/ModalForm";
import CourseForm from "@/components/forms/CourseForm";
import CourseStatusForm from "@/components/forms/CourseStatusForm";
import ShortCourseForm from "@/components/forms/ShortCourseForm";
import {
  CourseStatuses,
  Semesters,
  courseStatusColors,
} from "@/helpers/constants";
import { useAppSelector } from "@/store";

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

  const courseInfo = useAppSelector((state) => state.courses.courseInfo);

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

  if (!courseInfo) return null;

  return (
    <>
      <div className="mb-10">
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
                <p
                  className={`text-base text-${
                    courseStatusColors[courseInfo.status]
                  }-600`}
                >
                  {CourseStatuses[courseInfo.status]}
                </p>
              </div>
              <Button type="primary" onClick={showStatusModal}>
                Изменить
              </Button>
            </div>
          </Card.Grid>

          <Card.Grid hoverable={false} style={gridHalfStyle}>
            <h3>Учебный год</h3>
            <p className="text-base">{`${courseInfo.startYear} - ${
              courseInfo.startYear + 1
            }`}</p>
          </Card.Grid>

          <Card.Grid hoverable={false} style={gridHalfStyle}>
            <h3>Семестр</h3>
            <p className="text-base">{Semesters[courseInfo.semester]}</p>
          </Card.Grid>

          <Card.Grid hoverable={false} style={gridHalfStyle}>
            <h3>Всего мест</h3>
            <p className="text-base">{courseInfo.maximumStudentsCount}</p>
          </Card.Grid>

          <Card.Grid hoverable={false} style={gridHalfStyle}>
            <h3>Студентов зачислено</h3>
            <p className="text-base">{courseInfo.studentsEnrolledCount}</p>
          </Card.Grid>

          <Card.Grid hoverable={false} style={gridFullStyle}>
            <h3>Зявок на рассмотрении</h3>
            <p className="text-base">{courseInfo.studentsInQueueCount}</p>
          </Card.Grid>
        </Card>
      </div>

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
    </>
  );
};

export default GeneralInfo;
