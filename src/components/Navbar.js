function Navbar (props) {
    console.log ("props => ", props.test)
    return (
        <div>
            <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    (<a href='#'>){props.test}(</a>)
                </li>
                </ul>
        </div>
    )
}
export default Navbar;