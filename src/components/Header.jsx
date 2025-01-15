import Navbar from "./Navbar";

const Header = (props) => {
  const { links } = props
  return (
    <header>
      <div className="container d-flex">
        <div className="logodc">
          <img src="../../public/img/dc-logo.png" />
        </div>
        <div className="nav header">
          <ul>
            <Navbar links={links} />
          </ul >
        </div>

      </div>
    </header>
  )
}
export default Header