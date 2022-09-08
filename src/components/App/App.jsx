import { UserCreate } from '../User/User';
import user from '../JSONdata/user.json';
import { Statistic } from "../Stats/DataMarkup"
import data from "../JSONdata/data.json"
import { FriendList } from '../Friends/FriendsList';
import friends from "../JSONdata/friends.json";
import { TransactionHistory } from '../Transactions/TransactionHistory';
import transactions from "../JSONdata/transactions.json";

import { Container, Section } from './App.styled';



export const App = () => {

  return (
    <Container>
  <Section>    {/* <Profile user={user} /> */}
    <UserCreate
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
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


