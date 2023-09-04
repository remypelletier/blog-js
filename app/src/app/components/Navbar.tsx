import { Box, Flex, Text, Link as RadixLink } from "@radix-ui/themes";
import Link from "next/link";

export function Navbar() {
  return (
    <ul>
      <li>
        <Link href={"/"}>home</Link>
      </li>
      <li>
        <Link href={"/"}>about</Link>
      </li>
      <li>
        <Link href={"/"}>articles</Link>
      </li>
    </ul>
  );
}
