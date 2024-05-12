import { Card, CardBody } from "@nextui-org/card";
import { UseCardProps } from "@nextui-org/card/dist/use-card";
import { FC } from "react";

interface LabelTagProps extends UseCardProps {}

const LabelTag: FC<LabelTagProps> = ({ children, className, ...props }) => {
  return (
    <Card
      className={
        "flex-nowrap overflow-visible border-2 max-w-fit px-2.5 py-1 bg-transparent " +
        className
      }
      {...props}
    >
      <CardBody className="whitespace-nowrap flex items-center justify-center p-0">
        {children}
      </CardBody>
    </Card>
  );
};

export default LabelTag;
