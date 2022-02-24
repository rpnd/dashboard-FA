import React from "react";
import "./sellerWidget.css";

export default function SellerWidget() {
  return (
    <div className="sellerWidget">
      <h3 className="sellerWidgetTitle">برترین فروشندگان</h3>
      <div className="sellerWidgetWrapper">
        <div className="sellerWidgetItem active">
          <div className="sellerWidgetItemRate">60% &#9650;</div>
          <div className="sellerWidgetItemSec">
            <span className="sellerWidetItemName">سیاوش خانی</span>
            <img
              src="../../assets/img/3.jpeg"
              alt=""
              className="sellerWidgetItemImg"
            />
          </div>
        </div>
        <div className="sellerWidgetItem">
          <div className="sellerWidgetItemRate">35% &#9650;</div>
          <div className="sellerWidgetItemSec">
            <span className="sellerWidetItemName">سیاوش خانی</span>
            <img
              src="../../assets/img/3.jpeg"
              alt=""
              className="sellerWidgetItemImg"
            />
          </div>
        </div>
        <div className="sellerWidgetItem">
          <div className="sellerWidgetItemRate">25% &#9650;</div>
          <div className="sellerWidgetItemSec">
            <span className="sellerWidetItemName">سیاوش خانی</span>
            <img
              src="../../assets/img/3.jpeg"
              alt=""
              className="sellerWidgetItemImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
