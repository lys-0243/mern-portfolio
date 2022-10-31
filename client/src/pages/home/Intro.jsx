import React from "react";
import './intro.css'

const Intro = () => {
  return (
    <div className="h-[80vh] bg-primary flex flex-col flex-start justify-center gap-8 py-10">
      
      <h1 className="text-white">Salut, Je suis</h1>

      <h1 className="text-6xl text-secondary font-semibold">
        Sylvain Tshiasuma Lys
      </h1>

      <h1 className="text-4xl text-white font-semibold">
        Développeur Web/Mobile FullStack
      </h1>

      <p className="text-white w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        Eius, at ex quo veritatis dolore explicabo veniam, aperiam odit nisi eum
        sed <br />
        officiis sunt commodi ratione? Quae ad perferendis optio animi.
      </p>

      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded intro__btn">Commencer</button>
    </div>
  );
};

export default Intro;
