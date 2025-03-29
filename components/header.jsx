import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarsIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            width={200}
            height={60}
            alt="CampusAI logo"
            className="h-12 py-1 w-auto object-contain"
          ></Image>
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href={"/dashboard"}>
              <Button variant="outline">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block">DashBoard</span>
              </Button>
            </Link>

            {/* dropdown menu */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                {" "}
                <Button>
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">Tools</span>
                  <ChevronDown className="h- w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator /> */}
                <DropdownMenuItem>
                  <Link
                    href={"/knowledgebase"}
                    className="flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Build Knowledgebase</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/chat-to"} className="flex items-center gap-2">
                    <PenBox className="h-4 w-4" />
                    <span>Chat to Knowledge</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/endpoint"} className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>Export Endpoint</span>
                  </Link>
                </DropdownMenuItem>
                {/* <DropdownMenuItem><Link href="/knowledgebase" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Build Knowledgebase</span>
                </Link></DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
