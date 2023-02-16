import React from 'react';

function Work() {
    return(
        <section class="work">
            <h1>Work Experience</h1>
            <div class="work-div" id="work-clemson">
                <div>
                    <img
                        class="work-pic"
                        src={require("../../images/ty-profile.png")}
                        alt="ty sovic working at Clemson Football"
                    />
                </div>
                <div>
                    <h2>CLEMSON</h2>
                    <p>
                        MM/DD/YYYY = MM/DD/YYYY
                        <br />
                        <br />
                        CLEMSON WORK EXP PARAGRAPH
                    </p>
                </div>
            </div>
            <div class="work-div" id="work-michigan">
                <div>
                    <img
                        class="work-pic"
                        src={require("../../images/ty-michigan.jpg")}
                        alt="ty sovic working at Michigan Tennis"
                    />
                </div>
                <div>
                    <h2>MICHIGAN</h2>
                    <p>
                        MM/DD/YYYY = MM/DD/YYYY
                        <br />
                        <br />
                        MICHIGAN WORK EXP PARAGRAPH
                    </p>   
                </div>
            </div>
            <div class="work-div" id="work-miami">
                <div>
                    <img
                        class="work-pic"
                        src={require("../../images/ty-miami.jpg")}
                        alt="ty sovic working at Miami Dolphins Football"
                    />
                </div>
                <div>
                    <h2>MIAMI</h2>
                    <p>
                        MM/DD/YYYY = MM/DD/YYYY
                        <br />
                        <br />
                        MIAMI WORK EXP PARAGRAPH
                    </p>
                </div>
            </div>
            <div class="work-div" id="work-louisville">
                <div>
                    <img
                        class="work-pic"
                        src={require("../../images/ty-louisville.jpg")}
                        alt="ty sovic working at Louisville Football"
                    />
                </div>
                <div>
                    <h2>LOUSIVILLE</h2>
                    <p>
                        MM/DD/YYYY = MM/DD/YYYY
                        <br />
                        <br />
                        LOUISVILLE WORK EXP PARAGRAPH
                    </p>
                </div>
            </div>
        </section>
    )
};

export default Work;