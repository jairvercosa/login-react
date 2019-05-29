import React from 'react'
import SignInForm from './SignInForm'

class App extends React.Component {
    submit(values) {
        fetch("https://api.vercosa.life/auth/authenticate", {
            method: 'post',
            body: JSON.stringify(values)
        }).then(
            (result) => {
                console.log(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log(error);
            }
        );
    }

    render() {
        return <SignInForm onSubmit={this.submit} />
    }
}

export default App;