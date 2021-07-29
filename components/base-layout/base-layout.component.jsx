import SideBar from "../shared/sidebar/sidebar.component";
import Header from "../shared/header/header.component";


export const BaseLayout = ({ children, router, activeNav }) => {
    return (

        <div className="w-screen h-screen 2xl:max-w-7xl 2xl:mx-auto">
            <div className="flex flex-row h-screen font-roboto">
                <div className="w-1/7 rounded-tr shadow-md">
                    <SideBar router={router} activeNav={activeNav}/>
                </div>
                <div className="flex flex-col w-full bg-primary">
                    <div className="pl-10 pr-10 h-24 flex w-full"><Header /></div>
                    <div>{ children }</div>
                </div>
            </div>
        </div>
    )
}
