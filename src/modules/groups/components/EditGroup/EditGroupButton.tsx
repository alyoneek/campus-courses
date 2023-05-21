import { FC } from "react";

import ModalForm from "@/components/ModalForm";
import useModal from "@/hooks/useModal";
import { useAppSelector } from "@/store";
import EditButton from "@/ui/buttons/EditButton";
import { IGropResponse } from "@modules/groups/api/types";
import EditGroupForm from "./EditGroupForm";

interface EditGroupButtonProps {
  groupInfo: IGropResponse;
}

const EditGroupButton: FC<EditGroupButtonProps> = ({ groupInfo }) => {
  const { isOpen, form, showModal, hideModal } = useModal();
  const loading = useAppSelector((state) => state.loading.groups.update);

  return (
    <>
      <EditButton onClick={showModal} />

      <ModalForm
        title="Редактирование группы"
        open={isOpen}
        onCancel={hideModal}
        form={form}
        loading={loading}
      >
        <EditGroupForm initial={groupInfo} />
      </ModalForm>
    </>
  );
};

export default EditGroupButton;
