import { useEffect } from 'react';
import { BuySection } from './Components/BuySection'
import { CarouselGallery } from './Components/CarouselGallery'
import { Description } from './Components/Description'
import './styles/app.css'
import { Separator } from './Components/ui/separator';
import { BigDescription } from './Components/BigDescription';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const column1 = document.getElementById('column1');
      const column2 = document.querySelector('.column2') as HTMLElement | null;
      if (!column1 || !column2) return;

      const column1Height = column1.getBoundingClientRect().height;
      const column2Height = column2.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;
      const maxScroll = column2Height - windowHeight;

      if (window.scrollY < maxScroll) {
        const translateY = Math.min(window.scrollY, column1Height - windowHeight);
        column1.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mt-28" style={{ gridTemplateColumns: '40% 40% 17%' }}>
      <div id='column1'>
        <CarouselGallery />
        </div>

      <div className='column2'>
        <Description />
      </div>

      <BuySection />
    </div>
    <Separator />
    
    <BigDescription />
    </div>
  )
}

export default App

