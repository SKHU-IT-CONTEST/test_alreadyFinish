function loadJSON()
{
    const url = 'http://152.67.207.160:32023/api/schoolNotice';
    const baseurl = "https://lms.skhu.ac.kr/ilos/community/notice_view_form.acl?ARTL_NUM=";
    let tag = ['current', 'next', 'prev'];
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let next = document.querySelector('.rollingbanner ul');

	    for(let i = 0; i < 8; i++){
        let fin = document.createElement('li');
		let A = document.createElement('a');
		let createAText = document.createTextNode(data["" + i]["title"]);
        A.href = baseurl + data["" + i]["num"]
        target= "_blank";
        if(i == 0 || i == 1 || i == 7){
            fin.className = tag[0];
            tag.shift();
        } 
		A.appendChild(createAText);
        fin.appendChild(A);
        next.appendChild(fin);
	}
        
    });
}