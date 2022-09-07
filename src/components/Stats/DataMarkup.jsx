import PropTypes from 'prop-types';
import { Item } from './DataItem';
import { StatContainer,Title } from './Data.styled';


export const Statistic = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <Title>{title}</Title>}
      <StatContainer>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} label={label} percentage={percentage} />
        ))}
        </StatContainer>
    </section>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
