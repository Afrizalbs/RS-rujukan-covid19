import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";

const { Meta } = Card;

const CardNews = ({ photo, title, desc, link }) => {
  return (
    <Card
      hoverable
      style={{ width: 350, marginBottom: 20 }}
      cover={<img alt="example" src={photo} />}
      extra={
        <a href={link} target="_blank" rel="noreferrer">
          Read News
        </a>
      }
    >
      <Meta title={title} />
      <Meta description={desc} />
    </Card>
  );
};

export default CardNews;
