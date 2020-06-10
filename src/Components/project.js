import React from 'react';
import LanguageTag from './languagetag';
import Slideshow from './slideshow';

/**
 * Project component that renders a card of info for a singular project
 * @param {Array} props used for general info on project
 */
export default function Project(props) {
    let desc = '';
    props.data.description.forEach(phrase => {
        desc += phrase;
    });

    return (
        <div className="project">
            <div className="project-info">
                <h4 className="project-name"> {props.data.name} </h4>
                <p className="project-desc"> {desc} </p>
                <div className="tag-list">
                    {
                        props.data.tags.map(tag => {
                            return <LanguageTag key={tag} data={tag} />
                        })
                    }
                </div>
                <a className="project-demo" target="_blank" rel="noreferrer" href={props.data.demo}> Demo </a>
                <a className="project-github" target="_blank" rel="noreferrer" href={props.data.github}> Repo </a>
            </div>
            <Slideshow links={props.data.imgs}/>
        </div>
    )
}