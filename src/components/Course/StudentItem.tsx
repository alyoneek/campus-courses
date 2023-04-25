import { Button, List } from "antd";
import Certification from "./Certification";

const StudentItem = ({ data }) => {
  return (
    <List.Item>
      <div className="w-full flex items-center justify-between text-base">
        <div>
          <h3>{data.name}</h3>
          <p>
            Статус - <span className="text-green-500">{data.status}</span>
          </p>
          <p>{data.email}</p>
        </div>
        {data.status == "InQueue" ? (
          <div className="flex gap-3">
            <Button type="primary">Принять</Button>
            <Button type="primary" danger>
              Отклонить заявку
            </Button>
          </div>
        ) : (
          <Certification
            name={data.name}
            midtermResult={data.midtermResult}
            finalResult={data.finalResult}
          />
        )}
      </div>
    </List.Item>
  );
};

export default StudentItem;
