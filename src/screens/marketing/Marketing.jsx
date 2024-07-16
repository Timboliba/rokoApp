import React from "react";
import { Route, Routes } from "react-router-dom";
import MarketingNavigation from "../../components/marketing/MarketingNavigation";
import MarketingSent from "../../components/marketing/MarketingSent";
import MarketingsScheduled from "../../components/marketing/MarketingsScheduled";
import MarketingDrafts from "../../components/marketing/MarketingDrafts";

const MarketingScreen = () => {
  return (
    <div
      className="marketingContainer"
      style={{
        display: "grid",
        gridAutoRows: "70px 1fr",
        height: "100%",
        padding: "0 25px 0 25px",
      }}
    >
      <div
        className="marketingContainerHeader"
        style={{ borderBottom: "1px solid silver" }}
      >
        <h1>COMMUNICATIONS</h1>
      </div>
      <div className="marketingContainerMain" style={{ paddingTop: "5px" }}>
        <MarketingNavigation />
        <Routes>
          {/* Route par défaut */}
          <Route index element={<MarketingSent />} />

          {/* Route pour '/marketings/scheduled' */}
          <Route path="/programme" element={<MarketingsScheduled />} />

          {/* Route pour '/marketings/draft' */}
          <Route path="/brouillon" element={<MarketingDrafts />} />

          {/* <Route path="/nouveelleCampagne" element={<MarketingNewCampagn />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default MarketingScreen;
