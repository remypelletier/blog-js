import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import {
  Box,
  Container,
  Flex,
  Link,
  Theme,
  Text,
  ThemePanel,
} from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "Blog",
  description: "Remsapp Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Theme appearance="dark">
          <Flex direction="column" style={{ minHeight: "100vh" }}>
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
                  <Link href="/login">login</Link>
                </Box>
              </Flex>
            </Box>
            <Box style={{ flex: 1 }}>{children}</Box>
            <Box height="6"></Box>
          </Flex>
        </Theme>
      </body>
    </html>
  );
}
