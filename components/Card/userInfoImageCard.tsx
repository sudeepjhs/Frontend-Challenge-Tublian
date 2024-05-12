import { UserInfoWithImage } from "@/types";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { FC } from "react";

interface UserInfoImageCardProps extends UserInfoWithImage {
  className?: string;
}

const UserInfoImageCard: FC<UserInfoImageCardProps> = ({
  imgSrc,
  title,
  className,
}) => {
  return (
    <Card
      className={
        "sm:min-w-80 min-w-[250px] w-[280px] h-[152px] min-h-[152px] " +
        className
      }
    >
      <Image
        alt={title}
        className="object-cover w-full h-full object-center"
        src={imgSrc || "/assets/images/no-image.jpg"}
        removeWrapper
      />
      <CardFooter className="justify-start overflow-hidden py-3 absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-50% to-background">
        <p className="text-lg font-bold">{title}</p>
      </CardFooter>
    </Card>
  );
};

export default UserInfoImageCard;
