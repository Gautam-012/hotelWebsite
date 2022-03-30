import React from 'react';
import Searchbar from './Searchbar';
import Navbar from './Navbar';
import "./index.css"
import Auth from './Auth.js';
import Section from "./Section"
import Modal from "./Modal"

const App = () => {
    
    // const auth= useAuth();
    // console.log(auth);

    return(
        <div>
            <div className='navbar'>
                <Navbar/>
            </div>
            <h2 className='header'>Search the top hotels</h2>
            <div className='container'>
                    <div className='cont'>
                        <Searchbar/>
                        <Modal/>
                        <Auth/>

                    </div>

            </div>
            <Section/>
        </div>
    )
}

export default App;