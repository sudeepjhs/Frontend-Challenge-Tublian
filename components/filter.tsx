import { filterList } from "@/data/dummy";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Filter } from "iconsax-react";
import { FC, ReactNode } from "react";

const FilterChip: FC<{ children: ReactNode; isActive?: boolean }> = ({
  children,
  isActive,
}) => {
  return (
    <Card
      data-active={isActive || false}
      className="bg-default-100 border-gradient-active cursor-pointer max-w-fit flex-nowrap overflow-visible px-6"
    >
      <CardBody className="font-medium whitespace-nowrap flex items-center justify-center p-0">
        {children}
      </CardBody>
    </Card>
  );
};

const FilterComponent = () => {
  return (
    <div className="flex gap-3 item-center flex-nowrap w-full overflow-x-auto">
      {filterList.map((data, i) => (
        <FilterChip key={data} children={data} isActive={i === 0} />
      ))}
      <div className="hidden grow sm:flex justify-end items-center">
        <Button
          className="bg-transparent border max-xl:min-w-[60px]"
          variant="bordered"
        >
          <Filter size={18} />
          <div className="flex max-xl:hidden">Filters</div>
        </Button>
      </div>
    </div>
  );
};

export default FilterComponent;
