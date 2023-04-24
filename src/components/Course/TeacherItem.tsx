import { List, Tag } from "antd";

const TeacherItem = ({ teacherData }) => {
  return (
    <List.Item>
      <div>
        <div className="flex">
          <h3>{teacherData.name}</h3>
          {teacherData.isMain && (
            <Tag color="gold" className="ml-2">
              основной
            </Tag>
          )}
        </div>
        <p>{teacherData.email}</p>
      </div>
    </List.Item>
  );
};

export default TeacherItem;
