import react from "react";

import things from "../../database/database.json";

const Customer = () => {
  // const { details, setDetails } = useState(things.customers);
  console.log(things.customers);

  return (
    <div className="App">
      <h3>CUSTOMER</h3>
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Church</th>
            <th>Diocese</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {things.customers.map((customer) => (
            <tr>
              <td>{customer.customer_id}</td>
              <td>{customer.name}</td>
              <td>{customer.church}</td>
              <td>{customer.diocese}</td>
              <td>{customer.phone_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
