import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

type HoverCardProps = {
  name: string;
  description: string;
  url: string;
  image: string;
  date: Date;
  className?: string;
};

export function HoverCarsd({
  name,
  description,
  url,
  image,
  date,
  className,
}: HoverCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link href={url}>
          <Button variant="link">{name}</Button>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className={className ?? "w-80 isolate"}>
        <div className={className}>
          <Avatar>
            <AvatarImage src={`${image}.png`} />
            <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className="text-sm">{description}</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                {date.toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
