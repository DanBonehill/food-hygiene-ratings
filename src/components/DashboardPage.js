import React from "react";
import axios from 'axios';
import Select from 'react-select';

import HygieneScores from "./HygieneScores";
import Loader from './Loader';

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
            const options = [];

            res.data.authorities.forEach((authority) => {
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
            const hygieneScores = [];

            res.data.establishments.forEach((establishment) => {
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
                {this.state.loading &&
                    <Loader/>
                }
                <HygieneScores
                    hygieneScores={this.state.hygieneScores}
                    selectedAuthority={this.state.selectedAuthority}
                    loading={this.state.loading}
                />
            </div>
        )
    }
}

export default DashboardPage