import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import MetaCritic from "./MetaCritic";
import { CroppedImage } from "../services/cropped-image";
import { Games } from "../hooks/useGames";
import noImageIcon from "../assets/noImageFound.png";
import EmojiIcons from "./EmojiIcons";
interface Game {
  game: Games;
}
const GamesCard = ({ game }: Game) => {
  return (
    <Card className="Card">
      <CardBody>
        <Image
          mx={"auto"}
          src={
            game.background_image
              ? CroppedImage(game.background_image)
              : noImageIcon
          }
          alt={game.name}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="1">
          <HStack justifyContent={"space-between"} mb={2}>
            <PlatformIcons
              key={game.id}
              platform={game.parent_platforms.map((p) => p.platform)}
            />
            <MetaCritic metacritic={game.metacritic} />
          </HStack>
          <Heading size="md">
            {game.name} <EmojiIcons rating={game.rating_top} />
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GamesCard;
