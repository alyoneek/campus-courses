import { Button, Tag } from "antd";
import { useForm } from "antd/es/form/Form";
import { FC, useState } from "react";
import { useParams } from "react-router-dom";

import { CertificationType, IStudent, MarkType } from "@/api/courses/types";
import ModalForm from "@/components/ModalForm";
import ResultForm from "@/components/forms/ResultForm";
import { StudentMarks, marksColors } from "@/helpers/constants";

interface CertificationProps {
  studentInfo: IStudent;
  midtermResult: MarkType;
  finalResult: MarkType;
}

const Certification: FC<CertificationProps> = ({
  studentInfo,
  midtermResult,
  finalResult,
}) => {
  const [isResultModalOpen, setResultModalOpen] = useState(false);
  const [markType, setMarkType] = useState<CertificationType>("Midterm");
  const [resultForm] = useForm();
  const { idCourse } = useParams();

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
          initial={markType === "Midterm" ? midtermResult : finalResult}
          studentInfo={studentInfo}
          idCourse={idCourse as string}
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
          <Tag color={marksColors[midtermResult]} className="ml-2">
            {StudentMarks[midtermResult]}
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
          <Tag color={marksColors[finalResult]} className="ml-2">
            {StudentMarks[finalResult]}
          </Tag>
        </div>
      </div>
    </>
  );
};

export default Certification;
