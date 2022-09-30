import { Component } from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from './LoadingSpinner';

class Notifaction extends Component {
    render() {
        const { isLoading, error } = this.props?.status;

        if (isLoading) {
            return (
                <div className='centered'>
                    <LoadingSpinner />
                </div>
            );
        }

        if (error) {
            return <div className='centered'>somthing Went Wrong ...</div>;
        }
    }
}

const mapStateToProps = (state) => ({
    status: state?.status?.status,
});
export default connect(mapStateToProps)(Notifaction);
