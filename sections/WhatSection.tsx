/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface WhatSectionProps {}

const WhatSection: React.FC<WhatSectionProps> = (props) => {
  return (
    <section className='section course' id='whatWeOffer' aria-label='course'>
      <div className='container'>
        <h2
          className='h2'
          style={{ paddingBottom: '10px', textAlign: 'center' }}
        >
          What we offer
        </h2>
        <p
          className='section-subtitle'
          style={{ textTransform: 'none', paddingBottom: '30px' }}
        >
          We strive to empower our nurses and allied health professionals for
          various assessment tests such as :-
        </p>

        <ul className='grid-list'>
          <li>
            <div className='course-card'>
              <div className='card-content'>
                <h3 className='h3'>
                  <div className='card-title'>NCLEX-RN and NCLEX-PN</div>
                </h3>

                <p style={{ fontSize: '14px' }}>
                  The NCLEX exam (National Council Licensure Examination) is
                  used by state boards of nursing to decide whether or not a
                  candidate is ready to practice as an entry-level nurse. There
                  are two variations of the NCLEX, one for registered nurses
                  (RNs) and one for practical nurses (PN).
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className='course-card'>
              <div className='card-content'>
                <h3 className='h3'>
                  <div className='card-title'>MOH</div>
                </h3>

                <p style={{ fontSize: '14px' }}>
                  MOH Exam stands for Ministry of Health Exam. The exam is
                  conducted by the Ministry of Health UAE. It is a medical
                  license exam that is conducted for appointing health care
                  professionals who can work at different health care centers
                  all over UAE.
                  <br />
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className='course-card'>
              <div className='card-content'>
                <h3 className='h3'>
                  <div className='card-title'>Prometric and DHA</div>
                </h3>

                <p style={{ fontSize: '14px' }}>
                  Prometric Exam is a Nursing License Examination to ensure the
                  competence of nurses to work in QATAR, OMAN & SAUDI ARABIA.
                  <br />
                  <br />
                  DHA Exam offers licence for healthcare professionals to work
                  in Dubai.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className='course-card'>
              <div className='card-content'>
                <h3 className='h3'>
                  <div className='card-title'>HAAD</div>
                </h3>

                <p style={{ fontSize: '14px' }}>
                  The HAAD Exam is a Nursing License Examination to ensure the
                  competence of nurses with 3 years of clinical experience
                  following registration, with one year in surgical ward and one
                  in specialty care in any hospital to work in Abu Dhabi.
                  <br />
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className='course-card'>
              <div className='card-content'>
                <h3 className='h3'>
                  <div className='card-title'>CBT(UK) </div>
                </h3>

                <p style={{ fontSize: '14px' }}>
                  The competence based test, also known as the CBT test is a 120
                  multiple-choice online question exam set by the NMC to test
                  your ability and knowledge to practice nursing safely in the
                  UK.
                  <br />
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className='course-card'>
              <div className='card-content'>
                <h3 className='h3'>
                  <div className='card-title'>OSCE (UK)</div>
                </h3>

                <p style={{ fontSize: '14px' }}>
                  The OSCE has been used to evaluate those areas most critical
                  to performance of health care professionals, such as the
                  ability to obtain/interpret data, problem-solve, teach,
                  communicate, and handle unpredictable patient behavior
                  <br />
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className='course-card'>
              <div className='card-content'>
                <h3 className='h3'>
                  <div className='card-title'>IELTS</div>
                </h3>

                <p style={{ fontSize: '14px' }}>
                  IELTS -- the International English Language Testing System is
                  a standardized test for students and professionals to show
                  their proficiency in the English language. IELTS has two
                  versions: ‘Academic’ and ‘General training’
                  <br />
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className='course-card'>
              <div className='card-content'>
                <h3 className='h3'>
                  <div className='card-title'>OET</div>
                </h3>

                <p style={{ fontSize: '14px' }}>
                  OET is Occupational English Test, is a test of the English
                  language specifically designed for healthcare professionals,
                  uses real-world healthcare scenarios . Recognised across
                  language across Australia, Dubai, Ireland, New Zealand,
                  Namibia, Singapore, and the UK.
                  <br />
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className='course-card'>
              <div className='card-content'>
                <h3 className='h3'>
                  <div className='card-title'>TOEFL</div>
                </h3>

                <p style={{ fontSize: '14px' }}>
                  The TOEFL iBT test helps you stand out confidently in English.
                  It's the only test that measures all four academic English
                  skills — reading, listening, speaking and writing — the way
                  they are actually used in a classroom, so you can be confident
                  you'll stand out to universities where it counts.
                  <br />
                </p>
              </div>
            </div>
          </li>
        </ul>

        <ul className='about-list' style={{ paddingTop: '30px' }}>
          <li className='about-item'>
            <ArrowForwardIosIcon />

            <p className='card-text' style={{ color: 'black' }}>
              Additional support to the students to gain better clinical
              knowledge and to boost their confidence levels to recap prior to
              attending the test.
            </p>
          </li>
        </ul>

        {/* <a href='#' className='btn has-before'>
          <span className='span'>Browse more courses</span>

          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </a> */}
      </div>
    </section>
  );
};
export default WhatSection;
