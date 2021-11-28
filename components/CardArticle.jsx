/* eslint-disable react/react-in-jsx-scope */
import { Card, Button } from "antd";
import Image from "next/image";
import PropTypes from "prop-types";
import Link from "next/link";
import { useDeviceContext } from "../context/DeviceContext";
const { Meta } = Card;

const truncate = (str, nb_words) => {
  return str.split(" ").splice(0, nb_words).join(" ") + "...";
};
const myLoader = ({ src }) => {
  return `${src}`;
};
const CardArticle = ({ articles }) => {
  const currentDevice = useDeviceContext();
  console.log("currentDevice", currentDevice);
  return (
    <div className="cardArticle">
      {articles.map(({ id, title, description, main_image }) => (
        // If currentDevice is Desktop or Laptop device
        currentDevice ? (
          <Link href={`/articles/${id}`} key={id}>
            <Card
              key={id}
              hoverable
              style={{
                marginBottom: "3.5rem",
                minHeight: "350px",
                maxHeight: "350px",
                minWidth: "33%",
                maxWidth: "33%",
                textAlign: "center",
              }}
            >
              <Image
                loader={myLoader}
                // width={325}
                // height={450}
                layout={"fill"}
                src={main_image.url}
                className="cardImage"
              />
              <div id="toto"></div>
              <div id="tata">
                <Meta
                  title={title}
                  description={truncate(description, 25)}
                  style={{
                    marginBottom: "1rem",
                    position: "relative",
                    width: "80%",
                  }}
                />
                <Button className="button-discover">Découvrir</Button>
              </div>
            </Card>
          </Link>
        ) : (
          // If currentDevice is Tablet or Mobile device

          <Link href={`/articles/${id}`}>
            <Card
              key={id}
              hoverable
              style={{
                marginBottom: "3.5rem",
                minHeight: "350px",
                maxHeight: "350px",
                minWidth: "90%",
                textAlign: "center",
              }}
            >
               <Image
                loader={myLoader}
                // width={325}
                // height={450}
                layout={"fill"}
                src={main_image.url}
                className="cardImage"
              />
              <div id="toto"></div>
              <div id="tata">
                <Meta
                  title={title}
                  description={truncate(description, 25)}
                  style={{
                    marginBottom: "1rem",
                    position: "relative",
                    width: "80%",
                  }}
                />
                <Button className="button-discover">Découvrir</Button>
              </div>
            </Card>
          </Link>
        )
      ))}
    </div>
  );
};

CardArticle.propTypes = {
  articles: PropTypes.array,
  currentDevice: PropTypes.bool,
};

export default CardArticle;
