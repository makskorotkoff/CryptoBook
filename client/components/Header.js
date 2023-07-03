import { Menu } from "semantic-ui-react";
import Link from "next/link";

const Header = () => {
  return (
    <Menu style={{ marginTop: "20px" }}>
      <Link href="/">
        <Menu.Item>Главная</Menu.Item>
      </Link>
      <Link href="/add">
        <Menu.Item>Записать контракт</Menu.Item>
      </Link>
      <Link href="/show">
        <Menu.Item>Посмотреть контракт</Menu.Item>
      </Link>
    </Menu>
  );
};

export default Header;
