"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import { nav_options } from "@/utils/app-routes";
import { motion } from "motion/react";

const NavOptionsMobile = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <AlignRight className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="flex flex-col bg-background border-l border-border"
        >
          <SheetHeader>
            <SheetTitle className="text-lg font-bold tracking-wide">
              Menu
            </SheetTitle>
          </SheetHeader>

          {/* Nav Links */}
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, x: 20 },
              show: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.07, delayChildren: 0.1 },
              },
            }}
            className="flex flex-col gap-4 mt-6 px-2 font-medium"
          >
            {nav_options.map((e) => {
              const isActive = pathname === e.path;
              return (
                <motion.li
                  key={e.label}
                  variants={{
                    hidden: { opacity: 0, x: 10 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <SheetClose asChild>
                    <Link
                      href={e.path}
                      className={`block rounded-md px-2 py-1 transition-colors ${
                        isActive
                          ? "text-transparent bg-gradient-to-r from-red-500 via-green-500 to-yellow-500 bg-clip-text font-semibold"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
                      }`}
                    >
                      {isActive && (
                        <span className="inline-block w-1 h-1 rounded-full bg-blue-500 mr-2 align-middle" />
                      )}
                      {e.label}
                    </Link>
                  </SheetClose>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Footer: Auth Controls */}
          <div className="mt-auto flex flex-col gap-3 px-2 pb-4">
            <SheetClose asChild>
              {isLoggedIn ? (
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Logout
                </Button>
              ) : (
                <Button className="w-full" onClick={() => setIsLoggedIn(true)}>
                  Login
                </Button>
              )}
            </SheetClose>

            <SheetClose asChild>
              <Button variant="secondary" className="w-full">
                Close
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavOptionsMobile;
