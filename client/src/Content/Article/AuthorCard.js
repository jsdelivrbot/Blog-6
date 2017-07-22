import React from 'react';
import './AuthorCard.css';
import './AuthorCard-M.css';

const AuthorCard = () => {
  return (
    <div className="AuthorCard shadow-dark ">
      <div className="authorCardPic" style={{backgroundImage: "url('https://s-media-cache-ak0.pinimg.com/736x/a2/e1/8c/a2e18cbfbcaa8756fe5b40f472eeff45--profile-picture-profile-pics.jpg')"}}>
      </div>
      <div className="authorCardInfo">
        <h3>Sam Esmall</h3>
        <h4>Jan 13, 2017</h4>
      </div>
    </div>
  )
}

export default AuthorCard;
