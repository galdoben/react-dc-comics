
const Navbar = (props) => {
    const { links } = props
    return (
        {
            links.map((link, index) => {
                return (
                    <li key={index}>
                        <a href={link.url} >{link.text}</a>
                    </li>
                )
            }
            )
        }
}
export default Navbar