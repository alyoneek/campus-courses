import { Card } from "antd";

import useRoles from "@/hooks/useRoles";
import DeleteCourseButton from "@/modules/course/components/DeleteCourse/DeleteCourseButton";
import EditCourseButton from "@/modules/course/components/EditCourse/EditCourseButton";
import EditCourseStatusButton from "@/modules/course/components/EditCourseStatus/EditCourseStatusButton";
import SignupCourseButton from "@/modules/course/components/SignupCourse/SignupCourseButton";
import { CourseStatuses, Semesters } from "@/modules/course/helpers/constants";
import { useAppSelector } from "@/store";
import * as courseSelectors from "@modules/course/store/courseSelectors";

import styles from "./courseGeneralInfo.module.scss";

const gridFullStyle: React.CSSProperties = {
  width: "100%",
};

const gridHalfStyle: React.CSSProperties = {
  width: "50%",
};

const CourseGeneralInfo = () => {
  const idCourse = useAppSelector(courseSelectors.getCourseId);
  const courseInfo = useAppSelector(courseSelectors.getCourseInfo);

  const { isUserCourseEditor, isUserCourseSigner } = useRoles();

  console.log(isUserCourseSigner(idCourse));

  return (
    <>
      <div className="mb-10">
        <div className="flex justify-between mb-3 gap-5 sm:flex-row flex-col">
          <h2>Основные данные курса</h2>

          <div className="flex gap-10 sm:flex-row flex-col">
            {courseInfo.status === "OpenForAssigning" &&
              isUserCourseSigner(idCourse) && <SignupCourseButton />}

            {isUserCourseEditor(idCourse) && (
              <div className="flex gap-2">
                <EditCourseButton />
                <DeleteCourseButton />
              </div>
            )}
          </div>
        </div>

        <Card>
          <Card.Grid hoverable={false} style={gridFullStyle}>
            <div className="flex justify-between align-middle">
              <div>
                <h3>Статус курса</h3>
                <p className={`text-base ${styles[courseInfo.status]}`}>
                  {CourseStatuses[courseInfo.status]}
                </p>
              </div>
              {isUserCourseEditor(idCourse) && <EditCourseStatusButton />}
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
    </>
  );
};

export default CourseGeneralInfo;
