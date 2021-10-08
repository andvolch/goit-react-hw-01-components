import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import Datastat from './Datastat';

const getBgColor = () => {
  return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
    (Math.random() * 255) << 0
  }, 0.5)`;
};

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && (
        <>
          <h2 className={s.title}>{title}</h2>
          <ul className={s.list}>
            {stats.map(stat => (
              <li
                key={stat.id}
                className={s.item}
                style={{ backgroundColor: getBgColor() }}
              >
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
