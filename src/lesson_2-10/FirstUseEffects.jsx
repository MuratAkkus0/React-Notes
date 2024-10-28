import { useEffect, useState } from "react"

export default function FirstUseEffects() {
    // useEffect fonksiyonu ilk parametre olarak bir callbacl func alir ve ikinci parametre olarak da bir bagimlilik dizisi alir. Bu agimlilik dizisine dizi elemani olarak verdigimiz degiskenlerin veya degiskenin degeri her degistiginde bu callback calisir.
    // Eger hicbir bagimlilik dizisi vermezsek yani sadece callback verip birakirsak bu kod sayfasi her render edildiginde bu useEffect calisir.
    //Eger 2. deger olan bagimlilik dizisi olarak bos bir dizi verirsek bu sayfa yenilendiginde sadece 1 kere calisir. Her render da CALISMAZ.
    const [firstName, setFirstName] = useState("empty")
    const [lastName, setLastName] = useState("empty")

    useEffect(() => {
        console.log("Sayfa yüklendiginde ve her renderda tekrar calisir.")
    })
    useEffect(() => {
        console.log("Sadece Sayfa yüklendiginde 1 defa calisir. Kod tekrar tekrar render edilse bile calismaz.")
        // get items from API vs..
    }, [])
    useEffect(() => {
        console.log("Sayfa yüklendiginde ve FIRSTNAME degerinin degismesinden dolayi kaynaklanan render da calisir. ")
    }, [firstName])

    useEffect(() => {
        console.log("Sayfa yüklendiginde ve LASTNAME degerinin degismesinden dolayi kaynaklanan render da calisir.")
    }, [lastName])

    useEffect(() => {
        console.log("Sayfa yüklendiginde ve LASTNAME veya FIRSTNAME degiskenlerinin degerlerinin degismesinden kaynakli yapilacak rendeerlarda tekrar calisir.")
    }, [firstName, lastName])


    return (
        <>
            <div>{firstName} {lastName} </div>
            <div>
                <button onClick={() => setFirstName("Murat")}>change first name</button>
                <button onClick={() => setLastName('Akkus')}>change last name</button>
            </div>
        </>
    )
}
