import React, { Component } from "react";
import home from "../../assets/images/categories/home.png";
import car from "../../assets/images/categories/car.png";
import game from "../../assets/images/categories/game.png";
import clothes from "../../assets/images/categories/clothes.png";
import mobile from "../../assets/images/categories/mobile.png";
import electronic from "../../assets/images/categories/electronic.png";
import furniture from "../../assets/images/categories/furniture.png";
import sport from "../../assets/images/categories/sport.png";
import baby from "../../assets/images/categories/baby.png";
import animale from "../../assets/images/categories/animale.png";
import service from "../../assets/images/categories/service.png";
import job from "../../assets/images/categories/job.png";
import trade from "../../assets/images/categories/Path4.png";
import book from "../../assets/images/categories/book.png";
import food from "../../assets/images/categories/food.png";
import donations from "../../assets/images/categories/donations.png";
class Categories extends Component {
  state = {
    categories: [
      { src: home, color: "#7345ac", text: "عقارات" },
      { src: car, color: "#0088c7", text: "سيارات ومركبات" },
      { src: game, color: "#0088c7", text: "ألعاب وأجهزة فيديو" },
      { src: clothes, color: "#84b54b", text: "ملابس وإكسسوارات" },
      { src: mobile, color: "#20c3f3", text: "موبايلات وأجهزة تابلت" },
      { src: electronic, color: "#6bcebb", text: "الكترونيات وأجهزة منزليه" },
      { src: furniture, color: "#ff9e00", text: "أثاث منزل وحديقة" },
      { src: sport, color: "#bd9ee4", text: "لوازم رايضة" },
      { src: baby, color: "#fd7d91", text: "أطفال" },
      { src: animale, color: "#6bab21", text: "حيوانات" },
      { src: service, color: "#ffcc00", text: "خدمات" },
      { src: job, color: "#08cba5", text: "وظائف" },
      { src: trade, color: "#853500", text: "تجارة وصناعة" },
      { src: book, color: "#343434", text: "كتب وترفيه " },
      { src: food, color: "#ff6000", text: "طعام" },
      { src: donations, color: "#fd7d91", text: "تبرعات" }
    ]
  };
  render() {
    return (
      <div className="container  d-flex flex-row" style={{ overflowX: "auto" }}>
        {this.state.categories.map(item => (
          <div className="mt-4">
            <div
              className="d-flex  justify-content-center align-items-center m-2"
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "3rem",
                border: `2px solid #7345ac ${item.color}`,
                backgroundColor: item.color
              }}
            >
              <img
                src={item.src}
                class="img-fluid rounded img-responsive "
                style={{ padding: 10 }}
              />
            </div>
            <p style={{fontSize:11, textAlign:'center',fontWeight:'700',fontFamily:'Noto Kufi Arabic'}}>{item.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
