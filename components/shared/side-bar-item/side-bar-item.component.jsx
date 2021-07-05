import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SideBarItem = ({icon, name, activeNav, router, path}) => {

    return (
        <a
            className={`pt-4 pb-4 cursor-pointer pl-7 place-items-center 
            ${activeNav === name ? 'bg-activeNavItem border-l-5 border-secondary': ''} `}
            onClick={() => router.push(path)}
        >
            <div className="flex flex-row content-between w-full">
                <div className="w-3/7"><FontAwesomeIcon icon={icon} size='lg' /></div>
                <div className="text-primary self-center text-base font-medium tracking-wide">{name}</div>
            </div>
        </a>
    )
};

export default SideBarItem;
