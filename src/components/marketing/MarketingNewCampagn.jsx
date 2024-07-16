import React, { useState } from "react";
import Mockup from "./mockupIphone15.png";
import { Link } from "react-router-dom";
import Customer from "./customers.jpg";
import ListCustomer from "../customers/customerData.json";
const MarketingNewCampagn = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    titreCampagne: "",
    messageCampagne: "",
    date: "",
    fichierImage: "",
    listProduits: "",
    listDifusion: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  const handleChange = (e) => {
    const { name, value, files } = e.target; // Incluez 'files' pour accéder au fichier sélectionné(s)

    if (name === "fichierImage") {
      setFormData({
        ...formData,
        fichierImage: files[0], // En supposant que vous souhaitez stocker le premier fichier sélectionné
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Ajustez le champ d'entrée de fichier
  <input
    type="file"
    name="fichierImage"
    id="fileImage"
    placeholder="Ajout image ou document"
    style={{ border: "none", outline: "none" }}
    onChange={handleChange}
  />;

  // Fonction pour passer au formulaire suivant
  const handleNext = () => {
    setStep(step + 1);
  };

  // Fonction pour revenir au formulaire précedent
  const handlePreview = () => {
    setStep(step - 1);
  };

  // const handleCheck = () => {
  //   let
  // }
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
                  name="titreCampagne"
                  style={{ height: "40px", width: "450px" }}
                  placeholder="e.g.50% off Parmesan Cheese"
                  maxLength={60}
                  value={formData.titreCampagne}
                  onChange={handleChange}
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
                  name="messageCampagne"
                  id=""
                  cols="62"
                  rows="10"
                  style={{ resize: "none" }}
                  placeholder="e.g.Stock up now to elevate your dishes and experience a rich,
                savory taste at an unbedetable price. Don't miss out on this cheesy delight-order today!"
                  maxLength={750}
                  value={formData.messageCampagne}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div
                className="campagnDeadlineContainer"
                style={{ display: "flex", gap: "50px" }}
              >
                <p>Date limite de la campagne</p>
                <input
                  type="date"
                  name="date"
                  id=""
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    color: "blue",
                  }}
                  value={formData.date}
                  onChange={handleChange}
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
            backgroundColor: "whitesmoke",
            position: "relative",
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
                <p>Image ou Document</p>
                <br />
                <label
                  className="campagnImageOrDoc"
                  htmlFor="fileImage"
                  style={{
                    padding: "20px",
                    border: "1px solid blue",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // width="16"
                    height="40"
                    fill="currentColor"
                    class="bi bi-file-earmark"
                    viewBox="0 0 16 16"
                    style={{ color: "blue" }}
                  >
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                  </svg>
                  <input
                    type="file"
                    name="fichierImage"
                    id="fileImage"
                    placeholder="Ajout image ou document"
                    style={{ border: "none", outline: "none" }}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <br />
              <div
                className="campagnMessageContainer"
                style={{ display: "grid", gap: "10px" }}
              >
                <p>
                  Produits
                  <span style={{ color: "blue" }}>*</span>
                </p>
                <br />
                <label
                  className="campagnImageOrDoc"
                  // htmlFor="fileImage"
                  style={{
                    padding: "20px",
                    border: "1px solid blue",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    let modalWindow = document.querySelector(".AddProducts");
                    modalWindow.style.display = "block";
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // width="16"
                    height="40"
                    fill="currentColor"
                    class="bi bi-tag"
                    viewBox="0 0 16 16"
                    style={{ color: "blue" }}
                  >
                    <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0" />
                    <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z" />
                  </svg>
                  <p>Ajout produits</p>
                </label>
                <div
                  className="AddProducts"
                  style={{
                    position: "absolute",
                    width: "97%",
                    zIndex: 100,
                    top: "-100px",
                    right: "5px",
                    height: "690px",
                    backgroundColor: "white",
                    display: "none",
                    padding: "0 20px 0 10px",
                  }}
                >
                  <div
                    className="headerTitle"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h1>Ajouts Produits</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // width="16"
                      height="35"
                      fill="currentColor"
                      class="bi bi-x"
                      viewBox="0 0 16 16"
                      style={{ color: "black" }}
                      onClick={() => {
                        let modalWindow =
                          document.querySelector(".AddProducts");
                        modalWindow.style.display = "none";
                      }}
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                  </div>
                  <section
                    className="caution"
                    style={{ display: "grid", alignItems: "center" }}
                  >
                    <div
                      className="cautiondetails"
                      style={{
                        backgroundColor: "rgb(245, 245, 220)",
                        borderLeft: "2px solid black",
                      }}
                    >
                      <p
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "start",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          // width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-info-circle-fill"
                          viewBox="0 0 16 16"
                          style={{ color: "black" }}
                        >
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                        </svg>
                        Les clients peuvent commander instantané les produits
                        que vous partager
                      </p>
                      <p>
                        Les produits attachés à une campagne seront visibles
                        dans les catalogues de vos clients. Ils peuvent ensuite
                        l'ajouter à leur guide de commande pour une commande
                        immédiate.
                      </p>
                    </div>
                    <div
                      className="searchProductsContainer"
                      style={{
                        borderBottom: "1px solid grey",
                        padding: "10px 0 10px 0",
                      }}
                    >
                      <div
                        className="searchProducts"
                        style={{ display: "flex" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          // width="16"
                          height="30"
                          fill="currentColor"
                          class="bi bi-search"
                          viewBox="0 0 16 16"
                          style={{ color: "silver" }}
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                        <input
                          type="search"
                          name=""
                          id=""
                          placeholder="Entrer le nom d'un produits"
                          style={{
                            border: "none",
                            width: "100%",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>
                    <div className="listProducts">
                      <div
                        className="listProductsHeader"
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(4,1fr)",
                          padding: "10px 0 10px 0",
                          alignItems: "center",
                        }}
                      >
                        <div className="checkob">
                          <input
                            type="checkbox"
                            name="listProduits"
                            id=""
                            value={formData.listProduits}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="id">ID</div>
                        <div className="nom">Nom produit</div>
                        <div className="unite">Unité</div>
                      </div>
                    </div>
                    <div
                      className="listProductsMain"
                      style={{
                        height: "400px",
                        backgroundColor: "red",
                        // margin: "10px 0 0 0",

                        display: "grid",
                        gridTemplateColumns: "repeat(4,1fr)",
                        // padding: "10px 0 10px 0",
                        // alignItems: "center",
                        overflowY: "scroll",
                      }}
                    >
                      {ListCustomer.map((item) => {
                        return (
                          <>
                            <div className="checkbox">
                              <input
                                type="checkbox"
                                name="listProduits"
                                id=""
                                onChange={handleChange}
                                value={formData.listProduits}
                              />
                            </div>
                            <div className="id">51</div>
                            <div className="nom">Kumquats-Naranjila china</div>
                            <div className="unite">kilos</div>
                          </>
                        );
                      })}
                    </div>
                    <div
                      className="buttonSection"
                      style={{
                        paddingTop: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        gap: "10px",
                      }}
                    >
                      <button style={{ padding: "5px", borderRadius: "10px" }}>
                        Annuler
                      </button>
                      <button
                        style={{
                          backgroundColor: "blue",
                          color: "white",
                          padding: "5px",
                          borderRadius: "10px",
                        }}
                      >
                        Ajouter
                      </button>
                    </div>
                  </section>
                </div>
              </div>
              <br />
            </div>
            <br />
            <div
              className="stepOneRightSectionFooter"
              style={{
                borderTop: "1px solid silver",
                width: "100%",
                padding: "20px 0 20px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div className="brouillont">
                <button
                  onClick={() => {
                    let modalWindow = (document.querySelector(
                      ".modalScheduleLater"
                    ).style.display = "block");
                  }}
                >
                  Brouillont
                </button>
              </div>
              <div className="step" style={{ display: "flex", gap: "10px" }}>
                <button onClick={handlePreview}>Précedent</button>
                <button onClick={handleNext}>Suivant</button>
              </div>
            </div>

            <div
              className="modalScheduleLater"
              style={{
                position: "absolute",
                width: "auto",
                zIndex: 100,
                top: "300px",
                right: "30%",
                height: "200px",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                padding: "20px 0px 50px 0 ",
                border: "2px solid black",
              }}
            >
              <div
                className="modalScheduleLaterTitle"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h2>Programmé pour plustard</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // width="16"
                  height="35"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                  style={{ color: "black" }}
                  onClick={() => {
                    let modalWindow = document.querySelector(
                      ".modalScheduleLater"
                    );
                    modalWindow.style.display = "none";
                  }}
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </div>
              <div className="modalScheduleLaterDate">
                <label htmlFor="date">Date</label>
                <input type="date" name="modalScheduleLaterDate" id="date" />
              </div>
              <div className="modalScheduleLaterDate">
                <label htmlFor="date">Date</label>
                <input type="date" name="modalScheduleLaterDate" id="date" />
              </div>
              <div
                className="modalScheduleLaterSave"
                style={{
                  display: "flex",
                  justifyContent: "end",
                  padding: "0 5px 0 0",
                  // width: "100%",
                }}
              >
                <button
                  style={{
                    padding: "10px",
                    backgroundColor: "blue",
                    color: "white",
                  }}
                >
                  Save
                </button>
              </div>
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

                        <input
                          type="checkbox"
                          name="listDifusion"
                          id=""
                          onChange={handleChange}
                        />
                      </div>
                    );
                  })}
                </div>
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
