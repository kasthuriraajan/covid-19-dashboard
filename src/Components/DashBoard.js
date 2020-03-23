import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Hospital from './Hospital';

class DashBoard extends Component{
    constructor(props){
        super(props);
        this.state= {
            updatedOn:"",
            localNewCases:"",
            localTotalCases:"",
            localIndividualsinHospital:"",
            localDeths:"",
            localNewDeaths:"",
            localRecovered:"",
            globalNewCases:"",
            globalTotalCases:"",
            globalDeths:"",
            globalNewDeaths:"",
            globalRecovered:"",
            hospitalData:[],
            hospitalView:false,
            refreshedOn: new Date()
        }
    }
    
    componentDidMount(){
        this.getData();
        this.timerID = setInterval(this.getData,900000); //once a 15 minutes
    }
    getData = ()=>{
        fetch(" https://hpb.health.gov.lk/api/get-current-statistical")
        .then(results =>{return results.json();})
        .then(response => {this.setState({
            updatedOn:response.data.update_date_time,
            localNewCases:response.data.local_new_cases,
            localTotalCases:response.data.local_total_cases,
            localIndividualsinHospital:response.data.local_total_number_of_individuals_in_hospitals,
            localDeths:response.data.local_deaths,
            localNewDeaths:response.data.local_new_deaths,
            localRecovered:response.data.local_recovered,
            globalNewCases:response.data.global_new_cases,
            globalTotalCases:response.data.global_total_cases,
            globalDeths:response.data.global_deaths,
            globalNewDeaths:response.data.global_new_deaths,
            globalRecovered:response.data.global_recovered,
            hospitalData:response.data.hospital_data ,
            refreshedOn: new Date()   
        })});

    }
    componentWillUnmount() {
        clearInterval(this.timerID);
      }
    changeDisplayItems = (resp)=>{
        this.setState({hospitalView:resp});
    }
    render(){
        const summary = (<div  className='container container-fill'>
        <h1>Situation in SriLanka</h1>
        <div className='row'>
            <div className = 'card text-white text-center bg-info col-md-3'>
                <div className= 'card-header h2'>New Cases</div>
                <div className = 'card-title h3'>{this.state.localNewCases}</div>
            </div>
            <div className = 'card text-white text-center bg-dark col-md-3 offset-1'>
                <div className= 'card-header h2'>Total Cases</div>
                <div className = 'card-title h3'>{this.state.localTotalCases}</div>
            </div>
            <div className = 'card text-white text-center bg-primary col-md-4 offset-1'>
                <div className= 'card-header h2'>Cases in Hospital</div>
                <div className = 'card-title h3'>{this.state.localIndividualsinHospital}</div>
            </div>
        </div>
        <hr/>
        <div className='row'>
            <div className = 'card text-white text-center bg-success col-md-3'>
                <div className= 'card-header h2'>Recovered</div>
                <div className = 'card-title h3'>{this.state.localRecovered}</div>
            </div>
            <div className = 'card text-white text-center bg-danger col-md-3 offset-1'>
                <div className= 'card-header h2'>Total Deaths</div>
                <div className = 'card-title h3'>{this.state.localDeths}</div>
            </div>
            <div className = 'card text-white text-center bg-secondary col-md-4 offset-1'>
                <div className= 'card-header h2'>New Deaths</div>
                <div className = 'card-title h3'>{this.state.localNewDeaths}</div>
            </div>
        </div>
        <hr/>
        <h1>Situation in World </h1>
        <div className='row'>
            <div className = 'card text-white text-center bg-success block-offset h3'>
                <div className= 'card-header'>Recovered </div> 
                <div >{this.state.globalRecovered}</div>
            </div>
            <div className = 'card text-white text-center bg-info block-offset h3'>
                <div className= 'card-header'>New Cases </div>                            
                <div >{this.state.globalNewCases}</div>
            </div>
            <div className = 'card text-white text-center bg-dark block-offset h3'>
                <div className= 'card-header'>Total Cases </div>
                <div>{this.state.globalTotalCases}</div>
            </div>
            <div className = 'card text-white text-center bg-warning block-offset h3'>
                <div className= 'card-header '>New Deaths </div> 
                <div >{this.state.globalNewDeaths}</div>
            </div>
            <div className = 'card text-white text-center bg-danger block-offset h3'>
                <div className= 'card-header'>Total Deaths </div> 
                <div >{this.state.globalDeths}</div>
            </div>
        </div>
    </div>);
        return(
            <div>
                <NavBar updated={this.state.updatedOn} getDisplayItem={this.changeDisplayItems} refreshed={this.state.refreshedOn}/>
                {this.state.hospitalView?<Hospital hospitals={this.state.hospitalData} resetHospitalView={this.getDashboard}/>:summary}
                <Footer/>
            </div>
        )
    }
}

export default DashBoard;
