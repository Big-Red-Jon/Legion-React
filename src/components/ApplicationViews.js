import React from "react";
import { Route } from "react-router-dom";
//Unit
import { UnitProvider } from "./units/UnitProvider";

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "#66CDAA"
        }}>
            <UnitProvider>
                <Route exact path="/Units">
                    <UnitList />
                </Route>
            </UnitProvider>
        </main>
    </>
}