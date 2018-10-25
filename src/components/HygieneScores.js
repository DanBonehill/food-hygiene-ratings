import React from 'react';
import {connect} from 'react-redux';

import HygieneScoresTable from "./HygieneScoresTable";

// Move this somewhere else
const calculateScores = (hygieneScores) => ({
    "pass": hygieneScores.filter((score) => score === 'Pass').length,
    "exempt": hygieneScores.filter((score) => score === 'Exempt').length,
    "improvement": hygieneScores.filter((score) => score === 'Improvement Required').length,
    "five": hygieneScores.filter((score) => score === "5").length,
    "four": hygieneScores.filter((score) => score === "4").length,
    "three": hygieneScores.filter((score) => score === "3").length,
    "two": hygieneScores.filter((score) => score === "2").length,
    "one": hygieneScores.filter((score) => score === "1").length,
    "zero": hygieneScores.filter((score) => score === "0").length
});

const HygieneScores = ({hygieneScores, selectedAuthority, loading}) => {

    // How to better handle this... Redux?
    const scoresArray = [
        {
            title: "Pass",
            value: calculateScores(hygieneScores).pass
        },
        {
            title: "Improvement Required",
            value: calculateScores(hygieneScores).improvement
        },
        {
            title: "Five",
            value: calculateScores(hygieneScores).five
        },
        {
            title: "Four",
            value: calculateScores(hygieneScores).four
        },
        {
            title: "Three",
            value: calculateScores(hygieneScores).three
        },
        {
            title: "Two",
            value: calculateScores(hygieneScores).two
        },
        {
            title: "One",
            value: calculateScores(hygieneScores).one
        },
        {
            title: "Zero",
            value: calculateScores(hygieneScores).zero
        },
        {
            title: "Exempt",
            value: calculateScores(hygieneScores).exempt
        }
    ];

    return (
        <div>
            {!loading &&
                <div>
                    <h1>{selectedAuthority}</h1>
                    <table>
                        {selectedAuthority &&
                        <HygieneScoresTable scores={scoresArray} totalScoresCount={hygieneScores.length}/>
                        }
                    </table>
                </div>
            }
        </div>
    )
};

const mapStateToProps = (state) => ({
    selectedAuthority: state.authorities.selectedAuthority,
    loading: state.authorities.loading,
    hygieneScores: state.hygieneScores
});

export default connect(mapStateToProps)(HygieneScores)