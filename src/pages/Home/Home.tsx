import React from "react";
import * as images from "../../assets/images/index";

const Home = () => {
  return (
    <div className="bg-wineColor ">
      <div className="">
        <div className="flex flex-col md:flex-row justify-between p-4">
          <div className="flex flex-row items-center justify-start space-x-4 md:space-x-8">
            <img
              src={images.LogoBranca}
              alt="Logo"
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
            />
            <div className="text-2xl md:text-4xl text-white ">
              Olá,
              <div className="text-2xl md:text-4xl text-white font-bold">
                Seja Bem vindo(a)!
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1640px] mx-auto justify-center p-4 py-12 grid md:grid-cols-3 gap-6">
          {/* Card */}
          <div className="rounded-xl relative">
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
              <p className="font-bold text-2xl px-2 pt-4">Porções</p>
              <button className="border-2 border-white bg-white text-black mx-2 absolute bottom-4 rounded">
                Veja as opções
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              src="https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="/"
            />
          </div>
          {/* Card */}
          <div className="rounded-xl relative">
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
              <p className="font-bold text-2xl px-2 pt-4">Cervejas</p>
              <button className="border-2 border-white bg-white text-black mx-2 absolute bottom-4 rounded">
                Veja as opções
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              src="https://blog.cachacarianacional.com.br/wp-content/uploads/2018/01/copo-lagoinha-825x497-1.png"
              alt="/"
            />
          </div>
          {/* Card */}
          <div className="rounded-xl relative">
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
              <p className="font-bold text-2xl px-2 pt-4">Drinks</p>
              <button className="border-2 border-white bg-white text-black mx-2 absolute bottom-4 rounded p-1">
                Veja as opções
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              src="https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2021/10/caipirinha-3483439_1920.jpg"
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
