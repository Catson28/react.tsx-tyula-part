import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="wrapper row1">
      <header id="header" className="hoc clear"> 
        <div id="logo" className="fl_left">
          <h1><a href="index.html">Wetwest</a></h1>
        </div>
        <div id="quickinfo" className="fl_right">
          <ul className="nospace inline">
            <li><strong>Localizador:</strong><br />
              +00 (123) 456 7890</li>
            <li><strong>Lobortis:</strong><br />
              +00 (123) 456 7890</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
