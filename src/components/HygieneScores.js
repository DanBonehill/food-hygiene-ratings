import React from 'react';
import {connect} from 'react-redux';

import HygieneScoresTable from "./HygieneScoresTable";

export const HygieneScores = ({selectedAuthority, loading}) => {
    return (
        <div>
            {!loading &&
                <div>
                    <h1>{selectedAuthority}</h1>
                    <table>
                        {selectedAuthority &&
                        <HygieneScoresTable/>
                        }
                    </table>
                </div>
            }
        </div>
    )
};

const mapStateToProps = (state) => ({
    selectedAuthority: state.authorities.selectedAuthority,
    loading: state.authorities.loading
});

export default connect(mapStateToProps)(HygieneScores)