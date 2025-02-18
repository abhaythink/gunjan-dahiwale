function ExpenseDate(props) {

    const month = props.date.toLocaleDateString('en-US', {month: 'long'});
    const day = props.date.toLocaleDateString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    );
}

export default ExpenseDate;