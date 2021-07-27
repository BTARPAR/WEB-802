import React from "react";

const LoginForm = () => {
    return (
        <form className={"border mt-3 mb-5 p-3 bg-white d-flex flex-column w-50"}>
            <label className={"m-2"}>Name:</label>
            <input type={'text'} name={'name'} placeholder={'Your name'}/>
            <label className={"m-2"}>Email:</label>
            <input type={"email"} name={"email"} placeholder={"Your Email"}/>
            <input type={"submit"} value={"Login"} className={"btn bg-success text-white my-3 w-50"}/>
        </form>
    )
}

export default LoginForm