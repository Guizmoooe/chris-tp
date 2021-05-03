/* eslint-disable react/react-in-jsx-scope */
import { Card, Button } from "antd";
import Image from "next/image";
import PropTypes from "prop-types";
import Link from "next/link";
// import { useDeviceContext } from "../lib/DeviceContext";
const { Meta } = Card;

const CardArticle = ({ articles }) => {
  // const currentDevice = useDeviceContext();
  const truncate = (str, nb_words) => {
    return str.split(" ").splice(0, nb_words).join(" ") + "...";
  };
  // const style = {
  //   width: 450,
  //   marginBottom: "3.5rem",
  //   marginRight: "2rem",
  //   minHeight: "450px",
  //   maxHeight: "450px",
  //   minWidth: "450px",
  //   maxWidth: "450px",
  //   textAlign: "center",
  //   backgroundImage: `url${main_image.url}`,
  // };
  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <div className="cardArticle">
      {articles.map(({ id, title, description, main_image }) => {
        // If currentDevice is Desktop or Laptop device
        return (
          <Link href={`/articles/${id}`} key={id}>
            <Card
              key={id}
              hoverable
              style={{
                // width: 450,
                marginBottom: "3.5rem",
                // marginRight: "2rem",
                minHeight: "450px",
                maxHeight: "450px",
                minWidth: "450px",
                // maxWidth: "450px",
                textAlign: "center",
                // backgroundImage: `url(${main_image.url})`,
                // backgroundRepeat: "no-repeat",
                // backgroundSize: "contain"
              }}
            >
              <div id="toto">
                <Image
                  loader={myLoader}
                  // width={400}
                  // height={275}
                  layout={"fill"}
                  src={main_image.url}
                  className="cardImage"
                />
                <div id="tata">
                  <Meta
                    title={title}
                    description={truncate(description, 30)}
                    style={{ marginBottom: "1rem" }}
                  />
                  <Button className="button-discover">Découvrir</Button>
                </div>
              </div>
            </Card>
          </Link>
        );

        // If currentDevice is Tablet or Mobile device
        // eslint-disable-next-line no-unreachable
        {
          /* <Link href={`/articles/${id}`}>
            <Card
              key={id}
              hoverable
              style={{
                width: 350,
                marginBottom: "1.5rem",
                minHeight: "350px",
                background: "grey",
                textAlign: "center",
              }}
            >
              <Image
                loader={myLoader}
                // width={250}
                // height={175}
                layout={"fill"}
                src={main_image.url}
                // style={{ objectFit: "fill" }}
              />
              <Button type="primary">Découvrir</Button>
            </Card>
          </Link> */
        }
      })}
    </div>
  );
};

CardArticle.propTypes = {
  articles: PropTypes.array,
  currentDevice: PropTypes.bool,
};

export default CardArticle;
