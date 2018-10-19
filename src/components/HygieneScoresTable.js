import React from 'react';

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

export default HygieneScoresTable