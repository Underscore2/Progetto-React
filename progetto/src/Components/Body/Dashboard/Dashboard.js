import React from "react";
import { Navigate } from "react-router-dom";
import { store } from "../../../states/Store";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import Accordion from "react-bootstrap/Accordion";

export default function Dashboard() {
  


  const aziende = [
    { azienda: "APPLE", codice: "AAPL" },
    { azienda: "GOOGLE", codice: "GOOGL" },
    { azienda: "MICROSOFT", codice: "MSFT" },
    { azienda: "TESLA", codice: "TSLA" },
    { azienda: "NETFLIX", codice: "NFLX" },
    { azienda: "NVIDIA", codice: "NVDA" },
    { azienda: "AMD", codice: "AMD" },
  ];

 
    return (
      <div className="container-xxl p-3 gradient-background my-3">
        {aziende.map((item, index) => {
          return (
            <div key={index} className="my-3 ">
              {index === 0 ? (
                <Accordion defaultActiveKey={index}>
                  <Accordion.Item eventKey={index} className="color-gray">
                    <Accordion.Header
                      className="color-gray"
                      style={{ color: "yellow" }}
                    >
                      {" "}
                      {item.azienda}
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="vh-20">
                        <TradingViewWidget
                          symbol={`NASDAQ:${item.codice}`}
                          theme={Themes.DARK}
                          locale="en"
                          autosize
                        />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ) : (
                <Accordion>
                  <Accordion.Item eventKey={index} className="color-gray">
                    <Accordion.Header
                      className="color-gray"
                      style={{ color: "yellow" }}
                    >
                      {" "}
                      {item.azienda}
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="vh-20">
                        <TradingViewWidget
                          symbol={`NASDAQ:${item.codice}`}
                          theme={Themes.DARK}
                          locale="en"
                          autosize
                        />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              )}
            </div>
          );
        })}
      </div>
    );
  }  

