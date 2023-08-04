function Car(props) {
  const { brand } = props;
  const text = `Hi I am a ${brand} car`;
  return <h2>{text}</h2>;
}

export default Car;
