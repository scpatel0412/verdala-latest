import React from "react";

const SectionNavigation = (props) => {
  const { data } = props;
  const scrollDown = (section) => {
    window.scrollTo({
      top: document.getElementById(section).offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="vision-nav">
      {data?.map((i, index) => {
        return (
          <div key={index}>
            <ul>
              <li onClick={() => scrollDown(i.id.replace(/_/g, ""))}>
                {i.id.replace(/_/g, " ")}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SectionNavigation;
