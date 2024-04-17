import React, { useEffect } from 'react';
import $ from 'jquery';

const HomeContextPage: React.FC = () => {
  useEffect(() => {
    // Função para rolar até o topo quando clicar no botão
    $("#backtotop").click(function () {
      $("body,html").animate({
        scrollTop: 0
      }, 600);
    });

    // Função para adicionar ou remover a classe "visible" com base no scroll da janela
    $(window).scroll(function () {
      const scrollTop = $(window).scrollTop();
      if (scrollTop !== undefined && scrollTop > 150) {
        $("#backtotop").addClass("visible");
      } else {
        $("#backtotop").removeClass("visible");
      }
    });
  }, []);

  return (
    <>
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
      <div className="wrapper row2">
        <nav id="mainav" className="hoc clear">
          <ul className="clear">
            <li className="active"><a href="index.html">Início</a></li>
            {/* Restante do seu menu */}
          </ul>
        </nav>
      </div>
      <div className="wrapper bgded overlay" style={{backgroundImage: 'url("images/demo/backgrounds/01.png")'}}>
        <div id="pageintro" className="hoc clear"> 
          <article>
            <div>
              <p className="heading">Purus donec mi tellus suscipit eget</p>
              <h2 className="heading">Urna a egestas etiam</h2>
              <p>Lacinia velit at ipsum commodo tincidunt donec condimentum ligula ultricies dictum.</p>
            </div>
            <footer>
              <ul className="nospace inline pushright">
                <li><a className="btn inverse" href="#">Ullamcorper</a></li>
                <li><a className="btn" href="#">Accumsan</a></li>
              </ul>
            </footer>
          </article>
        </div>
      </div>
      <div className="wrapper row3">
        <main className="hoc container clear"> 
          {/* <!-- main body --> */}
          <article className="group">
            <div className="group btmspace-80">
              <div className="one_quarter first">
                <p className="font-xs">Aliquet elit vel nisl commodo</p>
                <h6 className="heading">Eget curabitur porta massa nec mollis</h6>
              </div>
              <div className="three_quarter">
                <p>Tincidunt mauris et gravida dui nec consectetur felis vivamus aliquet lectus sit amet augue bibendum ultrices praesent condimentum ultrices justo at commodo vestibulum a hendrerit augue vitae posuere lacus nam placerat congue.</p>
                <p className="btmspace-30">Elit quis cursus erat lobortis et ut vehicula velit ante vel ultricies dui porta sit amet morbi at eros suscipit&hellip;</p>
                <footer><a className="btn" href="#">Leia Mais &raquo;</a></footer>
              </div>
            </div>
            <figure>
              <ul className="nospace group overview">
                <li className="one_half"><a href="#"><img src="images/demo/480x360.png" alt="" /></a></li>
                <li className="one_half"><a href="#"><img src="images/demo/480x360.png" alt="" /></a></li>
                <li className="one_half"><a href="#"><img src="images/demo/480x360.png" alt="" /></a></li>
                <li className="one_half"><a href="#"><img src="images/demo/480x360.png" alt="" /></a></li>
                <li className="one_half"><a href="#"><img src="images/demo/480x360.png" alt="" /></a></li>
                <li className="one_half"><a href="#"><img src="images/demo/480x360.png" alt="" /></a></li>
              </ul>
            </figure>
          </article>
          {/* <!-- / main body --> */}
          <div className="clear"></div>
        </main>
      </div>
      <div className="wrapper bgded overlay" style={{backgroundImage: 'url("images/demo/backgrounds/02.png")'}}>
        <article className="hoc container clear center"> 
          <div className="sectiontitle" style={{marginBottom: '30px'}}>
            <h6 className="heading">Venenatis nisl porta</h6>
            <p>Lorem vestibulum gravida ipsum non velit aliquam lobortis</p>
          </div>
          <p><a className="btn medium" href="#">Leia Mais &raquo;</a></p>
        </article>
      </div>
      <a id="backtotop" href="#top"><i className="fa fa-chevron-up"></i></a>
    </>
  );
};

export default HomeContextPage;
