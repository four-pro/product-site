/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface WhySectionProps {}

const WhySection: React.FC<WhySectionProps> = (props) => {
  return (
    <section className='section category' aria-label='features' id='features'>
      <div className='container'>
        <h2 className='h2 section-title'>
          Why choose <span className='span'>FourPro</span>
        </h2>

        <p className='section-text'>
          Our mission is not just to train, but to guide the students through
          step by step assistance to reach their goals.
        </p>

        <ul className='grid-list'>
          <li>
            <div className='category-card'>
              <h3 className='h3'>
                <div className='card-title'>Individual focus</div>
              </h3>

              <p className='card-text'>
                Individual focus to provide conceptual clarity of all subjects
                in the syllabus
              </p>
            </div>
          </li>

          <li>
            <div className='category-card'>
              <h3 className='h3'>
                <div className='card-title'>Course materials</div>
              </h3>

              <p className='card-text'>
                All necessary course materials and training notes for the exams
                are provided as part of the course curriculum.
              </p>
            </div>
          </li>

          <li>
            <div className='category-card'>
              <h3 className='h3'>
                <div className='card-title'>Mentor system</div>
              </h3>

              <p className='card-text'>
                Mentor system for personalized attention and motivation.
              </p>
            </div>
          </li>

          <li>
            <div className='category-card'>
              <h3 className='h3'>
                <div className='card-title'>Sessions and classes</div>
              </h3>

              <p className='card-text'>
                Free Doubt Sessions, OSCE interactive classes, Simulation videos
                and reviews, engaging sessions.
              </p>
            </div>
          </li>
        </ul>

        <ul className='about-list'>
          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              Additional support to the students to gain better clinical
              knowledge and to boost their confidence levels to recap prior to
              attending the test.
            </p>
          </li>

          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              MOCK exams - The one on one MOCK OSCE sessions will help the
              student become confident and oriented, Examiner-led practice
              stations for mock OSCE.
            </p>
          </li>

          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              We also provide special courses for Nursing &Nursing Officer Exams
              like,{' '}
              <b>
                AIIMS, DSSSB, DGHS, KERALA PSC, ESI , SAFDARJUNG, RAILWAYS,
                JIPMER, PGI, BHU, NIMHANS
              </b>{' '}
              etc.
            </p>
          </li>

          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              <b>Health Skills Training</b> to deliver essential clinical skills
              training to healthcare professionals, including: nurses, nursing
              students, allied health professionals, doctors, medical students,
              clinical support workers, community staff and many more.
            </p>
          </li>

          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              Partnered with top level healthcare trainers from the UK for
              providing necessary training for our students, which is lead by a
              Senior Consultant in UK with more than 20yrs of work experience.
            </p>
          </li>

          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              We also provide mentorship guidance & additional training when
              they reach UK in the form of OSCE training and retraining when
              needed. This greatly helps the students to be oriented and
              overcome the hurdles faced during the OSCE stations.
            </p>
          </li>

          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              Students get guidance from their airport arrival to accommodation
              with food.
            </p>
          </li>

          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              Placement at nursing facilities to get to know the culture and
              work ethics during the initial days of stay in the UK.
            </p>
          </li>

          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              Assistance will be provided for registration and Job Placements
              for the right Candidates.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default WhySection;
