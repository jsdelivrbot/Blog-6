import React, { Component } from 'react';
import './Article.css';
import './Article-M.css';

class Article extends Component {
  render() {
    return (
      <div className="Article">
        {/* <h1 className="container-s container-m">Title goes here!!!</h1> */}
        <div className="articleCover" style={{backgroundImage: "url('http://www.book-a-flat.com/images/paris-salon-2.jpg')"}}>
          <h1 className="articleTitle container-s container-m" style={{color: 'teal'}}>This May Just Be The Best Article Ever</h1>
        </div>
        <AuthorCard />
        <div className="articleBody container-s container-m">
          <p className="articleText">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
          <p className="articleText">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          <img className="articleImg" src="https://st.hzcdn.com/simgs/310147a00df52168_4-8393/contemporary-deck.jpg" alt="Appartment roof"/>
          <p className="articleText">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
          <p className="articleText">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

        </div>
      </div>
    )
  }
}

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

export default Article;
