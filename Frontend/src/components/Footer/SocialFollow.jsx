import React from "react";
import classes from "./SocialFollow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className={classes.social_container}>
      <a href="https://www.youtube.com/" className={classes.youtube}>
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/" className={classes.facebook}>
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/" className={classes.twitter}>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/" className={classes.instagram}>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}
