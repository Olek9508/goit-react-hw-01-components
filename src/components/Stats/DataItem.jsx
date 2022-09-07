import PropTypes from 'prop-types';
import { ItemContainer } from './Data.styled';


export const Item = ({ label, percentage }) => {
  return (
      <ItemContainer typeLabel = {label}>
    <li className="item">
      <span className="label">{label} </span>
      <span className="percentage">{percentage}</span>
      </li>
      </ItemContainer>
  );
};

Item.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
