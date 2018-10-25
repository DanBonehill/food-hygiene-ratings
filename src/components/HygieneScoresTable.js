import React from 'react';
import {connect} from 'react-redux';

const HygieneScoresTable = ({scores, totalScoresCount}) => (
    <div>
        <tr>
            <th>Rating</th>
            <th>Percentage</th>
        </tr>
        {
            scores.filter((score) => score.value !== 0).map((score) => (
                <tr>
                    <td>{score.title}</td>
                    <td>{Math.round(score.value / totalScoresCount * 100)}%</td>
                </tr>
            ))
        }
    </div>
);

const mapStateToProps = (state) => ({
    scores: state.hygieneScores.calculatedScores,
    totalScoresCount: state.hygieneScores.allScores.length
});

export default connect(mapStateToProps)(HygieneScoresTable)