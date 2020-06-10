import React from 'react';

/**
 * Interactive row of social media links
 */
export default function SocialMedia() {
    return (
        <div className="social">
            <a className="social-button" target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/juan-perez-8a006419a/">
                <i className="fab fa-linkedin"></i>
            </a>
            <a className="social-button" target="_blank" rel="noreferrer" href="https://github.com/piolinest123">
                <i className="fab fa-github"></i>
            </a>
            <a className="social-button" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100044043544560">
                <i className="fab fa-facebook"></i>
            </a>
            <a className="social-button" target="_blank" rel="noreferrer" href="https://codepen.io/jperez01">
                <i className="fab fa-codepen"></i>
            </a>
        </div>
    )
}