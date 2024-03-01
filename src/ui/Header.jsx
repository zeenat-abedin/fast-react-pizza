import { Link } from "react-router-dom"
import Username from "../features/user/Username"
import SearchOrder from "../features/order/SearchOrder"

 function Header() {
  return (
    <header>
      <SearchOrder/>
      <Link to="/">Fast React Pizza Co.</Link>
      <Username />
    </header>
  )
}

export default Header