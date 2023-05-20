import { Button, Tag } from "antd";
import { useForm } from "antd/es/form/Form";
import { FC, useState } from "react";

import { CertificationType, IStudent } from "@/api/courses/types";
import ModalForm from "@/components/ModalForm";
import { StudentMarks, marksColors } from "@/helpers/constants";
import { getCourseId } from "@/modules/course/store/courseSelectors";
import { useAppSelector } from "@/store";
import ResultForm from "./ResultForm";

interface CertificationProps {
  studentInfo: IStudent;
}

const Certification: FC<CertificationProps> = ({ studentInfo }) => {
  const [isResultModalOpen, setResultModalOpen] = useState(false);
  const [markType, setMarkType] = useState<CertificationType>("Midterm");
  const [resultForm] = useForm();
  const idCourse = useAppSelector(getCourseId);

  const showResultModal = (value: CertificationType) => {
    setMarkType(value);
    setResultModalOpen(true);
  };

  const handleResultModalCancel = () => {
    setResultModalOpen(false);
  };

  return (
    <>
      <ModalForm
        title={`Изменение отметки ${
          markType === "Midterm" ? "промежуточной" : "итоговой"
        } аттестации`}
        open={isResultModalOpen}
        onCancel={handleResultModalCancel}
        form={resultForm}
      >
        <ResultForm
          markType={markType}
          initial={
            markType === "Midterm"
              ? studentInfo.midtermResult
              : studentInfo.finalResult
          }
          studentInfo={studentInfo}
          idCourse={idCourse}
        />
      </ModalForm>

      <div className="flex gap-10">
        <div>
          <Button
            className="text-base"
            type="link"
            onClick={() => showResultModal("Midterm")}
          >
            Промежуточная аттестация
          </Button>
          -
          <Tag color={marksColors[studentInfo.midtermResult]} className="ml-2">
            {StudentMarks[studentInfo.midtermResult]}
          </Tag>
        </div>
        <div>
          <Button
            className="text-base"
            type="link"
            onClick={() => showResultModal("Final")}
          >
            Финальная аттестация
          </Button>
          -
          <Tag color={marksColors[studentInfo.finalResult]} className="ml-2">
            {StudentMarks[studentInfo.finalResult]}
          </Tag>
        </div>
      </div>
    </>
  );
};

export default Certification;
