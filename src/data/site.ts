export const site = {
  name: 'ZHANG.stream',
  author: 'Yundong Zhang',
  email: 'yundongzhang97@gmail.com',
  github: 'https://github.com/isyundong',
  description: 'Yundong Zhang, software engineer. Networking, electronics and the decentralized web.',
};

export type Project = {
  name: string;
  tag: string;
  description: string;
  url: string;
  host: string;
  status: 'ok' | 'warn' | 'bad' | 'unknown';
  statusLabel: string;
};

// Only the IP tool is listed for now. ipscaner.com is a separate, untouched site.
export const projects: Project[] = [
  {
    name: 'ip.zhang.stream',
    tag: 'Network',
    description: 'See your public IP, test latency, and check that split routing works.',
    url: 'https://ip.zhang.stream',
    host: 'ip.zhang.stream',
    status: 'ok',
    statusLabel: 'Online',
  },
];
