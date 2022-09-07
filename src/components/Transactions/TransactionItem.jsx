import PropTypes from 'prop-types';
import { TableItemCell,TableCell } from './Transaction.styled';


export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <TableItemCell>
          <TableCell>{type}</TableCell>
        <TableCell>{amount}</TableCell>
        <TableCell>{currency}</TableCell>
 </TableItemCell>    
 );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
