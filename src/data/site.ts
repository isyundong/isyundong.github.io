export const site = {
  name: 'ZHANG.stream',
  author: 'Yundong Zhang',
  email: 'yundongzhang97@gmail.com',
  github: 'https://github.com/isyundong',
  description: '张云东的个人网站。一个软件工程师写字、做东西、拍照片的地方。',
};

export const nav = [
  { href: '/', label: '首页' },
  { href: '/posts/', label: '文章' },
  { href: '/projects/', label: '项目' },
  { href: '/photos/', label: '照片' },
  { href: '/about/', label: '关于' },
];

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
    description: '查公网 IP、测延迟、验证分流是否生效。',
    url: 'https://ipscaner.com',
    host: 'ipscaner.com',
    status: 'ok',
    statusLabel: '在线',
  },
];

export type Album = {
  slug: string;
  title: string;
  location: string;
  date: string;
  camera: string;
  photos: { src: string; alt: string }[];
};

export const albums: Album[] = [
  {
    slug: 'jinbao2024',
    title: 'JinBao',
    location: '杭州',
    date: '2025-02-13',
    camera: 'iPhone 14 Pro',
    photos: [{ src: '/photos/jinbao2024/IMG_2611.jpg', alt: 'JinBao' }],
  },
];
