/**
 *
 */
'use strict';
import React from 'react';
import AppLayout from '../appLayout';

import './style.less';

class Home extends React.Component {
    constructor (props, context) {
        super(props, context);
    };
    render () {
        return (
            <AppLayout>
                <div className="home">Home</div>
            </AppLayout>
        );
    };
}

module.exports = Home;