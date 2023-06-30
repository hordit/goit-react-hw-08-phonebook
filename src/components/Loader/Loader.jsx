import { MagnifyingGlass } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  );
};

Loader.propTypes = {
  visible: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  ariaLabel: PropTypes.string,
  wrapperStyle: PropTypes.object,
  wrapperClass: PropTypes.string,
  glassColor: PropTypes.string,
  color: PropTypes.string,
};