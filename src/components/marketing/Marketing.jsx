import React from "react";
import MarketingNavigation from "./MarketingNavigation";
import { Route, Routes } from "react-router-dom";
import MarketingDrafts from "./MarketingDrafts";
import MarketingSent from "./MarketingSent";
import MarketingsScheduled from "./MarketingsScheduled";
import MarketingNewCampagn from "./MarketingNewCampagn";

const Marketing = () => {
  return (
    <div className="marketingContainer" style={{display:'grid',gridAutoRows:'70px 1fr'}}>
      <div className="marketingContainerHeader">
        <h1>COMMUNICATIONS</h1>
      </div>
      <div
        className="marketingContainerMain"
        style={{backgroundColor:'teal'}}
      >
        <MarketingNavigation />
        <Routes >
          {/* Route par défaut */}
          <Route index element={<MarketingSent />} />
          {/* Route pour '/marketings/scheduled' */}
          <Route
            path='/programme'
            element={<MarketingsScheduled />}
          />
          {/* Route pour '/marketings/draft' */}
          <Route path='/brouillon' element={<MarketingDrafts />} />
          
          <Route path='/nouveelleCampagne' element={<MarketingNewCampagn />} />
        </Routes>
      </div>
    </div>
  );
};

export default Marketing;
