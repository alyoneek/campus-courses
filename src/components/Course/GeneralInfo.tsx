import { Button, Card } from "antd";

const gridFullStyle: React.CSSProperties = {
  width: "100%",
};

const gridHalfStyle: React.CSSProperties = {
  width: "50%",
};

const GeneralInfo = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-between mb-3">
        <h2>Основные данные курса</h2>
        <Button type="primary" size="large">
          Редактировать
        </Button>
      </div>

      <Card>
        <Card.Grid hoverable={false} style={gridFullStyle}>
          <div className="flex justify-between align-middle">
            <div>
              <h3>Статус курса</h3>
              <p className="text-base">Открыт для записи</p>
            </div>
            <Button type="primary">Изменить</Button>
          </div>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridHalfStyle}>
          <h3>Учебный год</h3>
          <p className="text-base">2022-2023</p>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridHalfStyle}>
          <h3>Семестр</h3>
          <p className="text-base">Осенний</p>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridHalfStyle}>
          <h3>Всего мест</h3>
          <p className="text-base">100</p>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridHalfStyle}>
          <h3>Студентов зачислено</h3>
          <p className="text-base">5</p>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridFullStyle}>
          <h3>Зявок на рассмотрении</h3>
          <p className="text-base">3</p>
        </Card.Grid>
      </Card>
    </div>
  );
};

export default GeneralInfo;
