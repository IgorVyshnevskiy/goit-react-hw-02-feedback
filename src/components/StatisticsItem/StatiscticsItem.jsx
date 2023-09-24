const StatisticsItem = ({
  good,
  nautral,
  bad,
  total,
  goodPercentage,
  title,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <p>
          Good: <span>{good}</span>
        </p>
        <p>
          Neutral: <span>{nautral}</span>
        </p>
        <p>
          Bad: <span>{bad}</span>
        </p>
        <p>
          Total: <span>{total}</span>
        </p>
        <p>
          Positive feedback: <span>{goodPercentage}%</span>
        </p>
      </div>
    </div>
  );
};

export default StatisticsItem
