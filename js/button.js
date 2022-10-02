
checkStr = new Array("금지어1","금지어2","금지어3","금지어4");
limit = checkStr.length; // 금지어 배열의 갯수

function TextBox() {
	let answertemp = document.getElementById('answer').value;
	if(answertemp == ""){
		alert('응답을 적어주세요!');
	}
	else if(checkIt(answertemp, limit)) {
		alert('금지어입니다.');
	}
	else{
		var container = document.getElementById('container');// html에 있는 container id를 container에 부여
		
		let AnswerButton = document.createElement('button');
		AnswerButton.className = 'buttonStyle';
		AnswerButton.id = 'answerButton';
		container.appendChild(AnswerButton);

		
		var AnswerText = document.createTextNode(answertemp);
		AnswerButton.appendChild(AnswerText);

		var HeartText = document.createElement('heart');
		HeartText.className = 'heartStyle';
		HeartText.innerHTML = '&nbsp;<img src="img/heart.svg"/>';
		AnswerButton.appendChild(HeartText);

		document.getElementById('answer').value = ""; //입력 칸을 빈칸으로
	}
}
// 비속어 찾는 for문
function checkIt(v, l) {
 for(i=0;i<l;i++)
 {
  if(v.indexOf(checkStr[i]) != -1)
  {
   return 1;
  }
 }
 return 0;
}
// 특수문자 입력 방지
function characterCheck(obj){
	var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi; 
	// 허용할 특수문자는 여기서 삭제하면 됨
	// 지금은 띄어쓰기도 특수문자 처리됨 참고하셈
	if( regExp.test(obj.value) ){
		alert("특수문자는 입력하실수 없습니다.");
		obj.value = obj.value.substring( 0 , obj.value.length - 1 ); // 입력한 특수문자 한자리 지움
	}
}