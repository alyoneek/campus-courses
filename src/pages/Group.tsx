import CoursesList from "@/components/CoursesList";
import DataContent from "@/layouts/content/DataContent";
import { Button } from "antd";

const Group = () => {
  return (
    <DataContent title="Группа - Компьютерные науки">
      <Button
        type="primary"
        htmlType="button"
        className="mb-2"
        // onClick={showCreateModal}
      >
        Создать
      </Button>
      <CoursesList />
    </DataContent>
  );
};

export default Group;
