import React from 'react';
import { useAuth } from '../utils/context';

const Details: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className='details'>
      {true && (
        <div className='user-details'>
          <div className='name-address'>
            <h2>{user?.name}</h2>
            <p>{user?.address}</p>
          </div>
          <p className='title'>{user?.title}</p>
        </div>
      )}
    </div>
  );
};

export default Details;
