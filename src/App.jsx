import React from 'react';
import Accordion from './component/accordion/Accordion'
import Star from './component/star-rating/StarRating';
import ImageSlider from './component/image-slider/ImageSlider';
import Counter from './component/counter-app/Counter';
import LoadMoreData from './component/load-more-data/LoadMoreData'
import ApiProject from './component/api-project/ApiProject';


const App = () => {

  return (
    <div>
      {/* <h1>1 Image Slider</h1>
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={"10"}/>
      <br />
      <h1>2 Accordion</h1>
      <Accordion/>
      <br />
      <h1>3 Star Rating</h1>
      <Star/>
      <br />
      <h1>4 Counter App</h1>
      <Counter/> */}
      {/* <LoadMoreData/> */}
      <ApiProject/>
      
    </div>
  )
}

export default App
