import { Button, List, Tag } from "antd";

const StudentItem = ({ studentData }) => {
  return (
    <List.Item>
      <div className="w-full flex items-center justify-between text-base">
        <div>
          <h3>{studentData.name}</h3>
          <p>
            Статус -{" "}
            <span className="text-green-500">{studentData.status}</span>
          </p>
          <p>{studentData.email}</p>
        </div>
        {studentData.status == "InQueue" ? (
          <div className="flex gap-3">
            <Button type="primary">Принять</Button>
            <Button type="primary" danger>
              Отклонить заявку
            </Button>
          </div>
        ) : (
          <div className="flex gap-10">
            <div>
              <Button className="text-base" type="link">
                Промежуточная аттестация
              </Button>{" "}
              -
              <Tag color="green" className="ml-2">
                успешно пройдена
              </Tag>
            </div>
            <div>
              <Button className="text-base" type="link">
                Финальная аттестация
              </Button>{" "}
              -
              <Tag color="grey" className="ml-2">
                отметки нет
              </Tag>
            </div>
          </div>
        )}
      </div>
    </List.Item>
  );
};

export default StudentItem;
