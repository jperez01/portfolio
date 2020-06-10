import React from 'react';

/**
 * List of different languages, frameworks, libraries, etc that I am proficient in
 */
export default function Experience() {
    return (
        <div className="flex-box-row" style={{ width: '100%' }}>
            <div className="group">
                <h4 className="group-title"> Languages </h4>
                <ul className="group-list">
                    <li className="group-item"> Javascript </li>
                    <li className="group-item"> Java </li>
                    <li className="group-item"> HTML </li>
                    <li className="group-item"> CSS/SASS </li>
                    <li className="group-item"> SQL </li>
                </ul>
            </div>
            <div className="group">
                <h4 className="group-title"> Frameworks </h4>
                <ul className="group-list">
                    <li className="group-item"> React </li>
                    <li className="group-item"> Express </li>
                    <li className="group-item"> Node </li>
                    <li className="group-item"> Bootstrap </li>
                    <li className="group-item"> Jest </li>
                </ul>
            </div>
            <div className="group">
                <h4 className="group-title"> Tools </h4>
                <ul className="group-list">
                    <li className="group-item"> Postman </li>
                    <li className="group-item"> Postgres </li>
                    <li className="group-item"> Git and Github </li>
                    <li className="group-item"> Bash </li>
                    <li className="group-item"> MongoDB </li>
                </ul>
            </div>
            <div className="group">
                <h4 className="group-title"> Design </h4>
                <ul className="group-list">
                    <li className="group-item"> Photoshop </li>
                    <li className="group-item"> Illustrator </li>
                </ul>
            </div>
        </div>
    )
}