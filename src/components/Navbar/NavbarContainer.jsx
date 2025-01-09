import { connect } from "react-redux";
import { Navbar } from "./Navbar"; // Импортируем сам компонент Navbar

// Функция для получения данных из Redux
const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends, // Забираем список друзей из state.sidebar.friends
    };
};

// Создаём контейнерный компонент, подключённый к Redux
export const NavbarContainer = connect(mapStateToProps)(Navbar);
