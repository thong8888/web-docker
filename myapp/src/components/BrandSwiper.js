// BrandSwiper.jsx
import React from "react";

import iconTiktok from "../img/Tiktok1.6fcb1ff8.svg";
import icontiki from "../img/tiki.fa2cff71.svg";
import iconLazada from "../img/lazada.0c932936.svg";
import iconTheGioiDiDong from "../img/TheGioiDiDong6.5c7f9a11.svg";
import iconOppo from "../img/Oppo4bfe77ca4.svg";
import iconZalo from "../img/zalo.45a1df46.svg";
import iconPancake from "../img/pancake.3cda5a90.svg";
import iconSapo from "../img/Sapo.412a272d.svg";
import iconHaravan from "../img/haravan.af59c294.svg";
import iconKiotViet from "../img/KiotViet.3c426e8e.svg";

const brands = [
  { src: iconTiktok, alt: "Tiktok" },
  { src: icontiki, alt: "Tiki" },
  { src: iconLazada, alt: "Lazada" },
  { src: iconTheGioiDiDong, alt: "Thế Giới Di Động" },
  { src: iconOppo, alt: "Oppo" },
  { src: iconZalo, alt: "Zalo" },
  { src: iconPancake, alt: "Pancake" },
  { src: iconSapo, alt: "Sapo" },
  { src: iconHaravan, alt: "Haravan" },
  { src: iconKiotViet, alt: "KiotViet" },
];

const BrandSwiper = () => {
  const items = [...brands, ...brands];
  return (
    <div className="brand-track">
      {items.map((brand, index) => (
        <div className="swiper-slide" key={index}>
          <img src={brand.src} className="item-image" alt={brand.alt} />
        </div>
      ))}
    </div>
  );
};

export default BrandSwiper;
