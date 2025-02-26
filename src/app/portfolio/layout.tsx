import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolyo | Mobilya Tasarım',
  description: 'Özel tasarım mobilya projelerimizi inceleyin. Mutfak, yatak odası, oturma odası, ofis, yemek odası ve banyo mobilyaları.',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
} 