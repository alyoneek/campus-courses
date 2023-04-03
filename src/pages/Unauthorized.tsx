import { history } from "@/router/history";
import { Button, Result } from "antd";
import { FC } from "react";

const Unauthorized: FC = () => {
  const setPreviousPage = () => {
    history.navigate && history.navigate(-1);
  };

  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary" onClick={setPreviousPage} size="large">
          Back
        </Button>
      }
    />
  );
};

export default Unauthorized;
