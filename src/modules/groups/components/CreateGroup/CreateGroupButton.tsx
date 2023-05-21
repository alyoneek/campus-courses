import ModalForm from "@/components/ModalForm";
import useModal from "@/hooks/useModal";
import { Roles } from "@/modules/account";
import RequireAuthComponent from "@/router/RequireAuthComponent";
import AddButton from "@/ui/buttons/AddButton";
import CreateGroupForm from "./CreateGroupForm";

const CreateGroupButton = () => {
  const { isOpen, form, showModal, hideModal } = useModal();

  return (
    <>
      {/* TODO */}
      <RequireAuthComponent allowedRoles={[Roles.isAdmin]}>
        <AddButton className="mb-2" onClick={showModal}>
          Создать
        </AddButton>
      </RequireAuthComponent>

      <ModalForm
        title="Создание группы"
        open={isOpen}
        onCancel={hideModal}
        form={form}
      >
        <CreateGroupForm />
      </ModalForm>
    </>
  );
};

export default CreateGroupButton;
