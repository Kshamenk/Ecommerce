import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { leaveComment } from "../../Redux/actions";
import styles from "./CommentModal.module.css";

export default function CommentModal() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [text, setText] = useState("");

  const handleCommentChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    dispatch(leaveComment(id, text));
    navigate("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h2>Dejar un comentario</h2>
        <form onSubmit={handleSubmitComment}>
          <textarea
            value={text}
            onChange={handleCommentChange}
            placeholder="Escribe tu comentario"
          />
          <button type="submit">Enviar comentario</button>
        </form>
        <span className={styles.close} onClick={() => navigate("/home")}>
          &times;
        </span>
      </div>
    </div>
  );
}