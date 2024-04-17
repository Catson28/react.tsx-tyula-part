import React, { useState, useEffect } from 'react';
import TelaComponent from './telaResponsivaComponente';

const TelaDoNavegador: React.FC = () => {
  const [comprimento, setComprimento] = useState<number>(window.innerWidth);
  const [descricaoTamanhoAtual, setDescricaoTamanhoAtual] = useState<any>(null); // Estado para armazenar a descrição do tamanho da tela atual
  const [responsividade, setResponsividade] = useState<number | null>(null);
  const points = ['Ponto 1', 'Ponto 2', 'Ponto 3'];

  useEffect(() => {
    const handleResize = () => {
      const novoComprimento = window.innerWidth;
      setComprimento(novoComprimento);

      // Determinar o valor de "z" com base no comprimento atual
      const arrayDeTamanhos = [1199, 991, 767, 576, 480, 375];
      const arrayDeDescricaoTamanhos = [
        {
          "title": "@media (max-width: 1199px)",
          "subtitle": "Este estilo é aplicado quando a largura da tela é 1199 pixels ou menos.",
          "imageUrl": "/images/71an9eiBxpL._AC_SL1500_.jpg",
          "points": ["Tablets e laptops em modo de exibição horizontal."]
        },
        {
          "title": "@media (max-width: 991px)",
          "subtitle": "Este estilo é aplicado quando a largura da tela é 991 pixels ou menos.",
          "imageUrl": "/images/91MXLpouhoL._AC_SL1500_.jpg",
          "points": ["Tablets em modo de exibição vertical.", "smartphones com telas maiores."]
        },
        {
          "title": "@media (max-width: 767px)",
          "subtitle": "Este estilo é aplicado quando a largura da tela é 767 pixels ou menos.",
          "imageUrl": "/images/apple-ipad-mini-4-33306-g-alt.jpeg",
          "points": ["Smartphones em modo retrato."]
        },
        {
          "title": "@media (max-width: 576px)",
          "subtitle": "Este estilo é aplicado quando a largura da tela é 576 pixels ou menos.",
          "imageUrl": "/images/99f24f5838593063954b3b3ceeab84e31-e19302ad31f983269b16768632554738-1024-1024.jpg",
          "points": ["Smartphones em modo retrato com telas menores.", "Tablets em modo retrato."]
        },
        {
          "title": "@media (max-width: 480px)",
          "subtitle": "Este estilo é aplicado quando a largura da tela é 480 pixels ou menos.",
          "imageUrl": "/images/57540cd1-09b1-47e3-a36e-292e033cd9a5.jpg",
          "points": ["Smartphones em modo retrato mais antigos."]
        },
        {
          "title": "@media (max-width: 375px)",
          "subtitle": "Este estilo é aplicado quando a largura da tela é 375 pixels ou menos.",
          "imageUrl": "/images/142236-phones-vs-apple-iphone-8-vs-iphone-7-vs-iphone-6s-whats-the-difference-image1-v2rppulkzo.avif",
          "points": ["iPhones em modo retrato."]
        }
      ];
      let novoZ = null;

      for (let i = 0; i < arrayDeTamanhos.length; i++) {
        if (novoComprimento >= arrayDeTamanhos[i]) {
          novoZ = arrayDeTamanhos[i];
          setDescricaoTamanhoAtual(arrayDeDescricaoTamanhos[i]); // Atualiza o estado com a descrição do tamanho atual
          break;
        }
      }

      // Atualizar o estado de responsividade com o novo valor de "z"
      setResponsividade(novoZ);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>

      <p>O comprimento atual da tela do navegador é: <strong>{comprimento}</strong> pixels.</p>

      {responsividade && (
        <p>A responsividade é: <strong>{responsividade}</strong> pixels.</p>
      )}

      {descricaoTamanhoAtual && (
        <TelaComponent
          title={descricaoTamanhoAtual.title}
          subtitle={descricaoTamanhoAtual.subtitle}
          imageUrl={descricaoTamanhoAtual.imageUrl}
          points={descricaoTamanhoAtual.points}
        />
      )}
    </div>
  );
};

export default TelaDoNavegador;
/*

*/