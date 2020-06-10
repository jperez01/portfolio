import React from 'react';

/**
 * Individual tag for a specific language, framework, library, etc
 * @param {String} props used for name of the tag
 */
export default function LanguageTag(props) {
    return (
        <div className="language-tag">
           {props.data}
        </div>
    );
}