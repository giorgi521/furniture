import Image from 'next/image';
import logo from 'public/assets/img/logo-regular.png';
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {OTHER} from '@/components/layout/header/helper';

const components: { title: string; href: string; description: string }[] = [
  {
    title: "shop all",
    href: "/shop-all",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "decor",
    href: "/decor",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "office",
    href: "/office",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "living room",
    href: "/living-room",
    description: "Visually or semantically separates content.",
  },
  {
    title: "bedroom",
    href: "/bedroom",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
]

export function Navigation() {
    
  return (
    <NavigationMenu className='px-24 py-2 flex justify-between'>
      <div>
      <NavigationMenuList>
        <Link href="/" className='w-[244px] cursor-pointer'>
               <Image src={logo} alt="logo" />
        </Link>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Category</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>other</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image src={logo} alt="logo" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      furniture/category
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            {OTHER.map(({id, title, desc, link})=>(
                <ListItem href={link} title={title} key={id}>
                 {desc}
                </ListItem>
            ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </div>
   <div>
     login
   </div>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={props.href as string}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})


ListItem.displayName = "ListItem"

