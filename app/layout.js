import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./component/header"; 
import NavBar from "./component/NavBar"; 
import Footer from "./component/Footer"; 
import { ClerkProvider } from "@clerk/nextjs"; 

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${roboto.className} flex flex-col min-h-screen m-0 p-0`}>
          <Header />
          <NavBar /> 
          <main className="flex-grow flex flex-col items-center justify-start w-full px-4 py-4">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
