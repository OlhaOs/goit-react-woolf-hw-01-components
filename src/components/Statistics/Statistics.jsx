import css from './statistics.module.css';
import getRandomHexColor from '../utils/getRandomColor';
const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : null}
      <ul className={css.statslist}>
        {stats.map(item => (
          <li
            className={css.item}
            key={item.id}
            style={{ backgroundColor: `${getRandomHexColor()}` }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
