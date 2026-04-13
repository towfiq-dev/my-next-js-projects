import Image from 'next/image';
import React from 'react';
import abd from '../../assets/image/nyka.jpg'
export const metadata = {
  title: 'My Blog',
  description: '...',
}
const AboutPage = () => {
  return (
    <div>
      <h1>This is About page</h1>
      <Image width={'1000'} height={'100'} src={'/Ritika.jpg'} alt='abc'></Image>
      <Image width={'500'} height={'200'} src={abd} alt='abd'></Image>
      <Image width={'500'} height={'200'} src= 'https://images.filmibeat.com/ph-big/2025/09/ritika-nayak1757913064_1.jpg' alt='abfd'></Image>
      {/* <Image width={'500'} height={'200'} src= 'https://upload.wikimedia.org/wikipedia/te/2/20/Ritika_Nayak.jpg' alt='afbfd'></Image> */}
    </div>
  );
};

export default AboutPage;