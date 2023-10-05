import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformMenu = () => {
  const { data, errors } = usePlatforms();
  if (errors.length) return null;
  return (
    <Menu>
      <MenuButton as={Button} m={"35px"} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data &&
          data.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformMenu;
