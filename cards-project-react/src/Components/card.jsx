import React from 'react'
import { Bookmark } from 'lucide-react';

const card = (props) => {
  return (
    <div className="card">
      <div>
          <div className="top">
          <img src={props.brandLogo} alt={props.companyName} />
          <button type="button">save <Bookmark size={12}/></button>
       
        </div>
        <div className="center">
          <h3>{props.companyName}</h3>
          <h3> <span>{props.datePosted}</span></h3>
          <h2>Senior UI/UX Designer </h2>
          <div className="tag">
            <h4>{props.postTag1}</h4>
            <h4>{props.postTag2}</h4>
          </div>
        </div>
      </div>
        <div className="bottom">
         <div>
            <h3>${props.pay}/hr</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default card