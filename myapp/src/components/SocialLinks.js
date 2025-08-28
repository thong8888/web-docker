// components/SocialLinks.jsx
import React from "react";

const socialLinks = [
  {
    href: "https://www.facebook.com/JTExpressVietnam/",
    img: "https://jtexpress.vn/themes/jtexpress/assets/images/facebook-h.png",
    alt: "Facebook - J&T Express",
  },
  {
    href: "https://www.instagram.com/jntexpressvn/",
    img: "https://jtexpress.vn/themes/jtexpress/assets/images/instagram-h.png",
    alt: "Instagram - J&T Express",
  },
  {
    href: "https://www.tiktok.com/@jntexpressvn/",
    img: "https://jtexpress.vn/themes/jtexpress/assets/images/titok-h.png",
    alt: "TikTok - J&T Express",
  },
  {
    href: "https://www.youtube.com/channel/UCY_EaSLbaf9Mn4BZGEQg0CA",
    img: "https://jtexpress.vn/themes/jtexpress/assets/images/ytb-h.png",
    alt: "YouTube - J&T Express",
  },
  {
    href: "https://oa.zalo.me/1837464433417511317",
    img: "https://jtexpress.vn/themes/jtexpress/assets/images/zing-h.png",
    alt: "Zalo - J&T Express",
  },
];

export default function SocialLinks({ size = "h-8 w-8", gap = "space-x-4" }) {
  return (
    <div className={`flex items-center justify-center ${gap}`}>
      {socialLinks.map(({ href, img, alt }, idx) => (
        <a key={idx} href={href} target="_blank" rel="noopener noreferrer">
          <img src={img} alt={alt} className={size} />
        </a>
      ))}
    </div>
  );
}
