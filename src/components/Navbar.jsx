
const Navbar = (props) => {
    const { links } = props;
    return (
        <ul>
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.url}>{link.text}</a>
                </li>
            ))}
        </ul>
    );
};
export default Navbar;