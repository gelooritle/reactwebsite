import React from "react";


function About(){
    return(
        <div className="about">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                    <img class ="img-fluid rounded mb-4 mb-lg-0"
                         src={require('./bleach.jpeg')}/>
          </div>
        <div class="col-lg-5">
            <h1 class="font-weight-light">About!</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, rerum possimus aut, aliquam assumenda doloribus dolore nisi qui atque, neque reiciendis. Incidunt fuga maxime modi exercitationem, ad eveniet enim corporis!</p>
        </div>
    </div>
    </div>
    </div>
    );
}

export default About;