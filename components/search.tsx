"use client";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Filter, SearchNormal } from "iconsax-react";
import { FC } from "react";

const SearchButton: FC<{ content: string; isActive?: boolean }> = ({
  content,
  isActive,
}) => {
  return (
    <Button
      data-active={isActive || false}
      className="data-[active=true]:bg-gradient-to-r from-[#fbda61] to-[#ff5acd] font-bold leading-8	"
    >
      {content}
    </Button>
  );
};

const Search = () => {
  return (
    <div className="flex gap-2 h-14 items-center">
      <Autocomplete
        aria-label="search"
        size="lg"
        placeholder="Try Searching “full time backend developer”"
        startContent={<SearchNormal size={18} variant="Outline" />}
        selectorIcon={<></>}
        className="hidden sm:block"
      >
        <AutocompleteItem key={"fsd"}>Full Stack Developer</AutocompleteItem>
      </Autocomplete>
      <ButtonGroup>
        <SearchButton key={"Full Time"} content="Full Time" isActive={true} />
        <SearchButton key={"Freelance"} content="Freelance" />
      </ButtonGroup>
      <div className="flex grow sm:hidden justify-end">
        <Button className="bg-transparent border" variant="bordered">
          <Filter size={18} />
        </Button>
      </div>
    </div>
  );
};

export default Search;
