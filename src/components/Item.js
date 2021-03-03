import React from 'react'
import { traducir } from '../helpers/traductor'

export const Item = ({id,nombreEsp,nombreEng,imagen}) => {
    return (
        <div className="col">
        <div className="card">
            <img 
                style={{cursor:'pointer',height:'170px'}}
                src={imagen}
                className="card-img-top" 
                alt="..."
                onClick={()=>
                {
                    traducir(nombreEng);
                }}/>
            <div className="card-body">
            <h5 className="card-title text-center">{`${nombreEsp.toUpperCase()} --> ${nombreEng.toUpperCase()}`}</h5>
            
            {/* <audio src={pista} controls></audio>
             */}

            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
        </div>
        </div>
    )
}
