import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ContentBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            iconClassName: 'fa-caret-down',
        };

        this.toggleBox = this.toggleBox.bind(this);
    }

    toggleBox(e) {
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen,
            iconClassName: this.state.isOpen ? 'caret-up' : 'caret-down',
        });
    }

    render() {
        const { children, title } = this.props;

        return (
            <div className="columns is-centered noSelect">
                <div className="column is-three-quarters">
                    <div className="headLineWrapper">
                        <div className="headLine" onClick={this.toggleBox}>
                            <h2 className="is-uppercase is-size-5">{title}</h2>
                        </div>
                        <FontAwesomeIcon className="is-size-4" icon={this.state.isOpen ? 'caret-up' : 'caret-down'} />
                    </div>
                    { this.state.isOpen &&
                        <div className="has-background-danger">
                            {children}
                        </div>
                    }
                </div>
            </div>
        );
    }
};

ContentBox.defaultProps = {
    title: 'Box Title',
};

export default ContentBox;