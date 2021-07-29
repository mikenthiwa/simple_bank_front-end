import {useState} from "react";
import {
    faWallet,
    faCalculator,
    faMoneyBillWave,
    faShieldAlt,
    faCreditCard,
    faChartPie, faBuilding, faUniversity
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SideBarItem from "../side-bar-item/side-bar-item.component";

const SideBar = ({router, activeNav}) => {

    return (
        <aside className="flex flex-col text-primary">
            <div className="ml-7 h-14 leading-60 mt-5 mb-5">
                <div className="flex flex-row">
                    <div><FontAwesomeIcon icon={faUniversity} size='3x'/></div>
                    <div className="logo text-secondary text-xl font-bold">Cimple</div>
                </div>
            </div>
            <SideBarItem
                icon={faWallet}
                name="Banking"
                activeNav={activeNav}
                router={router}
                path={'/'}
            />
            <SideBarItem
                icon={faCalculator}
                name="Budgetplanner"
                activeNav={activeNav}
                router={router}
                path={'/budget-planner'}
            />
            <SideBarItem
                icon={faMoneyBillWave}
                name="Save & Invest"
                activeNav={activeNav}
                router={router}
                path={'/save-invest'}
            />
            <SideBarItem
                icon={faShieldAlt}
                name="Insurance"
            />
            <SideBarItem
                icon={faCreditCard}
                name="Subscriptions"
            />
            <SideBarItem
                icon={faChartPie}
                name="Analytics"
            />
            <SideBarItem
                icon={faBuilding}
                name="Services"
            />
        </aside>
    )
}

export default SideBar;
