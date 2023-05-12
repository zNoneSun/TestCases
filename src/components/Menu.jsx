import { Menu as AntMenu } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const Menu = () => {
  const navigate = useNavigate();
  const menuList = useSelector((store) => store.menuList);
  const items = menuList.map((item) =>
    getItem(
      item.label,
      item.key,
      null,
      item.children.map((item) => getItem(item.label, item.key))
    )
  );

  const handleClick = (e) => {
    navigate(e.key);
  };

  return (
    <AntMenu
      theme="dark"
      openKeys={["1", "2"]}
      mode="inline"
      items={items}
      onClick={handleClick}
    />
  );
};

export default Menu;
