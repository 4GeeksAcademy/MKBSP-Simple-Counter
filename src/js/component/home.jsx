import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="text-center bg-black" >
			<div className="justify-content-center align-items-center row bg-black p-5 m-2">
				<div className="col-1 bg-dark me-3" style={{ color: "white", fontSize: "80px" }}>
					<i className="fa fa-clock"></i>
				</div>
				<div className="col-1 bg-dark me-3" style={{ color: "white", fontSize: "80px" }}>
					{props.days}
				</div>
				<div className="col-1 bg-dark me-3" style={{ color: "white", fontSize: "80px" }}>
					{props.hours}
				</div>
				<div className="col-1 bg-dark me-3" style={{ color: "white", fontSize: "80px" }}>
					{props.minutes}
				</div>
				<div className="col-1 bg-dark me-3" style={{ color: "white", fontSize: "80px" }}>
					{props.seconds}
				</div>
			</div>
		</div>
	);
};

export default Home;
