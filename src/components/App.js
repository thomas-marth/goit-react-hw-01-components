import React from 'react';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import Transactions from './Transactions/Transactions';
import FriendList from './FriendsList/FriendList';

import userData from '../data/user.json';
import statsData from '../data/statistics.json';
import friendsData from '../data/friends.json';
import transactionData from '../data/transaction.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <Statistics stats={statsData} />
      <FriendList friends={friendsData} />
      <Transactions transactions={transactionData} />
    </>
  );
};

export default App;
