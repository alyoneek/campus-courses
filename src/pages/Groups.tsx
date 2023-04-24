import { IGropResponse } from "@/api/groups/types";
import CreateGroupForm from "@/components/forms/CreateGroupForm";
import EditGroupForm from "@/components/forms/EditGroupForm";
import GroupsList from "@/components/GroupsList";
import ModalForm from "@/components/ModalForm";
import DataContent from "@/layouts/content/DataContent";
import RequireAuthComponent from "@/router/RequireAuthComponent";
import { useAppDispatch, useAppSelector } from "@/store";
import { Roles } from "@/store/features/account/accountSlice";
import { getGroups } from "@/store/features/groups/groupsActions";
import { Button, Form } from "antd";
import useForm from "antd/es/form/hooks/useForm";
import { FC, useEffect, useState } from "react";

const Groups: FC = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [choosenGroupId, setChoosenGroupId] = useState("");
  const [createGroupForm] = Form.useForm();
  const [editGroupForm] = useForm();

  const dispatch = useAppDispatch();
  const groups = useAppSelector((state) => state.groups.allGroups);

  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

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
      <RequireAuthComponent allowedRoles={[Roles.isAdmin]}>
        <Button
          type="primary"
          htmlType="button"
          className="mb-2"
          onClick={showCreateModal}
        >
          Создать
        </Button>
      </RequireAuthComponent>
      <GroupsList onEditGroup={showEditModal} groups={groups} />
      <ModalForm
        title="Создание группы"
        open={isCreateModalOpen}
        onCancel={handleCreateModalCancel}
        form={createGroupForm}
      >
        <CreateGroupForm afterFinish={handleCreateModalCancel} />
      </ModalForm>
      <ModalForm
        title="Редактирование группы"
        open={isEditModalOpen}
        onCancel={handleEditModalCancel}
        form={editGroupForm}
      >
        <EditGroupForm
          groupInfo={
            groups.find((group) => group.id === choosenGroupId) as IGropResponse
          }
          afterFinish={handleEditModalCancel}
        />
      </ModalForm>
    </DataContent>
  );
};

export default Groups;
