const MagnifyingGlass = ({ className, ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Search-Icon"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            className={className}
            {...props}
        >
            <g id="SMOCK">
                <rect id="Canvas" width="36" height="36" fill="rgba(68,68,68,0)" />
            </g>
            <g id="ICONS" transform="translate(1.103 0.969)">
                <path
                    id="Path_127042"
                    dataname="Path 127042"
                    d="M35.4,32.5l-8.252-8.3A14.488,14.488,0,0,0,5.451,5.107,14.478,14.478,0,0,0,24.2,27.075l8.263,8.314A2.061,2.061,0,0,0,35.4,32.5ZM5.344,15.479A10.327,10.327,0,1,1,15.671,25.764,10.306,10.306,0,0,1,5.344,15.479Z"
                    transform="translate(-1.103 -0.969)"
                    fill="#444"
                />
            </g>
        </svg>
    );
};

export { MagnifyingGlass };
