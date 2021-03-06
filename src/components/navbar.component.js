import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
    
    render(){
        return (
            <nav id='navbar' className="navbar navbar-dark bg-dark navbar-expand-sm">
                <Link to="/" className='navbar-brand'>ExerciseTracker</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div id='navigation' className='collapse navbar-collapse' data-toggle="collapse" data-target=".navbar-collapse">
                    <ul className='navbar-nav mr-auto'>
                        <li className='navbar-item'>
                            <Link to='/' className='nav-link'>Exercises</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/create' className='nav-link'>Create Exercise Log</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/user' className='nav-link'>Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}