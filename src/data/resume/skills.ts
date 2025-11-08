export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
    {
    title: 'java Script',
    competency: 5,
    category: ['Web Development', 'Languages' , 'Javascript'],
  },
  {
    title: 'react JS',
    competency: 3,
    category: ['Web Development','tools', 'Javascript'],
  },
  {
    title: 'Clean Code',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bootstrap',
    competency: 4,
    category: ['Web Development', 'tools'],
  },
  {
    title: 'Regex',
    competency: 5,
    category: ['Web Development', 'Languages' , 'tools'],
  },
  {
    title: 'npm',
    competency: 3,
    category: ['Web Development', 'tools'],
  },
  {
    title: 'responsive Design',
    competency: 5,
    category: ['Web Development', 'tools'],
  },
  {
    title: 'xamp/wamp',
    competency: 4,
    category: ['Web Development', 'tools'],
  },

  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'mySqli',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'phpMyAdmin',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Git/github',
    competency: 4,
    category: ['Tools' , 'Web Development'],
  },
  {
    title: 'adobe animated',
    competency: 4,
    category: ['Tools', 'ui'],
  },
  {
    title: 'figma',
    competency: 4,
    category: ['Tools', 'ui'],
  },

  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C++',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'PHP',
    competency: 3,
    category: ['Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors: string[] =
[
  '#0F2027', // آبی نفتی تیره
  '#203A43', // سبزآبی تیره
  '#2C5364', // آبی دودی
  '#5C80BC', // آبی خاکستری
  '#BFAE48', // طلایی مات
  '#F05D5E', // قرمز مدرن
  '#D9D9D9', // خاکستری روشن
  '#14213D', // آبی تیره
  '#E5E5E5', // طوسی خیلی روشن
  '#FCA311', // زرد نارنجی
  '#6FFFE9', // فیروزه‌ای روشن
]

//  [
//   '#6968b3',
//   '#37b1f5',
//   '#40494e',
//   '#515dd4',
//   '#e47272',
//   '#cc7b94',
//   '#3896e2',
//   '#c3423f',
//   '#d75858',
//   '#747fff',
//   '#64cb7b',
// ];

const categories: Category[] = Array.from(new Set(skills.flatMap(({ category }) => category)))
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
