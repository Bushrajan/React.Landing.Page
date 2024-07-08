
function Header() {
    return (
        <main>
            <div className="Navbar">
                <div className="logo">
                    <a className="anker" href="./App.jsx">PhoneShop</a>

                </div>
                <li className="links">
                    <a className="anker" href="./App.jsx">Home</a>
                </li>

                <li className="links">
                    <a className="anker" href="#about">About us</a>
                </li>

                <li className="links">
                    <a className="anker" href="#contact">Contact</a>
                </li>

                <li className="links">
                    <a className="anker" href="#products">Products</a>
                </li>

                <li className="links">
                    <a className="anker" href="#blogs">Blogs</a>
                </li>


            </div>

            <div className="herosection">
                <div className="herotext">
                    <h1>Online PhoneShop</h1>
                    <h3>Buy the best phone for yourself</h3>
                </div>
            </div>
        </main>
    )
}

export default Header