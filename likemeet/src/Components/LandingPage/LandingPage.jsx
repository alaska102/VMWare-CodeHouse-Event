import * as React from 'react'; 
import './LandingPage.css'; 
import Working from "./working.jpg";

export default function LandingPage() {
    return(
        <div className="App">
        <p class="normal">
          <img
            src={Working}
            alt="Group Working Together"
            width="50%"
            align="right"
          />
          YOUR BEST WAY{" "}
          <span id="newline">
            TO <span id="makered">MEET</span> AND{" "}
          </span>{" "}
          CONNECT!
        </p>
        <div>
          <p class="makeButton">
            <span id="outline">SIGN UP NOW</span> or{" "}
            <span id="makebold">SIGN IN</span>
          </p>
        </div>
      </div>
      );

}