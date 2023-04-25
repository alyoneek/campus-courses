import { List, Tag } from "antd";

const TeacherItem = ({ data }) => {
  return (
    <List.Item>
      <div>
        <div className="flex">
          <h3>{data.name}</h3>
          {data.isMain && (
            <Tag color="gold" className="ml-2">
              основной
            </Tag>
          )}
        </div>
        <p>{data.email}</p>
      </div>
    </List.Item>
  );
};

export default TeacherItem;
