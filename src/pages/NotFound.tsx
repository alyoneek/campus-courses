import { Button, Result } from "antd";

import { history } from "@/router/history";

const NotFound = () => {
  const setHomePage = () => {
    history.navigate && history.navigate("/");
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="К сожалению, такой страницы не существует"
      extra={
        <Button type="primary" onClick={setHomePage}>
          На главную
        </Button>
      }
    />
  );
};

export default NotFound;
