import PropTypes from 'prop-types';
import './Toolbar.css'

const Toolbar = ({ pageTitle, userName, userImage }) => {
  return (
    <div className="toolbar">
      <h1>{pageTitle}</h1>
      <div className="user-info">
        <span>{userName}</span>
        <img src={userImage} alt="User Avatar" className="user-avatar" />
      </div>
    </div>
  );
}
Toolbar.propTypes = {
  pageTitle: PropTypes.string.isRequired ,
  userName: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired
}
export default Toolbar;