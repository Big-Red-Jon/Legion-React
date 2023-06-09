import React, { useContext, useEffect, useState, useParams } from "react"
import { UnitContext } from "./UnitProvider"
import "./Unit.css"
import { useHistory } from "react-router-dom"

export const UnitList = () => {
    const { units, getUnits } = useContext(UnitContext);

    useEffect(() => {
        getUnits();
    }, []);

    const history = useHistory()

    return (
        <>
            <article>
                <h1>All Units</h1>
                <div>
                    {units && units.map((unit) => {
                        return (
                            <section key={`unit--${unit.id}`}>
                                <h3>{unit.name}</h3>
                                <h2>{unit.upgrade_id.type}</h2>
                                <img alt="unit-img" src={unit.unit_img} /><br />
                            </section>
                        )
                    })};
                </div>
            </article>
        </>
    );
};