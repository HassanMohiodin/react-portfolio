import react from 'react';

import SmallCover from '../../component/smallCover/smallCover';
import './projectPages.css';

class Page extends react.Component {
    constructor() {
        super();
        this.state={};
    }

    render() {
        return (
            <div>
                <SmallCover/>
                <div className="page-container"></div>
            </div>
        )
    }
}

export default Page;