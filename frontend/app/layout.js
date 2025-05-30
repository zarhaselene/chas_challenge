import "./globals.css";

export const metadata = {
  title: "Ansökshjälpen",
  description: "En hjälptjänst för att förenkla ansökningsprocessen",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon0.svg", type: "image/svg", sizes: "32x32" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ url: "/icon1.png", type: "image/png", sizes: "192x192" }],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="darkScroll">
      <body className="antialiased">{children}</body>
    </html>
  );
}
