import spinner from '../../assets/img/loading.gif';
import {
    SpinnerContainer,
    SpinnerWrapper,
    Img
} from './styledLoading';

const Loading = () => {
    return (
        <SpinnerContainer>
            <SpinnerWrapper>
                <Img height="250" width="250" src={spinner} alt="Loading" />
            </SpinnerWrapper>
        </SpinnerContainer>
    );
}

export default Loading;