import { Inter } from "next/font/google";
import BottomNav from "~/components/layout/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticketer",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <BottomNav />
    </>
  );
}
