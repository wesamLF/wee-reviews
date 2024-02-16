import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from '@tanstack/react-query'
import { postSignIn } from "../../Api/postSignIn";
import ErrorMessage from "../../../../Util/errorMessage";
import ToastSuccess from "../../../../Util/ToastSuccess";

const Signin = () => {

  const navigate = useNavigate()


  const [signInData, setSignInData] = useState({
    username: "",
    email: "",
    password: "",

  })

  const mutation = useMutation({
    mutationFn: postSignIn,
    onSuccess: () => {
      ToastSuccess("Sign In Successfully!")
      navigate("../login")

    }
  })

  const handleInputs = ({ target }) => {
    setSignInData(prev => ({ ...prev, [target.name]: target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate({ username: signInData.username, email: signInData.email, password: signInData.password })
  }

  const handleError = () => {
    const tempMessage = mutation?.error?.response?.data?.error?.message
    if (tempMessage === "2 errors occurred") return <ErrorMessage message={"password must be at least 6 characters, and user name must be 3 at least!"}  />
    if (tempMessage) return <ErrorMessage message={tempMessage}  />
    return <ErrorMessage message={"oops! somthing went wrong in the server please try again."}  />
  }
  

  return (
    <>
      <form className='px-4 py-5' onSubmit={handleSubmit}>

        {mutation.isError && handleError()}
        <div className="field ">
          <label htmlFor="" className="">User Name</label>
          <div className="control has-icons-left">
            <input type="text" placeholder="user name" className="input"
              name="username"
              value={signInData.username}
              onChange={handleInputs}
              required
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="field ">
          <label htmlFor="" className="">Email</label>
          <div className="control has-icons-left">
            <input type="email" placeholder="e.g. email@gmail.com" className="input"
              autoComplete="email"
              name="email"
              value={signInData.email}
              onChange={handleInputs}
              required />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label htmlFor="" className="">Password</label>
          <div className="control has-icons-left">
            <input type="password" placeholder="*******" className="input"
              autoComplete="password"
              name="password"
              value={signInData.password}
              onChange={handleInputs}
              required />
            <span className="icon is-small is-left">
              <i className="fa fa-lock"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <button className={`button dark--bg--color light--text--color ${mutation.isLoading ? "Disabled is-loading" : " "}`} >
            sign in
          </button>
        </div>


      </form>
      </>
  )
}

export default Signin