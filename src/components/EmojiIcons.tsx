import { Image, ImageProps } from "@chakra-ui/react";
import thumbsDown from "../assets/thumbsDown.png";
import thumbsUp from "../assets/thumbsUp.webp";
import bullsEye from "../assets/bullseye.png";

interface Props {
  rating: number;
}

const EmojiIcons = ({ rating }: Props) => {
  let emojiIcon: { [key: number]: ImageProps } = {
    3: { alt: "notNice", src: thumbsDown, boxSize: "25px" },
    4: { alt: "recommended", src: thumbsUp, boxSize: "25px" },
    5: { alt: "exceptional", src: bullsEye, boxSize: "30px" },
  };

  return <Image {...emojiIcon[rating]} mt={2} />;
};

export default EmojiIcons;
