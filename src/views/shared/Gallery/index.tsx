"use client";
import clsx from 'clsx';
import { useState } from 'react';
import { useTranslations } from "next-intl";

import image_1_1xSRC from "@/../public/images/tiles/image_1@1x.jpg";
import image_1_2xSRC from "@/../public/images/tiles/image_1@2x.jpg";

import Button from "@/views/shared/antd/Button";
import GalleryItem from "@/views/shared/GalleryItem";

const IMAGES = [
  { id: "1", src1x: image_1_1xSRC, src2x: image_1_2xSRC },
  { id: "2", src1x: image_1_1xSRC, src2x: image_1_2xSRC },
  { id: "3", src1x: image_1_1xSRC, src2x: image_1_2xSRC },
  { id: "4", src1x: image_1_1xSRC, src2x: image_1_2xSRC },
  { id: "5", src1x: image_1_1xSRC, src2x: image_1_2xSRC },
  { id: "6", src1x: image_1_1xSRC, src2x: image_1_2xSRC },
  { id: "7", src1x: image_1_1xSRC, src2x: image_1_2xSRC },
  { id: "8", src1x: image_1_1xSRC, src2x: image_1_2xSRC },
];

const Gallery = () => {
  const t = useTranslations("shared");
  const [activeTab, setActiveTab] = useState("list");

  return (
    <div className={clsx("gallery", {
      "gallery--list": activeTab === "list",
      "gallery--tiles": activeTab === "tiles",
    })}>
      <div className="gallery__tabs">
        <button className={clsx("gallery__tab gallery__tab--tiles", {
          "gallery__tab--active": activeTab === "tiles"
        })} onClick={() => setActiveTab("tiles")} aria-label="Tiles">
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
        </button>
        <button className={clsx("gallery__tab gallery__tab--list", {
          "gallery__tab--active": activeTab === "list"
        })} onClick={() => setActiveTab("list")} aria-label="List">
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
          <span className="shape"></span>
        </button>
      </div>

      <div className="gallery__content">
        {IMAGES.map(image => (
          <GalleryItem image={image} key={image.id}/>
        ))}
      </div>

      <div className="gallery__buttons">
        <Button className="btn-load-more" type="default" color="default" variant="outlined">
          {t("loadMore")}
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
