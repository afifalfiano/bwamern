import React from 'react'
import ImageHero from 'assets/images/img-hero.jpg';
import ImageHeroFrame from 'assets/images/img-hero-frame.jpg';
import IconCities from 'assets/images/icons/cities.svg';
import IconTraveler from 'assets/images/icons/travelers.svg';
import IconTreasure from 'assets/images/icons/treasure.svg';
import Button from 'elements/Button';

export default function Hero(props) {

    const showMostPicked = () => {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavio: 'smooth'
        })
    }

  return (
    <section className='container pt-4'>
        <div className='row align-items-center'>
            <div className='col-auto pr-5' style={{width: 530}}>
                <h1 className='font-weight-bold line-height-1 mb-3'>
                    Forget Busy Work, <br />
                    Start Next Vacation
                </h1>
                <p className='mb-5 font-weight-light text-gray-500 w-75'>
                    We provide what you need to enjoy your holiday with familty. Time to make another memorable moments.
                </p>
                <Button className='btn px-5 ' hasShadow isPrimary onClick={showMostPicked}>Show Me Now</Button>

                <div className='row mt-5'>
                    <div className='col-auto' style={{marginRight: 35}}>
                        <img src={IconTraveler}  alt={`${props.data.travelers} Travelers`} width="36" height="36"/>
                        <h6 className='mt-3'>
                            {props.data.travelers} 
                            <span className='text-gray-500 font-weight-light'>
                            Travelers
                            </span>
                        </h6>
                    </div>
                    <div className='col-auto' style={{marginRight: 35}}>
                        <img src={IconTreasure}  alt={`${props.data.treasure} Treasure`} width="36" height="36"/>
                        <h6 className='mt-3'>
                            {props.data.treasures} 
                            <span className='text-gray-500 font-weight-light'>
                            Treasure
                            </span>
                        </h6>
                    </div>
                    <div className='col-auto'>
                        <img src={IconCities}  alt={`${props.data.cities} Cities`} width="36" height="36"/>
                        <h6 className='mt-3'>
                            {props.data.cities} 
                            <span className='text-gray-500 font-weight-light'>
                            Cities
                            </span>
                        </h6>
                    </div>
                </div>
            </div>

            <div className='col-6 pl-5'>
                <div style={{width: 520, height: 410}}>
                    <img className='img-fluid position-absolute' alt="Room with couches" src={ImageHeroFrame}  style={{margin: '0px -15px -15px 0px', zIndex:1}} />
                    <img className='img-fluid position-absolute' alt="Room with couches" src={ImageHero}  style={{margin: '-30px 0 0 -30px', zIndex:1}} />
                </div>
            </div>
        </div>
    </section>
  )
}
