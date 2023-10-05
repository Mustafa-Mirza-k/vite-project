import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../services/api-service";
import {
  FaApple,
  FaXbox,
  FaPlaystation,
  FaLinux,
  FaWindows,
  FaNeos,
  FaAndroid,
  FaGlobe,
} from "react-icons/fa";
import { IconType } from "react-icons";
interface Props {
  platform: Platform[];
}

const PlatformIcons = ({ platform }: Props) => {
  let platformIcon: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    nintendo: FaNeos,
    linux: FaLinux,
    mac: FaApple,
    android: FaAndroid,
    web: FaGlobe,
  };
  return (
    <HStack>
      {platform.map((p) => (
        <Icon as={platformIcon[p.slug]} color={"gray.500"}/>
      ))}
    </HStack>
  );
};

export default PlatformIcons;
