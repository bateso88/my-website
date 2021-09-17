import { useWindowSize } from "@Hooks/useWindowSize";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { CarouselItem, CarouselCard, CarouselWrapper } from "./styles";

const ProjectCarousel = () => {
  const windowSize = useWindowSize();

  return (
    <CarouselWrapper>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        swipeable={true}
        interval={3000}
        centerMode={true}
        centerSlidePercentage={windowSize.width<550 ? 100 : 33}
        stopOnHover={false}
      >
        <CarouselItem>
          <CarouselCard>
            <p className="legend">{windowSize.width}</p>
          </CarouselCard>
        </CarouselItem>
        <CarouselItem>
          <CarouselCard>
            <p className="legend">Legend 2</p>
          </CarouselCard>
        </CarouselItem>
        <CarouselItem>
          <CarouselCard>
            <p className="legend">Legend 3</p>
          </CarouselCard>
        </CarouselItem>
        <CarouselItem>
          <CarouselCard>
            <p className="legend">Legend 4</p>
          </CarouselCard>
        </CarouselItem>
        <CarouselItem>
          <CarouselCard>
            <p className="legend">Legend 5</p>
          </CarouselCard>
        </CarouselItem>
        <CarouselItem>
          <CarouselCard>
            <p className="legend">Legend 6</p>
          </CarouselCard>
        </CarouselItem>
        <CarouselItem>
          <CarouselCard>
            <p className="legend">Legend 7</p>
          </CarouselCard>
        </CarouselItem>
        <CarouselItem>
          <CarouselCard>
            <p className="legend">Legend 8</p>
          </CarouselCard>
        </CarouselItem>
      </Carousel>
    </CarouselWrapper>
  );
};

export default ProjectCarousel;
