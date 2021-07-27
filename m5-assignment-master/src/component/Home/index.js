import React from "react";

const Home = (props) => {
    const { fbpic, fbdata} = props
    return (<>
        <img src={fbpic} alt={fbdata.name}/>
        <h3 className={"d-inline text-success mx-2"}>
            Welcome Back, {fbdata.name}
        </h3>
        <p className={"my-5"}>Time to checkout?</p>
    </>)
}

export default Home