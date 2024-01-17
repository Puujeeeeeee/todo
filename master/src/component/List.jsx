// function List(props) {
//   return (
//     <div>
//       <p>Name:{props.name}</p>
//       <p>age:{props.age}</p>
//       <p>student:{props.isStudent ? "yes" : "no"}</p>
//       <p>score:{props.score}</p>
//     </div>
//   );
// }
// export default List;
// function List(props) {
//   return (
//     <div>
//       <p> Name:{props.name}</p>
//       <p> {props.garchig}</p>
//       <img
//         src="https://as.gogo.mn/newsn/thumbnail/510/images/c/2020/12/266325-25122020-1608888421-1034412321-thumbnail_tofu.jpg"
//         alt=""
//         style={{ width: 200, height: 100 }}
//       />
//     </div>
//   );
// }
// export default List;
function List(props) {
  const { name, age, gender, color } = props;
  return (
    <div>
      <p>
        firstname:{name} age:{age} huis:{gender} ungu:{color}
      </p>
    </div>
  );
}
export default List;
