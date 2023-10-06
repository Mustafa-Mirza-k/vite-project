import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        ref.current && onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch color="gray.300" />
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={"20px"}
          type="text"
          placeholder="Search..."
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
