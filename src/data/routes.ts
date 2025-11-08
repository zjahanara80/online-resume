export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: "زینب جهان آرا",
    path: '/',
  },
  // {
  //   label: 'About',
  //   path: '/about',
  // },
  {
    label: 'رزومه',
    path: '/resume',
  },
  {
    label: 'نمونه کار',
    path: '/projects',
  },
  {
    label: 'تماس با من',
    path: '/contact',
  },
  {
    label: 'دانلود رزومه ',
    path: '/resume',
  },
];

export default routes;
