import React, { useState, useEffect, useMemo } from "react";
import "./App.css";

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const [count, setCount] = useState(0);

  const contactInfo = { phoneNumber, address }
  // 上のようにconst contactInfo = { phoneNumber, address } と書く場合、count というstateの変更によって再レンダリングが起こると、下のuseEffectの処理が走ってしまいます。

  // ちなみにuseMemoを使って、const contactInfo = useMemo(() => {return { phoneNumber, address };}, [phoneNumber, address])  このように定義すると、userInfoオブジェクトがphoneNumber、あるいはaddressに変更がない限りキャッシュされ、count というstateの変更によって再レンダリングが起こっても、useEffectの処理を走らないようにすることができます。
  useEffect(() => {
    console.log("contactInfoオブジェクトが変更しました");
  }, [contactInfo]);

  return (
    <div>
      <input
        placeholder="電話番号を入力してください"
        type="text"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
      />
      <input
        placeholder="住所を入力してください"
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />

      {/* count というstateを変更させている*/}
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default App;
