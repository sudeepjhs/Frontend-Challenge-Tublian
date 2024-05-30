import UserInfoCard from "@/components/Card/userInfoCard";
import UserInfoImageCard from "@/components/Card/userInfoImageCard";
import LabelTag from "@/components/custom/labelTag";
import { Ellipse } from "@/components/icon";
import { UserCompleteInfo, UserProfile } from "@/types";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { FC } from "react";

interface UserCardProps {
  user: UserProfile;
  userInfo?: UserCompleteInfo[];
}

const UserCard: FC<UserCardProps> = ({ user, userInfo = [] }) => {
  return (
    <Card className="w-full bg-default-100 p-1">
      <CardBody>
        <div className="flex flex-col gap-6">
          <div className="flex gap-3.5 items-start">
            <Avatar
              size="sm"
              showFallback
              className="border-gradient-img sm:h-[60px] sm:w-[60px]"
              src={user.profilePic}
            />
            <div className="grow">
              <div className="flex flex-col gap-2 max-w-fit justify-start">
                <strong className="text-xl leading-8 font-bold">
                  {user.fullname}
                </strong>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-1 text-default-500 font-medium sm:items-center">
                  <span>{user.location}</span>
                  <span className="hidden sm:block">
                    <Ellipse />
                  </span>
                  <span>${user.priceInUSD} (USD)</span>
                </div>
                <div>
                  <LabelTag>
                    <span className="font-bold text-sm">
                      {user.title || "Other"}
                    </span>
                  </LabelTag>
                </div>
              </div>
            </div>
            <div>
              <Button
                radius="full"
                className="font-medium text-background"
                color="warning"
              >
                Hire Me
              </Button>
            </div>
          </div>
          <div className="flex gap-2 flex-nowrap w-full overflow-x-auto empty:hidden">
            {userInfo.map((info, i) => {
              return info.infoType === "text" ? (
                <UserInfoCard
                  key={`${info.infoType}-${info.title}-${i}`}
                  {...info}
                />
              ) : (
                <UserInfoImageCard
                  key={`${info.infoType}-${info.title}-${i}`}
                  {...info}
                />
              );
            })}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
