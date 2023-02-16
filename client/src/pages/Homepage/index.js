import React from 'react';

function Homepage() {
    return(
        <section class="homepage">
            <h2>Welcome</h2>
            <p>Click on the tabs above to navigate to the different pages</p>
            <img
                class="homepage-ty"
                src={require("../../images/ty-profile.png")}
                alt="picture of ty sovic"
            />
        </section>
    )
};

export default Homepage;