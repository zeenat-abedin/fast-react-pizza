import { Link } from "react-router-dom"
import Username from "../features/user/Username"

 function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
         <Username />
    </header>
  )
}

export default Header