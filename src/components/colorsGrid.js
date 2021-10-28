import MasonryLayout from "./MasonryLayout";
function ColorsGrid(props) {
  return (
    <MasonryLayout>
      {props.data.map((c, i) => {
        const height = 100 + Math.ceil(Math.random() * 150);

        return (
          <div
            style={{
              height: `${height}px`,
              backgroundColor: c.hex,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={i}
          >
            <p style={{ alignSelf: "center" }}>{c.name}</p>
          </div>
        );
      })}
    </MasonryLayout>
  );
}

export default ColorsGrid;
