'use strict';
import React from 'react';

class AppLayout extends React.Component {
    render () {
        return (
            <div>
                <div className="header">Header</div>
                <div className="content-main">
                    {
                        this.props.children
                    }
                </div>
                <div className="footer">Footer</div>
            </div>
        );
    }
}

module.exports = AppLayout;