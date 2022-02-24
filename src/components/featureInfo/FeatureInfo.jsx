import React from "react";
import "./featureInfo.css";
import {PermIdentity,BarChart, RemoveRedEye} from '@material-ui/icons';

export default function FeatureInfo() {
  return (
    <div className="featureInfo">
        <h1>روز بخیر توسعه دهنده</h1>
        <div className="featureInfoDate">
          <div className="featureInfoItem1">
            <div className="featureInfoDay">روز</div>
            <div className="featureInfoDay active">ماه</div>
            <div className="featureInfoDay">سال</div>
          </div>
          <div className="featureInfoItem2">6 اسفند 1400</div>
        </div>
        <div className="featureInfoItems">
          <div className="featureInfoSales">
            <div className="featureInfoSalesTitle">فروش ها</div>
            <div className="featureInfoSalesIcon">
              <BarChart className="featureInfoIcon"/>
              </div>
            <div className="featureInfoSalesPrice">
              <div className="featureInfoSalesPriceCount">25</div>
              <div className="featureInfoSalesPriceRate">20%-</div>
            </div>
          </div>
          <div className="featureInfoClients">
          <div className="featureInfoSalesTitle">مشتریان</div>
          <div className="featureInfoSalesIcon">
          <PermIdentity className="featureInfoIcon"/>
          </div>
            <div className="featureInfoSalesPrice">
              <div className="featureInfoSalesPriceCount">40</div>
              <div className="featureInfoSalesPriceRate">10%</div>
            </div>
          </div>
          <div className="featureInfoViews">
          <div className="featureInfoSalesTitle">بازدید ها</div>
          <div className="featureInfoSalesIcon">
            <RemoveRedEye className="featureInfoIcon"/>
          </div>
            <div className="featureInfoSalesPrice">
              <div className="featureInfoSalesPriceCount">850</div>
              <div className="featureInfoSalesPriceRate">24%</div>
            </div>
          </div>
        </div>
      </div>
  );
}
