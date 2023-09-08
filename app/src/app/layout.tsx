import type { GetServerSideProps, Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Box, Flex, Link, Theme } from "@radix-ui/themes";
import { Navbar } from "./components/Navbar";
import Providers from "./components/Providers";

export const metadata: Metadata = {
  title: "Blog",
  description: "Remsapp Blog",
};

export default async function RootLayout(props: any) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Providers>
          <Theme appearance="dark">
            <Flex direction="column" style={{ minHeight: "100vh" }}>
              <Navbar />
              <Box style={{ flex: 1 }}>{props.children}</Box>
              <Box height="6"></Box>
            </Flex>
          </Theme>
        </Providers>
      </body>
    </html>
  );
}
