import { Alert, Badge, Button, List, Tabs } from "antd";

const data = ["one", "two", "three"];

const ExtendedInfo = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      size="large"
      className="mb-10"
      items={[
        {
          label: "Требования к курсу",
          key: "1",
          children: "Content of Specifications",
        },
        {
          label: "Аннотация",
          key: "2",
          children: "Content of Reviews",
        },
        {
          label: (
            <Badge count={data.length} overflowCount={3} offset={[15, 5]}>
              <div>Уведомления</div>
            </Badge>
          ),
          key: "3",
          children: (
            <>
              <Button type="primary" className="mb-5">
                Добавить уведомление
              </Button>
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={
                  (item) => (
                    <List.Item>
                      <Alert message={item} type="error" className="w-full" />
                    </List.Item>
                  )
                  //   <List.Item>{item}</List.Item>
                }
              />
            </>
          ),
        },
      ]}
    />
  );
};

export default ExtendedInfo;
