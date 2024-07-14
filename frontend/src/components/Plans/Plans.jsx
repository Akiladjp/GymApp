import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from '../../assets/whiteTick.png';

export const Plans = () => {
  return (
    <div className="plans-container" id="plans">

      <div className="blur blur-pr"></div>
      <div className="blur blur-pl"></div>

      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      {/* Plans Card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
                {plan.features.map((feature, i)=> (
                    <div className="feature">
                        <img src={whiteTick} alt="" />
                        <span key={1}>{feature}</span>
                    </div>
                ))}
            </div>
            <div>
                <span style={{fontSize: '0.8rem'}}>See more benefits...</span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
