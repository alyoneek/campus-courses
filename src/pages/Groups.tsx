import CreateGroupForm from "@/components/forms/CreateGroupForm";
import EditGroupForm from "@/components/forms/EditGroupForm";
import GroupsList from "@/components/GroupsList";
import ModalForm from "@/components/ModalForm";
import DataContent from "@/layouts/content/DataContent";
import { Button } from "antd";
import useForm from "antd/es/form/hooks/useForm";
import { FC, useState } from "react";

const Groups: FC = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [choosenGroupId, setChoosenGroupId] = useState("");
  const [createGroupForm] = useForm();
  const [editGroupForm] = useForm();

  const showCreateModal = () => {
    setCreateModalOpen(true);
  };

  const showEditModal = (idGroup: string) => {
    setChoosenGroupId(idGroup);
    setEditModalOpen(true);
  };

  const handleCreateModalCancel = () => {
    setCreateModalOpen(false);
  };

  const handleEditModalCancel = () => {
    setEditModalOpen(false);
  };

  return (
    <DataContent title="Группы кампусных курсов">
      <Button
        type="primary"
        htmlType="button"
        className="mb-2"
        onClick={showCreateModal}
      >
        Создать
      </Button>

      <GroupsList onEditGroup={showEditModal} />

      <ModalForm
        title="Создание группы"
        open={isCreateModalOpen}
        onCancel={handleCreateModalCancel}
        form={createGroupForm}
      >
        <CreateGroupForm />
      </ModalForm>

      <ModalForm
        title="Редактирование группы"
        open={isEditModalOpen}
        onCancel={handleEditModalCancel}
        form={editGroupForm}
      >
        <EditGroupForm idGroup={choosenGroupId} />
      </ModalForm>
    </DataContent>
  );
};

export default Groups;
