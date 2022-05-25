import React from 'react'
import { Link } from 'react-router-dom';

const AuthNavbar = () => {
    const user = null
  return (
    <div>
        {user ? (
            <div>
                <img src={user.result.imageUrl} alt={user.result.name} />
                <div>First Letter: {user.result.name.charAt(0)}</div>
                <div>username: {user.result.name}</div>
                <button>Logout</button>
            </div>
        ) : <Link to="/auth">
                <button>Sign In</button>
            </Link>}
    </div>
  )
}

export default AuthNavbar