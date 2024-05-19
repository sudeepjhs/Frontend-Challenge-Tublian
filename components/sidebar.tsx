import { SideBarItem, siteConfig } from "@/config/site";
import { Avatar } from "@nextui-org/avatar";
import { Logout, Setting2 } from "iconsax-react";
import { FC } from "react";

interface SidebarLinkProps extends SideBarItem {
  active?: boolean;
}

const SideBarLink: FC<SidebarLinkProps> = (props) => {
  return (
    <div
      data-active={props.active || false}
      className=" cursor-pointer flex h-9 items-center gap-2 rounded-lg data-[active=false]:text-default-500 data-[active=true]:bg-content1 p-4"
    >
      <props.Icon size={18} variant="Outline" />
      <div className=" block sm:hidden lg:block">{props.title}</div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <nav className="flex flex-col p-4 lg:w-[234px] sm:w-[74px] justify-center h-screen pr-2 max-h-[692px]  lg:max-h-[800px]">
      <div className="pt-3">
        <div className="pb-0.5 last:pb-0" tabIndex={0}>
          <div className="flex justify-center lg:justify-end  h-8">
            <Avatar
              showFallback
              size="sm"
              className="border-gradient-img"
              src="/assets/images/profile.png"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col grow gap-1 pb-2 text-medium mt-7">
        {siteConfig.sidebarItem.map((item, i) => (
          <SideBarLink
            key={item.title}
            Icon={item.Icon}
            href={item.href}
            title={item.title}
            active={i === 0} // Demo
          />
        ))}
      </div>
      <div className="flex flex-col gap-1 pb-2 text-medium">
        <SideBarLink
          key={"Settings"}
          Icon={Setting2}
          href={"#"}
          title={"Settings"}
        />
        <SideBarLink
          key={"Log out"}
          Icon={Logout}
          href={"#"}
          title={"Log out"}
        />
      </div>
    </nav>
  );
};

export default Sidebar;
