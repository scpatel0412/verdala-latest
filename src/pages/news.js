import React, { useEffect, useState } from "react";
import PageHero from "../components/hero/page-hero";
import Footer from "../components/sections/footer/footer";
import "../assets/css/js_composer.min.css";
import Container from "../components/layouts/container";
import NewsCard from "../components/news/news-card";
import { allNews } from "../utils/api";
import { allNewsData } from "../utils/api";
import Parser from 'html-react-parser';

const News = () => {
  const [headerData, setHeaderData] = useState({})
  const [data, setData] = useState([]);
  useEffect(() => {
    const func = async () => {
      try {
        const res = await allNews();
        setHeaderData(res.acf);
        const response = await allNewsData();
        setData(response);
      } catch (error) {
        console.log("ERROR DURING GET NEWS DATA");
      }
    };
    func();
  }, []);
  return (
    <>
      {headerData != undefined ?
        <>
          <PageHero headerData={headerData} />
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
                {data != undefined ?
                  <>
                    {data?.map((post, key) => {
                      return (
                        <NewsCard
                          title={Parser(post?.title?.rendered)}
                          description={Parser(post?.excerpt?.rendered)}
                          id={post?.featured_media}
                          key={key}
                        />
                      );
                    })}
                  </>
                  : null}
              </div>
            </div>
          </Container>
          <Footer />
        </>
        : null}
    </>
  );
};

export default News;

export function Head() {
  return <title>Verdala - News</title>;
}
