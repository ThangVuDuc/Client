import React, { Component } from 'react';
import Header from '../components/Header'
import FooterPage from '../components/FooterPage'
import Banner from '../components/Banner'

class Shop extends Component {
      componentDidMount() {
        window.scrollBy({ 
            top: 600, // could be negative value
            left: 0, 
            behavior: 'smooth' 
          });
      }
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                    <div className="container-fluid details pb-3 pt-3">
                        <div className="container detailsStatus mt-3">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div className="avatarHost ">
                                                <img src="./images/1.jpg"  />
                                            </div>
                                            <div className="cart mt-3">
                                                <a ><i className="fas fa-shopping-cart" /></a>
                                            </div>
                                        </div>
                                        <div className="mainStatus col-md-10">
                                            <h4>
                                                <a >Chris</a>
                                            </h4>
                                            <h5>Mì xào</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis rem sunt minus. Tenetur deleniti fugit
                                              ea cum lorsafasdque eligendi expedita. Eveniet dignissimos isteng elit. Nemo veritatis rem sunt minus. Tenetur
                                              deleniti fugit ea cum lorsafasdque eligendi expedita. Eveniet dignissimos isteng elit. Nemo veritatis rem
                                              sunt minus. Tenetur deleniti fugit ea cum lorsafasdque eligendi expedita. Eveniet dignissimos iste est repellat
              repellendus voluptas necessitatibus iure adipisci.</p>
                                            <div className="foodShop">
                                                <div className="oneFood food1 mb-3">
                                                    <div className="foodImg">
                                                        <img src="./images/8.jpg"  />
                                                    </div>
                                                    <div className="foodName">Lục trà dưa hấu kem cheese</div>
                                                    <div className="minusFood">
                                                        <i className="fas fa-minus-square" name={1} />
                                                    </div>
                                                    <div className="quantity">0</div>
                                                    <div className="addFood">
                                                        <i className="fas fa-plus-square" name={1} />
                                                    </div>
                                                    <div className="foodPrice">20,000 đ</div>
                                                </div>
                                                <div className="oneFood food2 mb-3">
                                                    <div className="foodImg">
                                                        <img src="./images/9.jpg"  />
                                                    </div>
                                                    <div className="foodName">Trà Xanh Chanh</div>
                                                    <div className="minusFood">
                                                        <i className="fas fa-minus-square" name={2} />
                                                    </div>
                                                    <div className="quantity">0</div>
                                                    <div className="addFood">
                                                        <i className="fas fa-plus-square" name={2} />
                                                    </div>
                                                    <div className="foodPrice">20,000 đ</div>
                                                </div>
                                                <div className="oneFood food3 mb-3">
                                                    <div className="foodImg">
                                                        <img src="./images/10.jpg"  />
                                                    </div>
                                                    <div className="foodName"> Mojito Trà Xanh Cam Bưởi</div>
                                                    <div className="minusFood">
                                                        <i className="fas fa-minus-square" name={3} />
                                                    </div>
                                                    <div className="quantity">0</div>
                                                    <div className="addFood">
                                                        <i className="fas fa-plus-square" name={3} />
                                                    </div>
                                                    <div className="foodPrice">20,000 đ</div>
                                                </div>
                                            </div>
                                            <div className="expressBar mt-3">
                                                <i className="far fa-heart" />
                                                <i className="far fa-comment" />
                                            </div>
                                            <div className="container containerSlide">
                                                <div className="slide">
                                                    <div>
                                                        <div className="imgSlide" style={{ backgroundImage: 'url(./images/8.jpg)' }}>
                                                            <i className="fas fa-heart" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="imgSlide" style={{ backgroundImage: 'url(./images/9.jpg)' }}>
                                                            <i className="fas fa-heart" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="imgSlide" style={{ backgroundImage: 'url(./images/10.jpg)' }}>
                                                            <i className="fas fa-heart" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 Comment">
                                    <div className="oneComment row">
                                        <div className="col-md-1">
                                            <div className="avatarUserComment">
                                                <img src="./images/2.jpg"  />
                                            </div>
                                        </div>
                                        <div className="col-md-11">
                                            <a className="userNameComment">uruj mahdi </a>
                                            <span className="timeStamp">1 phút</span>
                                            <div className="userComment">Belo registro... harmoniosa imagem... Show.</div>
                                        </div>
                                    </div>
                                    <div className="oneComment row">
                                        <div className="col-md-1">
                                            <div className="avatarUserComment">
                                                <img src="./images/3.jpg"  />
                                            </div>
                                        </div>
                                        <div className="col-md-11">
                                            <a className="userNameComment">uruj mahdi </a>
                                            <div className="userComment">nice yar.</div>
                                        </div>
                                    </div>
                                    <div className="oneComment row">
                                        <div className="col-md-1">
                                            <div className="avatarUserComment">
                                                <img src="./images/1.jpg"  />
                                            </div>
                                        </div>
                                        <div className="col-md-11">
                                            <a className="userNameComment">uruj mahdi </a>
                                            <div className="userComment">u love u animal's.</div>
                                        </div>
                                    </div>
                                    <div className="oneComment row">
                                        <div className="col-md-1">
                                            <div className="avatarUserComment">
                                                <img src="./images/2.jpg"  />
                                            </div>
                                        </div>
                                        <div className="col-md-11">
                                            <a className="userNameComment">uruj mahdi </a>
                                            <div className="userComment">Belo registro... harmoniosa imagem... Show.</div>
                                        </div>
                                    </div>
                                    <div className="oneComment row">
                                        <div className="col-md-1">
                                            <div className="avatarUserComment">
                                                <img src="./images/2.jpg"  />
                                            </div>
                                        </div>
                                        <div className="col-md-11">
                                            <a className="userNameComment">uruj mahdi </a>
                                            <div className="userComment">Belo registro... harmoniosa imagem... Show.</div>
                                        </div>
                                    </div>
                                    <div className="oneComment row">
                                        <div className="col-md-1">
                                            <div className="avatarUserComment">
                                                <img src="./images/2.jpg"  />
                                            </div>
                                        </div>
                                        <div className="col-md-11">
                                            <a className="userNameComment">uruj mahdi </a>
                                            <div className="userComment">Belo registro... harmoniosa imagem... Show.</div>
                                        </div>
                                    </div>
                                    <div className="oneComment row">
                                        <div className="col-md-1">
                                            <div className="avatarUserComment">
                                                <img src="./images/2.jpg"  />
                                            </div>
                                        </div>
                                        <div className="col-md-11">
                                            <a className="userNameComment">uruj mahdi </a>
                                            <div className="userComment">Belo registro... harmoniosa imagem... Show.</div>
                                        </div>
                                    </div>
                                    <div className="oneComment row">
                                        <div className="col-md-1">
                                            <div className="avatarUserComment">
                                                <img src="./images/2.jpg"  />
                                            </div>
                                        </div>
                                        <div className="col-md-11">
                                            <a className="userNameComment">uruj mahdi </a>
                                            <div className="userComment">Belo registro... harmoniosa imagem... Show.</div>
                                        </div>
                                    </div>
                                    <div className="oneComment row">
                                        <div className="col-md-1">
                                            <div className="avatarUserComment">
                                                <img src="./images/2.jpg"  />
                                            </div>
                                        </div>
                                        <div className="col-md-11">
                                            <a className="userNameComment">uruj mahdi </a>
                                            <div className="userComment">Belo registro... harmoniosa imagemgistro... harmoniosa imagemgistro... harmoniosa imagemgistro... harmoniosa
                                              imagemgistro... harmoniosa imagemgistro... harmoniosa imagemgistro... harmoniosa imagemgistro... harmoniosa
              imagemgistro... harmoniosa imagemgistro... harmoniosa imagemgistro... harmoniosa imagem... Show.</div>
                                        </div>
                                    </div>
                                    <div className="oneComment  presentUserCM row">
                                        <div className="col-md-1 avatarUserCol">
                                            <div className="avatarUserComment avatarUser">
                                                <img src="./images/2.jpg"  />
                                            </div>
                                        </div>
                                        <div className="col-md-11">
                                            <textarea  cols={30} rows={10} className="userInputCM" placeholder="Thêm bình luận" defaultValue={""} />
                                            <div className="comment-arrow" />
                                            <button className="addComment">Bình luận</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container related mb-3">
                            <div className="container">
                                <h5>BÀI VIẾT KHÁC</h5>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="card otherNews">
                                            <img className="card-img-top" src="./images/4.jpg" />
                                            <div className="card-body">
                                                <a className="userOtherNews">crosa</a>
                                                <hr />
                                                <h5 className="foodOtherNews">Trà sữa Rsosaodoi ádfuikj</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card otherNews">
                                            <img className="card-img-top" src="./images/5.jpg" />
                                            <div className="card-body">
                                                <a className="userOtherNews">crosa</a>
                                                <hr />
                                                <h5 className="foodOtherNews">Trà sữa Rsosaodoi ádfuikj</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card otherNews">
                                            <img className="card-img-top" src="./images/6.jpg"  />
                                            <div className="card-body">
                                                <a className="userOtherNews">crosa</a>
                                                <hr />
                                                <h5 className="foodOtherNews">Trà sữa Rsosaodoi ádfuikj</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card otherNews">
                                            <img className="card-img-top" src="./images/7.jpg"  />
                                            <div className="card-body">
                                                <a className="userOtherNews">crosa</a>
                                                <hr />
                                                <h5 className="foodOtherNews">Trà sữa Rsosaodoi ádfuikj</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterPage />
            </div>


                );
            }
        }
        
export default Shop;