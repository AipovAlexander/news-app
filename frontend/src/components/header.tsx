import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

function Header() {
  return (
    <Box as="header" p={4} bg="dodgerblue">
      <Flex justifyContent="space-between" >
        <Link to={"/"}>
          <Button>На главную</Button>
        </Link>
        <Link to={"/about"}>
          <Button>О нас</Button>
        </Link>
        <Link to={"/profile"}>
          <Button>Профиль</Button>
        </Link>
        <Link to={"/account-settings"}>
          <Button>Настройки аккаунта</Button>
        </Link>
        <Link to={"/register"}>
          <Button>Регистрация</Button>
        </Link>
        <Link to={"/login"}>
          <Button>Логин</Button>
        </Link>
      </Flex>
    </Box>
  );
}

export default Header;
