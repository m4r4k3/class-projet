import offresDemploi from "../../../content/data/offres.json";

export default function DemandeContainer(){
  return(
    <div className="boxes">
      <h3>Demandes d'emploi:</h3>

      {offresDemploi.demandes_emploi.map(offre => {
        return(<div key={offre.id} className="box">
          <a href={`./getoffer?id=${offre.id}`}>
            <h4>{offre.titre}</h4>
            <p>{offre.brève_description}</p>
          </a>
        </div>)
        
      })}
    </div>
  )
}