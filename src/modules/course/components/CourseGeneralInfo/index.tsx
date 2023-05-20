import { Card } from "antd";

import {
  CourseStatuses,
  Semesters,
  courseStatusColors,
} from "@/helpers/constants";
import useRoles from "@/hooks/useRoles";
import EditCourseButton from "@/modules/course/components/EditCourse/EditCourseButton";
import EditCourseStatusButton from "@/modules/course/components/EditCourseStatus/EditCourseStatusButton";
import { useAppSelector } from "@/store";
import * as courseSelectors from "@modules/course/store/courseSelectors";
import DeleteCourseButton from "./components/DeleteCourseButton";
import SignupCourseButton from "./components/SignupCourseButton";

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

  return (
    <>
      <div className="mb-10">
        <div className="flex justify-between mb-3">
          <h2>Основные данные курса</h2>

          {courseInfo.status === "OpenForAssigning" &&
            isUserCourseSigner(idCourse) && <SignupCourseButton />}

          {isUserCourseEditor(idCourse) && (
            <div>
              <EditCourseButton />
              <DeleteCourseButton />
            </div>
          )}
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
              <EditCourseStatusButton />
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
