import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from 'react-router-dom';

const Navigation = () => {
  return (
    <BrowserRouter>
       <Route path="/" element={<Navigation />} />
       <Route path="users/*" element={<Users />} />
    </BrowserRouter>
  )
}

function Users() {
  
    return (
      <div>
        <nav>
          <Link to="me">My Profile</Link>
        </nav>
  
        <Routes>
          <Route path="user" element={<Users />} />
        </Routes>
      </div>
    );
  }

export default Navigation