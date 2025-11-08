import React from 'react';

import type { Degree as DegreeType } from '@/data/resume/degrees';

import Degree from './Education/Degree';

interface EducationProps {
  data: DegreeType[];
}

const Education: React.FC<EducationProps> = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>تحصیلات</h3>
    </div>
    {data.map((degree , index) => (
      <Degree data={degree} key={index} />
    ))}
  </div>
);

export default Education;
