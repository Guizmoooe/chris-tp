import { Card, Button } from "antd";
import Image from "next/image";
import PropTypes from "prop-types";
import Link from "next/link";
import { useAppContext } from "../lib/deviceContext";
const { Meta } = Card;
const CardArticle = ({ articles }) => {
  const currentDevice = useAppContext();
  const truncate = (str, nb_words) => {
    return str.split(" ").splice(0, nb_words).join(" ");
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: "1rem",
      }}
    >
      {articles.map(({ id, title, description, main_image }) => {
        // If currentDevice is Desktop or Laptop device
        return currentDevice ? (
          <Card
            key={id}
            hoverable
            style={{
              width: 450,
              marginBottom: "3.5rem",
              marginRight: "2rem",
              minHeight: "450px",
              background: "grey",
              textAlign: "center",
            }}
          >
            <Image
              width={400}
              height={275}
              src={`/uploads/${main_image.filename}`}
            />
            <div
              style={{
                bottom: "-10px",
              }}
            >
              <Meta
                title={`${title}`}
                style={{ marginBottom: "1.2rem", fontSize: "1.2rem" }}
              />
              <Meta
                description={`${truncate(description, 25)}...`}
                style={{ marginBottom: "2.2rem", maxHeight: "50px" }}
              />
              <Link href={`/articles/${title}`}>
                <Button type="danger">Découvrir</Button>
              </Link>
            </div>
          </Card>
        ) : (
          // If currentDevice is Tablet or Mobile device
          <Card
            key={id}
            hoverable
            style={{
              width: 300,
              marginBottom: "1.5rem",
              minHeight: "350px",
              background: "grey",
              textAlign: "center",
            }}
          >
            <Image
              width={250}
              height={175}
              src={`/uploads/${main_image.filename}`}
            />
            <div
              style={{
                bottom: "-10px",
                left: "20%",
              }}
            >
              <Meta
                title={`${title}`}
                style={{ marginBottom: "1.5rem", fontSize: "1.2rem" }}
              />
              <Meta
                description={`${description.slice(0, 100)}...`}
                style={{ marginBottom: "1.5rem", maxHeight: "50px" }}
              />
              <Link href={`/articles/${title}`}>
                <Button type="primary">Découvrir</Button>
              </Link>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

CardArticle.propTypes = {
  articles: PropTypes.array,
  currentDevice: PropTypes.bool,
};

export default CardArticle;
