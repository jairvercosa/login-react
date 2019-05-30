import React from 'react'
import SignInForm from './SignInForm'

class App extends React.Component {
    submit(values) {
        let data = {
            username: values.username,
            password: values.password,
            client_id: "5NtynaJRQI9KcTASzhYsXnUIiaD6h2aM"
        };

        fetch("https://api.vercosa.life/auth/authenticate", {
            method: 'post',
            body: JSON.stringify(data)
        }).then(
            (result) => {
                console.log(result);
            },
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