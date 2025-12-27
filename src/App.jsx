import { useState } from 'react'
import SayangSmile1 from './images/sayangImage/01.jpeg'
import SayangSmile2 from './images/sayangImage/02.jpeg'
import SayangSmile3 from './images/sayangImage/03.jpeg'
import SayangSmile4 from './images/sayangImage/04.jpeg'
import SayangSmile5 from './images/sayangImage/05.jpeg'
import SayangSmile6 from './images/sayangImage/06.jpeg'
import SayangSmile7 from './images/sayangImage/07.jpeg'
import SayangSmile8 from './images/sayangImage/08.jpeg'
import SayangSmile9 from './images/sayangImage/09.jpeg'
import SayangSmile10 from './images/sayangImage/10.jpeg'
import SayangSmile11 from './images/sayangImage/11.jpeg'
import SayangSmile12 from './images/sayangImage/12.jpeg'
import SayangSmile13 from './images/sayangImage/13.jpeg'
import SayangSmile14 from './images/sayangImage/14.jpeg'
import BlackLove from './images/assets/black love.png'
import TiltedCard from './components/card/tiltedcard'
import BlurText from './components/text/blurryTest'
import BlackCat1 from './images/assets/black cat1.jpeg'
import BlackCat2 from './images/assets/black cat 2.jpeg'
import BlackCat4 from './images/assets/black cat 3.jpeg'
import BlackCat5 from './images/assets/black cat 4.jpeg'
import BlackCat6 from './images/assets/black cat 5.jpeg'
import BlackCat3 from './images/assets/Black cat.jpeg'

import ScrollReveal from './components/text/scrollReveal'
import Stack from './components/card/stack'
import './App.css'

//gambar sayang




function App() {

  const images = [
    SayangSmile1,
    SayangSmile2,
    SayangSmile3,
    SayangSmile4,
    SayangSmile5,
    SayangSmile6,
    SayangSmile7,
    SayangSmile8,
    SayangSmile9,
    SayangSmile10,
    SayangSmile11,
    SayangSmile12,
    SayangSmile13,
    SayangSmile14
  ];

  return (
    <>
      <div className='w-full h-auto flex flex-col antialiased subpixel-antialiased'  >
        <div className="h-[900px] flex flex-col justify-center">
          <div >
            <div className='absolute '>
              <img src={BlackCat1} alt="black cat" className='relative left-[250px] -top-[250px] w-[100px]' />
              <img src={BlackCat2} alt="black cat" className='relative w-[100px] -top-[300px] left-[10px]' />
              <img src={BlackCat3} alt="black cat" className='relative w-[100px] top-[190px] -rotate-45' />
              <img src={BlackCat4} alt="black cat" className='relative w-[150px] -top-[450px] left-[160px] ' />
              <img src={BlackCat5} alt="black cat" className='relative w-[150px] top-[15px] left-[120px] -rotate-45' />
            </div>
            <div className='absolute '>
              <img src={BlackLove} alt="black love" className='w-[100px] -rotate-45' />
              <img src={BlackLove} alt="black love" className='w-[50px] relative top-7 ' />
              <img src={BlackLove} alt="black love" className='w-[50px] relative -top-[90px] left-[250px] -rotate-45' />
              <img src={BlackLove} alt="black love" className='w-[100px] relative -top-5 left-[230px] rotate-45' />
            </div>
            <TiltedCard
              imageSrc={SayangSmile1}
              altText="Sayang Smile"
              captionText="Sayang Smile"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}

            />
          </div>
          <div className='w-full h-auto'>
            <BlurText
              text="Happy Birthday "
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={() => { }}
              className="text-3xl text-black font-extrabold "
            />
            <BlurText
              text="Sayangggg 🩷🩷"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={() => { }}
              className="text-3xl mb-1 text-black font-extrabold "
            />
            <div className="w-[300px] text-center">
              <p className="text-[11px] text-black font-thin">Happy 21st sayangg! May this new chapter be filled with good memories, growth, and everything you deserve.</p>
            </div>
          </div>
        </div>
        <div className="mt-[0px]">
          <div className="min-h-[50vh] w-[300px] flex flex-col text-black font-extrabold p-10">

            {/* The Scroll Reveal Component */}
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur={true}
              baseRotation={5}
            >
              My Cantikkkkkk 🩷🩷
            </ScrollReveal>
            <div style={{ width: 208, height: 208 }}>
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={true}
                cards={images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`card-${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ))}
              />
            </div>

          </div>
        </div>
        <div>
          <div>
            <img src={BlackCat6} alt="black cat" className='w-[300px]' />
          </div>
          <div className="w-[300px] h-auto rounded-[18px]  p-5 shadow-xl">
            <p className='text-black '>Hi Sayanggg 🩷🩷, sorry tak dapat bagi physical card . Saya tak ada skill nak buat physical card  macam awak tapi saya buat card birthday macam ni tauu. BTW HAPPY BIRTHDAY SAYANGGG 🩷. I wish this year will be a better year for you and I hope we can continue be together. Jangan sedih sedih tauu sayangg saya selalu ada dengan awak, saya tauu awak someone yang hardworking, soo saya harapp tahun nii awak dapat apa yang awak nak and apa yang awak deserve. Anddd saya harap awak dapat capai apa yang impikan one day. Saya nakk ikut sekali dalam journey awakk tauu. Saya tau awak stress and not in a very good condition lately ni tapi saya sentiasa akan teman awak tauu . Ingatt tauuu awak tak keseorangan... Sayangg awakk 💋</p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
