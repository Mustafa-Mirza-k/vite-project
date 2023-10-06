import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onPlatformChange: (platform: Platform) => void;
}

const PlatformMenu = ({ onPlatformChange }: Props) => {
  const { data, errors } = usePlatforms();

  if (errors.length) return null;
  return (
    <Menu>
      <MenuButton as={Button}  rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data &&
          data.map((platform) => (
            <MenuItem
              onClick={() => onPlatformChange(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformMenu;
