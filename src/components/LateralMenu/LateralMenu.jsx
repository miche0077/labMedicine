import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const menuData = [
  {
    group: "Geral",
    items: [{ label: "INICIO", path: "/inicio" }, { label: "SAIR", path: "/sair" }]
  },
  {
    group: "Recientes",
    items: [{ label: "CADASTRAR", path: "/cadastrar" }, { label: "LISTAR PRONTUARIO", path: "/listar-prontuario" }]
  },
  {
    group: "Exames",
    items: [{ label: "CADASTRAR CONSULTA", path: "/cadastrar-consulta" }, { label: "CADASTAR EXAME", path: "/cadastrar-exame" }]
  }
];

function LateralMenu (){
  const [isMenuOpen, setMenuOpen] = useState(true);

  return (
    <div className="menu-wrapper">
      <FontAwesomeIcon 
        icon={isMenuOpen ? faTimes : faBars} 
        onClick={() => setMenuOpen(!isMenuOpen)} 
      />
      
      {isMenuOpen && (
        <div className="menu">
          {menuData.map((menuGroup, idx) => (
            <div key={idx} className="menu-group">
              <p>{menuGroup.group}</p>
              <ul>
                {menuGroup.items.map(item => (
                  <li key={item.label}>
                    <Link to={item.path} onClick={() => setMenuOpen(false)}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

<style>{`
        .menu-wrapper {
          position: relative;
        }
        .menu {
          position: absolute;
          top: 30px;
          left: 0;
          background-color: #fff;
          border: 1px solid #ccc;
          width: 200px;
        }
        .menu-group > p {
          font-weight: bold;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          padding: 8px;
          cursor: pointer;
          border-bottom: 1px solid #ccc;
        }
        li:hover {
          background-color: #f5f5f5;
        }
      `}</style>
    </div>
  );
}
export default LateralMenu;