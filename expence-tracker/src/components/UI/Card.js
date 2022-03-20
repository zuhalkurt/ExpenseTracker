import "./Card.css";

const Card = (expense) => {
  const classes = "card " + expense.className;

  return <div className={classes}>{expense.children}</div>;
};

export default Card;
