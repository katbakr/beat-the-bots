import React from 'react';
import ArcadeButton from 'react-native-arcade-button';

// import { useQuery } from '@apollo/client';

class Foo extends React.Component {
    // onClick = (e) => {

    // }
render() {
    return (
        <div class='landingPage'>
            <h1> Beat the Bots!</h1>

            <h3>
                A team building game to challenge your
                communication and problem solving skills.
            </h3>

            <ArcadeButton>
                onPressOut={this.onClick}
                <Text>Signup</Text>
            </ArcadeButton>




        </div>
    )
}
}

export default Home;