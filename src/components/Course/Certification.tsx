import { Button, Tag } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";

import ModalForm from "@/components/ModalForm";
import ResultForm from "@/components/forms/ResultForm";

const Certification = ({ name, midtermResult, finalResult }) => {
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
          </Button>{" "}
          -
          <Tag color="green" className="ml-2">
            успешно пройдена
          </Tag>
        </div>
        <div>
          <Button
            className="text-base"
            type="link"
            onClick={() => showResultModal("final")}
          >
            Финальная аттестация
          </Button>{" "}
          -
          <Tag color="grey" className="ml-2">
            отметки нет
          </Tag>
        </div>
      </div>
    </>
  );
};

export default Certification;
