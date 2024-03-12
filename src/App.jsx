import React from "react";
import Accordion from "./component/accordion/Accordion";
import Star from "./component/star-rating/StarRating";
import ImageSlider from "./component/image-slider/ImageSlider";
import Counter from "./component/counter-app/Counter";
import LoadMoreData from "./component/load-more-data/LoadMoreData";
import ApiProject from "./component/api-project/ApiProject";
import TreeMenu from "./component/tree-menu/TreeMenu";
import { menu } from "./component/tree-menu/data";
import QrCodeGen from "./component/qr-code-genretor/QrCodeGen";
import ApiData from "./component/api-data/ApiData";
import LightDark from "./component/light-dark-mode/LightDark";
import ScrollBar from "./component/scroll-bar/ScrollBar";
import SideBar from "./component/sidebar-menu/SideBar";
import TabText from "./component/custom-tabs/TabText";
import Modal from "./component/custom-modal-popup/Modal";
import ModalTest from "./component/custom-modal-popup/ModalTest";
import GithubProfile from "./component/github-profile-finder/GithubProfile";
import Register from "./component/ai-code/RegisterPageWithAi";
import AccordionRevise from "./component/accordion/AccordionRevise";
import AccordionPractice from "./component/accordion/AccordionPractice";
import AccordionPractice2 from "./component/accordion/AccordionPractice2";
import SearchAutoComplete from "./component/search-autoComplete/SearchAutoComplete";
import YourMayAlsoLike from "./component/image-slider/YourMayAlsoLike";
import UseReducer from "./component/Use Reducer Hook/UseReducer";

const App = () => {
  return (
    <div>
      {/* <div style={{marginTop: '120px'}}>
      <h1>1 Image Slider</h1>
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={"10"}/>
    </div>
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
      <LightDark/>
      <h1>scroll bar</h1>
      <ScrollBar url={'https://dummyjson.com/products?limit=100'}/>
      <h1>Side bar</h1>
      <SideBar/>
      <h1>Tabs</h1>
      <TabText/>
      <h1>modal popup</h1>
      <ModalTest/>
      <h1>Github user</h1>
      <GithubProfile/>

      <Register />
      {/* <AccordionRevise/> */}
      {/* <AccordionPractice/> */}
      {/* <AccordionPractice2/> */}
      {/* <SearchAutoComplete/> */}

      {/* <YourMayAlsoLike/> */}
      <UseReducer/>
    </div>
  );
};

export default App;
