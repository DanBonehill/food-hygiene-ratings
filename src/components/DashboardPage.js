import React from "react";
import axios from 'axios';
import {connect} from 'react-redux';
import Select from 'react-select';

import {addAuthorities, setSelectedAuthority, setLoading} from '../actions/authorities';
import {setHygieneScores} from "../actions/hygieneScores";
import HygieneScores from "./HygieneScores";
import Loader from './Loader';

export class DashboardPage extends React.Component {
    componentDidMount() {
        axios.get("http://api.ratings.food.gov.uk/authorities/basic/", {
            headers: {'x-api-version': 2}
        }).then((res) => {
            const authorities = [];

            res.data.authorities.forEach((authority) => {
                authorities.push({value: authority.LocalAuthorityId, label: authority.Name})
            });

            this.props.addAuthorities(authorities);
        }).catch((err) => {
            console.log(err)
        })
    }
    handleChange = (selectedAuthority) => {
        this.props.setSelectedAuthority(selectedAuthority.label);
        this.props.setLoading(true);

        const authorityId = selectedAuthority.value;

        axios.get("http://api.ratings.food.gov.uk/establishments", {
            headers: {'x-api-version': 2},
            params: {
                "localAuthorityId": authorityId,
                "pageNumber": 1,
                "pageSize": 10000
            }
        }).then((res) => {
            const hygieneScores = [];

            res.data.establishments.forEach((establishment) => {
                hygieneScores.push(establishment.RatingValue)
            });

            this.props.setHygieneScores(hygieneScores);
            this.props.setLoading(false);
        }).catch((err) => {
            console.log(err)
        })
    };
    render() {
        return (
            <div className="content-container">
                <h3>Select an authority</h3>
                <Select
                    options={this.props.authorities}
                    onChange={this.handleChange}
                />
                {this.props.loading &&
                    <Loader/>
                }
                <HygieneScores />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    authorities: state.authorities.allAuthorities,
    loading: state.authorities.loading
});

const mapDispatchToProps = (dispatch) => ({
    addAuthorities: (authorities) => dispatch(addAuthorities(authorities)),
    setSelectedAuthority: (selectedAuthority) => dispatch(setSelectedAuthority(selectedAuthority)),
    setHygieneScores: (hygieneScores) => dispatch(setHygieneScores(hygieneScores)),
    setLoading: (loading) => dispatch(setLoading(loading))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)