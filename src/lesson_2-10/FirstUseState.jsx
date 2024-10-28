import { useState } from "react"

export default function FirstUseState() {
    // useState kullanilirken dikkat edilmelidir cünkü useState ile tanimlanan her degiskenin degeri her degistiginde sayfadaki bütün kod tekrar calistirilir. Bu da büyük uygulamalarda performans sorunlarina yol acabilir.
    const [count, setCount] = useState(5);
    const [users, setUsers] = useState(['Ali', 'Veli', 'Küpeli', 'Deli'])

    function reduceCount() {
        // debugger; // Bunu koydugun yerlerde kod calismadan ve calistiktan sonra olan degisiklikleri rahatca dev toolsda görebilirsin. Source kismina bakman lazim.
        if (count > 0) {
            setCount(count - 1)
        }
    }
    let newArray;
    newArray = users.map((user) => {
        if (user.length > 5) {
            return user; // Kosulu saglamayanlar icin bir kontrol yapmadigimiz halde undefined olarak arraya basar . Array lenght yine ayni kalir
        }
    })
    console.log(newArray);

    // map fonksiyonu hem normal parantezlerle hem de süslü parantezlerle acilip kapatilabilir. Fakat sonda return edilirken eger basta süslü parantez ile acilip kapatilmissa return dan sonra normal parantez acilip kapatilmalidir ki bunun bir jsx olsugunu jsx anlasin.

    // ** map fonksiyonu orjinal dizinin uzunlugu kadar bir array geri döndürür.

    console.log("rendered")
    return (
        <>
            <div>FirstUseState</div>
            <div>{count}</div>
            <div>
                <button onClick={() => setCount(count + 1)}>increase</button>
                <button onClick={reduceCount}>reduce</button>
            </div>
            <div id="users">
                {users.map((user, key) => {
                    if (user.length < 5) {
                        return (<div key={key}>{user}</div>)
                    } else null;
                })}
            </div>
        </>
    )
}
