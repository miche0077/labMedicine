import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./LateralMenu.css";
const menuData = [
  {
    group: "Geral",
    items: [
      { label: "INICIO", path: "/inicio" },
      { label: "SAIR", path: "/sair" },
    ],
  },
  {
    group: "Recientes",
    items: [
      { label: "CADASTRAR", path: "/cadastrar" },
      { label: "LISTAR PRONTUARIO", path: "/listar-prontuario" },
    ],
  },
  {
    group: "Exames",
    items: [
      { label: "CADASTRAR CONSULTA", path: "/cadastrar-consulta" },
      { label: "CADASTAR EXAME", path: "/cadastrar-exame" },
    ],
  },
];

function LateralMenu() {
  const [isMenuOpen, setMenuOpen] = useState(true);

  return (
    <div className="menu-wrapper">
      <FontAwesomeIcon id="icon"
              icon={isMenuOpen ? faTimes : faBars}
              onClick={() => setMenuOpen(!isMenuOpen)}
            />
      {isMenuOpen && (
        <div className="menu">
          {menuData.map((menuGroup, idx) => (
            <div key={idx} className="menu-group">
              <p>{menuGroup.group}</p>
              <ul>
                {menuGroup.items.map((item) => (
                 <button key={item.label}>
                    <Link to={item.path} onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </Link>
                  </button>
                ))}
                
              </ul> 
            </div>
          ))}
          
        </div>
      )}
  </div>
  );
}
export default LateralMenu;
