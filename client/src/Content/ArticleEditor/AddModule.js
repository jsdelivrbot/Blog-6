import React, { Component } from 'react';
import './ArticleEditor.css';
import './ArticleEditor-M.css';

import AuthorCard from '../Article/AuthorCard';
import EditBar from './EditBar';
import noImg from './../../img/uploadImg.svg';

class ArticleEditor extends Component {
  render() {
    return (
      <div className="ArticleEditor">
        <EditBar />
        <div className="articleTitleContainer container-s container-m">
          <textarea defaultValue="Catchy Title Goes Here" className="articleTitleInput" rows='3'></textarea>
        </div>
        <div className="articleCover" style={{backgroundImage: "url(" + noImg + ")"}}>
        </div>
        <AuthorCard />
        <div className="articleBody container-s container-m">
          <p className="articleText">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
          <p className="articleText"></p>
          >
          <img className="articleImg" src="https://st.hzcdn.com/simgs/310147a00df52168_4-8393/contemporary-deck.jpg" alt="Appartment roof"/>
          <p className="articleText">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
          <div className="addModule">
           <h1>Add Modules</h1>
           <div className="addContainer">
             <h3>Header</h3>
             <p>Paragraph</p>
             <h4>Image</h4>
           </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ArticleEditor;
