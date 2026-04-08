export const metadata = {
  title: "Janet Rumsey Books",
  description: "Gentle books for little ones and the grownups who love them.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
