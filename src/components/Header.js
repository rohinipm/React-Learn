function Header() {
  const myStyle = {
    color: "Red",
    backgroundColor: "Blue",
    font: "san-serif",
    padding: "10px",
  };

  return (
    <>
      <h1 style={myStyle}> Hello styling</h1>
      <p>Add some style</p>
    </>
  );
}

export default Header;
