// eslint-disable-next-line react/prop-types
const Image = ({ img, alt, ...children }) => {
  return <img src={img} alt={alt} {...children} />;
};

export default Image;
