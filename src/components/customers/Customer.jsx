import React from "react";
import "./customer.css";
import dataCustomer from './customerData.json'
import profil from'../chats/user.png'
const Customer = () => {

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
          <div className="customerCard" >
            <div className="customerCardHeader">
              <div className="customerCardHeaderItem" id="customerCardHeaderItemCheckbox">
                <input type="checkbox" name="nomClt" id="nomClt" />
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
              {
                dataCustomer.map((item)=>{
                  return<>
                    <div className="customerCardHeaderItem" id="customerCardHeaderItemPic">
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
                      {/* <a href="#">Voir plus</a> */}
                      <p onClick={()=>{alert(item.number)}}>Voir plus</p>
                    </div>
                  </>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
