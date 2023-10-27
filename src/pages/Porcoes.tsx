import React from "react";
import * as logos from "../assets/images/index";
import Itens from "../components/Itens";

const Porcoes = () => {
  const type = "Porções";

  return (
    <div className="bg-wineColor min-h-screen">
      <div className="flex flex-col md:flex-row justify-between p-4">
        <div className="flex flex-row items-center justify-start space-x-4 md:space-x-8">
          <img
            src={logos.LogoBranca}
            alt="Logo"
            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
          />
          <div className="text-2xl md:text-4xl text-white font-bold">
            Cardápio de Porções
          </div>
        </div>
      </div>
      <div className="justify-center items-center">
        <Itens type={type} />
      </div>
    </div>
  );
};

export default Porcoes;
