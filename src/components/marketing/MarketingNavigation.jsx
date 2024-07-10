// MarketingNavigation.jsx
import React from "react";
import { Link } from "react-router-dom";
import './MarketingNavigation.css'
const MarketingNavigation = () => {
  return (
    <div className="marketingNavigationBar">
      <div
        className="marketingNavigationHeaderTop" id="markNav"
        style={{ display: "flex", alignItems: "center", justifyContent: "end" }}
      >
        <Link to='/communications/nouveelleCampagne'>
        <button>NOUVELLE CAMPAGNE</button>
        </Link>
      </div>
      <div
        className="marketingNavigationHeaderBottom"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <Link to='/communications'>Envoyé</Link>
        <Link
          to='/communications/programme'
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            gap: "10px",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <p>Programmé</p>
          <span
            style={{
              backgroundColor: "blue",
              color: "white",
              height: "20px",
              width: "20px",
              textAlign: "center",
              paddingBottom: "2px",
              borderRadius: "20px",
            }}
          >
            1
          </span>
        </Link>
        <Link to='/communications/brouillon'>Votre brouillon</Link>
      </div>
    </div>
  );
};


export default MarketingNavigation;
