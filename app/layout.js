import "./globals.css";

export const metadata = {
  title: "Natürlich unterwegs",
  description: "A Next.js foundation for Natürlich unterwegs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
