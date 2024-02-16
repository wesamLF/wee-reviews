import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from '@tanstack/react-query'
import { postLogIn } from "../../Api/postLogIn";
import { useUserContext } from "../../../../context/UserContext";
import ErrorMessage from "../../../../Util/errorMessage";
import ToastSuccess from "../../../../Util/ToastSuccess";



const Login = () => {


  const navigate = useNavigate()
  const { setUserInfo } = useUserContext()
  const [logInData, setLogInData] = useState({
    identifier: "test99@gmail.com",
    password: "wesamlafi"
  })
  const mutation = useMutation({
    mutationFn: postLogIn,
    onSuccess: (data) => {
      const tempData = {
        userName: data.data.user.username,
        id: data.data.user.id,
        token: data.data.jwt
      }
      setUserInfo(tempData)
      localStorage.setItem("userInfo", JSON.stringify(tempData))
      ToastSuccess(`welcome Back! ${tempData.userName}`)
      navigate("/home")
    }

  })


  const handleInputs = ({ target }) => {
    const { name, value } = target;
    setLogInData((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate({ identifier: logInData.identifier, password: logInData.password })

  }
  const handleError = () => {
    const tempMessage = mutation?.error?.response?.data?.error?.message
    if (tempMessage) return <ErrorMessage message={tempMessage} />
    else return <ErrorMessage message={"oops! somthing went wrong in the server please try again."} />
  }


  return (
    <>
      <form className='px-4 py-5 my-5' onSubmit={handleSubmit}>
        {mutation.isError && handleError()}
        <div className="">
          <article className="message is-small">
            <div className="message-header">
              <p>Test Account</p>
              
            </div>
            <div className="message-body">
              <h4>Email: test99@gmail.com</h4>
              <h4>Password: wesamlafi</h4>

            </div>
          </article>
        </div>
        <div className="field ">
          <label htmlFor="" className="" >Email</label>
          <div className="control has-icons-left">
            <input type="email" placeholder="e.g. email@gmail.com" className="input" required
              autoComplete="email"
              name="identifier"
              value={logInData.identifier}
              onChange={handleInputs}
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="field ">
          <label htmlFor="" className="">Password</label>
          <div className="control has-icons-left">
            <input type="password" placeholder="*******" className="input" required
              autoComplete="password"
              name="password"
              value={logInData.password}
              onChange={handleInputs}
            />
            <span className="icon is-small is-left">
              <i className="fa fa-lock"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <button className={`button dark--bg--color light--text--color ${mutation.isLoading ? "Disabled is-loading" : " "}`} >
            Log in
          </button>
        </div>

      </form>
    </>
  )
}

export default Login