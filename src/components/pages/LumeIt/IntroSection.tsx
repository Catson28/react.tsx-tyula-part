import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <div className="wrapper bgded overlay" style={{backgroundImage: "url('images/demo/backgrounds/01.png')"}}>
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
  );
}

export default IntroSection;
