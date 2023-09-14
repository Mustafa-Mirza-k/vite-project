import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={'1%'}>
      <Image src={logo} boxSize="120px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
