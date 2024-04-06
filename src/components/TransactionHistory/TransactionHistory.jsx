import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map(item => (
          <tr className={css.tableRow} key={item.id}>
            <td className={css.tableCell}>{item.type}</td>
            <td className={css.tableCell}>{item.amount}</td>
            <td className={css.tableCell}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
