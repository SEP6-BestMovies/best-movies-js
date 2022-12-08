import React from "react";
import classes from "../../styles/component-item.module.css";
import Image from "next/image";
import Link from "next/link";

const ComponentItem = (props) => {
  const { title, img, liveUrl, keyword } = props.item;
  return (
    <div className={`${classes.component__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={`${classes.component__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={`${classes.component__img}`}>
        <Image alt="component-img" src={img} width="380" height="250" />
      </div>

      <div className={`${classes.component__live} bg-transparent`}>
        <button className="primary__btn">
          <Link href={liveUrl}>Action</Link>
        </button>
      </div>
    </div>
  );
};

export default ComponentItem;