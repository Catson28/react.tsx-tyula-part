import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteLogger = () => {
  const location = useLocation();

  useEffect(() => {
    // Remove the leading slash and any trailing slashes from the pathname
    const routeName = location.pathname.replace(/^\/|\/$/g, '');

    // Log the route name
    console.log(routeName);
  }, [location.pathname]);

  return null; // Component doesn't render anything visible
};

export default RouteLogger;
