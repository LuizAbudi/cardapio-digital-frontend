import React from "react";
import * as logos from "../../assets/images/index";
import CardComponent from "../../components/CardComponent";

const Home = () => {
  const data = [
    {
      LogoBranca: logos.LogoBranca,
    },
    {
      title: "Porções",
      image:
        "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Bebidas",
      image: "https://i.postimg.cc/qvTMj63r/2610.png",
    },
    {
      title: "Drinks",
      image:
        "https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2021/10/caipirinha-3483439_1920.jpg",
    },
  ];

  return (
    <div className="bg-wineColor min-h-screen">
      <div className="flex flex-col md:flex-row justify-between p-4">
        <div className="flex flex-row items-center justify-start space-x-4 md:space-x-8">
          <img
            src={data[0].LogoBranca}
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
      <div className="justify-center items-center">
        {/* Título "Cardápio" */}
        <h2 className="text-center text-4xl md:text-5xl text-white py-8">
          Cardápio
        </h2>
        <div className="max-w-[1640px] mx-auto justify-center p-4 py-12 grid md:grid-cols-3 gap-6">
          {data.slice(1).map((item, index) => (
            <CardComponent
              key={index}
              imageUrl={item.image as string}
              title={item.title as string}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
