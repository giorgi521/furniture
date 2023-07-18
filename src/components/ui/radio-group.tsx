import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "@/lib/utils"
import {cva} from 'class-variance-authority';


export enum BORDER_OF_RADIO_GROUP_ENUM {
    "border-gray",
    "border-lightGold",
    "border-gold",
}


const radioGroupVariant = cva(
  "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-2",
        lg:
          "border-4",
      },
      size: {
        default: "w-[18px] h-[18px]",
        sm: "w-4 h-4",
        lg: "w-6 rounded-md h-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const RadioGroup = React.forwardRef< React.ElementRef<typeof RadioGroupPrimitive.Root>,React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("flex gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(radioGroupVariant({ variant: "default" , size:"lg" }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center text-red-400">
        <CheckIcon className="h-3.5 w-3.5 fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
