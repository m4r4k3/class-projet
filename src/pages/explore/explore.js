import { useState } from "react";
import OfferContainer from "./components/OfferContainer";
import DemandeContainer from "./components/DemandeContainer";
import "./styles/search-form.css";
import "./styles/container.css";
import "./styles/field.css"
import "./styles/nav.css"
import "./styles/index.css"

export default function Explore() {
  const [isOffer] = useState(false);

  function handleClickItem(ind){
    console.log(1)
  }

  return (
    <div id="application">
      <div className="container">
        <nav id="second-nav">
          {[
            ["Accuiel", "./"],
            ["Offres d'emploi", "/offres-emploi"],
            ["Demandes d'emploi", "/demandes-emploi"],
            ["Entreprise", "/entreprise"],
          ].map((item, ind) => (
            <li key={ind} className={ind === 0 ? "active" : ""}>
              <a href={item[1]}>{item[0]}</a>
            </li>
          ))}
        </nav>
        <div className="content">
          <div className="settings">
            {[
              "Recherche des offres d'emploi",
              "Recherche des demandes d'emploi",
            ].map((it, ind) => (
              <button
                onClick={() => handleClickItem(ind)}
                className={ind === isOffer ? "active" : ""}
              >
                {it}
              </button>
            ))}
          </div>
          <form action={"./path"} className="search-form">
            <div className="fields">
              <div className="field">
                <label>Mot clé</label>
                <input
                  name="keyword"
                  type="text"
                  placeholder="Mot clé"
                  style={{ width: "250px" }}
                />
              </div>

              <div className="field">
      <label> Niveau scolaire <span style={{ color: "var(--red)" }}>*</span></label>
      <select name="etude" id="pet-select">
      {[
                  ["Niveau bac", "nvbac"],
                  ["bac", "bac"],
                  ["Bac +2", "bac2"],
                  ["Bac +3", "bac3"],
                  ["Bac +5", "bac5"],
                  ["CQR", "cqr"],
                ].map(opt => <option key={opt[1]} value={opt[1]}>{opt[0]}</option>)}
        </select>
    </div>

              <div className="field">
                <label>Ville</label>
                <input
                  name="Ville"
                  type="text"
                  placeholder="Ville"
                  style={{ width: "250px" }}
                />
              </div>
            </div>

            <div className="btns">
              <button id="submit" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i> Recherche
              </button>
              <button id="reset" type="reset">
                <i class="fa-solid fa-rotate-right"></i> Réinitialiser
              </button>
            </div>
          </form>

          {isOffer && <OfferContainer />}
          {!isOffer && <DemandeContainer />}
        </div>
      </div>
    </div>
  );
}
