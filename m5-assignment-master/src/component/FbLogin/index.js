import React, {useState} from "react";
import FacebookLogin from "react-facebook-login"
import {Card} from "react-bootstrap";
import Home from "../Home";
import LoginForm from "../LoginForm";

const FbLogin = () => {
    const [login, setLogin] = useState(false) //Set up Login
    const [data, setData] = useState({}) //Set up Login
    const [picture, setPicture] = useState('') //Set up Login
    const responseFacebook = (res) => {
        setData(res)
        setPicture(res.picture.data.url)
        if(res.accessToken){
            setLogin(true)
        } else {
            setLogin(false)
        }
    }
    return (
        <div className="container">
            <Card>
                <Card.Header>My React App</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {!login && <>
                            <h3>Please login using one of the following:</h3>
                            {/*Login Form*/}
                            <LoginForm/>
                            {/*FB Login Button*/}
                            <FacebookLogin
                                appId={"846296922935648"}
                                autoLoad={false}
                                fields={"name, email, picture"}
                                scope={"public_profile, user_friends"}
                                callback={responseFacebook}
                                icon={"fa-facebook"}
                            />
                        </>}
                        {login && <Home fbpic={picture} fbdata={data}/>}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default FbLogin;
