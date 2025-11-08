export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
}

const data: Project[] = [
  {
    title: 'فروشگاه لباس فول استک لاوین همراه پنل مدیریت',
    subtitle: '',
    image: '/images/projects/lovin.png',
    date: '01-03-1404',
    link: 'https://lovin-clothing.onrender.com/',

    desc:
      'سایت فروشگاه لباس لاوین به صورت فول استک پیاده سازی شده اکه به صورت فول ریسپانسیو بوده و دارای پنل مدیریت میباشد' +
      'که بکند آن توسط nodeJS و Express JS و فرانت آن با زبان Javascript خام همگی توسط بنده  توسعه یافته و کاملا تمرینی بوده و کاربرد دیگری ندارد.' + 
      '   js + node JS + express js + css-sass'
  },
  {
    title: 'قالب کاسوکا',
    subtitle: '',
    link: 'https://github.com/zjahanara80/kasuka',
    image: '/images/projects/kasuka.png',
    date: '07-06-1404',
    desc: ' ایده ی این سایت از یک سایت طراحی قالب دریافت شده و توسط بنده توسعه و کدنویسی یافته است' +
    'کاسوکا یک وب پیج فول ریسپانسیو است که آن را با کامپوننت های ریکت توسعه دادم و دارای بخش های متفاوت و انیمیشن های به روز میباشد و کاملا تمرینی است.' +
    '   html + sass-css + react js'
},
  {
    title: ' فروشگاه بازی گیم سنتر ',
    subtitle: '',
    link: 'https://github.com/zjahanara80/game-php',
    image: '/images/projects/game.png',
    date: '01-09-1403',
    desc:
      ' سایت فروشگاه گیم سنتر یک فروشگاه الکترونیکی بازی های رایانه ای است که به صورت فول استک توسط بنده پیاده سازی شده و امکان سفارش محصول و ارتباط با دیتابیس و انتقال به درگاه پرداخت در آن وجود دارد' +
      '   php + html + css',
  },
  {
    title: 'دانشکده فنی اراک',
    subtitle: '',
    image: '/images/projects/uni.PNG',
    date: '11-01-1402',
    desc:
      'پیاده سازی سایت دانشگاه فنی حرفه ای به عنوان پروژه پایانی بنده در هنگام فارف التحصیلی بود که طی آن این سایت دارای عملکرد های پنج سال اخیر دانشکده همراه دیتا بیس و امکان ورود و خروج کاربر ایجاد گردید' +
      '  html , css , php , js',
  },
];

export default data;
