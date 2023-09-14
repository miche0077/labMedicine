import "./infoPacientesCard.css";

function InformacoesPacientesCard() {
  return (
    <div className="info-container">
      <div className="card-container">
        <div className="card">
          <p className="card-nome">Nombre: Juan Perez</p>
          <p className="card-edad">Edad: 30</p>
          <p className="card-tel">Teléfono: +12345678</p>
          <p className="card-plano">Plano: Básico</p>
          <a className="ver-mas" href="/details">
            Ver más
          </a>
        </div>
        <div className="card">
          <p className="card-nome">Nombre: Juan Perez</p>
          <p className="card-edad">Edad: 30</p>
          <p className="card-tel">Teléfono: +12345678</p>
          <p className="card-plano">Plano: Básico</p>
          <a className="ver-mas" href="/details">
            Ver más
          </a>
        </div>
        <div className="card">
          <p className="card-nome">Nombre: Juan Perez</p>
          <p className="card-edad">Edad: 30</p>
          <p className="card-tel">Teléfono: +12345678</p>
          <p className="card-plano">Plano: Básico</p>
          <a className="ver-mas" href="/details">
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
}

export default InformacoesPacientesCard;
