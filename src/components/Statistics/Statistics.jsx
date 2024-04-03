import './statistics.css';
import getRandomHexColor from './getRandomColor';
const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      {title ? <h2 className="title">{title}</h2> : null}
      <ul className="stat-list">
        {stats.map(item => (
          <li
            className="item"
            key={item.id}
            style={{ backgroundColor: `${getRandomHexColor()}` }}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
