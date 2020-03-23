import React, { Component } from 'react';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state={
            isHospital: false
        }
    }
    getHospitalView = ()=>{
        this.setState({isHospital:true});
        this.props.getDisplayItem(true);
    }
    getDashboardView = ()=>{
        this.setState({isHospital:false});
        this.props.getDisplayItem(false);
    }
    render(){
        const hospitalViewBtn =  (<button className='btn btn-secondary' type='button' onClick={this.getHospitalView}>Hospital wise View</button>);
        const dashboardViewBtn = (<button className='btn btn-secondary' type='button' onClick={this.getDashboardView}> Back to Dashboard</button>)

        return(
            <div>
                <nav className='navbar navbar-dark fixed-top bg-primary'>
                    <a className='navbar-brand' href='/'>COVID-19 Dashboard</a>
                        <button className='btn btn-light'>Data Updated on :{this.props.updated}</button>
                        <button className='btn btn-light'>Last Refreshed on :{this.props.refreshed.toLocaleString()}</button>
                       {this.state.isHospital?dashboardViewBtn:hospitalViewBtn}
                </nav>
            </div>
        )
    }
}
export default NavBar;
