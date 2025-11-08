export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const courses: Course[] = [
  {
    title: 'زبان انگلیسی سطح B2 - آموزشگاه سفیر گستر',
    number: '',
    link: 'https://teh.gosafir.com/login/index.php',
    university: 'آموزشگاه سفیر گستر',
  },
  {
    title: 'طراحی الگوریتم و ساختمان داده - مجتمع فنی تهران',
    number: '',
    link: 'https://mftplus.com/',
    university: 'مجتمع فنی تهران'
  },
  {
    title: 'دوره مهندسی نرم افزار در برنامه نویسی',
    number: '',
    link: 'https://www.nikooravesh.com/',
    university: 'آموزشگاه نیکوروش'
  },
];

export default courses;
