import PropTypes from 'prop-types';
import { FaUserAlt } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { RiUserFollowFill } from 'react-icons/ri';
import { GrView } from 'react-icons/gr';
import { FcLike } from 'react-icons/fc';

import { SectionBox } from './User.styled';
import { UserBox } from './User.styled';
import { UserInfo } from './User.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <SectionBox>
      <UserBox>
        <img src={avatar} alt="User avatar" className="avatar" />
        <UserInfo><FaUserAlt color="lightsalmon"/> {username}</UserInfo>
        <UserInfo><FaInstagram color="lightsalmon"/> @{tag}</UserInfo>
        <UserInfo><ImLocation color="lightsalmon"/> {location}</UserInfo>
      <ul className="stats">
        <li>
          <span className="label"><RiUserFollowFill/> </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
            <span className="label"><GrView/> </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label"><FcLike/> </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
      </UserBox>
        </SectionBox>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
