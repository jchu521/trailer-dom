import React, { useState, useEffect } from "react";
import withWindowWidth from "../withWindowWidth/withWindowWidth";

import "./Resource.scss";

const Resource = (props) => {
  const { children, api, width } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState(null);

  // Calculate the card number needed
  const cardNumber = Math.ceil((width * 0.9 - 20) / (185 + 16)) - 1;
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const fetch = async () => {
    try {
      let data = await api();
      setResult(data.results);
      setIsLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    if (api) {
      fetch();
    }
  }, [api]);

  return (
    <>
      {children({
        isLoading,
        result,
        cardNumber,
        setActiveItemIndex,
        activeItemIndex,
      })}
    </>
  );
};

export default withWindowWidth(Resource);
