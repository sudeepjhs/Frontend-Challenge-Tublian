import LabelTag from "@/components/custom/labelTag";
import { UserInfo } from "@/types";
import { Card, CardBody } from "@nextui-org/card";
import { FC } from "react";

export interface UserInfoCardProps extends UserInfo {
  className?: string;
}

const UserInfoCard: FC<UserInfoCardProps> = (props) => {
  return (
    <Card
      className={`flex sm:min-w-80 w-[280px] h-[152px] flex-nowrap overflow-visible whitespace-nowrap ${props.className}`}
    >
      <CardBody className="flex flex-col">
        <LabelTag>
          <span className="font-medium text-xs">{props.tag}</span>
        </LabelTag>
        <div className="flex flex-col grow mt-1.5 whitespace-normal">
          <h6 className="text-lg font-bold">{props.title}</h6>
          <p className="text-default-700 text-xs visible">{props.content}</p>
        </div>
        <div className="flex text-xs gap-1">
          <div className="text-default-700">Last Updated:</div>
          <div>{props.lastUpdated}</div>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserInfoCard;
