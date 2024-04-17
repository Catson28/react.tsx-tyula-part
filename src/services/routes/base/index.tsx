// src/routes/index.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Troque `Switch` por `Routes`
import routes from './routesConfig';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element} // Troque `render` por `element`
          />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;
