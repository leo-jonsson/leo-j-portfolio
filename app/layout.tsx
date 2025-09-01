import type { Metadata } from "next";
import { Monda } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Nav from "@/components/Nav";

const montserrat = Monda({
  variable: "--font-monda",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Leo",
  description: "Leo Jonsson Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} ${montserrat.variable} antialiased transition-all`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="max-w-[40rem] flex flex-col justify-center items-center mx-auto">
            {children}
            <div className="h-[7rem]" />
          </main>
          <Nav />
        </ThemeProvider>
      </body>
    </html>
  );
}
