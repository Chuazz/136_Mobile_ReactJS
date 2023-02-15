// Framework
import propTypes from 'prop-types';

// Style
import './GlobalStyle.scss';
import './Margin.scss';
import './Padding.scss';
import './CustomSlick.scss';
import './TippyCustom.scss';

function GlobalStyle({ children }) {
    return <>{children}</>;
}

GlobalStyle.propTypes = {
    children: propTypes.node.isRequired,
};

export default GlobalStyle;
