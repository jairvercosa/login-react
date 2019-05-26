import React from "react"

const App = () => {
    return (
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="offset-md-4 col-md-4 mt-5">
                    <h2 className="mt-5">Login</h2>
                    <form>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" placeholder="Enter your password" />
                        </div>
                        <div className="form-group">
                            <button className="btn-primary btn-lg">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )  
};

export default App;