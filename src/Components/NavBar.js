import React, { Component } from 'react';

class NavBar extends Component{
    render(){
        return(
            <div>
                <nav className='navbar navbar-dark fixed-top bg-primary'>
                    <a className='navbar-brand' href='/'>COVID-19 Dashboard</a>
                        <button className='btn btn-light'>Last Updated on :{this.props.updated}</button>
                </nav>
            </div>
        )
    }
}
export default NavBar;