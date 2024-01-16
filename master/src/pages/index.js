// import { TextBox } from "@/compinent/Text";
// import { ImageBox } from "@/compinent/Shoes";
// const styles = {
//   imageContainer: { display: "flex", gap: 200, justifyContent: "center" },
// };

// export default function Home() {
//   return (
//     <div>
//       <div style={styles.imageContainer}>
//         <ImageBox></ImageBox>
//         <ImageBox></ImageBox>
//         <ImageBox></ImageBox>
//       </div>
//       <div style={styles.imageContainer}>
//         <TextBox></TextBox>
//         <TextBox></TextBox>
//       </div>
//     </div>
//   );
// }

// import Main from "@/component/Main";

// export default function Home() {
//   return <Main></Main>;
// }

// import { List } from "../component/List"; // Adjust the path accordingly
// const arr = [
//   {
//     name: "Puujee",
//     score: "100",
//   },
//   {
//     name: "Bukbayr",
//     score: "99",
//   },
// ];
// const arr2 = [
//   {
//     name: "Sambuu",
//     score: "78",
//   },
//   {
//     name: "Gurmaa",
//     score: "98",
//   },
// ];
// export default function Home() {
//   return (
//     <div>
//       <div>
//         {arr.map((el) => (
//           <List Ner={el.name} Onoo={el.score}></List>
//         ))}
//       </div>
//       <div>
//         {arr2.map((el) => (
//           <List Ner={el.name} Onoo={el.score}></List>
//         ))}
//       </div>
//     </div>
//   );
// }
// <div>
//   <List name="puujee" age={30} isStedent="true" score={56}></List>
//   <List name="Bata" age={36} isStedent="false" score={56}></List>
//   <List name="Dulam" age={65} isStedent="true" score={56}></List>
// </div>

// const gogoBolgii = {
//   styles: {
//     width: 200,
//     height: 100,
//     border: "2px solid black",
//     display: "flex",
//   },
// };
// const Body = {
//   styles: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 20,
//   },
// };
// <div style={Body.styles}>
//   <div style={gogoBolgii.styles}>
//     <List name="puujee" garchig="dotood ayalal juulchlal"  />
//   </div>
//   <div style={gogoBolgii.styles}>
//     <List name="puujee" garchig="dotood ayalal juulchlal" />
//   </div>
//   <div style={gogoBolgii.styles}>
//     <List name="puujee" garchig="dotood ayalal juulchlal" />
//   </div>
//   <div style={gogoBolgii.styles}>
//     <List name="puujee" garchig="dotood ayalal juulchlal" />
//   </div>
// </div>
// props 5
// import List from "../component/List";
// import Listt from "../component/List2";
// import Listtt from "../component/List3";
// const array = [
//   {
//     firstname: "Duluu",
//     score: "100",
//     lastname: "Bill",
//     age: 45,
//     work: "Pinecone",
//   },
//   {
//     firstname: "Dashka",
//     score: "69",
//     lastname: "bat",
//     age: 34,
//     work: "Pinecone",
//   },
// ];

// export default function Home() {
//   return (
//     <div>
//       {array.map(
//         (el, i) => (
//           (<List  firstname={el.firstname} />),
//           (<Listt lastname={el.lastname}></Listt>),
//           (<Listtt score={el.score}></Listtt>),

//         )
//       )}
//     </div>
//   );
// }

// import React, { useState } from "react";
// function MyComponent() {
//   const [name, setName] = useState("Guest");
//   const [age, setAge] = useState(0);
//   const updateName = () => {
//     setName("spongebob");
//   };
//   const updateAge = () => {
//     setAge(age + 3);
//   };
//   return (
//     <div>
//       <p>name:{name}</p>
//       <button onClick={updateName}>setName</button>
//       <p>nas:{age}</p>
//       <button onClick={updateAge}>setAge</button>
//     </div>
//   );
// }
// export default MyComponent;
// 😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇
// import React, { useState } from "react";

// const styles = {
//   buttonOn: {
//     width: 100,
//     height: 40,
//     backgroundColor: "green",
//     border: "2px solid green",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     fontSize: 20,
//   },
//   buttonOff: {
//     width: 100,
//     height: 40,
//     backgroundColor: "red",
//     border: "2px solid red",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     fontSize: 20,
//   },
// };
// const stylezz = {

//   body: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 300,
//   },
// };

// function MyComponent() {
//   const [color, setColor] = useState("on");

//   const updateColor = () => {
//     setColor(color === "on" ? "off" : "on");
//   };

//   return (
//     <div style={stylezz.body}>
//       <button
//         style={color === "on" ? styles.buttonOn : styles.buttonOff}
//         onClick={updateColor}
//       >
//         <p>{color}</p>
//       </button>
//     </div>
//   );
// }
// 😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇
// import styles from "@/styles/styles.module.css";
// import { useState } from "react";

// export default function Home() {
//   const [number, setNumber] = useState(0);

//   const handleButton = (text) => {
//     setNumber(number + 1);
//     console.log("button darlaa" + " " + number);
//   };

//   const handleButtonTwo = () => {
//     setNumber(number - 1);
//     console.log("button darlaa");
//   };

//   return (
//     <>
//       <div className={`${styles.box} ${styles.bgRed}`}>hahHAhahahahah</div>
//     </>
//     <div>
//       <h1>{number}</h1>
//       {/* Argument damjuulsan */}
//       <button onClick={() => handleButton("heelo")}>Nemeh</button>

//       {/* Argument damjuulaagui */}
//       <button onClick={handleButtonTwo}>Hasah</button>
//     </div>
//   );
// }

// App.js

import React from "react";
import Toggle from "../component/Toggle";

function App() {
  return (
    <div>
      <h1>Toggle Component Example</h1>
      <Toggle />
    </div>
  );
}

export default App;

// export default MyComponent;

// import List from "../component/List";
// export default function Home() {
//   const data = {
//     age: 32,
//     name: "pfdsa",
//     gender: "female",
//     color: "red",
//   };
//   return (
//     <div>
//       <List {...data}></List>
//     </div>
//   );
// }
