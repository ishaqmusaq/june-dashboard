
import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink} from 'react-router-dom';
import { addUser, deleteUser,  } from './component/store/userAction';
import StartupsInfo from './component/startupsInfo'

export class App extends Component {
  


  addNewUser = newUser => {
    this.props.addUser(newUser)
  };

  deleteUser = user_id => {
    this.props.deleteUser(user_id)
  };



  render() {
    
  return (
    <div classNameName="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      
<nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <img src="/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
              DASHBOARD
  </a>
</nav>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
           
            
            <div className="dropdown ">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                add startup
               
  </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
            
          </ul>
         
  </div>
</nav>
<div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">Dashboard</a>
          </div>
        </nav>
</div>
      <div className=" container">
        <div className="row">
        <div className="col-6 col-md-3">
            <div id="list-example" className="list-group" >
              <nav className="navbar navbar-dark bg-primary">
                <span className="navbar-brand mb-0 h1">Dashboard</span>
              </nav>
              <header className="list-group-item list-group-item-action" > 
                
                <NavLink to={`/add`} addUser={this.addNewUser}>add startup</NavLink>
              </header>
              <a className="list-group-item list-group-item-action" href="#list-item-2">Startup details</a>
              
              
            </div>
            <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
              <h4 id="list-item-1"></h4>
              
              <h4 id="list-item-2"></h4>
              <p></p>
              

            </div>
        </div>


        <div className="col-sm-6 col-md-9">
            <nav className="navbar navbar-dark bg-primary">
              <span className="navbar-brand mb-0 h1">All Startups</span>
            </nav>
          <input className="form-control" type="text" placeholder="Filter startups" readonly/>
          <div className="form-info container-fluid">
            
              <div classNameName='App_user-info'>
                {this.props.users.map((item) => {

                  return (
                    <StartupsInfo key={item.id}
                      id={item.id}
                      Company_name={item.Company_name}
                      Market_indusstry={item.Market_indusstry}
                      Location={item.Location}
                      Joined={item.Joined}
                      Approve={item.Approve}
                      removeUser={this.deleteUser}
                    />

                  );
                })}

              </div>

          </div>
        </div>

        </div>
      </div>

    </div>

  );
}
}

  const mapStateToProps = (state) => ({
    users: state.users
  })

  const mapDispatchToProps = {
    addUser: addUser,
    deleteUser: deleteUser
    
  }


  export default connect(mapStateToProps, mapDispatchToProps)(App);
