"use client";

import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Navbar as NextUINavbar
} from "@nextui-org/navbar";
import { Select, SelectItem } from "@nextui-org/select";

import { SearchNormal } from "iconsax-react";
import NextLink from "next/link";
import Sidebar from "./sidebar";

export const Navbar = () => {
  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="flex-wrap pt-2"
      classNames={{
        wrapper: "px-2",
      }}
    >
      <div className="flex flex-col-reverse sm:flex-row w-full sm:items-center">
        <NavbarContent className="" justify="start">
          <NavbarBrand as="li" className="gap-3 w-full sm:max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <p className="font-bold text-xk">Find Developers</p>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="w-[231px]">
            <Select
              placeholder="Sort By"
              defaultSelectedKeys={"all"}
              selectionMode="single"
              aria-label="sort by"
            >
              <SelectItem key={"highstreet"}>
                Sort By high streetcred
              </SelectItem>
            </Select>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden flex gap-6 pr-4" justify="end">
          {/* <ThemeSwitch /> */}
          <SearchNormal size={18} variant="Outline" />
          <NavbarMenuToggle className="h-10" />
        </NavbarContent>
      </div>
      <NavbarMenu>
        <Sidebar />
      </NavbarMenu>
    </NextUINavbar>
  );
};
