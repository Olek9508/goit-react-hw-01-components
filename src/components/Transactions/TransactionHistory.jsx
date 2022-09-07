import PropTypes from 'prop-types';
import { GrTransaction } from "react-icons/gr"
import { FaSortAmountUpAlt } from "react-icons/fa"
import { BsCurrencyExchange } from "react-icons/bs"



import { TransactionItem } from './TransactionItem';
import { TableContainer,TableHead ,TableHeadCell,TableContainerBody,TableItemCell } from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableContainer>
    <table className="transaction-history">
      <TableHead>
        <TableItemCell>
          <TableHeadCell><GrTransaction/></TableHeadCell>
          <TableHeadCell><FaSortAmountUpAlt/> </TableHeadCell>
          <TableHeadCell><BsCurrencyExchange/> </TableHeadCell>
        </TableItemCell>
      </TableHead>

        <TableContainerBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
          </TableContainerBody>
      </table>
      </TableContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
