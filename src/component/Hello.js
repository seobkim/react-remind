function Hello({ color, name, isSpecial }) {
  return (
    <>
      <div style={{ color }}>
        {isSpecial && <b>*</b>} Hello '{name}' World!
      </div>
    </>
  );
}
Hello.defaultProps = {
  name: "no name",
};

export default Hello;
