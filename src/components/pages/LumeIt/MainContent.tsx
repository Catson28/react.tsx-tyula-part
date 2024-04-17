import React from 'react';

const MainContent: React.FC = () => {
  return (
    <div className="wrapper row3">
      <main className="hoc container clear"> 
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
        <div className="clear" />
      </main>
    </div>
  );
}

export default MainContent;
