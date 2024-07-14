import React, { useState } from "react";
import "./chats.css";
import User from "./user.png";
import Data from "./user.json";
import Discussions from "./Discussions";
const Chats = () => {
  const [msgSend, setMsgSend] = useState("");
  const handlerSubmit = () => {
    let msg = document.getElementById("msg").value;
    let sender = document.querySelector(".sender");
    let textemsg = document.createTextNode(msg);
    let p = document.createElement("p");
    p.appendChild(textemsg);
    sender.style.padding = "0 0 0 10%";

    sender.appendChild(p);
    p.style.height = "25px";
    p.style.padding = "15px";
    p.style.backgroundColor = "grey";
    p.style.borderRadius = "30px 20px 20px 0.21px";
    p.style.width = "max-content";

    setMsgSend(msg);
  };
  return (
    <div className="chatsContainer">
      <div className="listOfDifusion">
        <div className="titleDiscusion">
          <h1>DISCUSSIONS</h1>
        </div>
        <div className="searchContainer">
          <input type="search" name="search" placeholder="Rechercher..." />
        </div>
        <div className="discussionsList">
          {Data.map((item) => {
            return <Discussions item={item} key={item.id} />;
          })}
        </div>
      </div>
      <div className="individualDiscussion">
        <div className="header">
          <div className="nameOfuserReciever">
            <img src={User} alt="" srcset="" />
            <h2>Teste Teste</h2>
          </div>
          <div className="btnUpdate">
            <button>MODIFIER LA LISTE DES PRODUITS PERSONNALISEE</button>
          </div>
        </div>
        <div className="discutionContaint">
          <div className="sender">{msgSend}</div>
          <div className="receiver"></div>
        </div>
        <div className="inputSender">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-camera-fill"
            viewBox="0 0 16 16"
          >
            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" />
            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
          </svg>
          <input type="text" name="msg" id="msg" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="15"
            fill="currentColor"
            class="bi bi-send"
            viewBox="0 0 16 16"
            onClick={handlerSubmit}
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Chats;
