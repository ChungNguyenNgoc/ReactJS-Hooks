import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';

BetterClock.propTypes = {
    
};

function BetterClock(props) {
    const {timeString} = useClock();

    return (
        <h1>{timeString}</h1>
    );
}

export default BetterClock;