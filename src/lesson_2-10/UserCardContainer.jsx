export default function UserCardContainer({ style, children }) {
  // container in saracagi child component props olarak bu componente gonderilir. Obje icindeki key ismi children olarak verilir. Bu nedenle destruction yaparken {children} yaziyoruz.
  // -------------------------------------------------

  return (
    <>
      <div style={style} className="user__container">
        <p>Card Container</p>
        {children}
      </div>
    </>
  );
}
