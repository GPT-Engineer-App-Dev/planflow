import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const Modal = ({ children, ...props }) => (
  <DialogPrimitive.Root {...props}>
    <DialogPrimitive.Trigger asChild>{props.trigger}</DialogPrimitive.Trigger>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
      <DialogPrimitive.Content
        className={cn(
          "fixed top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg",
          props.className
        )}
      >
        {children}
        <DialogPrimitive.Close asChild>
          <button
            className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon className="h-4 w-4" />
          </button>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
);

export default Modal;