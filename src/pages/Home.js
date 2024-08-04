import React from 'react'
import { useState ,useEffect,useRef } from 'react';
import './Home.css'
import CarouselComponent from '../Components/ImageCarousel';
import {Link } from 'react-router-dom';




const Home = () => {

  const [countevent, setCountevent] = useState(0);
  const [countvol, setCountvol] = useState(0);
  const [countchil, setCountchil] = useState(0);

  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null) ;


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      {
        threshold: 0.5, // Adjust this value as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);



  useEffect(() => {
    let timer;
    if (startCounting && countevent < 60) {
      timer = setInterval(() => {
        setCountevent((prevCount) => prevCount + 1);
      }, 10); // Adjust the interval duration as needed for speed
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer); // Clear the interval on component unmount
  }, [ startCounting ,countevent]);

  

  useEffect(() => {
    let timer;
    if ( startCounting && countvol < 1200) {
      timer = setInterval(() => {
        setCountvol((prevCount) => prevCount + 1);
      }, 0.1); // Adjust the interval duration as needed for speed
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer); // Clear the interval on component unmount
  }, [startCounting, countvol]);





  useEffect(() => {
    let timer;
    if (startCounting && countchil< 100) {
      timer = setInterval(() => {
        setCountchil((prevCount) => prevCount + 1);
      }, 10); // Adjust the interval duration as needed for speed
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer); // Clear the interval on component unmount
  }, [startCounting, countchil]);



  return (
    <>
    <div class="hero-banner">
                <div className="hero-content">
                    <p>
                        "A candle loses nothing by lighting another candle."
                    </p>
                    <span style={{marginLeft:'20px', fontSize:'50px'}}> -James Keller</span>
                </div>
                <div class="candle">
                       <div class="flame">
                              <div class="shadows"></div>
                              <div class="top"></div>
                              <div class="middle"></div>
                              <div class="bottom"></div>
                       </div>
                       <div class="wick"></div>
                      <div class="wax"></div>
              </div>
    </div>
    <div class="aboutus">
         
          <div  className='aboutus-content'>
          <img className="aboutusimage" src="https://lh6.googleusercontent.com/UNmPswmWMeWQaOjVhfmFijpvJqbjF7TSqGlzgBK01ZkBEljmcblKH47lc8gy-ReHSkM=w2400"/>
          <h1  > ABOUT US</h1>
          <p>With an intent to work towards societal betterment and to help the students maintain their socially traditional roots, Social Wing RAIT was founded in the year 2013. We are dedicated to providing a grass-roots outlook of societal issues to our student members and finding and working on solutions to these issues. Ever since its inception, Social Wing has become a significant part of RAIT and has observed increasing participation of students with each passing year.</p>
        
          </div>
    </div>
    <div class="count">
          <div>

          <div  className='count-content' >
               <div className='count-item'> 
               <i class="bi bi-check-all"></i>
               <span className={`number countevent`} ref={sectionRef}> {countevent } +  </span>
               <span className='number'> Events done</span>
               </div>
               <div className='count-item'> 
               <i class="bi bi-person-fill"></i>
               <span className={`number countvol`} ref={sectionRef}>{countvol } +  </span>
               <span className='number'> Happy Volunteers</span>
               </div>
               <div className='count-item'> 
               <i class="bi bi-heart-pulse-fill"></i>
               <span className={`number countchil`} ref={sectionRef}> { countchil} + </span>
               <span className='number'> Children Educated</span>
               </div>
        
          </div>
          </div>
    </div>
    <div class="event">
          <div>
          <div  className='event-content'>
            <h1>OUR EVENTS</h1>
         
           <CarouselComponent/> 

           <div className='gallaryinhome'> 
           <Link to="/gallary" className='gallarylink' > View All <span style={{marginRigh:'20px'}}>Stories  </span> <i class="bi bi-arrow-right-circle"></i></Link>
          </div>
          </div>
          </div>
    </div>
    <div class="team">
          <div>
          <div  className='team-content'>
            <h1>TEAMS</h1>
          <p>With an intent to work towards societal betterment and to help the students maintain their socially traditional roots, Social Wing RAIT was founded in the year 2013. We are dedicated to providing a grass-roots outlook of societal issues to our student members and finding and working on solutions to these issues. Ever since its inception, Social Wing has become a significant part of RAIT and has observed increasing participation of students with each passing year.</p>
        
          </div>
          </div>
    </div>
    <div class="gallary">
          <div>
          <div  className='gallary-content'>
            <h1>GALLARY</h1>
          <p>With an intent to work towards societal betterment and to help the students maintain their socially traditional roots, Social Wing RAIT was founded in the year 2013. We are dedicated to providing a grass-roots outlook of societal issues to our student members and finding and working on solutions to these issues. Ever since its inception, Social Wing has become a significant part of RAIT and has observed increasing participation of students with each passing year.</p>
        
          </div>
          </div>
    </div>
   
  
    

    </>
  )
}

export default Home;
