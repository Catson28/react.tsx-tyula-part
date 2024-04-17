import React from 'react';
import NavbarComponent from '../../partials/NavbarComponent';
import Graphtitle from './parts/Graphtitle';
import MarketingPromotionsGraphs from '../../partials/mainGraphs/pageGraphs/MarketingPromotionsGraphs'



const GraphMarketingPromotions: React.FC = () => {
  return (
    <NavbarComponent>   
        <Graphtitle>  
          Marketing e Promoções
        </Graphtitle>  
        <MarketingPromotionsGraphs />
    </NavbarComponent>
  );
};

export default GraphMarketingPromotions;
