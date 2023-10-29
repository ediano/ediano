import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

const inter = Inter({ subsets: ['latin'] });

import { getGithubUserEdiano } from '@/services/github';

export async function generateMetadata() {
  const response = await getGithubUserEdiano();

  return {
    title: response.name,
    description: response.bio,
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={twMerge(inter.className, 'min-h-screen')}>{children}</body>
    </html>
  );
}
