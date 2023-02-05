import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/info.css";

export const Info = () => {
    return (
        <>
            <div className="container">
                <div className="infotop d-flex justify-content-evenly p-2">
                    <img src="https://c8.alamy.com/compes/2b8w8da/star-wars-1977-lucasfilm-20th-century-fox-con-mark-hamill-como-luke-skywalker-2b8w8da.jpg" className="infocard" alt="..." />
                    <div className="info p-3 text-center">
                        <h1>Luke skywalker</h1>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="infofooter mt-4 p-3"> 
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Climate</th>
                                <th scope="col">Population</th>
                                <th scope="col">Orbital Period</th>
                                <th scope="col">Rotation Period</th>
                                <th scope="col">Diameter</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tatooine</td>
                                <td>arid</td>
                                <td>200000</td>
                                <td>304</td>
                                <td>23</td>
                                <td>10456</td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>
        </>
    )
}
