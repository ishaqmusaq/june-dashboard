import React from 'react';
import { Link } from 'react-router-dom';


const StartupsInfo = ({ Company_name, id, Market_industry, Location, Joined, Approve, removeUser }) => {
    const handleClick = () => {
        removeUser(id)
    }
    return (
        <div>
            <div className='output-info'>
                <tr className='row r1'>
                    <div className="company col-md-2"><td>COMPANY NAME {Company_name}</td></div> <br /><br />
                    <div className="Market col-md-2"><td>MARKET/INDUST {Market_industry}</td></div><br /><br />
                    <div className="Location col-md-2"><td>LOCATION {Location}</td></div><br /><br />
                    <div className="Joined col-md-2"><td>JOINED {Joined}</td></div><br /><br />
                    <div className="Approve col-md-2">  <td>APPROVE {Approve}</td></div><br /><br />
                    <div className="action col-md-2">
                        <div className='row r2'><td>
                <button onClick={handleClick}>DLELTE</button><br/>
                <Link to={`/edit/${id}`}>EDIT </Link>
                        </td> </div>
                </div>
                </tr>
            </div>
            </div>
        
    );
}

export default StartupsInfo;