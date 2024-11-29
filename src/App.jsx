import React, { useState } from "react";

function App() {
  // // 1-mashq
  const [input, setInput] = useState("");
  const [res, setRes] = useState("");
  function vlidateAndChange(res) {
    const inp = input;
    if (inp == 3) {
      setRes("Uchburchak");
    } else if (inp == 4) {
      setRes("Tortburchak");
    } else if (inp == 5) {
      setRes("Beshburchak");
    } else setRes("Bunday shakl mavjud emas?!?");
    setInput("");
  }
  // // 2-mashq
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passRes, usePassRes] = useState("");
  function verificationPass() {
    const pass = password;
    const passConf = confirmPassword;
    if (pass == passConf) {
      usePassRes("Parol mos keldi!?!");
    } else {
      usePassRes("Parol mos kelmadi?!?");
    }
    setPassword("");
    setConfirmPassword("");
  }

  // // 3-mashq
  const [fruits, setFruits] = useState([]);

  function ToChoose(e) {
    const value = e.target.value;
    if (fruits.includes(value)) {
      setFruits(
        fruits.filter((item) => {
          return item != value;
        })
      );
    } else {
      setFruits([...fruits, value]);
    }
  }
  // // 4-mashq
  const [color, setColor] = useState("");

  function handleColorChange(el) {
    setColor(el.target.value);
  }
  // // 5-mashq

  const [email, setEmail] = useState("");
  const [emailCheckRes, setEmailCheckRes] = useState("");

  function emailCheck() {
    if (email.includes("@") && email.includes(".")) {
      setEmailCheckRes("Email togri👍");
    } else {
      setEmailCheckRes("Email notogri👎");
    }
  }
  // // 6-mashq
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  function exchange() {
    const temp = input1;
    setInput1(input2);
    setInput2(temp);
  }
  // // 7-mashq
  const [info, setInfo] = useState("");
  const [tasks, setTasks] = useState([]);

  function toDo() {
    if (info) {
      setTasks([...tasks, info]);
      setInfo("");
    }
  }

  function toDoDelete(index) {
    if (window.confirm("Ushbu toDo ni ochirasizmi!?!"))
      setTasks(
        tasks.filter((_, index1) => {
          index1 != index;
        })
      );
  }
  return (
    <>
      {/* 1-mashq */}
      <div className="mb-5">
        <h2 className="text-center text-3xl font-bold text-blue-600 mb-4">
          1. Shaklni aniqlash
        </h2>
        <div className="mt-3 container mx-auto border border-black p-4 rounded-md w-[350px] h-[150px]">
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="number"
            value={input}
            placeholder="Raqamni kiriting... "
            className="w-full border p-2 rounded mb-2"
          />
          <div className="flex justify-center items-center">
            <button
              onClick={vlidateAndChange}
              className="w-full mb-2 border rounded-md py-1 bg-slate-700 text-white px-4"
            >
              save
            </button>
          </div>
          <h6 className="text-center font-bold text-xl">{res}</h6>
        </div>
      </div>
      <hr />
      {/* 2-mashq */}
      <div className="mt-5 mb-5">
        <h2 className="text-center text-3xl font-bold text-blue-700 mb-4">
          2. Parol tekshirish formasi
        </h2>
        <div className="mt-3 container mx-auto border border-black p-4 rounded-md w-[350px] h-[200px]">
          <input
            className="w-full border p-2 rounded mb-2"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Parolni kiriting..."
            value={password}
          />
          <input
            className="w-full border p-2 rounded mb-2"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
            placeholder="Parolni tasdiqlang..."
            value={confirmPassword}
          />
          <button
            className="mb-2 border w-full rounded-md py-1 bg-slate-700 text-white px-4"
            onClick={verificationPass}
          >
            Save
          </button>
          <h6 className="text-center font-bold text-xl">{passRes}</h6>
        </div>
      </div>
      <hr />
      {/* 3-mashq */}
      <div className="mt-5 mb-5">
        <h2 className="text-center text-3xl font-bold text-blue-700 mb-4">
          3. Chek qutisi (Checkbox) bilan royxat tuzish
        </h2>
        <div className="mt-3 container mx-auto border flex flex-col gap-2 border-black p-4 rounded-md w-[350px] h-[200px]">
          <div className="flex items-center gap-2">
            <input
              onChange={ToChoose}
              value="Banan"
              type="checkbox"
              checked={fruits.includes("Banan")}
              className="w-5 h-5 cursor-pointer"
            />
            <label className="cursor-pointer text-base font-semibold">
              Banan
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              onChange={ToChoose}
              value="Olma"
              type="checkbox"
              checked={fruits.includes("Olma")}
              className="w-5 h-5 cursor-pointer"
            />
            <label className="cursor-pointer text-base font-semibold">
              Olma
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              onChange={ToChoose}
              value="Apelsin"
              type="checkbox"
              checked={fruits.includes("Apelsin")}
              className="w-5 h-5 cursor-pointer"
            />
            <label className="cursor-pointer text-base font-semibold">
              Apelsin
            </label>
          </div>
          <div>
            {fruits.length > 0 &&
              fruits.map((value, index) => <h6 key={index}>{value}</h6>)}
          </div>
        </div>
      </div>
      <hr />
      {/* 4-mashq */}
      <div className="mt-5 mb-5">
        <h2 className="text-center text-3xl font-bold text-blue-700 mb-4">
          4. Foydalanuvchining tanlovi boyicha rang ozgartirish{" "}
        </h2>
        <div className="mt-3 container mx-auto border flex flex-col gap-2 border-black p-4 rounded-md w-[350px] h-[200px]">
          <div className="flex justify-center gap-4 mb-4">
            <div>
              <input
                className="cursor-pointer"
                type="radio"
                id="qizil"
                name="color"
                value="red"
                onChange={handleColorChange}
              />
              <label
                htmlFor="qizil"
                className="text-lg font-semibold ml-2 cursor-pointer"
              >
                Qizil
              </label>
            </div>
            <div>
              <input
                className="cursor-pointer"
                type="radio"
                id="yashil"
                name="color"
                value="green"
                onChange={handleColorChange}
              />
              <label
                htmlFor="yashil"
                className="text-lg font-semibold ml-2 cursor-pointer"
              >
                Yashil
              </label>
            </div>
            <div>
              <input
                className="cursor-pointer"
                type="radio"
                id="kok"
                name="color"
                value="blue"
                onChange={handleColorChange}
              />
              <label
                htmlFor="kok"
                className="text-lg font-semibold ml-2 cursor-pointer"
              >
                Kok
              </label>
            </div>
          </div>
          <div
            style={{ backgroundColor: color }}
            className="w-full h-[100px] mt-5 text-center flex justify-center items-center"
          ></div>
        </div>
      </div>
      <hr />
      {/* 5-mashq */}
      <div className="mt-5 mb-5">
        <h2 className="text-center text-3xl font-bold text-blue-700 mb-4">
          5. Togri email kiritish tekshiruvi
        </h2>

        <div className="container mx-auto border p-4 rounded-md w-[350px]">
          <input
            type="email"
            placeholder="Emailingizni aniq kiriting..."
            className="w-full border p-2 rounded mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="w-full mb-2 border rounded-md py-1 bg-slate-700 text-white px-4"
            onClick={emailCheck}
          >
            Save
          </button>
          <p>{emailCheckRes}</p>
        </div>
      </div>
      <hr />
      {/* 6-mashq */}
      <div className="mt-5 mb-5">
        <h2 className="text-center text-3xl font-bold text-blue-700 mb-4">
          6. Ikkita input qiymatini almashtirish
        </h2>

        <div className="container mx-auto border p-4 rounded-md w-[350px]">
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="w-full border p-2 rounded mb-2"
            placeholder="2-qiymatni kiriting..."
          />
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="w-full border p-2 rounded mb-2"
            placeholder="1-qiymatni kiriting..."
          />
          <button
            className="w-full mb-2 border rounded-md py-1 bg-slate-700 text-white px-4"
            onClick={exchange}
          >
            Qiymatlarni almashtirish
          </button>
        </div>
      </div>
      <hr />
      {/* 7-mashq */}
      <div className="mt-5 mb-5">
        <h2 className="text-center text-3xl font-bold text-blue-700 mb-4">
          7. To-do ro'yxat yaratish
        </h2>
        <div className="container mx-auto border p-4 rounded-md w-[350px] h-[150px]">
          <input
            type="text"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            className="w-full border p-2 rounded mb-2"
            placeholder="Vazifani kiriting"
          />
          <button
            className="w-full mb-2 border rounded-md py-1 bg-slate-700 text-white px-4"
            onClick={toDo}
          >
            Qo'shish
          </button>

          {tasks.map((value, index) => (
            <div key={index} className="flex justify-between items-center">
              <h6>{value}</h6>
              <button
                className="text-white bg-red-500 p-1 rounded-md"
                onClick={() => toDoDelete(index)}
              >
                O'chirish
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
