import react, {useState} from 'react';
import AddUser from './AddUser';

function Headers(props) {

    const month = new Date(props.date).toLocaleDateString('en-US', {month: 'long'});
    const day = new Date(props.date).toLocaleDateString('en-US', {day: '2-digit'});
    const year = new Date(props.date).getFullYear();

    const [name, setName] = useState(props.name);

    const clickHandler = () => {
        setName('Max');
        console.log(name);
        
    }
    
  return (
    <div>
        <p>{props.id}</p>
        <ul>
          <li>{name}</li>
          <li>{props.age}</li>
          <li>{props.email}</li>
          <li>{props.address.street}</li>
          <li>{props.phone}</li>    
          <li>{month}-{day}-{year}</li>
          <button onClick={clickHandler}>Click Me</button>
        </ul>
        <div>
          <AddUser />
        </div>
    </div>
  );
}

export default Headers;