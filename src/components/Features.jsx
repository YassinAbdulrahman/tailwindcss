import { useState } from "react";
import FeatureBox from "./FeatureBox";

function Features() {
  const [items, setItems] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your file, anywhere",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel possimus blanditiis doloremque voluptatem enim iure, culpa perferendis dolorumnisi hic?",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real time collabration",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel possimus blanditiis doloremque voluptatem enim iure, culpa perferendis dolorumnisi hic?",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel possimus blanditiis doloremque voluptatem enim iure, culpa perferendis dolorumnisi hic?",
    },
    {
        icon: "icon-security.svg",
        title: "Store any security of file",
        desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel possimus blanditiis doloremque voluptatem enim iure, culpa perferendis dolorumnisi hic?",
      },
  ]);
  return (
    <section className="pb-[150px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full">
          {items.map((item)=>{
            return(
             <FeatureBox key={item.title} title={item.title} icon={item.icon} desc={item.desc}/>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
