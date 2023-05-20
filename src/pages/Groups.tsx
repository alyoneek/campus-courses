import { IGropResponse } from "@/api/groups/types";
import GroupsList from "@/components/GroupsList";
import ModalForm from "@/components/ModalForm";
import EditGroupForm from "@/components/forms/EditGroupForm";
import DataContent from "@/layouts/content/DataContent";
import { CreateGroupButton } from "@/modules/groups";
import { useAppDispatch, useAppSelector } from "@/store";
import { getGroups } from "@/store/features/groups/groupsActions";
import useForm from "antd/es/form/hooks/useForm";
import { FC, useEffect, useState } from "react";

const Groups: FC = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [choosenGroupId, setChoosenGroupId] = useState("");

  const [editGroupForm] = useForm();

  const dispatch = useAppDispatch();
  const groups = useAppSelector((state) => state.groups.allGroups);

  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

  const showEditModal = (idGroup: string) => {
    setChoosenGroupId(idGroup);
    setEditModalOpen(true);
  };

  const handleEditModalCancel = () => {
    setEditModalOpen(false);
  };

  return (
    <DataContent title="Группы кампусных курсов">
      <CreateGroupButton />
      <GroupsList onEditGroup={showEditModal} groups={groups} />

      <ModalForm
        title="Редактирование группы"
        open={isEditModalOpen}
        onCancel={handleEditModalCancel}
        form={editGroupForm}
      >
        <EditGroupForm
          initial={
            groups.find((group) => group.id === choosenGroupId) as IGropResponse
          }
        />
      </ModalForm>
    </DataContent>
  );
};

export default Groups;
