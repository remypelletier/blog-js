"use client";

import Link from "next/link";
import * as Popover from "@radix-ui/react-popover";

const admin = () => {
  return (
    <div>
      <p>admin</p>
      <Link href={"/"}>go to home</Link>
      <PopoverDemo></PopoverDemo>
    </div>
  );
};

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger>More info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content>
        Some more info…
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default admin;
