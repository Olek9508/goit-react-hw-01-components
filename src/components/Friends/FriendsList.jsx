import PropTypes from 'prop-types';
import { FriendCard } from './FriendItem';

import { FriendsBox } from './Friend.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsBox>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendCard key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </FriendsBox>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
