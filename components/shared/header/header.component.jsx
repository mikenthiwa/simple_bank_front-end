
const Header = () => {
    return (
      <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col text-2xl text-secondary justify-center">
              <div className="tracking-wide font-bold">Banking Dashboard</div>
              <span className="text-base text-primary tracking-wide">Welcome Back</span>
          </div>
          <div
              className="bg-red-400 bg-cardPrimary tracking-wider justify-start p-3 mt-2 mb-2 w-4
              flex flex-col rounded-md text-primary text-sm font-semibold  justify-center w-1/7"
          >
              <div>BALANCE</div>
              <div className="text-2xl font-medium text-dashBoardBalanceColor tracking-widest">$900000000</div>
          </div>
      </div>
    )
}

export default Header;
