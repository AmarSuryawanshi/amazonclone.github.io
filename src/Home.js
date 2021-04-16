import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            className="home__containts"
            id="12321341"
            title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the
          Poor and Middle Class Do Not!"
            price={1339}
            image="https://tradebrains.in/wp-content/uploads/2017/11/rich-dad-poor-dad-robert-kiyosaki.png"
            rating={4}
          />
          <Product
            className="home__containts"
            id="49538094"
            title='MacBook Pro 16" model intel core i9 64GB memory 8TB Storage Backlit Magic Keyboard, Touch Bar, Touch ID, and Force Touch trackpad'
            price={208728}
            image="https://www.isquare.gr/store/pub/media/wysiwyg/categories/MBP13_spg_tb.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            className="home__containts"
            id="4903850"
            title="NETGEAR Nighthawk Smart Wi-Fi Router, R6700 - AC1750 Wireless Speed Up to 1750 Mbps | Up to 1500 Sq Ft Coverage & 25 Devices"
            price={7723}
            image="https://fartinvite.com/pics/best-cable-modem-wifi-router-6.jpg"
            rating={3}
          />
          <Product
            className="home__containts"
            id="23445930"
            title="NVIDIA SHIELD Android TV Pro 4K HDR Streaming Media Player; High Performance, Dolby Vision, 3GB RAM, 2x USB, Works with Alexa"
            price={15448}
            image="https://images-na.ssl-images-amazon.com/images/I/21mZB8-eDGL._SL500_AC_SS350_.jpg"
            rating={4}
          />
          <Product
            className="home__containts"
            id="3254354345"
            title="OnePlus 8 Pro Onyx Black,​ 5G Unlocked Android Smartphone U.S Version, 12GB RAM+256GB Storage, 120Hz Fluid Display,Quad Camera"
            price={69521}
            image="https://static-eu.insales.ru/images/products/1/6796/310090380/T-kit.ru_OnePlus_8_Pro__Green_.png"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            className="home__containts"
            id="90829332"
            title="Samsung C49J890DKN, CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty"
            price={60954}
            image="https://www.speedmaxracing.it/659-thickbox_default/samsung-curved-gaming-monitor-49-chg90-curved-led.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
