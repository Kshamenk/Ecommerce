import React from 'react'
import classes from "./Footer.module.css";
import SocialFollow from "./SocialFollow";

function Footer() {
  return (
    <div>
        <footer>
        <div className={classes.branch}>
          <h2>Our Locations</h2>
          <div className={classes.branch_list}>
            <span>Thane</span>
            <span>Mulund</span>
            <span>Virar</span>
            <span>Dadar</span>
            <span>Borivai</span>
            <span>Ghatkopar</span>
            <span>Prabhadevi</span>
            <span>Goregaon</span>
          </div>
        </div>
        <div className={classes.lower}>
          <section className={classes.about}>
            <h2>About</h2>
            <p className="text-justify">
              Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
              help the upcoming programmers with the code. Scanfcode focuses on
              providing the most efficient code or snippets as the code wants to
              be simple. We will help programmers build up concepts in different
              programming languages that include C, C++, Java, HTML, CSS,
              Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
            </p>
          </section>
          <section className={classes.socials}>
            <h2>We are Social</h2>
            <SocialFollow />
          </section>
        </div>
      </footer>
    </div>
  )
}

export default Footer