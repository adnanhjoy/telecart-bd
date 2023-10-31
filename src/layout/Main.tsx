import Header from '../shared/header/Header';
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Main;