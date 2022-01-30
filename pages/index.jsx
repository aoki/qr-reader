const HomePage = () => {
  const formats = BarcodeDetector.getSupportedFormats();

  return <code>{formats}</code>;
};

export default HomePage;
