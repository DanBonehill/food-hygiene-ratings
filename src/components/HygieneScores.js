import React from 'react';
import HygieneScoresTable from "./HygieneScoresTable";

// Move this somewhere else
const calculateScores = (hygieneScores) => {
    const scorePass = hygieneScores.filter((score) => score === 'Pass').length;
    const scoreExempt = hygieneScores.filter((score) => score === 'Exempt').length;
    const scoreImprovement = hygieneScores.filter((score) => score === 'Improvement Required').length;
    const scoreFive = hygieneScores.filter((score) => score === "5").length;
    const scoreFour = hygieneScores.filter((score) => score === "4").length;
    const scoreThree = hygieneScores.filter((score) => score === "3").length;
    const scoreTwo = hygieneScores.filter((score) => score === "2").length;
    const scoreOne = hygieneScores.filter((score) => score === "1").length;
    const scoreZero = hygieneScores.filter((score) => score === "0").length;

    return {
        "pass": scorePass,
        "exempt": scoreExempt,
        "improvement": scoreImprovement,
        "five": scoreFive,
        "four": scoreFour,
        "three": scoreThree,
        "two": scoreTwo,
        "one": scoreOne,
        "zero": scoreZero
    }
};

// Make class component with own state?
const HygieneScores = ({hygieneScores, selectedAuthority}) => {

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
            <h1>{selectedAuthority}</h1>
            <table>
                <tr>
                    <th>Rating</th>
                    <th>Percentage</th>
                </tr>
                <HygieneScoresTable scores={scoresArray} totalScoresCount={hygieneScores.length}/>
            </table>
        </div>
    )
};

export default HygieneScores