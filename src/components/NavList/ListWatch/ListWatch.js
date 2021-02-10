import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import "./ListWatch.css";

const ListWatch = (props) => {
  const cls = ["drawer"];

  if (props.isOpen) {
    cls.push("open");
  }

  return (
    <>
      <div className={cls.join(" ")}>
        <ul className="list-group">
          {props.willWatch.length === 0 ? (
            <li className="list-group-item list-group-item-danger">
              Вы еще не добавили фильм
            </li>
          ) : null}
          {props.willWatch.map((item, index) => {
            const classes = ["list-group-item"];

            if (index % 2) {
              classes.push("list-group-item-info");
            } else {
              classes.push("list-group-item-warning");
            }

            return (
              <li key={item.id} className={classes.join(" ")}>
                {item.original_title}
              </li>
            );
          })}
        </ul>
      </div>
      {props.isOpen ? <Backdrop closeMenu={props.closeMenu} /> : null}
    </>
  );
};

export default ListWatch;
