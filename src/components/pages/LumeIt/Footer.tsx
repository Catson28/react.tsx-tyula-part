import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="wrapper row4">
      <footer id="footer" className="hoc clear"> 
        <div className="one_quarter first">
          <h6 className="heading">Leo nullam vitae</h6>
          <ul className="nospace btmspace-30 linklist contact">
            <li><i className="fa fa-map-marker"></i>
              <address>
              Nome da Rua &amp; Número, Cidade, CEP
              </address>
            </li>
            <li><i className="fa fa-phone"></i> +00 (123) 456 7890</li>
            <li><i className="fa fa-envelope-o"></i> info@dominio.com</li>
          </ul>
          <ul className="faico clear">
            <li><a className="faicon-facebook" href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a className="faicon-twitter" href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a className="faicon-dribble" href="#"><i className="fa fa-dribbble"></i></a></li>
            <li><a className="faicon-linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
        <div className="one_quarter">
          <h6 className="heading">Feugiat turpis phasellus</h6>
          <ul className="nospace linklist">
            <li><a href="#">Ullamcorper erat id suscipit</a></li>
            <li><a href="#">Felis quam id dui donec</a></li>
            <li><a href="#">Posuere nulla id congue</a></li>
            <li><a href="#">Bibendum nulla vestibulum</a></li>
            <li><a href="#">Urna ac ipsum iaculis</a></li>
          </ul>
        </div>
        <div className="one_quarter">
          <h6 className="heading">Nec hendrerit sem</h6>
          <ul className="nospace linklist">
            <li><a href="#">Pharetra curabitur quis</a></li>
            <li><a href="#">Nisi nec odio tincidunt</a></li>
            <li><a href="#">Tempor vitae at metus</a></li>
            <li><a href="#">Sed at ante et est</a></li>
            <li><a href="#">Dapibus hendrerit aenean</a></li>
          </ul>
        </div>
        <div className="one_quarter">
          <h6 className="heading">Fusce euismod urna</h6>
          <p className="nospace btmspace-15">Non fringilla laoreet phasellus volutpat arcu eget posuere euismod arcu purus.</p>
          <form method="post" action="#">
            <fieldset>
              <legend>Boletim Informativo:</legend>
              <input className="btmspace-15" type="text" value="" placeholder="Nome" />
              <input className="btmspace-15" type="text" value="" placeholder="Email" />
              <button type="submit" value="submit">Enviar</button>
            </fieldset>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
