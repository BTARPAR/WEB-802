import React from "react";
import {useParams} from 'react-router-dom'

const Banner = () => {

    // Below this comment, there's one major key script missing
    const {id} = useParams()

    return (
        <div>
            <h3>
                You Selected:<span>{id}</span>
            </h3>
        </div>
    );
}

export default Banner