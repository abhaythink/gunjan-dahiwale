import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {

  return (
    <Card className="expense-item">
      <div>{props.name}</div>
      <div>
        <h2><ExpenseDate date={props.date}/></h2>
        <div>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem; 