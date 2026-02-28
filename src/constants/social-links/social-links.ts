import { LinkedinLogo, GithubLogo, InstagramLogo, TwitterLogo, Archive } from '@/use-client-packages/phosphor';

export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    username: '@' + process.env.SOCIAL_LINK_LINKEDIN,
    url: `https://www.linkedin.com/in/${process.env.SOCIAL_LINK_LINKEDIN}`,
    Icon: LinkedinLogo,
  },
  {
    name: 'GitHub',
    username: '@' + process.env.SOCIAL_LINK_GITHUB,
    url: `https://github.com/${process.env.SOCIAL_LINK_GITHUB}`,
    Icon: GithubLogo,
  },
  {
    name: 'Instagram',
    username: '@' + process.env.SOCIAL_LINK_INSTAGRAM,
    url: `https://www.instagram.com/${process.env.SOCIAL_LINK_INSTAGRAM}`,
    Icon: InstagramLogo,
  },
  {
    name: 'Twitter',
    username: '@' + process.env.SOCIAL_LINK_TWITTER,
    url: `https://twitter.com/${process.env.SOCIAL_LINK_TWITTER}`,
    Icon: TwitterLogo,
  },
  {
    name: 'Blog',
    username: 'Blog',
    url: process.env.SOCIAL_LINK_BLOG,
    Icon: Archive,
  },
];
