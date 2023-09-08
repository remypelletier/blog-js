"use client";

import { Box, Flex, Text, Link as RadixLink } from "@radix-ui/themes";
import Link from "next/link";
import { SignInButton } from "./SignInButton";

export function Navbar() {
  return (
    <Box p="2">
      <Flex justify="between">
        <Box>
          <Link href="/">Remsapp</Link>
        </Box>
        <Flex gap="2">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/articles">Articles</Link>
        </Flex>
        <Box>
          <SignInButton />
        </Box>
      </Flex>
    </Box>
  );
}
