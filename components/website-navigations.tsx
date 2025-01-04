"use client";
import { DialogClose, DialogContent, DialogDescription,  DialogHeader, DialogTitle,   Dialog } from "./ui/dialog";
import { Button } from "./ui/button";
import React from "react";
import { Separator } from "@/components/ui/separator"
export function Text({open, setOpen}: {open: boolean, setOpen(open: boolean): void}) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-h-screen overflow-y-scroll">
                <DialogHeader>
                    <DialogTitle>Text Color Guide</DialogTitle>
                    <DialogDescription>Color coding system for text elements</DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="text-orange-500 font-mono">text-orange-500:</span>
                        <span>Call-to-action elements</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-cyan-500 font-mono">text-cyan-500:</span>
                        <span>Introductory content</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-yellow-500 font-mono">text-yellow-500:</span>
                        <span>Critical information</span>
                    </div>

                    <Separator />

                    <div className="flex items-center gap-2">
                        <span className="font-mono">default:</span>
                        <span>Standard text content</span>
                    </div>
                </div>

                <DialogClose className="-inset-11">
                    <Button className="w-full">Close</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}