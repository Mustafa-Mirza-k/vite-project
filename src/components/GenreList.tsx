import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { CroppedImage } from "../services/cropped-image";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <List>
      {data &&
        data.map((genre) => (
          <ListItem key={genre.id} paddingY={"10px"} paddingX={"10px"}>
            <HStack>
              <Image
                width={"35px"}
                height={"35px"}
                src={CroppedImage(genre.image_background)}
                alt={genre.name}
                borderRadius="lg"
              />
              <Text fontSize={"large"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenreList;
