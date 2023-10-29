import 'server-only';

type GithubUser = {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
};

export const getGithubUserEdiano = async (): Promise<GithubUser> => {
  const response = await fetch('https://api.github.com/users/ediano', { next: { revalidate: 60 } });
  const data = response.json();
  return data;
};
