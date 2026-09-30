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

// Only ipscaner is listed for now.
export const projects: Project[] = [
  {
    name: 'IPScaner',
    tag: 'Network',
    description: 'See your public IP, test latency, and check that split routing works.',
    url: 'https://ipscaner.com',
    host: 'ipscaner.com',
    status: 'ok',
    statusLabel: 'Online',
  },
];
