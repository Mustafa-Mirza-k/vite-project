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
import noImageIcon from "../assets/noImageFound.png"
interface Game {
  game: Games;
}
const GamesCard = ({ game }: Game) => {
  return (
    <Card className="Card">
      <CardBody>
        <Image
          mx={"auto"}
          src={game.background_image ? CroppedImage(game.background_image) : noImageIcon}
          alt={game.name}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="1">
          <Heading size="md">{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIcons key={game.id}
              platform={game.parent_platforms.map((p) => p.platform)}
            />
            <MetaCritic metacritic={game.metacritic} />
          </HStack>
          {/* <Text>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces, earthy toned spaces and for people who love a chic design with a
          sprinkle of vintage design.
        </Text> */}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GamesCard;
