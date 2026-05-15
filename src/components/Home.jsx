import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  const data = [
    {
      "id": "1",
      "product_name": "Haier A9UG 4K Ultra HD 108cm (43) Google TV | MEMC",
      "manufacturer_name": "Haier",
      "manufacturer_brand": "Haier",
      "price": "28,990",
      "image": "https://d1umdo9vc693vx.cloudfront.net//93/img/product/71/1574/43A9UG%201.webp",
      "product_description": "The Haier A9UG 43-inch 4K Google TV offers 4K UHD resolution with HDR10, MEMC for smoother motion, and Dolby Audio (20W) for immersive sound. It runs on Google TV with Assistant and Chromecast, delivering smart, app-rich entertainment"
    },
    {
      "id": "3",
      "product_name": "Apple TV 4K",
      "manufacturer_name": "Apple",
      "manufacturer_brand": "Apple",
      "price": "14900",
      "image": "https://www.apple.com/newsroom/images/product/tv/standard/Apple-TV-4K-hero-221018_big.jpg.large.jpg",
      "product_description": "The Apple TV 4K is a premium streaming device that delivers 4K HDR (Dolby Vision, HDR10+) video and immersive Dolby Atmos audio, powered by a fast A15 Bionic chip. It offers smooth access to apps, games, and works as a smart home hub with Siri voice control."
    },
    {
      "id": "4",
      "product_name": "1.08 m (43) UE84AF Crystal 4K UHD Smart TV (2025)",
      "manufacturer_name": "samsung",
      "manufacturer_brand": "samsung",
      "price": "31490.00",
      "image": "https://images.samsung.com/is/image/samsung/p6pim/in/ua43ue84afulxl/energylabel/in-energylabel-product-ua43ue84afulxl-550349017?$1164_776_PNG$",
      "product_description": "The Samsung 43-inch UE84AF Crystal 4K UHD Smart TV (2025) offers sharp 4K resolution with a Crystal Processor 4K for clear upscaling, along with HDR and PurColor for vibrant visuals. It features a slim design and Tizen OS, providing smooth smart streaming and voice control."
    },
    {
      "id": "5",
      "product_name": "1.95 m (77) OLED S90D 4K Smart AI TV (2024)",
      "manufacturer_name": "samsung",
      "manufacturer_brand": "samsung",
      "price": "399990.00",
      "image": "https://images.samsung.com/is/image/samsung/p6pim/in/qa77s90daelxl/energylabel/in-energylabel-product-qa77s90daelxl-550166731?$1164_776_PNG$",
      "product_description": "The Samsung S90D 77-inch OLED 4K Smart AI TV (2024) features self-lit OLED pixels for deep blacks and vibrant colors, powered by the NQ4 AI Gen2 processor for smart 4K upscaling. It includes OLED HDR+, 144Hz motion, and Dolby Atmos sound, delivering an immersive and smooth viewing experience."
    },
    {
      "id": "6",
      "product_name": "2.09 m (83) S95F OLED 4K Smart TV",
      "manufacturer_name": "samsung",
      "manufacturer_brand": "samsung",
      "price": "534490.00",
      "image": "https://images.samsung.com/is/image/samsung/p6pim/in/qa83s95faexxl/energylabel/in-energylabel-product-qa83s95faexxl-550348860?$1164_776_PNG$",
      "product_description": "The Samsung S95F is an excellent QD-OLED TV that offers superb HDR, SDR, and Gaming performance. The Samsung S95F's HDR10 and HDR10+ performance is excellent, with deep, fluid blacks, excellent shadow detail retrieval, and vibrant mid tones with detail and depth that add realism to almost every scene."
    },
    {
      "id": "7",
      "product_name": "2.09 m (83) OLED S90F 4K Samsung Vision AI Smart TV",
      "manufacturer_name": "samsung",
      "manufacturer_brand": "samsung",
      "price": "486990.00",
      "image": "https://images.samsung.com/is/image/samsung/p6pim/in/qa83s90faexxl/energylabel/in-energylabel-product-qa83s90faexxl-550348646?$1164_776_PNG$",
      "product_description": "The Samsung S90F 83-inch OLED 4K Smart TV delivers stunning picture quality with self-illuminating OLED pixels, offering deep blacks, vibrant colors, and wide viewing angles. It is powered by the NQ4 AI Gen3 processor with 4K AI Upscaling Pro, enhancing all content to near-4K clarity."
    },
    {
      "id": "8",
      "product_name": "UE84AF Crystal 4K UHD Smart TV",
      "manufacturer_name": "samsung",
      "manufacturer_brand": "samsung",
      "price": "31490.00",
      "image": "https://images.samsung.com/is/image/samsung/p6pim/in/ua43ue84afulxl/energylabel/in-energylabel-product-ua43ue84afulxl-550349017?$1164_776_PNG$",
      "product_description": "The Samsung UE84AF Crystal 4K UHD Smart TV delivers sharp 4K resolution (3840×2160) with the Crystal Processor 4K, enhancing colors and upscaling lower-quality content for clearer viewing. It features PurColor technology, HDR support, and Contrast Enhancer for vibrant visuals and improved depth."
    },
    {
      "id": "9",
      "product_name": "2.14 m (85) Neo QLED QN950F 8K Samsung Vision AI Smart TV",
      "manufacturer_name": "Samsung",
      "manufacturer_brand": "Samsung",
      "price": "54999",
      "image": "https://images.samsung.com/is/image/samsung/p6pim/in/qa85qn950fuxxl/gallery/in-qled-qn950f-qa85qn950fuxxl-545965034?$1164_776_PNG$",
      "product_description": "The Samsung QN950F 85-inch Neo QLED 8K Smart TV is a premium large-screen TV featuring ultra-sharp 8K resolution (33 million pixels) powered by the advanced NQ8 AI Gen3 processor for intelligent upscaling and enhanced picture quality."
    }
  ]

  return (
    <div>
      <div id="carouselBasicExample" className="carousel slide carousel-fade" data-bs-ride="carousel">

        <div className="carousel-indicators">
          {data.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselBasicExample"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {data.map((item, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={item.id}>
              <img src={item.image} className="d-block m-auto" alt={item.product_name} style={{ maxHeight: "400px", objectFit: "contain", backgroundColor:"white" }} />
              <br /><br /><br /><br /><br /><br /><br /><br />
              <div className="carousel-caption">
                <h5 style={{ color: "black" }}>{item.product_name}</h5>
                <p style={{ color: "black" }}>{item.product_description}</p>
              </div>
            </div>
          ))}
        </div>

       <button className="carousel-control-prev" type="button" data-bs-target="#carouselBasicExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselBasicExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span  className="visually-hidden">Next</span>
        </button>

      </div>
    </div>
  )
}

export default Home