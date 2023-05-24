import { useForm } from "antd/es/form/Form";
import { FC, useState } from "react";

import ModalForm from "@/components/ModalForm";
import { CertificationType, IStudent } from "@/modules/course/api/types";
import { getCourseId } from "@/modules/course/store/courseSelectors";
import { useAppSelector } from "@/store";
import ResultButton from "./ResultButton";
import ResultForm from "./ResultForm";

interface CertificationProps {
  studentInfo: IStudent;
  editable?: boolean;
}

const Certification: FC<CertificationProps> = ({
  studentInfo,
  editable = false,
}) => {
  const loading = useAppSelector(
    (state) => state.loading.course.changeStudentMark
  );
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
        loading={loading}
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

      <div className="flex xl:flex-row flex-col gap-10 md:items-end items-start">
        <ResultButton
          result={studentInfo.midtermResult}
          name="Промежуточная аттестация"
          editable={editable}
          onClick={() => showResultModal("Midterm")}
        />
        <ResultButton
          result={studentInfo.finalResult}
          name="Финальная аттестация"
          editable={editable}
          onClick={() => showResultModal("Final")}
        />
      </div>
    </>
  );
};

export default Certification;
