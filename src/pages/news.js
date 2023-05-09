import React from "react";
import PageNavigation from "../components/header/page-navigation";
import PageHero from "../components/hero/page-hero";
import Footer from "../components/sections/footer/footer";
import "../assets/css/js_composer.min.css";
import Container from "../components/layouts/container";
import NewsCard from "../components/news/news-card";

const News = () => {
  const newsData = [
    {
      id: "1",
      image:
        "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-43-1.png",
      title: "news",
      description:
        "Greet the sun, awaken your body and start the day in harmony with yourself and your body.",
    },
    {
      id: "2",
      image:
        "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-43-1.png",
      title: "news",
      description:
        "Greet the sun, awaken your body and start the day in harmony with yourself and your body.",
    },
    {
      id: "3",
      image:
        "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-43-1.png",
      title: "news",
      description:
        "Greet the sun, awaken your body and start the day in harmony with yourself and your body.",
    },
    {
      id: "4",
      image:
        "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-43-1.png",
      title: "news",
      description:
        "Greet the sun, awaken your body and start the day in harmony with yourself and your body.",
    },
    {
      id: "5",
      image:
        "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-43-1.png",
      title: "news",
      description:
        "Greet the sun, awaken your body and start the day in harmony with yourself and your body.",
    },
    {
      id: "6",
      image:
        "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-43-1.png",
      title: "news",
      description:
        "Greet the sun, awaken your body and start the day in harmony with yourself and your body.",
    },
    {
      id: "7",
      image:
        "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-43-1.png",
      title: "news",
      description:
        "Greet the sun, awaken your body and start the day in harmony with yourself and your body.",
    },
    {
      id: "8",
      image:
        "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-43-1.png",
      title: "news",
      description:
        "Greet the sun, awaken your body and start the day in harmony with yourself and your body.",
    },
  ];
  const banner = {
    header_title: "news",
    header_image: {
      url: "https://verdalastage.bison-studio.com/wp-content/uploads/2023/04/Rectangle-43-1.png",
    },
  };
  return (
    <>
      <PageHero headerData={banner} />

      <PageNavigation
        links={[
          "The Verdala Legacy",
          "then and now",
          "ARCHITECTURE",
          "The Team",
        ]}
      />

      <Container className="filter-container"></Container>

      <Container>
        <div className="news-section">
          <div className="news-filter">
            <select>
              <option>filter</option>
              <option>filter 1</option>
              <option>filter 2</option>
            </select>
          </div>

          <div className="crow news">
            {newsData?.map((post) => {
              return (
                <>
                  <NewsCard {...post} />
                </>
              );
            })}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default News;

export function Head() {
  return <title>Verdala - News</title>;
}
