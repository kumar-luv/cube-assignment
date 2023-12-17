import React from 'react';
import { Customer } from '../utils/constants'; 
import customers from '../utils/constants';
import Card from './Card'; 
import { useAuth } from '../utils/context';

const Sidebar: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="sidebar">
      {customers.map((customer: Customer) => (
        <Card
          key={customer.id}
          id={customer.id}
          name={customer.name}
          title={customer.title}
          address={customer.address}
        />
      ))}
    </div>
  );
};

export default Sidebar;
