import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function NavBar() {
  return (
    <nav className="w-full h-24 border-b bg-black sticky top-0 z-50 flex items-center">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-bold text-3xl tracking-tight text-white"
          >
            Sheffield Usrah
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="/"
            className="text-xl tracking-tight text-white"
          >
            About
          </a>
          <a
            href="/"
            className="text-xl tracking-tight text-white"
          >
            Support Us
          </a>
          <a
            href="/"
            className="text-xl tracking-tight text-white"
          >
            News
          </a>
          <a
            href="/"
            className="text-xl tracking-tight text-white"
          >
            Contact
          </a>
        </div>
        
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-3 -mx-25">
            <NavigationMenuItem>
              <Button asChild variant="outline" size="xl">
                <Link href="/signin">Sign In</Link>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button asChild size="xl">
                <Link href="/signup">Donate</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
