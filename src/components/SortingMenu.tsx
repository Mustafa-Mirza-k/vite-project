import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onChangeSortingOrder: (sortingOrder: Ordering) => void;
  seletedOrder: Ordering;
}

export interface Ordering {
  key: string;
  value: string;
}

const SortingMenu = ({ seletedOrder, onChangeSortingOrder }: Props) => {
  const sortingMenuItems = [
    { key: "", value: "Relevance" },
    { key: "-added", value: "Date Added" },
    { key: "name", value: "Name" },
    { key: "-released", value: "Release Date" },
    { key: "metacritic", value: "Popularity" },
    { key: "rating", value: "Average Ratings" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {seletedOrder?.value || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortingMenuItems.map((sortOrder: Ordering) => (
          <MenuItem
            onClick={() => onChangeSortingOrder(sortOrder)}
            key={sortOrder.key}
          >
            {sortOrder.value}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortingMenu;
