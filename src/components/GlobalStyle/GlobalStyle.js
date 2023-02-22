// Framework
import propTypes from 'prop-types';

// Style
import './GlobalStyle.scss';
import './Padding.scss';
import './TippyCustom.scss';
import './Margin.scss';

function GlobalStyle({ children }) {
    return <>{children}</>;
}

GlobalStyle.propTypes = {
    children: propTypes.node.isRequired,
};

export default GlobalStyle;
