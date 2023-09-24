const FeedbackButton = ({ options, onleaveFeedback }) => {
  return (
    <div>
      {options.map(name => (
        <button
        type="button"
        key={name}
        name={name}
        onClick={onleaveFeedback}>{name}</button>
      ))}
    </div>
  )
  
 
};

export default FeedbackButton;
