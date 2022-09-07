import { Profile } from '../User/User';
import user from 'user.json';
import { Statistic } from "../Stats/DataMarkup"
import data from "data.json"
import { FriendList } from '../Friends/FriendsList';
import friends from "friends.json";
import { TransactionHistory } from '../Transactions/TransactionHistory';
import transactions from "transactions.json";

import { Container, Section } from './App.styled';



export const App = () => {

  return (
    <Container>
  <Section>    {/* <Profile user={user} /> */}
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
        />
  </Section>
  <Section> 
      <Statistic title="Upload stats" stats={data} />
      <Statistic stats={data} />
  </Section>
  <Section> 
      <FriendList friends={friends} />;
  </Section>
  <Section> 
      <TransactionHistory items={transactions} />;
  </Section>
    </Container>
  );
};


      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 20,
      //   color: '#010101',
      // }}