"use client";
import React from "react";
import Link from "next/link";
import Image from "../Image/image";
import SideBarMenu from "../SideBarMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import "./Menubar.scss"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import LangSwitcher from "../LangSwitcher";
import MegaMenu from "../MegaMenu";

const MenuBar = ({ isScrolled }) => {
  return (
    <>
      <div className="menu-bar ">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="items-center flex ">
              <div className="inline-block leading-none xl:hidden">
                <SideBarMenu isScrolled={isScrolled} />
              </div>
              <ul className=" items-center hidden xl:flex">
                {/* <li className="px-4 inline-block">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className={`py-5 duration-500 ease-in-out inline-block ${
                      isScrolled ? "text-[#1a1a1a]" : "  text-white"
                    }`}
                  >
                    Open
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li> */}
                {/* {menu?.map((item, i) => {
                return (
                  <li className="px-4 inline-block" key={i}>
                    <Link
                      href="/"
                      className={`py-5 duration-500 ease-in-out inline-block ${
                        isScrolled ? "text-[#1a1a1a]" : "  text-white"
                      }`}
                    >
                      {item?.label}
                    </Link>
                  </li>
                );
              })} */}
              </ul>

              {/* <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger  className={`py-5 duration-500 ease-in-out inline-block ${
                      isScrolled ? "text-[#1a1a1a]" : "  text-white"
                    }`}>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent>
                    

                      <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        <li>
                          <a
                            class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/docs/primitives/alert-dialog"
                            data-radix-collection-item=""
                          >
                            <div class="text-sm font-medium leading-none">
                              Alert Dialog
                            </div>
                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              A modal dialog that interrupts the user with
                              important content and expects a response.
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/docs/primitives/hover-card"
                            data-radix-collection-item=""
                          >
                            <div class="text-sm font-medium leading-none">
                              Hover Card
                            </div>
                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              For sighted users to preview content available
                              behind a link.
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/docs/primitives/progress"
                            data-radix-collection-item=""
                          >
                            <div class="text-sm font-medium leading-none">
                              Progress
                            </div>
                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Displays an indicator showing the completion
                              progress of a task, typically displayed as a
                              progress bar.
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/docs/primitives/scroll-area"
                            data-radix-collection-item=""
                          >
                            <div class="text-sm font-medium leading-none">
                              Scroll-area
                            </div>
                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Visually or semantically separates content.
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/docs/primitives/tabs"
                            data-radix-collection-item=""
                          >
                            <div class="text-sm font-medium leading-none">
                              Tabs
                            </div>
                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              A set of layered sections of content—known as tab
                              panels—that are displayed one at a time.
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/docs/primitives/tooltip"
                            data-radix-collection-item=""
                          >
                            <div class="text-sm font-medium leading-none">
                              Tooltip
                            </div>
                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              A popup that displays information related to an
                              element when the element receives keyboard focus
                              or the mouse hovers over it.
                            </p>
                          </a>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                  <NavigationMenuTrigger  className={`py-5 duration-500 ease-in-out inline-block ${
                      isScrolled ? "text-[#1a1a1a]" : "  text-white"
                    }`}>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        <li>
                          <a
                            class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/docs/primitives/alert-dialog"
                            data-radix-collection-item=""
                          >
                            <div class="text-sm font-medium leading-none">
                              Alert Dialog
                            </div>
                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              A modal dialog that interrupts the user with
                              important content and expects a response.
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/docs/primitives/hover-card"
                            data-radix-collection-item=""
                          >
                            <div class="text-sm font-medium leading-none">
                              Hover Card
                            </div>
                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              For sighted users to preview content available
                              behind a link.
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/docs/primitives/progress"
                            data-radix-collection-item=""
                          >
                            <div class="text-sm font-medium leading-none">
                              Progress
                            </div>
                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Displays an indicator showing the completion
                              progress of a task, typically displayed as a
                              progress bar.
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/docs/primitives/scroll-area"
                            data-radix-collection-item=""
                          >
                            <div class="text-sm font-medium leading-none">
                              Scroll-area
                            </div>
                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Visually or semantically separates content.
                            </p>
                          </a>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu> */}

              <Menubar>
                {menu?.map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      {item?.menu?.length > 0 ? (
                        <MenubarMenu>
                          <MenubarTrigger
                            className={`py-5 data-[state=open]:text-accent-foreground duration-500 ease-in-out text-base inline-block ${
                              isScrolled ? "text-[#1a1a1a]" : "  text-white"
                            }`}
                          >
                            {item?.label}
                          </MenubarTrigger>
                          <MenubarContent className="px-4 py-4">
                            {item?.menu?.map((sublink, index) => {
                              return (
                                <React.Fragment key={index}>
                                  {sublink?.menu?.length >= 0 ? (
                                    <MenubarSub>
                                      <MenubarSubTrigger className="py-[10px] px-4 text-sm ">
                                        {sublink?.label}
                                      </MenubarSubTrigger>
                                      <MenubarSubContent>
                                        {sublink?.menu?.map(
                                          (link_l2, index_l2) => {
                                            return (
                                              <Link
                                                key={index_l2}
                                                href="/"
                                                className={`py-[10px] px-4 text-sm duration-500 ease-in-out block text-[#1a1a1a] `}
                                              >
                                                {link_l2?.label}
                                              </Link>
                                            );
                                          }
                                        )}
                                      </MenubarSubContent>
                                    </MenubarSub>
                                  ) : (
                                    <Link
                                      href="/"
                                      className={`py-[10px] px-4 text-sm duration-500 ease-in-out relative block text-[#1a1a1a]`}
                                    >
                                      {sublink?.label}
                                    </Link>
                                  )}
                                </React.Fragment>
                              );
                            })}
                            {/* <MenubarItem>New Tab</MenubarItem>
                          <MenubarItem>New Window</MenubarItem>
                          <MenubarItem disabled>
                            New Incognito Window
                          </MenubarItem>
                          <MenubarSeparator />

                          <MenubarSeparator />
                          <MenubarItem>
                            Print... <MenubarShortcut>⌘P</MenubarShortcut>
                          </MenubarItem> */}
                          </MenubarContent>
                        </MenubarMenu>
                      ) : (
                        <li
                          className="px-4 inline-block"
                          key={i}
                          role="menuitem"
                        >
                          {/* before:content-[''] before:block before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:rounded-t-full */}
                          <Link
                            href="/"
                            className={`py-5 duration-500 ease-in-out inline-block relative before:bg-primary     ${
                              isScrolled ? "text-[#1a1a1a]" : "  text-white"
                            }`}
                          >
                            {item?.label}
                          </Link>
                        </li>
                      )}
                    </React.Fragment>
                  );
                })}

                {/* <MegaMenu/> */}
                {/* <MenubarMenu>
                <MenubarTrigger
                  className={`py-5 duration-500 ease-in-out inline-block ${
                    isScrolled ? "text-[#1a1a1a]" : "  text-white"
                  }`}
                >
                  File
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>New Tab</MenubarItem>
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarItem disabled>New Incognito Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Email link</MenubarItem>
                      <MenubarItem>Messages</MenubarItem>
                      <MenubarItem>Notes</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    Print... <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Find</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Search the web</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Find...</MenubarItem>
                      <MenubarItem>Find Next</MenubarItem>
                      <MenubarItem>Find Previous</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>Cut</MenubarItem>
                  <MenubarItem>Copy</MenubarItem>
                  <MenubarItem>Paste</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarCheckboxItem>
                    Always Show Bookmarks Bar
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>
                    Always Show Full URLs
                  </MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarItem inset>
                    Reload <MenubarShortcut>⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled inset>
                    Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Hide Sidebar</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Profiles</MenubarTrigger>
                <MenubarContent>
                  <MenubarRadioGroup value="benoit">
                    <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                    <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                    <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarItem inset>Edit...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Add Profile...</MenubarItem>
                </MenubarContent>
              </MenubarMenu> */}
              </Menubar>
            </div>
            <div className="flex items-end gap-4">
              <button
                aria-label="Accessibility"
                className={`  px-4 py-2 bg-black/5 rounded-full duration-500 ease-in-out   leading-tight text-2xl ${
                  isScrolled ? "text-[#1a1a1a]" : "  text-white"
                }`}
              >
                <i className="icon-a11y block"></i>
              </button>
              {/* <button
              className={`min-w-10 h-10 px-4 py-2 bg-black/5 duration-500 ease-in-out rounded-full  text-sm  leading-tight ${
                isScrolled ? "text-[#1a1a1a]" : "  text-white"
              }`}
            >
              العربية
            </button> */}
            <LangSwitcher isScrolled={isScrolled}/>

              <button
                className={`min-w-10 h-10 pl-2 pr-4 py-2 bg-black/5 duration-500 ease-in-out rounded-full  items-center gap-2 inline-flex  text-sm font-normal leading-tight ${
                  isScrolled ? "text-[#1a1a1a]" : " text-white"
                }`}
              >
                <div className="w-6 h-6 justify-center items-center flex text-2xl">
                  <i className="icon-user"></i>
                </div>
                <div className="">Login</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;

const menu = [
  {
    label: "Home",

  },
  {
    label: "About Us",
    menu: [
      {
        label: "title1",
      },
      {
        label: "title2",
        menu: [
          {
            label: "title3",
          },
          {
            label: "title4",
          },
        ],
      },
    ],
  },
  {
    label: "Open Data",
  },
  {
    label: "Application Status",
  },
  {
    label: "Information",
  },
  {
    label: "Media",
  },
];
