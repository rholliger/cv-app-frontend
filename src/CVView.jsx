import React from 'react';
import { Link } from 'react-router-dom';

import ContentBox from './ContentBox';
import PersonalInfo from './PersonalInfo';

class CVView extends React.Component {
    render() {
        return (
            <div className="container">
                <PersonalInfo />
                <ContentBox title="Summary">
                    <p>Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum </p>
                </ContentBox>
                <div className="columns">
                    <div className="column">
                        <div className="has-background-danger">
                            <Link to="workexperience">Work</Link>
                        </div>
                    </div>
                    <div className="column">
                        <div className="has-background-danger">
                            <Link to="education">Education</Link>
                        </div>
                    </div>
                    <div className="column">
                        <div className="has-background-danger">Hobbies</div>
                    </div>
                    <div className="column">
                        <div className="has-background-danger">Skills</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CVView;