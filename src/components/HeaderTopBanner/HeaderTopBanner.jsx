"use client";

import React from "react";
import Textra from "react-textra";

const HeaderTopBanner = () => {
  return (
    <div className="grid place-items-center py-4 bg-primary text-light font-sans font-bold text-xs uppercase">
      <Textra
        duration={200}
        effect="downTop"
        data={[
          "YAPI KREDİ WORLD'E ÖZEL 3.000 TL VE ÜZERİ ALIŞVERİŞİNİZE 300 TL WORLDPUAN HEDİYE!",
          "YAPI KREDİ WORLD KARTLARA ÖZEL 4'E VARAN TAKSİT FIRSATI",
          "SİPARİŞİNİZ 2-4 İŞ GÜNÜ İÇİNDE KARGOYA VERİLECEKTİR",
        ]}
      />
    </div>
  );
};

export default HeaderTopBanner;
