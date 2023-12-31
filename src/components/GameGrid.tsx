import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GamesCard from "./GamesCard";
import CardSkeleton from "./CardSkeleton";
import { GameQuery } from "../App";

interface Prop {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Prop) => {
  const { data, errors, isLoading } = useGames(gameQuery);
  console.log(errors)
  let numberOfCards = [1, 2, 3, 4, 5, 6];
  if (errors && errors.length) return errors;
  return (
    <SimpleGrid
      spacing={10}
      mb={10}
      columns={{ sm: 1, base: 1, md: 2, lg: 3, xl: 3, "2xl": 5 }}
    >
      {!isLoading
        ? data && data.map((game) => <GamesCard game={game} key={game.id} />)
        : numberOfCards.map((card) => <CardSkeleton key={card} />)}
    </SimpleGrid>
  );
};

export default GameGrid;
