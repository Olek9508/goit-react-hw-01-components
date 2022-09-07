import PropTypes from 'prop-types';
import { FriendItem, FriendItemText, SpanOnline, SpanOffline } from './Friend.styled';
import {HiStatusOnline,HiStatusOffline} from "react-icons/hi"

export const FriendCard = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
    <li className="item">
      {isOnline ? <SpanOnline><HiStatusOnline color='limegreen'/>{isOnline}</SpanOnline> :<SpanOffline><HiStatusOffline color='indianred'/>{isOnline}</SpanOffline>}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendItemText>{name}</FriendItemText>
      </li>
      </FriendItem>
  );
};

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
