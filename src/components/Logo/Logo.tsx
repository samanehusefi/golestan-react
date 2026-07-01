const Logo: React.FC = () => {
  return (
    <img
      src={`${import.meta.env.BASE_URL}assets/logo-golestan-web-1.webp`}
      alt="Golestan"
      className="w-28 ml-5"
    />
  );
};

export default Logo;
