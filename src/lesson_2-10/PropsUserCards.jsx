import React from "react";

function PropsUserCard({ userName, userLastName, userAge, userHobbies }) {
  // props alani icerisindeki {productName,price} ifadesi bir object destruction ifadesidir.
  // Yani const {productName,price} = props ifadesine esittir.
  // props bir objedir istersek destruct eder kullaniriz istersek destruct etmeden kullanabiliriz.
  // Destruction isleminde kullandigimiz variable isimleri objedeki degri tutan key isimleri ile ayni olmak zorundadir.

  return (
    <>
      <div className="card__container">
        <div className="user__img-container">
          <img
            className="user__img"
            src="../public/vite.svg"
            alt="user image"
          />
        </div>
        <div className="user__info-container">
          <div className="user__name bold-text">
            {userName} {userLastName}, {userAge}
          </div>
          <div className="user__hobbies">
            <div className="user__hobbies-title bold-text">Hobbies:</div>
            <div className="user__hobbies-content">{userHobbies}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropsUserCard;
