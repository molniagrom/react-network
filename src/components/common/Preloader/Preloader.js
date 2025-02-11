import React from "react";
import preloader from "../../../assets/images/Gear@1x-0.7s-200px-200px.svg"

export const Preloader = (props) => {
    // return {props.isFetching ? <img src={preloader} alt="Loading..." /> : null}
    // debugger
    return <div>
        <img src={preloader} alt="Preloader" />
    </div>
}
