import React from 'react';

import SmallCover from '../../component/smallCover/smallCover';
import './projectPages.css';

class Page extends React.Component {
    constructor() {
        super();
        this.state={};
    }

    render() {
        return (
            <div>
                <SmallCover/>
                <div className="page-container"></div>
                <h1>Projects Lists</h1>
            </div>
        )
    }
}

export default Page;