import { HStack, List, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
const genreList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <List>
      {genreList &&
        genreList.map((genre) => (
          <HStack key={genre} paddingY={"10px"} paddingX={"10px"}>
            <SkeletonCircle />
            <SkeletonText noOfLines={1} width={"80%"}/>
          </HStack>
        ))}
    </List>
  );
};

export default GenreSkeleton;