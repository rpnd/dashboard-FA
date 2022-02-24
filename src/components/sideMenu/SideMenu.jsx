import { Storefront, PermIdentity, History, Settings } from "@material-ui/icons";
import React from "react";
import "./sideMenu.css";

export default function SideMenu() {
  return (
    <div className="sideMenu">
      <div className="sideMenuWrapper">
        <img src="../../assets/img/7.jpeg" alt="" className="sidemenuImg" />
        <div className="sideMenuInit">
          <div className="sideMenuItem">
            <PermIdentity />
          </div>
          <div className="sideMenuItem">
            <History />
          </div>
          <div className="sideMenuItem">
            <Storefront />
          </div>
        </div>
        <div className="sideMenuSettings">
          <Settings />
        </div>
      </div>
    </div>
  );
}
