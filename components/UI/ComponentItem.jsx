import React from "react";
import classes from "../../styles/component-item.module.css";
import Image from "next/image";
import Link from "next/link";

const ComponentItem = (props) => {
  const { title, img, liveUrl, genre_ids } = props.item;
  return (
    <div className={`${classes.component__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {genre_ids.map((item, index) => (
          <span className={`${classes.component__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={`${classes.component__img}`}>
        <Image alt="component-img" src={""} width="380" height="250" />
      </div>

      <div className={`${classes.component__live} bg-transparent`}>
        <button className="primary__btn">
          <Link href={""}>Action</Link>
        </button>
      </div>
    </div>
  );
};

export default ComponentItem;