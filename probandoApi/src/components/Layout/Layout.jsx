import NavBar from "../NavBar/NavBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};
