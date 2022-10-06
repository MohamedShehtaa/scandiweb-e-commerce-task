import { Component } from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from './LoadingSpinner';

// to handle loading and error for user
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
    status: state?.ui?.status,
});
export default connect(mapStateToProps)(Notifaction);
