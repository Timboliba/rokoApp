import { useState } from "react";
import "./profil.css";
import SVG from "./profile-major.svg";
const Profil = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handelRegister = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    alert(`name : ${name}, email : ${email}`);
  };
  return (
    <div className="profilContainer">
      <div className="profilHeader">
        <div className="profilHeaderDetails">
          <section className="nameAndNumber">
            <div className="profilName">Nabil Fouraty</div>
            <div className="profilNumber">+212 644-354638</div>
          </section>
          <section className="profilHeaderDetailsPicture">
            <img src="" alt="Picture of profil" />
          </section>
        </div>
      </div>
      <div className="profilMain">
        <section className="profilMainLeft">
          <h1>Votre Profil</h1>
          <h3>Nom,Prénom,e-mail et photo</h3>
          <p>Pour que vos collegues et clients puissent vous reconnaitre.</p>
        </section>
        <section className="profilMainRight">
          <div className="profilMainForm">
            <div className="profilMainFormHeader">
              <div className="title">Photo de profil</div>
              <div className="profilMainFormHeaderPicture">
                <img src={SVG} alt="Picture" />
              </div>
            </div>
            <div className="profilMainFormMain">
              <div className="profilMainFormMainName">
                <p>
                  Name <span>*</span>
                </p>
                <input type="text" placeholder="Name" id="name" />
              </div>
              <div className="profilMainFormMainEmail">
                <p>
                  Adresse e-mail <span>*</span>
                </p>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  id="email"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="profilFooter">
        <div className="profilFooterButtons">
          <button>Annuler</button>
          <button onClick={handelRegister}>Enregistrer</button>
        </div>
      </div>
    </div>
  );
};

export default Profil;
