import React from "react";
import Select from 'react-select';
import axios from 'axios';

import HygieneScores from "./HygieneScores";

export class DashboardPage extends React.Component {
    state = {
        options: [],
        hygieneScores: [],
        selectedAuthority: '',
        loading: false
    };
    componentDidMount() {
        axios.get("http://api.ratings.food.gov.uk/authorities/basic/", {
            headers: {'x-api-version': 2}
        }).then((res) => {
            const authorities = res.data.authorities;
            const options = [];
            authorities.forEach((authority) => {
                options.push({value: authority.LocalAuthorityId, label: authority.Name})
            });
            this.setState({options})
        })
    }
    handleChange = (selectedAuthority) => {
        const authorityId = selectedAuthority.value;
        this.setState({selectedAuthority: selectedAuthority.label, loading: true});
        axios.get("http://api.ratings.food.gov.uk/establishments", {
            headers: {'x-api-version': 2},
            params: {
                "localAuthorityId": authorityId,
                "pageNumber": 1,
                "pageSize": 10000
            }
        }).then((res) => {
            const establishments = res.data.establishments;
            const hygieneScores = [];
            establishments.forEach((establishment) => {
                hygieneScores.push(establishment.RatingValue)
            });
            this.setState({hygieneScores, loading: false})
        })
    };
    render() {
        return (
            <div className="content-container">
                <h3>Select an authority</h3>
                <Select
                    options={this.state.options}
                    onChange={this.handleChange}
                />
                {
                    this.state.loading ? (
                        <div>
                            <img src="/images/loader.gif" />
                        </div>
                    ) : (
                        <div></div>
                    )
                }
                <HygieneScores hygieneScores={this.state.hygieneScores} selectedAuthority={this.state.selectedAuthority}/>
            </div>
        )
    }
}

export default DashboardPage