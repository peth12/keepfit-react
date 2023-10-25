import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const LoadingToRedirect = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    // redirect 

    count === 0 && navigate('/')
    return () => clearInterval(interval)
  }, [count] );
  return <div className="pt-20">No permission redirect in {count}</div>;
};

export default LoadingToRedirect;
