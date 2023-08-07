function Car(props) {
  const { brand, color } = props;

  const {} = props;
  const text = `Hi I am a ${color} ${brand} car`;
  return <h2>{text}</h2>;
}

export default Car;
