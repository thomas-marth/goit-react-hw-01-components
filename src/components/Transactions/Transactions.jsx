import React from 'react';
import PropTypes from 'prop-types';
import TransactionElement from './TransactionElement';
import styles from './Transactions.module.css';

const Transactions = ({ transactions }) => {
  if (transactions.length === 0) return null;
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{transactions.map(TransactionElement)}</tbody>
    </table>
  );
};

TransactionElement.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Transactions;
