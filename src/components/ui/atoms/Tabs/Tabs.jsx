import React, { useState } from "react";
import "./Tabs.css";

export const Tabs = ({ details }) => {
  let tabName;
  let description;

  if (details) {
    tabName = details.map((element) => element.name);
    description = details.map((element) => element.description);
  }

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };

  return (
    <>
      {details ? (
        <>
          <div className="Tabs">
            <ul className="nav">
              <li
                onClick={handleTab1}
                className={activeTab === "tab1" ? "active" : ""}
              >
                {tabName[0]}
              </li>
              <li
                onClick={handleTab2}
                className={activeTab === "tab2" ? "active" : ""}
              >
                {tabName[1]}
              </li>
              <li
                onClick={handleTab3}
                className={activeTab === "tab3" ? "active" : ""}
              >
                {tabName[2].charAt(0).toUpperCase() + tabName[2].slice(1)}
              </li>
            </ul>
            <div className="outlet">
              {activeTab === "tab1" ? (
                <div className="FirstTab">
                  <p>{description[0]}</p>
                </div>
              ) : activeTab === "tab2" ? (
                <div className="SecondTab">
                  <p>{description[1]}</p>
                </div>
              ) : (
                <div className="ThirdTab">
                  <p>{description[2]}</p>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <p>Loading</p>
        </>
      )}
    </>
  );
};
