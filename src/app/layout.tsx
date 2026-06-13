import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'Merci Hotel - Элегантная гостиница в Ташкенте',
  description: 'Забронируйте номер в Merci Hotel в Ташкенте. Современный комфорт, удобное расположение, высокий сервис. Прямые бронирования, завтрак включен, бесплатный Wi-Fi.',
  keywords: ["гостиница Ташкент, отель Ташкент, Merci Hotel, hotel Tashkent, бронирование отеля Ташкент, лучшие отели Ташкента, комфортный отель Ташкент, отель у аэропорта Ташкент, Ташкент отель, отели в Ташкенте"],
  openGraph: {
    "title": "Merci Hotel - Элегантная гостиница в Ташкенте",
    "description": "Забронируйте номер в Merci Hotel в Ташкенте. Современный комфорт, удобное расположение, высокий сервис. Прямые бронирования, завтрак включен, бесплатный Wi-Fi.",
    "url": "https://mercihotel.uz",
    "siteName": "Merci Hotel",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/empty-hotel-reception-entryway-with-glamorous-decorations_482257-87376.jpg",
        "alt": "Merci Hotel exterior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Merci Hotel - Элегантная гостиница в Ташкенте",
    "description": "Забронируйте номер в Merci Hotel в Ташкенте. Современный комфорт, удобное расположение, высокий сервис. Прямые бронирования, завтрак включен, бесплатный Wi-Fi.",
    "images": [
      "http://img.b2bpic.net/free-photo/empty-hotel-reception-entryway-with-glamorous-decorations_482257-87376.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
