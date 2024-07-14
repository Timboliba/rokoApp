import React from "react";
import User from "./user.png";
const Discussions = ({ item }) => {
  return (
    <>
      <div className="discussionBlock">
        {/* <div className="profilImg"> */}
        <img src={User} alt="" srcset="" />
        {/* </div> */}
        <div className="nameAndLastChat">
          <h2>{item.nom}</h2>
          <p>
            {/* {item.nom} vous a envoyé une commande */}
            {item.nom}: {item.msg}
          </p>
        </div>
      </div>
    </>
  );
};

export default Discussions;
