// Framework
import propTypes from 'prop-types';

// Style
import './GlobalStyle.scss';
import './Padding.scss';
import './Margin.scss';
import './GridSystem.scss';

function GlobalStyle({ children }) {
    return <>{children}</>;
}

GlobalStyle.propTypes = {
    children: propTypes.node.isRequired,
};

export default GlobalStyle;
