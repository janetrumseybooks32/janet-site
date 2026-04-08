import "./globals.css";

export const metadata = {
  title: "Janet Rumsey Books",
  description: "Gentle books for little ones and the grownups who love them.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
