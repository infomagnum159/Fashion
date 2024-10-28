import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_ABOUT } from "../helpers/const";

const AboutContext = createContext();

const AboutContextProvider = ({ children }) => {
  const [aboutData, setAboutData] = useState({}); // Хранилище данных о контексте

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_ABOUT);
        console.log(response.data);
        setAboutData(response.data); // Обновляем данные о контексте
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <AboutContext.Provider value={{ about: aboutData }}>
      {children}
    </AboutContext.Provider>
  );
};

export const useAbout = () => useContext(AboutContext);

export default AboutContextProvider;
