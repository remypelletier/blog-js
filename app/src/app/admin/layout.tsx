export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>header layout</h1>
      {children}
    </>
  );
}
