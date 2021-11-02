import React from "react";

export default class CreateUsers extends React.Component{
    
    constructor(props){
        super(props)

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);    

        this.state = {
            username: ''
        }

    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
            

        }
        
        this.setState({username: ''})

        console.log(user)
    }
    
    render(){
        return(
            <div>
                <h3>Create New User</h3>
                <form className='form-control' onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Username: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
                </form>
            </div>
        )
    }
}