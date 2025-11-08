export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'دانشگاه فنی حرفه ای دولتی اراک',
    degree: 'کارشناسی مهندسی حرفه ای نرم افزار',
    link: 'https://araku.ac.ir/',
    year: 1402,
  },
  {
    school: 'دانشگاه فنی حرفه ای دولتی اراک',
    degree: 'کاردانی فناوری اطلاعات و ارتباطات IT',
    link: 'https://araku.ac.ir/',
    year: 1400,
  },
];

export default degrees;
