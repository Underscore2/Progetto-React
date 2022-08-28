import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { store } from "../../../states/Store";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default function Dashboard() {

    let logged = false;

    store.getState().users.map((user =>
        user.authorized === true
            ? logged = true : logged = false))


    if (logged) {
        return (
            <>
                <div className="container-xxl p-3 gradient-background">
                    <h1 style={{color: "darkred"}} className={"white-modules text-center"}>Welcome to your subscription</h1>
                    <p className={"m-0 py-3 white-modules justify-content-center align-items-center px-2 m-0 w-100"}>
                        <TradingViewWidget
                            symbol="NASDAQ:AAPL"
                            theme={Themes.DARK}
                            locale="it"
                            autosize

                        />
                    </p>
                    <p className={"m-0 py-3 white-modules justify-content-center align-items-center px-2 m-0 w-100"}>
                        <TradingViewWidget
                            symbol="NASDAQ:AAPL"
                            theme={Themes.DARK}
                            locale="it"
                            autosize

                        />
                    </p>
                    <p className={"m-0 py-3 white-modules justify-content-center align-items-center px-2 m-0 w-100"}>
                        <TradingViewWidget
                            symbol="NASDAQ:AAPL"
                            theme={Themes.DARK}
                            locale="it"
                            autosize

                        />
                    </p>
                    <p className={"m-0 py-3 white-modules justify-content-center align-items-center px-2 m-0 w-100"}>
                        <TradingViewWidget
                            symbol="NASDAQ:AAPL"
                            theme={Themes.DARK}
                            locale="it"
                            autosize

                        />
                    </p>
                    <p className={"m-0 py-3 white-modules justify-content-center align-items-center px-2 m-0 w-100"}>
                        <TradingViewWidget
                            symbol="NASDAQ:AAPL"
                            theme={Themes.DARK}
                            locale="it"
                            autosize

                        />
                    </p>


                </div>
            </>
        )
    } else return(
        <Navigate to='/Giangischi' replace />
    )

}