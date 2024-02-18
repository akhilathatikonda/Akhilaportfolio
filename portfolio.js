*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
*::selection{
    background: #B2B2B2;
}
html{
    scroll-behavior: smooth;
}
.max-width{
    max-width: 1300px;
    padding: 0 80px;
    margin: auto;
}

/* Navbar */

.navbar{
    position: fixed;
    width: 100%;
    background: palevioletred;
    padding: 30px 0;
    font-family: cursive;
    transition: all 0.3s ease;
    z-index: 999;
}
.navbar .sticky{
    background: grey;
    padding: 15px 0;
}
.navbar .max-width{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.navbar .logo a{
    color: #fff;
    font-size: 35px;
    font-weight: 600;
}
.navbar .menu li{
    list-style: none;
    display: inline-block;
}
.navbar .menu li a{
    display: block;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    margin-left: 25px;
    transition: color 0.3 ease;
}
.navbar .menu li a:hover{
    color: #B2B2B2;
}
.navbar .sticky .menu li a:hover{
    color: #fff;
}
/* menu-btn */
.menu-btn{
    color: #fff;
    font-size: 23px;
    cursor: pointer;
    display: none;
}

/* home */

.home{
    display: flex;
    background: url("portfolio\ home.png") no-repeat right;
    background-attachment: fixed;
    height: 100vh;
    color: black;
    min-height: 500px;
    font-family: cursive;
}
.home .max-width{
    margin: auto 0 auto 40px;
}
.home .home-content .text1{
    font-size: 27px;
}
.home .home-content .text2{
    font-size: 75px;
    font-weight: 600;
    margin-left: -3px;
}
.home .home-content .text3{
    font-size: 40px;
}
.home .home-content .text3 span{
    font-size: 40px;
    color: #B2B2B2;
}
.home .home-content a{
    display: inline-block;
    background: black;
    color: #fff;
    font-size: 25px;
    padding: 12px 36px;
    margin-top: 20px;
    border-radius: 8px;
    border: 2px solid turquoise;
    transition: all 0.3 ease;
}
.home .home-content a:hover{
    color: black;
    background: none;
}
.change_text:after{
    content: "";
    animation: changetext 10s infinite linear;
    color: black;
}
@keyframes changetext{
    0%{content: "Student";}
    20%{content: "Web Developer" ;}
    35%{content: "Designer";}
    60%{content: "Video Editor";}
    80%{content: "Content Writer";}
    100%{content: "Human";}
}

/* About */

section{
    padding: 100px 0;
}
.about, .skill, .services ,.contact{
    font-family: cursive;
}
section .title{
    color: black;
    font-family: cursive;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 60px;
    padding-bottom: 20px;
    position: relative;
}
section .title::before{
    content: "";
    position: absolute;
    width: 180px;
    height: 3px;
    background: #B2B2B2;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
}
section .title::after{
    position: absolute;
    font-size: 20px;
    color: palevioletred;
    background: #fff;
    bottom: -12px;
    left: 50%;
    padding: 5px;
    transform: translateX(-50%);
}
.about .about-content, .skill .skill-content,  .contact .contact-content{
    color: black;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.about .about-content .left{
    width: 45%;
}
.about .about-content .left img{
    height: 400px;
    width: 400px;
    object-fit: cover;
    border-radius: 6px;
}
.about .about-content .right{
    width: 55%;
}
.about .about-content .right .text{
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
}
.about .about-content .right .text span{
    color: palevioletred;
}
.about .about-content .right p{
    text-align: justify;
}
.about .about-content .right a{
    display: inline-block;
    background: palevioletred;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 30px;
    margin-top: 20px;
    border-radius: 8px;
    border: 2px solid palevioletred;
    transition: all 0.3s ease;
}
.about .about-content .right a:hover{
    color: black;
    background: none;
}

/* skills */

.skill .skill-content .column{
    width: calc(50% - 30px);
}
.skill .skill-content .left .text{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
}
.skill .skill-content .left p{
    text-align: justify;
}
.skill .skill-content .left a{
    display: inline-block;
    background: palevioletred;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 8px 16px;
    margin-top: 20px;
    border-radius: 8px;
    border: 2px solid palevioletred;
    transition: all 0.3s ease;
}
.skill .skill-content .left a:hover{
    color: palevioletred;
    background: none;
    color: #B2B2B2;
}
.skill .skill-content .right .bars{
    margin-bottom: 15px;
}
.skill .skill-content .right .info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
}
.skill .skill-content .right span{
    font-weight: 500;
    font-size: 18px;
}
.skill .skill-content .right .line{
    height: 5px;
    width: 100%;
    background: #B2B2B2;
    position: relative;
}
.skill .skill-content .right .line::before{
    content: "";
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background: palevioletred;
}
.skill-content .right .html::before{
    width: 90%;
}
.skill-content .right .css::before{
    width: 80%;
}
.skill-content .right .js::before{
    width: 70%;
}

/* Services */

.services{
    color: #fff;
    background: palevioletred;
}
.services .title::before{
    background: white;
}
.services.title::after{
    background: palevioletred;
    color:black;
}
.services .services-content{
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.services .services-content .card{
    width: calc(33% - 20px);
    background: #B2B2B2;
    text-align: center;
    border-radius: 8px;
    padding: 20px 25px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.services .services-content .card:hover{
    background: #fff;
    color: #B2B2B2;
}
.services .services-content .card .box{
    transition: all 0.3s ease;
}
.services .services-content .card:hover .box{
    transform: scale(1.05);
}
.services .services-content .card i{
    font-size: 50px;
    color: palevioletred;
    transition: color 0.3s ease;
}
.services .services-content .card .text{
    font-size: 25px;
    font-weight: 500;
    margin: 10px 0 7px 0;
}

/* contact */

.contact .contact-content .column{
    width: calc(50% - 30px);
}
.contact .contact-content .text{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
}
.contact .contact-content .left p{
    text-align: justify;
}
.contact .contact-content .left .icons{
    margin: 10px 0;
}
.contact .contact-content .row{
    display: flex;
    height: 65px;
    align-items: center;
}
.contact .contact-content .row .info{
    margin-left: 30px;
}
.contact .contact-content .row i{
    font-size: 25px;
    color: turquoise;
}
.contact .contact-content .info .head{
    font-weight: 500;
}
.contact .contact-content .info .sub-title{
    color: turquoise;
}
.contact .right form .fields{
    display: flex;
}
.contact .right form .field, .contact .right form .fields .field{
    height: 45px;
    width: 100%;
    margin-bottom: 15px;
}
.contact .right form .textarea{
    height: 80px;
    width: 100%;
}
.contact .right form .name{
    margin: 10px;
}
.contact .right form .email{
    margin: 10px;
}
.contact .right form .field input, .contact .right form .textarea textarea{
    height: 100%;
    width: 100%;
    border: 1px solid #B2B2B2;
    border-radius: 6px;
    outline: none;
    padding: 0 15px;
    font-size: 17px;
    font-family: cursive;
}
.contact .right form .textarea textarea{
    padding-top: 10px;
    resize: none;
}
.contact .right form .button{
    height: 47px;
    width: 170px;
}
.contact .right form .button button{
    width: 100%;
    height: 100%;
    border: 2px solid turquoise;
    background: turquoise;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.contact .right form .button button:hover{
    color: #B2B2B2;
    background: none;
}

/* footer */

footer{
    background: #B2B2B2;
    padding: 20px 23px;
    color: #fff;
}
footer span a{
    color: turquoise;
    text-decoration: none;
}
footer span a:hover{
    text-decoration: underline;
}



/* Media Queries */

@media (max-width : 1300px){
    .home .max-width{
        margin-left: 0px;
    }
}
@media (max-width : 1104px){
    .about .about-content .left img{
        height: 350px;
        width: 350px;
    }
}
@media (max-width : 991px){
    .max-width{
        padding: 0 50px;
    }
}
@media (max-width : 947px){
    .menu-btn{
        display: block;
        z-index: 999;
    }
    .menu-btn i.active:before{
        content: "\f00d";
    }
    .navbar .menu{
        position: fixed;
        background: turquoise;
        height: 100vh;
        width: 100%;
        left: -100%;
        top: 0;
        text-align: center;
        padding-top: 80px;
        transition: all 0.3s ease;
    }
    .navbar .menu.active{
        left: 0;
    }
    .navbar .menu li{
        display: block;
    }
    .navbar .menu li a{
        display: inline-block;
        margin: 20px 0;
        font-size: 25px;
    }
    .home .home-content .text2{
        font-size: 70px;
    }
    .home .home-content .text3{
        font-size: 35px;
    }
    .home .home-content a{
        font-size: 23px;
        padding: 10px 30px;
    }
    .max-width{
        max-width: 800px;
    }
    .about .about-content .column{
        width: 100%;
    }
    .about .about-content .left{
        display: flex;
        justify-content: center;
        margin: 0 auto 60px;
    }
    .about .about-content .right{
        flex: 100%;
    }
    .services .services-content .card{
        width: calc(50% - 10px);
        margin-bottom: 20px;
    }
    .skill .skill-content .column, .contact .contact-content.column{
        width: 100%;
        margin-bottom: 35px;
    }
}
@media (max-width : 690px){
    .max-width{
        padding: 0 23px;
    }
    .home .home-content .text2{
        font-size: 60px;
    }
    .home .home-content .text3{
        font-size: 32px;
    }
    .home .home-content a{
        font-size: 20px;
    } 
    .services .services-content .card, .skill .skill-content .column{
        width: 100%;
    }
}
@media (max-width : 500px){
    .home .home-content .text2{
        font-size: 60px;
    }
    .home .home-content .text3{
        font-size: 27px;
    }
}