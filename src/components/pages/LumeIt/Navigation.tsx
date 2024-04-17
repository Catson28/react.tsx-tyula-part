import React from 'react';

const Navigation: React.FC = () => {
  return (
    <div className="wrapper row2">
      <nav id="mainav" className="hoc clear"> 
        <ul className="clear">
          <li className="active"><a href="index.html">Início</a></li>
          <li><a className="drop" href="#">Páginas</a>
            <ul>
              <li><a href="pages/gallery.html">Galeria</a></li>
              <li><a href="pages/full-width.html">Largura Total</a></li>
              <li><a href="pages/sidebar-left.html">Barra Lateral Esquerda</a></li>
              <li><a href="pages/sidebar-right.html">Barra Lateral Direita</a></li>
              <li><a href="pages/basic-grid.html">Grade Básica</a></li>
            </ul>
          </li>
          <li><a className="drop" href="#">Suspenso</a>
            <ul>
              <li><a href="#">Nível 2</a></li>
              <li><a className="drop" href="#">Nível 2 + Suspenso</a>
                <ul>
                  <li><a href="#">Nível 3</a></li>
                  <li><a href="#">Nível 3</a></li>
                  <li><a href="#">Nível 3</a></li>
                </ul>
              </li>
              <li><a href="#">Nível 2</a></li>
            </ul>
          </li>
          <li><a href="#">Texto do Link</a></li>
          <li><a href="#">Texto do Link</a></li>
          <li><a href="#">Texto do Link</a></li>
          <li><a href="#">Texto do Link Longo</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
