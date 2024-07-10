import React, { useState } from "react";
import "./customer.css";
import dataCustomer from "./customerData.json";
import profil from "../chats/user.png";
const Customer = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [pupOpOpen, setPupOpOpen] = useState(false);
  const [customerID, setCustomerId] = useState();

  // Fonction de verification de la checkbox
  const handleChecked = () => {
    setIsChecked(!isChecked);
    // alert(isChecked)
    // let customerCardsMain=document.querySelector('.customerCardsMain')
    // if(isChecked==true){

    //   customerCardsMain.computedStyleMap.backgroundColor="red"
    // }else{
    //   customerCardsMain.computedStyleMap.backgroundColor="initial"
    // }
  };

  // Fonction d'ouverture de la fenêtre modal et de recupération de l'id du client
  const pupOp = (e) => {

    let id = e.target.id;

    setCustomerId(id);

    setPupOpOpen(true);
    
    console.log("id du client : ",id)
  };
  return (
    <div className="customerContainer">
      <div className="customerHeader">
        <section className="customerHeaderLeft">
          <h1>CLIENTS</h1>
        </section>
        <section className="customerHeaderRight"></section>
      </div>
      <div className="customerMain">
        <div className="customerMainSearchAndFilteredAndInvitation">
          <section className="customerSearch">
            <label className="searchIcon" for="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </label>
            <input type="search" name="" id="search" />
          </section>
          <section className="customerFilter">
            <select name="filteredCustomer" id="">
              <option>Filtrer les clients</option>
            </select>
          </section>
          <section className="customerInvite">
            <button>Invité des clients</button>
          </section>
        </div>
        <div className="customerMainCards">
          <div className="customerCard">
            <div className="customerCardHeader">
              <div
                className="customerCardHeaderItem"
                id="customerCardHeaderItemCheckbox"
              >
                <input
                  type="checkbox"
                  name="nomClt"
                  id="nomClt"
                  checked={isChecked}
                  onChange={handleChecked}
                />
                <p>Nom client</p>
              </div>
              <div className="customerCardHeaderItem">
                <p>Numéro client</p>
              </div>
              <div className="customerCardHeaderItem">
                <p>Etiquette</p>
              </div>
              <div className="customerCardHeaderItem">
                <p>Détails</p>
              </div>
            </div>
            <div className="customerCardsMain">
              {dataCustomer.map((item) => {
                return (
                  <div className="customerCardsMainItemsStyle">
                    <div
                      className="customerCardHeaderItem"
                      id="customerCardHeaderItemPic"
                    >
                      <img src={profil} alt="pic" />
                      <p>{item.name}</p>
                    </div>
                    <div className="customerCardHeaderItem">
                      <p>{item.number}</p>
                    </div>
                    <div className="customerCardHeaderItem">
                      <p>{item.label}</p>
                    </div>
                    <div className="customerCardHeaderItem" id="para">
                      <p onClick={pupOp} id={item.number}>
                        Voir plus
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16" style={{color:'blue'}}>
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
</svg> */}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="customerFooter">
              <p>Ce sont tous vos clients sur choco.Allez ici pour en inter d'autres!</p>
            </div>
            {pupOpOpen && (
              <div
                className="popUpContainer"
              >
                <div className="popUpContainerSub">
                  <button
                    onClick={() => setPupOpOpen(false)}
                  >
                    X
                  </button>
                  <div className="customerInformationCard">
                    <dic className="customerInformationCardHead"></dic>
                    <div className="customerInformationCardMain">
                      <p>Numéro client :{customerID}</p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
