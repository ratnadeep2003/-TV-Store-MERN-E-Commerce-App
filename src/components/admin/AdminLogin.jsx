import React, { useEffect, useState } from 'react'
import { useFetcher, useNavigate } from 'react-router-dom';

function AdminLogin() {
  let navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let adminLogin = localStorage.getItem("isLoggedIn");
    // console.log(adminLogin);
    if (adminLogin) {
      navigate('/admin')
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (userId === "admin" && password === "admin") {
      localStorage.setItem("isLoggedIn", true)
      navigate("/admin")
    } else {
      alert("Invalid userId and password")
      setUserId("");//to make them blank again
      setPassword("");//to make them blank again
    }
  }
  return (
    <>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className='container mt-5'>
            <form>
              <div data-mdb-input-init class="form-outline mb-4">
                <input value={userId} onChange={(e) => { setUserId(e.target.value) }} type="text" name='email' id='userId' placeholder='abc' class="form-control" />
                <label class="form-label" for="form2Example1">USer Id</label>
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" name='password' id="password" class="form-control" />
                <label class="form-label" for="form2Example2">Password</label>
              </div>
              <div class="row mb-4">
                <a href="https://69e7305c68208c1debe87291.mockapi.io/password" style={{ textAlign: "center" }}>Forgot password?</a>
              </div>
              <div className="text-center">
                <button onClick={handleSubmit} type="button" className="btn btn-primary">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </>
  )
}

export default AdminLogin
