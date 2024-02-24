import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function TypewriterEffect({ fullTextProp,textColor }) {
    const [displayText, setDisplayText] = useState('');
    const [fullText, setFullText] = useState(fullTextProp);
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        setDisplayText('');
        setFullText(fullTextProp);
        setStartTyping(false);
    }, [fullTextProp]);

    useEffect(() => {
        const typeText = () => {
            if (startTyping) {
                const currentText = displayText + fullText.charAt(displayText.length);
                setDisplayText(currentText);
                if (currentText === fullText) {
                    setStartTyping(false);
                }
            }
        };

        const handleScroll = () => {
            if (window.scrollY > 500) {
                setStartTyping(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        const typingInterval = setInterval(typeText, 25);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(typingInterval);
        };
    }, [displayText, fullText, startTyping]);

    return (
        <div className={`explanation text-3xl pt-10 pb-10 ${textColor}`} >
            <div>{displayText}</div>
        </div>
    );
}

TypewriterEffect.propTypes = {
    fullTextProp: PropTypes.string.isRequired,
};

export default TypewriterEffect;
