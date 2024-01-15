export const Zurag = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        border: "2px solid grey",
        width: 400,
        height: 551,
        borderRadius: 15,
      }}
    >
      <img
      style={{width:400, height:331, border:"2px solid grey", marginBottom:20, borderTColor:"red"}}

        src="https://robohash.org/consecteturautaut.png?size=300x300&set=set1"
        alt=""
      />
      <div>
        <h1>FirstName   LastName</h1>
        <p>employment title</p>
        <p>email</p>
      </div>
    </div>
  );
};
