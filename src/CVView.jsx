import { Query } from 'react-apollo'
import gql from 'graphql-tag';
import React from 'react';

import { CV_ID } from './constants';
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
                <ContentBox title="Work Experience">
                    <p>Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum </p>
                </ContentBox>
                <ContentBox title="Education">
                    <p>Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum </p>
                </ContentBox>
                <ContentBox title="Skills">
                    <p>Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum </p>
                </ContentBox>
                <ContentBox title="Languages">
                    <p>Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum </p>
                </ContentBox>
                <ContentBox title="Hobbies">
                    <p>Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum Lorem ipusm dolor sit amet cap saicum </p>
                </ContentBox>
            </div>
        );
    }
}

export default CVView;