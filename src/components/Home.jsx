import React from "react";
import { NavLink } from "react-router-dom";

function Home(){
    return(
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img class ="img-fluid rounded mb-4 mb-lg-0"
                         src={require('./bleach.jpeg')}/>
          </div>
        <div class="col-lg-5">
            <h1 class="font-weight-light">Welcome!</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, rerum possimus aut, aliquam assumenda doloribus dolore nisi qui atque, neque reiciendis. Incidunt fuga maxime modi exercitationem, ad eveniet enim corporis!</p>
        </div>

        <div class='row align-items-center my-5'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos aspernatur esse tempora. Voluptate rerum sed deserunt impedit excepturi? Ullam eius, recusandae doloremque numquam voluptatum perspiciatis fuga non nulla debitis. Cumque!</p> 
            <h6> <NavLink className="nav-link" to="/contact">See more at contacs page.</NavLink></h6>
        </div>
    </div>
    </div>
    </div>
    );
}

export default Home;