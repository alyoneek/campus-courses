import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const breadcrumbNameMap: Record<string, string> = {
  "/groups": "Группы",
  "/courses/my": "Мои курсы",
  "/courses": "Курсы",
  "/courses/teaching": "Преподаваемые курсы",
  "/profile": "Профиль",
};

const useBreadcrumbs = () => {
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    let url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    url = url === "/courses" ? "/groups" : url;

    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url] ?? "Детали"}</Link>,
    };
  });

  const breadcrumbItems = [
    {
      title: (
        <Link to="/">
          <HomeOutlined />
        </Link>
      ),
      key: "home",
    },
  ].concat(extraBreadcrumbItems);

  return { breadcrumbItems };
};

export default useBreadcrumbs;
