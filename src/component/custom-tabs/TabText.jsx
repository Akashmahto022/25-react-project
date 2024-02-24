import React from "react";
import Tabs from "./Tabs";
import "./tabs.css";

function RandomComponent() {
  return (
    <h1>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi harum
      nihil dicta maxime quae impedit, exercitationem praesentium pariatur
      laboriosam officia ipsam repellat! Quo alias corporis atque ab, esse
      blanditiis excepturi placeat cumque optio suscipit vel molestias quas.
      Repellat commodi distinctio expedita minus maiores beatae recusandae
      repudiandae perferendis dignissimos alias nobis qui nulla molestiae
      aspernatur officia esse nesciunt dolor harum, at porro, dolorum
      exercitationem itaque cum? Ipsa perferendis dolores pariatur cumque
      reiciendis ad dolorum tempora modi sapiente facere ducimus, vero ut iure.
      Suscipit, a, amet quidem, soluta ullam accusamus dolorum pariatur culpa
      harum odit expedita eaque sapiente alias obcaecati necessitatibus vitae
      voluptas. Atque.
    </h1>
  );
}

const TabText = () => {
  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  const tabs = [
    {
      lable: "Tab 1",
      content: (
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab minima
          atque reiciendis accusantium amet id, incidunt magnam quaerat ea,
          quidem recusandae, fuga dolore possimus illo saepe repellendus
          provident officiis ipsum architecto quo. Ipsam veritatis quaerat
          fugiat corporis officiis quis, dolor nesciunt iure, asperiores
          temporibus tenetur consequatur totam itaque aperiam veniam reiciendis
          iusto esse voluptas recusandae cumque harum odio repudiandae pariatur?
          Fuga in ipsum nisi dignissimos maiores cumque, ad quam doloremque
          illum, fugit incidunt soluta optio nobis labore nihil! Maiores
          laboriosam doloribus, repellendus dolorum porro sit voluptates earum
          officia suscipit nisi hic voluptatem pariatur provident quae obcaecati
          optio. Similique quibusdam non suscipit ullam!
        </div>
      ),
    },
    {
      lable: "Tab 2",
      content: (
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et voluptas
          consequatur earum asperiores tenetur quidem laudantium, sunt deleniti
          error consequuntur fugiat ut culpa temporibus quo nostrum iusto
          doloremque minus? Libero accusantium beatae veniam in amet repellendus
          sequi alias soluta recusandae aliquid! Ea voluptatem exercitationem
          perspiciatis, autem eum dolorum corporis numquam architecto inventore
          enim vitae, perferendis distinctio, accusantium mollitia saepe culpa
          veniam obcaecati officiis. Temporibus, sit! Maiores aut numquam eos
          inventore error. Cupiditate, quia. Quibusdam laudantium sunt dolorum
          atque veniam qui commodi dignissimos aut culpa sapiente iure
          voluptates quam blanditiis, alias labore corporis id ipsa earum
          adipisci. Necessitatibus repellendus exercitationem similique rerum
          magni!
        </div>
      ),
    },
    {
      lable: "Tab 3",
      content: <RandomComponent />,
    },
  ];
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabText;
