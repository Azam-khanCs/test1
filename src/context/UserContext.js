import {createContext, useState} from "react"
import {useNavigate} from "react-router-dom"

export const context = createContext()

const UserContext = ({children}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (
      email === "user123@gmail.com" && password === "12345" 
    ) {
      navigate("/detail")
    } else {
      navigate("/")
      alert("wrong email or password")
    }
  }
  return (
    <context.Provider
      value={{
        email,
        password,
        handleSubmit,
        setEmail,
        setPassword,
      }}
    >
      {children}
    </context.Provider>
  )
}

export default UserContext
