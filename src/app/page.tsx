import { Children } from 'react';
import Image from 'next/image';

import { getGithubUserEdiano } from '@/services/github';
import { SOCIAL_LINKS } from '@/constants/social-links';

export default async function Home() {
  const ediano = await getGithubUserEdiano();

  return (
    <div className="flex min-h-screen flex-col justify-evenly gap-12">
      <header className="px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Image alt={ediano.name} src={ediano.avatar_url} width={64} height={64} className="rounded-full" />
            <h1 className="text-center text-xl sm:text-5xl">{ediano.name}</h1>
          </div>

          <p className="max-w-2xl self-center text-center">{ediano.bio}</p>
        </div>
      </header>

      <main className="px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-6">
          {Children.toArray(
            SOCIAL_LINKS.map(({ username, url, Icon }) => {
              return (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener"
                  className="flex flex-col items-center justify-center rounded-lg p-4 shadow-lg shadow-zinc-400 hover:shadow-zinc-300 dark:shadow-zinc-700 dark:hover:shadow-zinc-600"
                >
                  <Icon size={38} />

                  <span className="text-xl">{username}</span>
                </a>
              );
            }),
          )}
        </div>
      </main>
    </div>
  );
}
