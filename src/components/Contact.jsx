import React from "react";
import { Link, Outlet } from 'react-router-dom';

function Contact(){
    return(
        <div className="contact">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                    <img class ="img-fluid rounded mb-4 mb-lg-0"
                         src={require('./bleach.jpeg')}/>
          </div>
        <div class="col-lg-5">
            <h1 class="font-weight-light">Contact!</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, rerum possimus aut, aliquam assumenda doloribus dolore nisi qui atque, neque reiciendis. Incidunt fuga maxime modi exercitationem, ad eveniet enim corporis!</p>        
        </div>
        <form>
            <label>Username:</label>
            <input type='text'></input>
            <input type='submit'></input>
        
        </form>
        <div>
        <Link to="/search"><h1>Search</h1></Link>
        </div>
     
    </div>
    </div>
    <Outlet/>
    </div>
    );
}

export default Contact;