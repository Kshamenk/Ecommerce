import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faStarHalfStroke,
  faStar as faStarWhite,
} from "@fortawesome/free-regular-svg-icons";
import styles from "./Score.Module.css";
function Score(props) {
  const { rating } = props;
  const rankingNumber = parseFloat(rating);
  const integerPart = Math.floor(rankingNumber);
  const decimalPart = (rankingNumber - integerPart) * 10;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < integerPart) {
      stars.push(<FontAwesomeIcon icon={faStar} />);
    } else if (i === integerPart && decimalPart !== 0) {
      stars.push(<FontAwesomeIcon icon={faStarHalfStroke} />);
    } else {
      stars.push(<FontAwesomeIcon icon={faStarWhite} />);
    }
  }
  return (
    <div className={styles.scorecontainer}>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
        
      ))}
    </div>
  );
}

export default Score;
