import React, { useState } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Layout from "../../common/layout";
import "./months.styles.css";
import months from "../../common/months.json";
import { useGlobal } from "../../context/globalState";

const MonthsPicker = () => {
  const [monthSelected, setMonthSelected] = useState<string>(months[0].month);
  const { updateMonth } = useGlobal();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    initialSlide: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    swipeToSlide: true,
    beforeChange: (oldIndex: number, newIndex: number) => {
      const monthName = months[newIndex === 0 ? 11 : newIndex - 1].month;
      setMonthSelected(monthName);
      updateMonth(monthName);
    },
  };

  const monthsList = months.map((item, index) => {
    return (
      <div key={index} className="monthItem">
        <p
          className={
            item.month === monthSelected ? "selectedMonth" : "unselectedMonth"
          }
        >
          {item.month}
        </p>
      </div>
    );
  });

  return (
    <div
      className="mainMonthsMenuContainer"
      style={{
        backgroundColor: Layout.colors.months.background,
      }}
    >
      <Slider {...settings}>{monthsList}</Slider>
    </div>
  );
};

export default MonthsPicker;
