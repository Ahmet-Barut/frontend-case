import React from 'react'
import Header from '../Components/Header/Header'
import CollectibleSneakers from '../Components/Collectible-Sneakers/CollectibleSneakers'
import Info from '../Components/Info/Info'
import Cards from '../Components/Cards/Cards'
import JoınUs from '../Components/JoinUs/JoınUs'
import Slider from '../Components/Slider/SliderComponent'
import Collection from '../Components/Collection/Collection'
import Footer from '../Components/Footer/Footer'
import Map from '../Components/Map/Map'

const HomeLayout = () => {
  return (
    <>
      <Header/>
      <CollectibleSneakers/>
      <Info/>
      <Cards/>
      <JoınUs/>
      <Slider/>
      <Collection/>
      <Map/>
      <Footer/>
    </>
  )
}

export default HomeLayout
