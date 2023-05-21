import { FC } from "react";

import ModalForm from "@/components/ModalForm";
import useModal from "@/hooks/useModal";
import EditButton from "@/ui/buttons/EditButton";
import { IGropResponse } from "@modules/groups/api/types";
import EditGroupForm from "./EditGroupForm";

interface EditGroupButtonProps {
  groupInfo: IGropResponse;
}

const EditGroupButton: FC<EditGroupButtonProps> = ({ groupInfo }) => {
  const { isOpen, form, showModal, hideModal } = useModal();

  return (
    <>
      <EditButton onClick={showModal} />

      <ModalForm
        title="Редактирование группы"
        open={isOpen}
        onCancel={hideModal}
        form={form}
      >
        <EditGroupForm initial={groupInfo} />
      </ModalForm>
    </>
  );
};

export default EditGroupButton;
