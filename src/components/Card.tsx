import React from 'react';
import { useAuth } from '../utils/context';
import { Customer } from '../utils/constants';


const Card: React.FC<Customer> = ({ id, name, title, address }) => {
  const { user, setUser } = useAuth();

  const handleClick = () => {
    setUser({ id, name, title, address });
  };

  return (
    <div className={user.id === id ? 'selected-card' : 'card'} onClick={handleClick}>
      <h2 className="card-name">{name}</h2>
      <p className="card-title">{title}</p>
    </div>
  );
};

export default Card;
