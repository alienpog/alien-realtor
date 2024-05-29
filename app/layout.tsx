import type { Metadata } from "next";
import "./globals.css";
import { Providers } from '@/redux/provider';


export const metadata: Metadata = {
  title: "Profile || alienrealtor",
  description: "Discover prime investment opportunities with alienreator, your trusted partner in selling properties and land. Specializing in land banking and real estate investments, we provide expert guidance to help you secure your financial future. Explore our diverse portfolio of residential, commercial, and undeveloped land options, tailored to meet your unique investment goals. With comprehensive market analysis, verified property listings, and dedicated support, alienrealtor ensures a seamless and profitable investment experience. Invest in land today for a prosperous tomorrow. Contact us to start building your wealth with solid, growth-oriented land investments.",
  icons: {
    icon: '/icon.png',
  },
}
;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <Providers>
      <body className="bg-[#FAFFF1]">{children}</body>  
    </Providers>      
    </html>
  );
}
