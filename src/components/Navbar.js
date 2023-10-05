function Navbar (props) {
    console.log ("props => ", props.test)
    return (
        <div className="Navbar-news">
            <div className="a-href">
        <a href="#">Home</a>
          <a href="#">Politik</a>
          <a href="#">Olaraga</a>
          <a href="#">Ekonomi</a>
          </div>
        </div>
    )
}
export default Navbar;