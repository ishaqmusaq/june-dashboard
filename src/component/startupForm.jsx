import React, { Component } from 'react';



export class startupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            Company_name: '',
            Market_industry: '',
            location: '',
            Joined: '',
            Approve: '',

        };
        


    }

    handleChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value,
            }
        );
        

    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            Company_name: this.state.Company_name,
            Market_industry: this.state.Market_industry,
            Location: this.state.Location,
            Joined: this.state.Joined,
            Approve: this.state.Approve,
            

        };

        this.props.addUser(newUser);
        this.setState(
            {
                Company_name: '',
                Market_industry: '',
                Location: '',
                Joined: '',
                Approve: '',
            });

        
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='App-user-form'>
                <div className='container'>
                    <h1 className='App-header'>USER DAILY EXPENSES</h1>

                    <div className='form-control'>
                        <label>COMPANY NAME: </label><br/>
                        <input placeholder=' COMPANY NAME' name='Company_name' value={this.state.Company_name} onChange={this.handleChange}  type="text"/>
                        <br />
                    </div>
                    <br /><br />


                    <div className='form-control'>
                        <label>MARKET/INDUSTRY: </label><br />
                        <input placeholder='MARKET INDUSTRY' name='Market_industry' value={this.state.Market_industry} onChange={this.handleChange} type="text" />
                        <br />
                    </div>
                    <br /><br />

                    <div className='form-control'>
                        <label>LOCATION : </label><br />
                        <input placeholder=' LOCATION' name='Location' value={this.state.Location} onChange={this.handleChange} type='text' />
                        <br />
                    </div>
                    <br /><br />
                    <div className='form-control'>
                        <label>JOINED : </label><br />
                        <input placeholder='joined ' name='Joined' value={this.state.Joined} onChange={this.handleChange} type='DATE' />
                        <br />
                    </div>
                    <br /><br />
                    <div className='form-control'>
                        

                        <div class="center">
                            <label class="label">
                                <input class="label__checkbox" type="checkbox" name='Approve' value={this.state.Approve} onChange={this.handleChange} />
                                <span class="label__text">
                                    <span class="label__check">
                                        <i class="fa fa-check icon"></i>
                                    </span>
                                </span>
                            </label>
                        </div>
                        <br />
                    </div>

                    <br /><br />
                    <br />
                    <button className='btn' type='submit'> Add Startup</button>
                </div>
            </form>
        );
    }
}






export default  startupForm;