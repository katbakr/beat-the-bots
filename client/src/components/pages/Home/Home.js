import React from 'react';
// import ArcadeButton from 'react-native-arcade-button';
// import botImage from '/assets/homeBot.png'
// import '../home.css';
import { Link } from 'react-router-dom';



export default function Home({ currentPage, handlePageChange }) {


    return (
        <div class='landingPage'>
            <div>
                <h1> Beat the Bots!</h1>
                <img src='/assets/homeBot.png'></img>
                {/* <a href='/assets/homeBot.png'></a> */}
                <h3>
                    A team building game to challenge your
                    communication and problem solving skills.
                </h3>
            </div>
            <div>

                {/* <a 
          href="#home"
          onClick={() => handlePageChange('Dashboard')} 
          className={currentPage === 'Home' ? 'Dashboard' : ''}
        >
          Home
        </a> */}


                <Link to='/signup' >Signup</Link>
                <Link to='/login'>Login</Link>
            </div>

            {/* <ArcadeButton>
                onPressOut={this.onClick}
                <Text>Signup</Text>
            </ArcadeButton> */}
            {/* <h1>Push the button<small>(s)</small></h1>
<p>flat or not…</p>
<button class="push--flat"></button> <button></button> */}

        </div>
    )
}