import PropTypes from 'prop-types';

import { Container } from './styles';

import xCircle from '../../../assets/images/icons/x-circle.svg';
import CheckCircle from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({ text, type }) {
  return (
    <Container type={type}>
      {type === 'danger' && <img src={xCircle} alt="X" />}
      {type === 'success' && <img src={CheckCircle} alt="Check" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
};

ToastMessage.defaultProps = {
  type: 'default',
};