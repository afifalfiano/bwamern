import Header from 'parts/Header'
import React from 'react'
import landingPage from 'assets/json/landingPage.json';
import Hero from 'parts/Hero';

export default function LandingPage(props) {
  return (
    <React.Fragment>
    <Header {...props} />
    <Hero data={landingPage.hero} />
    </React.Fragment>
  )
}
