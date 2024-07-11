import React, { useState } from "react";
import Mockup from "./mockupIphone15.png";
import { Link } from "react-router-dom";
import Customer from "./customers.jpg";
import ListCustomer from "../customers/customerData.json";
const MarketingNewCampagn = () => {
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePreview = () => {
    setStep(step - 1);
  };
  return (
    <div
      className="newMarketingCampagnContainer"
      style={{
        backgroundColor: "whitesmoke",
        height: "100%",
        display: "grid",
        padding: "0 30px 0 30px",
      }}
    >
      <div
        className="headerCampagnTitle"
        style={{ borderBottom: "1px solid silver" }}
      >
        <Link
          to="/communications"
          style={{ display: "flex", alignItems: "center", color: "blue" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
            style={{ color: "blue" }}
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
          Communications
        </Link>
        <h1>Nouvelle communication</h1>
      </div>
      {step === 1 && (
        <div
          className="newMarketingCampagnContainerStepOneContainer"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
            margin: "10px 0 10px 0",
          }}
        >
          <div className="stepOneMokup">
            <img src={Mockup} alt="" srcset="" />
          </div>
          <div
            className="stepOneRightSection"
            style={{
              backgroundColor: "white",
              padding: "0 50px 0 50px",
            }}
          >
            <div className="stepOneRightSectionHeader">
              <h2>Step 1 of 3</h2>
              <h2>Ecrire le message</h2>
              <div
                className="progressBar"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,150px)",
                }}
              >
                <div
                  className="progressBarLeft"
                  style={{
                    backgroundColor: "blue",
                    height: "10px",
                    borderRadius: "5px 0 0 5px",
                  }}
                >
                  &nbsp;
                </div>
                <div
                  className="progressBarMidle"
                  style={{
                    backgroundColor: "rgb(0, 109, 255)",
                    height: "10px",
                  }}
                >
                  &nbsp;
                </div>
                <div
                  className="progressBarRight"
                  style={{
                    backgroundColor: "rgb(0, 109, 255)",
                    height: "10px",
                    borderRadius: "0 5px 5px 0",
                  }}
                >
                  &nbsp;
                </div>
              </div>
            </div>
            <div className="stepOneRightSectionMain">
              <div className="campagnTitleContainer">
                <p>Titre de la campagne</p>
                <input
                  type="text"
                  name="titre"
                  style={{ height: "40px", width: "450px" }}
                  placeholder="e.g.50% off Parmesan Cheese"
                  maxLength={60}
                />
              </div>
              <div className="campagnMessageContainer">
                <p>
                  Message de la campagne
                  <span style={{ color: "blue" }}>*</span>
                </p>
                <p>
                  Faites la prommotion d'offres, <br /> de réductions et bien
                  plus encore auprès de vos clients
                </p>
                <textarea
                  name="message"
                  id=""
                  cols="62"
                  rows="10"
                  style={{ resize: "none" }}
                  placeholder="e.g.Stock up now to elevate your dishes and experience a rich,
                savory taste at an unbedetable price. Don't miss out on this cheesy delight-order today!"
                  maxLength={750}
                ></textarea>
              </div>
              <div
                className="campagnDeadlineContainer"
                style={{ display: "flex", gap: "50px" }}
              >
                <p>Date limite de la campagne</p>
                <input
                  type="date"
                  name=""
                  id=""
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    color: "blue",
                  }}
                />
              </div>
            </div>
            <div
              className="stepOneRightSectionFooter"
              style={{
                borderTop: "1px solid silver",
                width: "100%",
                padding: "20px 0 20px 0",
              }}
            >
              <button onClick={handleNext}>Suivant</button>
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div
          className="newMarketingCampagnContainerStepOneContainer"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
            margin: "10px 0 10px 0",
          }}
        >
          <div className="stepOneMokup">
            <img src={Mockup} alt="" srcset="" />
          </div>
          <div
            className="stepOneRightSection"
            style={{
              backgroundColor: "whites",
              padding: "0 50px 0 50px",
            }}
          >
            <div className="stepOneRightSectionHeader">
              <h2>Step 2 of 3</h2>
              <h2>Ajout de l'image du produit</h2>
              <div
                className="progressBar"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,150px)",
                }}
              >
                <div
                  className="progressBarLeft"
                  style={{
                    backgroundColor: "blue",
                    height: "10px",
                    borderRadius: "5px 0 0 5px",
                  }}
                >
                  &nbsp;
                </div>
                <div
                  className="progressBarMidle"
                  style={{
                    backgroundColor: "blue",
                    height: "10px",
                  }}
                >
                  &nbsp;
                </div>
                <div
                  className="progressBarRight"
                  style={{
                    backgroundColor: "rgb(0, 109, 255)",
                    height: "10px",
                    borderRadius: "0 5px 5px 0",
                  }}
                >
                  &nbsp;
                </div>
              </div>
            </div>
            <div className="stepOneRightSectionMain">
              <div className="campagnTitleContainer">
                <p>Titre de la campagne</p>
                <input
                  type="text"
                  name="titre"
                  style={{ height: "40px", width: "450px" }}
                  placeholder="e.g.50% off Parmesan Cheese"
                  maxLength={60}
                />
              </div>
              <div className="campagnMessageContainer">
                <p>
                  Message de la campagne
                  <span style={{ color: "blue" }}>*</span>
                </p>
                <p>
                  Faites la prommotion d'offres, <br /> de réductions et bien
                  plus encore auprès de vos clients
                </p>
                <textarea
                  name="message"
                  id=""
                  cols="62"
                  rows="10"
                  style={{ resize: "none" }}
                  placeholder="e.g.Stock up now to elevate your dishes and experience a rich,
                savory taste at an unbedetable price. Don't miss out on this cheesy delight-order today!"
                  maxLength={750}
                ></textarea>
              </div>
              <div
                className="campagnDeadlineContainer"
                style={{ display: "flex", gap: "50px" }}
              >
                <p>Date limite de la campagne</p>
                <input
                  type="date"
                  name=""
                  id=""
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    color: "blue",
                  }}
                />
              </div>
            </div>
            <div
              className="stepOneRightSectionFooter"
              style={{
                borderTop: "1px solid silver",
                width: "100%",
                padding: "20px 0 20px 0",
              }}
            >
              <button onClick={handlePreview}>Précedent</button>
              <button onClick={handleNext}>Suivant</button>
            </div>
          </div>
        </div>
      )}
      {step === 3 && (
        <div
          className="newMarketingCampagnContainerStepOneContainer"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
            margin: "10px 0 10px 0",
          }}
        >
          <div className="stepOneMokup">
            <img src={Mockup} alt="" srcset="" />
          </div>
          <div
            className="stepOneRightSection"
            style={{
              backgroundColor: "white",
              padding: "0 50px 0 50px",
            }}
          >
            <div className="stepOneRightSectionHeader">
              <h2>Step 3 of 3</h2>
              <h2>Sélectionner les destinataires</h2>
              <div
                className="progressBar"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,150px)",
                }}
              >
                <div
                  className="progressBarLeft"
                  style={{
                    backgroundColor: "blue",
                    height: "10px",
                    borderRadius: "5px 0 0 5px",
                  }}
                >
                  &nbsp;
                </div>
                <div
                  className="progressBarMidle"
                  style={{
                    backgroundColor: "blue",
                    height: "10px",
                  }}
                >
                  &nbsp;
                </div>
                <div
                  className="progressBarRight"
                  style={{
                    backgroundColor: "blue",
                    height: "10px",
                    borderRadius: "0 5px 5px 0",
                  }}
                >
                  &nbsp;
                </div>
              </div>
            </div>
            <div className="stepOneRightSectionMain">
              <div
                className="campagnFilterContainer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 0 0 0",
                }}
              >
                <div
                  className="inputSearchCustomer"
                  style={{
                    backgroundColor: "transparent",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="30"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                    style={{ color: "grey" }}
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Recherche clients"
                    style={{
                      border: "none",
                      outline: "none",
                    }}
                  />
                </div>
                <div className="selectRadioButton">
                  Tout sélectionner&nbsp;&nbsp;
                  <input type="radio" name="selectAll" id="selectAll" />
                </div>
              </div>
              <div className="customersSelectionsContainer">
                <div className="containerOfCustomersSelected">
                  <p>
                    Listes Horizontal des clients selectionnées
                    <span style={{ color: "blue" }}>*</span>
                  </p>
                </div>
                <div
                  className="listOfContactOFCutomersSelected"
                  style={{
                    height: "280px",
                    overflowY: "scroll",
                  }}
                >
                  {ListCustomer.map((item) => {
                    return (
                      <div
                        className="customersCards"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "10px",
                        }}
                      >
                        <div
                          className="customersProfils"
                          style={{ display: "flex" }}
                        >
                          <img
                            src={Customer}
                            alt=""
                            style={{
                              height: "50px",
                              width: "50px",
                              borderRadius: "50%", // Utilisation de 50% pour faire un cercle
                              objectFit: "cover", // Optionnel : assure que l'image remplit complètement le cercle
                            }}
                          />

                          <p>{item.name}</p>
                        </div>

                        <input type="checkbox" name="" id="" />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="campagnDeadlineContainer"
                style={{ display: "flex", gap: "50px" }}
              >
                <p>Date limite de la campagne</p>
                <input
                  type="date"
                  name=""
                  id=""
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    color: "blue",
                  }}
                />
              </div>
            </div>
            <div
              className="stepOneRightSectionFooter"
              style={{
                borderTop: "1px solid silver",
                width: "100%",
                padding: "20px 0 20px 0",
              }}
            >
              <button onClick={handlePreview}>Précedent</button>
              <button onClick={handleNext}>Enregistrer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketingNewCampagn;
