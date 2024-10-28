import "./App.css";
import PropsUserCard from "./lesson_2-10/PropsUserCards";
import FirstComponent from "./lesson_1/FirstComponent";
import UserCardContainer from "./lesson_2-10/UserCardContainer";
import FirstUseState from "./lesson_2-10/FirstUseState"

function App() {
  // Componente React ile css verirken verilecek css kodlari bir obje olarak verilmelidir.
  // Ve bu  obje icerisindeki keyler css kodlarina karsilik gelir dakat bunlar yazilirken js syntax ina
  // gore yazilmalidir. orn/ background-color => backgroundColor

  let style = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <FirstUseState />
      <UserCardContainer style={style}>
        <FirstComponent />
        <br />
        <PropsUserCard
          userName="Ali"
          userLastName="Veli"
          userAge={28}
          userHobbies="Riding"
        />
      </UserCardContainer>
    </>
  );
}

export default App;
