import React from "react";
import Chart from "../../components/chart/Chart";
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
import { userData } from "../../Data";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import SellerWidget from "../../components/sellerWidget/SellerWidget";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="homeRight">
        <FeatureInfo />
        <Chart data={userData} grid dataKey="Active User"/>
      </div>
      <div className="homeLeft">
        <WidgetLg />
        <SellerWidget />
      </div>
    </div>
  );
}
