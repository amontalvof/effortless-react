import { useDarkMode } from '../../hooks';
import './styles.css';

const DarkModeComponent = () => {
    const [darkMode, setDarkMode] = useDarkMode('#main-container');

    return (
        <div id="main-container">
            <button
                className="btn"
                onClick={() =>
                    setDarkMode((prevDarkMode: any) => !prevDarkMode)
                }
                style={{
                    border: `1px solid ${darkMode ? 'white' : 'black'}`,
                    background: 'none',
                    color: darkMode ? 'white' : 'black',
                }}
            >
                Toggle Dark Mode
            </button>
        </div>
    );
};

export default DarkModeComponent;
