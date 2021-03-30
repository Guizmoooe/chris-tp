import { Carousel } from "antd";

const contentStyle = {
  height: "400px",
  color: "red",
  lineHeight: "400px",
  textAlign: "center",
  margin: "auto",
};

const CarouselCustom = ({ allImages }) => {
  return (
    <Carousel autoplay effect="fade">
      {allImages.map((image) => (
        <div>
          <div
            style={{
              background: `url(${image.path})`,
              height: "600px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselCustom;
