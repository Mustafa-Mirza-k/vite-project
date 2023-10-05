import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { CroppedImage } from "../services/cropped-image";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  seletedGenre: Genre | null
}

const GenreList = ({ seletedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, errors } = useGenres();
  if (errors.length != 0) return null;
  if (isLoading) return <GenreSkeleton />;

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
              <Button
                variant="link"
                fontWeight={seletedGenre?.id == genre.id ? "bold": ""}
                onClick={() => onSelectGenre(genre)}
                fontSize={"large"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenreList;
