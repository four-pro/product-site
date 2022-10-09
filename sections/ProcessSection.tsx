/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface ProcessSectionProps {}

const ProcessSection: React.FC<ProcessSectionProps> = (props) => {
  return (
    <section
      className='video has-bg-image'
      aria-label='process'
      id='process'
      style={{ paddingTop: '50px', paddingBottom: '100px' }}
      //style="background-image: url('./assets/images/video-bg.png')"
    >
      <h2 className='h2' style={{ paddingBottom: '10px', textAlign: 'center' }}>
        Process
      </h2>

      <div className='container'>
        <div className='video-card'>
          <div
            className='video-banner img-holder '
            style={{
              backgroundColor: 'white',
              boxShadow: '0 10px 10px rgb(0 0 0 / 0.2)',
              zIndex: 1,
            }}
          >
            <img
              src='./process.jpg'
              width='970'
              height='550'
              loading='lazy'
              alt='video banner'
              className='img-cover'
            />
          </div>

          <img
            src='./assets/images/video-shape-1.png'
            width='1089'
            height='605'
            loading='lazy'
            alt=''
            className='shape video-shape-1'
          />

          <img
            src='./assets/images/video-shape-2.png'
            width='158'
            height='174'
            loading='lazy'
            alt=''
            className='shape video-shape-2'
          />
        </div>
      </div>
    </section>
  );
};
export default ProcessSection;

<h2 className='h2' style={{ paddingBottom: '10px', textAlign: 'center' }}>
  Process
</h2>;
