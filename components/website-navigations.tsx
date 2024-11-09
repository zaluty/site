"use client";
import { DialogClose, DialogContent, DialogDescription,  DialogHeader, DialogTitle,   Dialog } from "./ui/dialog";
import { Button } from "./ui/button";
import React from "react";
 
import { Separator } from "@/components/ui/separator"
export function Text({open,setOpen}: {open: boolean, setOpen(open: boolean): void}) {
    return (
        <Dialog  open={open} onOpenChange={setOpen}>
            <DialogContent className="max-h-screen overflow-y-scroll">
                <DialogHeader>
                    <DialogTitle>Text </DialogTitle>
                    <DialogDescription>What is up with all the different colors ?
                    </DialogDescription>
                </DialogHeader>
                    If the text is in
                     <span className="text-orange-500">
                      Orange
                    </span> it is just a call to action 
                    if the text is in 
                    <span className="text-cyan-500">
                      Cyan
                    </span> it is an intro
                    if the text is 
                    <span className="text-yellow-500"> 
                        Yellow
                   </span> it is something u need to read  
                     <Separator  />
                    else it is just text
               
                <DialogClose className="-inset-11">
                    <Button className="w-full">
                    Close
                    </Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}