import { Button } from "antd";
import QueueAnim from "rc-queue-anim";
import BannerImage from "./BannerImage";

const Banner = () => {
  return (
    <div className="h-[calc(100vh-64px)]">
      <div className="flex gap-20 max-w-[1500px] mx-auto items-center px-5 justify-center mt-[170px] flex-col xl:flex-row">
        <QueueAnim
          className="xl:w-[20%] text-center xl:text-left"
          delay={300}
          key="banner"
        >
          <h1 key="h1" className="text-5xl">
            Добро пожаловать
          </h1>
          <p key="p" className="mt-2 text-xl">
            в систему кампусных курсов
          </p>
          <span key="button">
            <Button
              className="mt-4 w-60"
              size="large"
              type="primary"
              onClick={() => {
                window.location.href = "/groups";
              }}
            >
              Выбрать курс
            </Button>
          </span>
        </QueueAnim>

        <div className="xl:w-[60%] h-[300px] xl:h-full">
          <BannerImage />
        </div>
      </div>
    </div>
  );
};

export default Banner;
