import "./App.css";
import { Box, Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./hooks/useGames";
import SortingMenu, { Ordering } from "./components/SortingMenu";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: Ordering;
  search: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          lg: "150px 1fr",
          xl: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, search: searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>
            <GenreList
              seletedGenre={gameQuery.genre}
              onSelectGenre={(genre: Genre) =>
                setGameQuery({ ...gameQuery, genre })
              }
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <VStack alignItems={"left"} ml={10} spacing={5}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5} mb={5}>
              <PlatformMenu
                onPlatformChange={(platform: Platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortingMenu
                seletedOrder={gameQuery.ordering}
                onChangeSortingOrder={(order) =>
                  setGameQuery({ ...gameQuery, ordering: order })
                }
              />
            </HStack>
          </VStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
