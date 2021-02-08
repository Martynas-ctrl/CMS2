import React from 'react';

function UserInfo(props) {

  // console.log(props.userproduct);
  return (
      <div className="col-sm-4">
          <div className="product_card" >
            <div className="card-body">
              <h5 className="card-title">Full Name: {props.userInfos.fullName}</h5>
              <p className="card-title">Age:  {props.userInfos.age}</p>
              <p className="card-title">Height: {props.userInfos.height}</p>
              <p className="card-title">Weight: {props.userInfos.weight}</p>
              <p className="card-title">Gender: {props.userInfos.gender}</p>
              <p className="card-title">Total Daily Calorie Intake: {props.userInfos.total} kcal</p>
            </div>
          </div>
      </div>
  );
}
export default UserInfo;

//Skicka iden härifrån till edit modal komponenten.