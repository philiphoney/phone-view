var model = "";
select("iPhone_14_pro");
newView();
function newView() {
  var input = document.getElementById("input").value;
  if (input == "") {
    console.log("start")
    document.getElementById("iframe").src = './src/index.html';
    document.getElementById("view-bar").style = 'background-color: black';
    

  } else {
    document.getElementById("iframe").src = input;
    document.getElementById("view-bar").style = 'background-color: white';
  }
}

document.addEventListener('keydown', (event) => {
  const keyCode = event.key;
  if(event.keyCode == 13){
      select();
    newView();
  }
  });

function select() {
  var element = document.getElementById('select-theme');
  var select_value = element.options[element.selectedIndex].value;
  createModel(select_value);
 }

function createModel(model) {
  console.log(model)
  if (model == "iPhone_14_pro") {
document.getElementById("view").innerHTML = `
<style> #view-bar {    padding-top: 50px;    display: flex;    width: 500px;    justify-content: space-around;    background-color: white;}#view-phone {    width: 500px;    justify-content: center;    display: flex;    position: absolute;    z-index: 5;} #view-ifram {    padding-top: 90px;    height: 900.7px;    display: flex;;    z-index: 10;    position: absolute;    justify-content: center;}iframe {    background-color: white;    border-radius: 0px 0px 60px 60px;    width: 447.3px;}#time {    padding-left: 30px;    font-size: 20px;    font-family: Arial, Helvetica, sans-serif;    font-weight: bolder;    padding-bottom: 20px;}#status-bar-hero {  width: 100px;  padding-left: 90px}
</style>
<img id="view-phone" src="./phonemodels/IPhone_14_Pro.png" alt="">
<div id="view-bar"><div id="time"><span class="moodyTime"></span></div><div><img id="status-bar-hero" src="./phonemodels/status-bar-hero.png" alt=""></div></div>
<div id="view-ifram">
<iframe id="iframe" src="./src/index.html" frameborder="0"></iframe>
</div>
`}

if (model == "galaxy_a11") {
document.getElementById("view").innerHTML = `
<style> #view-bar {padding-top: 40px;    display: flex;    width: 402px;    justify-content: space-around;    background-color: white; }#view-phone {    width: 450px;    justify-content: center;    display: flex;    position: absolute;    z-index: 5;} #view-ifram {    padding-top: 73px;    height: 848.9px;    display: flex;;    z-index: 10;    position: absolute;    justify-content: center;}iframe {    background-color: white;    border-radius: 0px 0px 40px 40px;    width: 402px;}#time {    padding-left: 60px;    font-size: 20px;    font-family: Arial, Helvetica, sans-serif;    font-weight: bolder;    padding-bottom: 10px;}#status-bar-hero {  width:50px;  padding-left: 230px}
</style>
<img id="view-phone" src="./phonemodels/galaxy_a11.png" alt="">
<div id="view-bar"><div id="time"><span class="moodyTime"></span></div><div><img id="status-bar-hero" src="./phonemodels/status-bar-hero-android.png" alt=""></div></div>
<div id="view-ifram">
<iframe id="iframe" src="./src/index.html" frameborder="0"></iframe>
</div>
`}

}