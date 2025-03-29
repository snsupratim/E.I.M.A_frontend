import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latn"] });

export const metadata = {
  title: "EIMA | AI Poweed Campus",
  description: "Get your Campus AI powered.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {/* {children} */}
            <main className="min-h-screen">{children}</main>
            <footer className="bg-muted/50 py-4 mt-4">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Developed by E.I.M.A</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
