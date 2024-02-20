import React from 'react';
import Accordion from './component/accordion/Accordion'
import Star from './component/star-rating/StarRating';
import ImageSlider from './component/image-slider/ImageSlider';
import Counter from './component/counter-app/Counter';
import LoadMoreData from './component/load-more-data/LoadMoreData'
import ApiProject from './component/api-project/ApiProject';
import TreeMenu from './component/tree-menu/TreeMenu';
import { menu } from './component/tree-menu/data';
import QrCodeGen from './component/qr-code-genretor/QrCodeGen';
import ApiData from './component/api-data/ApiData';
import LightDark from './component/light-dark-mode/LightDark';
import ScrollBar from './component/scroll-bar/ScrollBar';


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
      <Counter/>
      <h1>load more data</h1>
      <LoadMoreData/>
      <h1>Api fetch</h1>
      <ApiProject/>
      <h1>menu</h1>
      <TreeMenu menus={menu}/>
      <h1>Qr code genretor</h1>
      <QrCodeGen/>
      <h1>Api data</h1>
      <ApiData/>
      <h1>Switch Theme</h1>
      <LightDark/> */}
      <h1>scroll bar</h1>
      <ScrollBar url={'https://dummyjson.com/products?limit=100'}/>
      
    </div>
  )
}

export default App
