import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Datastat({ label, percentage }) {
  return (
    <>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </>
  );
}

Datastat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
