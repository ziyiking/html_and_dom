function checkform(){
var score = 0;

  var fillIn1 = new Fillin("blank1_1","统一建模语言");
  //alert('rr');
  score += fillIn1.getscore();
  // var fillIn2 = new fill_in("blank2_1","封装性");
  // score += fillIn2.getscore();
  // var fillIn3 = new fill_in("blank2_2","继承性");
  // score += fillIn3.getscore();
  // var fillIn4 = new fill_in("blank2_3","多态性");
  // score += fillIn4.getscore();
  // var fillIn5 = new fill_in("selection1","B");
  // score += fillIn5.getscore();
  // var fillIn6 = new fill_in("selection2","A");
  // score += fillIn6.getscore();
  // var ChoiceAnswer1 = new ChoiceAnswer("choice3","ABD");
  // score += ChoiceAnswer1.getscore();
  // var ChoiceAnswer2 = new ChoiceAnswer("choice4","ABC");
  // score += ChoiceAnswer2.getscore();
  // var ChoiceAnswer3 = new ChoiceAnswer("judge","NO");
  // score += ChoiceAnswer3.getscore();
  // var ChoiceAnswer4 = new ChoiceAnswer("judge","YES");
  // score += ChoiceAnswer4.gChoiceAnswer4etscore();
  // var fillIn11 = new fill_in("judge","YES");
  // score += fillIn1.getscore("answer","模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。");
  //


  // score += new fill_in("blank2_1","封装性");
  // score += new fill_in("blank2_2","继承性");
  // score += new fill_in("blank2_3","多态性");
  // score += new fill_in("selection1","B");
  // score += new fill_in("selection2","A");
  // score += new ChoiceAnswer("choice3","ABD");
  // score += new ChoiceAnswer("choice4","ABC");
  // score += new ChoiceAnswer("judge1","NO");
  // score += new ChoiceAnswer("judge2","YES");
  // score += new fill_in("answer","模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。");
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

// function fill_in(id,value) {
//    var score = 0;
//    var blank = document.getElementById(id);
//    if(blank.value === value) {
//      score += 1;
//    }
//    return score;
// }

// function ChoiceAnswer(name, value) {
//
//   var score = 0;
//   var choice =document.getElementsByName(name);
//   var string = "";
//
//   for(var i = 0; i<choice.length; i++ ) {
//
//     if(choice[i].checked) {
//
//       string += choice[i].value;
//     }
//   }
//   if(string === value) {
//     score += 2;
//   }
//   return score;
// }
