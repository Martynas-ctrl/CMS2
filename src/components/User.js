import { useQuery } from '@apollo/client';
import USERS_QUERY from './UserQuery';
import Userinfo from './UserInfo';



import {React, useState, useEffect} from 'react'


function User () {

const [user, setUser] = useState([]);
const { loading, error, data } = useQuery(USERS_QUERY);
// console.log(USERS_QUERY);
console.log(data);
const getDatas = () => {
  if(loading) 
      return <p>Loading user...</p>
  if(error)
      return <p>Error ...</p>
  if(data) {
      setUser(data.userInfos)
      // console.log(data);
  }
} 
   
useEffect(() => {
  getDatas();
  console.log(user);
})

     return (
          <div>
            <div className="container mt-4">
                <div className="row">
                    {user.map(userInfos => <Userinfo key={userInfos.id} userInfos={userInfos} />)}
                </div>
              </div>
            </div>
          )
}

      

export default User;