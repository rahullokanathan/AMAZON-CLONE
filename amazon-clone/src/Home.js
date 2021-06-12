import React from "react";
import Product from "./Product";
import "./Home.css";


function Home (){
    return (
        <div className="home">
     <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
     alt=""/> 
     <Product
     id ="12345"
     title= "Our Game: John Le Carre paperback"
     price={10.90}
     rating ={5}
     image ="https://images-eu.ssl-images-amazon.com/images/I/4141VBV2M0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" 
     />

<Product
     id ="1345"
     title= "Phillips perfect iron"
     price={40}
     rating ={5}
     image  ="https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/a/u/au_2.jpg" 
     />     
     <b><i>EXCITING OFFERS NOW AVAILABLE</i></b>

     <Product
     id= "5653"
     title="PHONES FOR LOVE DA"
     price= {0}
     image="https://img1.gadgetsnow.com/gd/imgbn/Amazon-Cash-Back.jpg"

     />
     <i>ONEPLUS PHONES WITH O PERCENT EMI AVAILABLE NOW</i>
     <Product
     title="Netflix series"
     price={0}
     image=""
     />
     
     </div>
     
    );
}


export default Home;