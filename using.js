*{
    box-sizing: border-box;
}

body{
    margin: 0;
    min-width: 320px;
    font-family: Gideon Roman;
    color: #533a2e;
    background-color:blanchedalmond;
}
img{
    display: block;
    width: 100px;
}
.navigate{
    display: flex;
    flex-flow: row wrap;
    font-size: 20px;
    list-style: none;
    margin: 0;
}
.navigate a {
    text-decoration: none;
    display: block;
    padding: 1em;
    font-size: 20px;
    font-weight: bold;
}
.navigate a:hover{
    color: #533a2e;
}
.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.3 s ease-out;
    padding: 5px 0;
    z-index: 999;
    color: darkred;
}
.header a{
    color: darkred;
}
.header_active{
    background: #FFF9B6;
}
.header_active a{
    color: #FEE440;
}
.logo-wrap img{
    width: 60px;
}
.logo-wrap{
    width: 100px;
    height: auto;
}
.wrap{

    max-width: 960px;
    padding: 0 15 px;
}
.flex{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
}
.table{
    font-size: x-large;
}
h3{
    text-align: center;
}
article {
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
}

footer {
    display: flex;
    justify-content: center;
    padding: 5px;
    background-color:burlywood;
    color: #fff;
}
li {
    list-style-type: none;
   }
ul {
    margin-left: 0; 
    padding-left: 0; 
}
.img1{
    width: 50px;
    height: 50px;
}
.img2{
    width: 50px;
    height: 50px;
}

.f-image{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
.f-image img{
    margin: 20px;
}
h1{
    text-align: center;
}
h2{
    text-align: center;
}
#img5{
    height: 350px;
    width: 350px;
}
.as{
    font-size: 25px;
}
.d-block{
    height: 700px;
}
