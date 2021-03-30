import { Card, Button, Image } from "antd";
const { Meta } = Card;
const CardArticle = ({ articles, currentDevice }) => {
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
                // position: "absolute",
                bottom: "-10px",
                // padding: "inherit",
              }}
            >
              <Meta
                title={`${title}`}
                style={{ marginBottom: "1.5rem", fontSize: "1.2rem" }}
              />
              <Meta
                description={`${description.slice(0, 100)}...`}
                style={{ marginBottom: "1rem", maxHeight: "50px" }}
              />
              <Button type="primary" href="http://google.com" target="_blank">
                Découvrir
              </Button>
            </div>
          </Card>
        ) : (
          <Card
            key={id}
            hoverable
            style={{
              width: 300,
              marginBottom: "1.5rem",
              minHeight: "350px",
              background: "grey",
              textAlign: "center",
              // margin: "auto",
              // margin: "2rem 2rem",
            }}
          >
            <Image
              width={250}
              height={175}
              src={`/uploads/${main_image.filename}`}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                padding: "inherit",
                left: "20%",
              }}
            >
              <Meta
                title={`${title}`}
                style={{ marginBottom: "1.5rem", fontSize: "1.2rem" }}
              />
              <Meta
                description={`${description}`}
                style={{ marginBottom: "1rem" }}
              />
              <Button type="primary" href="http://google.com" target="_blank">
                Voir {title}
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
export default CardArticle;
