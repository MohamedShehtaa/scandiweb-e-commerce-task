
// higher order component to obtain on params id from react router dom
import { useParams } from 'react-router-dom';

const withRouter = (WrappedComponent) => (props) => {
    const params = useParams();

    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};

export default withRouter;