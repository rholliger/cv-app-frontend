import { Query } from 'react-apollo'
import gql from 'graphql-tag';
import React from 'react';

import { CV_ID } from './constants';

const GET_PERSONAL_INFO = gql`
    {
        CV(id:"${CV_ID}") {
            firstName
            lastName
            birthDate
            maritalStatus
            imageUrl
            contact {
                phone
                email
            }
        }
    }
`;

const H1 = (props) => <h1 className="is-size-1" {...props}>{props.children}</h1>

class PersonalInfo extends React.Component {
    render() {
        return (
            <Query query={GET_PERSONAL_INFO}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    const { CV: { firstName, lastName, maritalStatus, contact } } = data;

                    return (
                        <div className="columns is-centered">
                            <div className="column is-two-thirds">
                                <div className="columns">
                                    <div className="column is-one-quarter">
                                        <figure className="image">
                                            <img className="is-rounded" src="http://via.placeholder.com/300x300" />
                                        </figure>
                                    </div>
                                    <div className="column personalInfo">
                                        <H1>{firstName} {lastName}</H1>
                                        <p>Tel. {contact.phone}</p>
                                        <p>Tel. {contact.phone}</p>
                                        <p>Tel. {contact.phone}</p>
                                        <p>Tel. {contact.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default PersonalInfo;