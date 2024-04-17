import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <div className="wrapper bgded overlay" style={{backgroundImage: "url('images/demo/backgrounds/02.png')"}}>
      <article className="hoc container clear center"> 
        <div className="sectiontitle" style={{marginBottom: '30px'}}>
          <h6 className="heading">Venenatis nisl porta</h6>
          <p>Lorem vestibulum gravida ipsum non velit aliquam lobortis</p>
        </div>
        <p><a className="btn medium" href="#">Leia Mais &raquo;</a></p>
      </article>
    </div>
  );
}

export default CallToAction;
