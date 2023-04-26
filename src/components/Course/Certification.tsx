import { Button, Tag } from "antd";
import { useForm } from "antd/es/form/Form";
import { FC, useState } from "react";

import { MarkType } from "@/api/courses/types";
import ModalForm from "@/components/ModalForm";
import ResultForm from "@/components/forms/ResultForm";
import { StudentMarks, marksColors } from "@/helpers/constants";

interface CertificationProps {
  name: string;
  midtermResult: MarkType;
  finalResult: MarkType;
}

const Certification: FC<CertificationProps> = ({
  name,
  midtermResult,
  finalResult,
}) => {
  const [isResultModalOpen, setResultModalOpen] = useState(false);
  const [markType, setMarkType] = useState<string>("midtearm");
  const [resultForm] = useForm();

  const showResultModal = (value: string) => {
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
          markType === "midtearm" ? "промежуточной" : "итоговой"
        } аттестации`}
        open={isResultModalOpen}
        onCancel={handleResultModalCancel}
        form={resultForm}
      >
        <ResultForm markType={markType} studentName={name} />
      </ModalForm>

      <div className="flex gap-10">
        <div>
          <Button
            className="text-base"
            type="link"
            onClick={() => showResultModal("midtearm")}
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
            onClick={() => showResultModal("final")}
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
