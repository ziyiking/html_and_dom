function checkform(){
var score = 0;

  score += fill_in("blank1_1","统一建模语言");
  score += fill_in("blank2_1","封装性");
  score += fill_in("blank2_2","继承性");
  score += fill_in("blank2_3","多态性");
  score += fill_in("selection1","B");
  score += fill_in("selection2","A");
  score += ChoiceAnswer("choice3","ABD");
  score += ChoiceAnswer("choice4","ABC");
  score += ChoiceAnswer("judge1","NO");
  score += ChoiceAnswer("judge2","YES");
  score += fill_in("answer","模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。");
  checkblank("班级");
  checkblank("学号");
  checkblank("姓名");

  var goal = document.getElementById("score");
  goal.value = score;
  return false;
  }

function checkblank(id) {
  if(document.getElementById(id).value === '') {
    alert(id+"不能为空");
  }

}

function fill_in(id,value) {
   var score = 0;
   var blank = document.getElementById(id);
   if(blank.value === value) {
     score += 1;
   }
   return score;
}

function ChoiceAnswer(name, value) {

  var score = 0;
  var choice =document.getElementsByName(name);
  var string = "";

  for(var i = 0; i<choice.length; i++ ) {

    if(choice[i].checked) {

      string += choice[i].value;
    }
  }
  if(string === value) {
    score += 2;
  }
  return score;
}
