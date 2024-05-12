import { Element3, Money2, Notification } from "iconsax-react"

export type SiteConfig = typeof siteConfig;
export type SideBarItem = typeof siteConfig.sidebarItem[0]


export const siteConfig = {
	name: "Tublian",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Docs",
			href: "/docs",
		},
		{
			label: "Pricing",
			href: "/pricing",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	sidebarItem: [
		{
			title: "Dashboard",
			Icon: Element3,
			href: "#"
		},
		{
			title: "Monetization",
			Icon: Money2,
			href: "#"
		},
		{
			title: "Notification",
			Icon: Notification,
			href: "#"
		}
	]

};
