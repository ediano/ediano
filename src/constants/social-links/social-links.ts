import { LinkedinLogo, GithubLogo, FacebookLogo, InstagramLogo, TwitterLogo } from '@/use-client-packages/phosphor';

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
    name: 'Facebook',
    username: '@' + process.env.SOCIAL_LINK_FACEBOOK,
    url: `https://www.facebook.com/${process.env.SOCIAL_LINK_FACEBOOK}`,
    Icon: FacebookLogo,
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
];
