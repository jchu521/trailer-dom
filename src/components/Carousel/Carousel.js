import React from "react";
import ItemsCarousel from "react-items-carousel";
import CarouselCard from "../Carousel-card/Carousel-card";
import { ChevronLeft, ChevronRight } from "../chevrons/chevrons";
import { getPopularAPI } from "../../apis/Movies/index";
import Resource from "../Resource/Resource";
import "./Carousel.scss";

function Carousel() {
  return (
    <Resource api={getPopularAPI}>
      {({
        isLoading,
        result,
        cardNumber,
        setActiveItemIndex,
        activeItemIndex,
      }) => {
        if (isLoading) return null;

        return (
          <div className="container carousel">
            <ItemsCarousel
              infiniteLoop={true}
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={cardNumber}
              gutter={8}
              leftChevron={<ChevronLeft />}
              rightChevron={<ChevronRight />}
              outsideChevron
              chevronWidth={10}
            >
              {result.map((el) => (
                <CarouselCard
                  key={el.id}
                  posterPath={el.poster_path}
                  releaseDate={el.release_date}
                  title={el.title}
                  voteAverage={el.vote_average}
                  id={el.id}
                />
              ))}
            </ItemsCarousel>
          </div>
        );
      }}
    </Resource>
  );
}

export default Carousel;
