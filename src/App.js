import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Header from './components/Headers';

function App() {

  const expenseItems = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Health Insurance', amount: 1294.67, date: new Date(2021, 2, 28) },
    { title: 'Family Insurance', amount: 4294.67, date: new Date(2021, 2, 28) },
    { title: 'House Insurance', amount: 9294.67, date: new Date(2021, 2, 28) }
  ]

  const users = [
    {
      id: 1,
      name: 'John Doe',
      age: 28,
      email: 'john.doe@example.com',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
      },
      phone: '123-456-7890',
      registeredAt: new Date('2023-05-15T10:30:00'),
      isActive: true,
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 34,
      email: 'jane.smith@example.com',
      address: {
        street: '456 Oak St',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90001',
      },
      phone: '987-654-3210',
      registeredAt: new Date('2022-11-20T14:45:00'),
      isActive: false,
    },
    {
      id: 3,
      name: 'Alice Johnson',
      age: 24,
      email: 'alice.johnson@example.com',
      address: {
        street: '789 Pine St',
        city: 'Chicago',
        state: 'IL',
        zip: '60601',
      },
      phone: '456-789-0123',
      registeredAt: new Date('2021-08-10T08:15:00'),
      isActive: true,
    },
    {
      id: 4,
      name: 'Bob Brown',
      age: 40,
      email: 'bob.brown@example.com',
      address: {
        street: '321 Elm St',
        city: 'Houston',
        state: 'TX',
        zip: '77001',
      },
      phone: '321-654-0987',
      registeredAt: new Date('2023-01-05T18:00:00'),
      isActive: true,
    },
    {
      id: 5,
      name: 'Charlie Davis',
      age: 30,
      email: 'charlie.davis@example.com',
      address: {
        street: '654 Maple St',
        city: 'San Francisco',
        state: 'CA',
        zip: '94101',
      },
      phone: '789-012-3456',
      registeredAt: new Date('2020-12-12T12:00:00'),
      isActive: false,
    },
  ];


  return (
    <div className="App">
      <h1>Lets learn React</h1>
      <h4>Are you ready to learn?</h4>
      {/* <ExpenseItem name={expenseItems[0].title} amount={expenseItems[0].amount} date={expenseItems[0].date}/>
      <ExpenseItem name={expenseItems[1].title} amount={expenseItems[1].amount} date={expenseItems[1].date}/>
      <ExpenseItem name={expenseItems[2].title} amount={expenseItems[2].amount} date={expenseItems[2].date}/>
      <ExpenseItem name={expenseItems[3].title} amount={expenseItems[3].amount} date={expenseItems[3].date}/> */}

      <div>
        <h1>Users</h1>
        <Header id={users[0].id} name={users[0].name} age={users[0].age} email={users[0].email} address={users[0].address.street} phone={users[0].phone} date={users[0].registeredAt.toLocaleDateString()} />
      </div>

    </div>
  );
}

export default App;
