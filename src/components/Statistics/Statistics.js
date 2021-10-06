import PropTypes from 'prop-types';
import Datastat from './Datastat';

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && (
        <>
          <h2 className="title">{title}</h2>
          <ul className="stat-list">
            {stats.map(stat => (
              <li key={stat.id}>
                <Datastat label={stat.label} percentage={stat.percentage} />
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
