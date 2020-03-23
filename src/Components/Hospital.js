import React, { Component } from 'react';


class Hospital extends Component{
    render(){
        const hospitalDetail = this.props.hospitals.map(hospital =>(
            <tr key={hospital.id}>
                <td>{hospital.hospital_id}</td>
                <td className='table td.fit'>{hospital.hospital.name}<br/> { hospital.hospital.name_ta}<br/>{ hospital.hospital.name_si}</td>
                <td>{hospital.treatment_local}</td>
                <td>{hospital.treatment_foreign}</td>
                <td>{hospital.cumulative_local}</td>
                <td>{hospital.cumulative_foreign}</td>
            </tr>
        ));
        return(
            <div  className='container container-fill'>
            <h1>Hospital wise view</h1>
            <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Hospital</td>
                            <td>Sri Lankans on treatment/observation currently </td>
                            <td>Foreigners on treatment/observation currently </td>
                            <td>Total SriLankan Treated/Observed</td>
                            <td>Total Foreigners Treated/Observed</td>
                        </tr>
                    </thead>
                    <tbody>
                        {hospitalDetail}
                    </tbody>
                    </table>
            </div>
        )
    }
}
export default Hospital;
