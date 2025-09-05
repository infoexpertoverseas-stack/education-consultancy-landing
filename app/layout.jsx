import "./globals.css";

export const metadata = {
  title: "Expert Overseas Education Consultants — Islamabad",
  description: "Admissions, visa guidance, and study abroad consulting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
