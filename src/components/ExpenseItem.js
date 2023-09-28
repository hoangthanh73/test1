import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem (props) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__desc">
                <h2 className="expense-item__title">{props.title}</h2>
                <p className="expense-item__amount">${props.amount}</p>
            </div>
        </Card>
    );
}

export default ExpenseItem;