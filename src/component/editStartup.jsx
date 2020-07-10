import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editUser } from './store/userAction';


class editStartup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Company_name: props.user.Company_name,
            Market_industry: props.user.Market_industry,
            location: props.user.Location,
            Joined: props.user.Joined,
            Approve: props.user.Approve,
            
        };
        this.id = props.match.params.id


    }

    handleChange = e => {
        this.setState(
            {
                [e.target.name]: e.target.value,
            }
        );
        console.log(this.state.Company_name);
    };
    handleSubmit = e => {
        e.preventDefault();
        const updatedInfo = {

            Company_name: this.state.Company_name,
            Market_industry: this.state.Market_industry,
            Location: this.state.Location,
            Joined: this.state.Joined,
            Approve: this.state.Approve,

        };


        this.props.editUser(this.id, updatedInfo);
        this.setState(
            {
                Company_name: '',
                Market_industry: '',
                Location: '',
                Joined: '',
                Approve: '',
            });

        this.props.history.push('/');
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit} className='App-user-form'>
                <div className='container'>
                    <h1 className='App-header'>USER DAILY EXPENSES</h1>

                    <div className='form-control'>
                        <label>COMPANY NAME: </label>
                        <input placeholder=' COMPANY NAME' name='Company_name' value={this.state.Company_name} onChange={this.handleChange} />
                        <br />
                    </div>
                    <br /><br />


                    <div className='form-control'>
                        <label>MARKET/INDUSTRY: </label>
                        <textarea placeholder='MARKET INDUSTRY' name='Market_industry' value={this.state.Market_industry} onChange={this.handleChange} type="text" />
                        <br />
                    </div>
                    <br /><br />

                    <div className='form-control'>
                        <label>LOCATION : </label>
                        <input placeholder=' LOCATION' name='Location' value={this.state.Location} onChange={this.handleChange} type='LOCATION' />
                        <br />
                    </div>
                    <br /><br />
                    <div className='form-control'>
                        <label>JOINED : </label>
                        <input placeholder=' ' name='Joined' value={this.state.Joined} onChange={this.handleChange} type='DATE' />
                        <br />
                    </div>
                    <br /><br />
                    <div className='form-control'>
                        <label>APPROVE: </label>
                        <button name='' value={this.state.Joined} onChange={this.handleChange} type='approve' />
                        <br />
                    </div>

                    <br /><br />
                    <div class="center">
                        <label class="label">
                            <input class="label__checkbox" type="checkbox" name='Approve' value={this.state.Approve} onChange={this.handleChange} />
                            <span class="label__text">
                                <span class="label__check">
                                    <i class="fa fa-check icon"></i>
                                </span>
                            </span>
                        </label>
                    </div><br />
                    <button className='btn' type='submit'> Add Item</button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.users.find(user => user.id === ownProps.match.params.id)
});

const mapDispatchToProps = {
    editUser: editUser

}





export default connect(mapStateToProps, mapDispatchToProps)(editStartup);