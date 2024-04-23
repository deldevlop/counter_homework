import React from "react";
import PropTypes from "prop-types";

function counter(props) {

    const mySuperStyles = {

        background: "black",
        fontSize: "16px",
        color: "white",
        width: "100%",
        height: "398px",

    };

    return (
        <><div className="counter bg-dark text-center pt-5 pb-5 " style={mySuperStyles}>
            <div className="mt-5 timer d-flex text-center justify-content-center">
                <div className="hours fs-4 d-flex align-items-center justify-content-center" style={{ background: "white", width: "40px", height: "40px", borderRadius: "5px", color: "black" }}>{props.hours % 10}</div>
                <span className="ms-1 me-1 fs-4 ">:</span>
                <div className="minutes fs-4 d-flex align-items-center justify-content-center" style={{ background: "white", width: "40px", height: "40px", borderRadius: "5px", color: "black" }}>{props.minutes %10}</div>
                <span className="ms-1 me-1 fs-4">:</span>
                <div className="second fs-4 d-flex align-items-center justify-content-center" style={{ background: "white", width: "40px", height: "40px", borderRadius: "5px", color: "black" }}>{props.second % 10}</div>
            </div>
            <button type="button" class="btn btn-success mt-3 me-2" onClick={""}>Play/Pause</button>
            <button type="button" class="btn btn-danger ms-2 mt-3" onClick={""}>Stop</button>
        </div></>
    );
};

counter.PropTypes={
    hours: PropTypes.number,
    minutes: PropTypes.number,
    second: PropTypes.number,
};

export default counter;