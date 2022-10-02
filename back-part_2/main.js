// // 사전에 필요한 패키지
// // 필요한 항목 : 체감온도 데이터(구현 완료) + 앞으로의 3시간의 데이터(구현 완료)
// // 7~12 까지의 데이터 추출 필요함
//
// // 사전에 필요한 패키지
const convert = require('xml-js');
const moment = require('moment');
const request = require("request");
const fs = require("fs");

// 데이터를 추출할 기준값인 날짜 4개를 변수에 저장
const nowDate = moment().format('YYYYMMDDHH00');
const oneHoursLaterDate = moment().add(1, 'h').format('YYYYMMDDHH00');
const twoHoursLaterDate = moment().add(2, 'h').format('YYYYMMDDHH00');
const threeHoursLaterDate = moment().add(3, 'h').format('YYYYMMDDHH00');


// 현재 데이터 + 앞으로의 3시간에 대한 데이터를 추출하기 위한 시간 데이터 배열 정의
var existableHoursArray = [nowDate, oneHoursLaterDate, twoHoursLaterDate, threeHoursLaterDate];


var url = 'http://apis.data.go.kr/3160000/guroPointFocInfoSvc/getGuro10PointFocInfoSvc';
var queryParams = '?' + encodeURIComponent('serviceKey') + '=XXsK%2F1XwVTPaVFfkrpoBQapqSlNiziqMMJJRcS549BH3B2gH1ph4mkRwBJgDbI20uZDnt9SiLbsVlFT5%2FAHCBQ%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('xml'); /* */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /* */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
var a = "{" + "\"" + "data" + "\"" + ":" + "[" + "{" + "\"" + "3hoursLater" + "\"" + ":";

// class main {
//
//
//     async updatePublicData() {
//
//     }
//     async updateData() {
//         request.get(url + queryParams, function (err, res, body) {
//
//                 if (res.statusCode === 200) {
//                     var selectedData = JSON.parse(convert.xml2json(body, {compact: true, spaces: 4}));
//
//
//                     var tmpData = JSON.parse(selectedData.response.body.items.item);
//                     for (let i = 0; i < tmpData.length; i++) {
//                         if ((JSON.parse(tmpData[i]['localCode']._text) === "GURO_F08")
//                             && (tmpData[i]['fcsDate']._text === existableHoursArray[0])) {
//                             a += "," + "\"" + "nowWeather" + "\"" + ":";
//                             a += JSON.stringify(tmpData[i]);
//                             a += "} ] }"; // 데이터 추가 전의 "{ [ {" 기호에 알맞게 대응되도록 "} ] }" 기호 추가
//                         }
//                         if ((tmpData[i]['localCode']._text === "GURO_F08")
//                             && (tmpData[i]['fcsDate']._text === existableHoursArray[1])) {
//
//                             a += "," + "\"" + "1hoursLater" + "\"" + ":";
//                             a += JSON.stringify(tmpData[i]); // 회대 지역(GURO_F08)의 내용만 추출하여 json 파일에 저장함
//                         }
//                         if ((tmpData[i]['localCode']._text === "GURO_F08")
//                             && (tmpData[i]['fcsDate']._text === existableHoursArray[2])) {
//                             a += "," + "\"" + "2hoursLater" + "\"" + ":";
//                             a += JSON.stringify(tmpData[i]);
//                         }
//                         if ((tmpData[i]['localCode']._text === "GURO_F08")
//                             && (tmpData[i]['fcsDate']._text === existableHoursArray[3])) {
//                             a += JSON.stringify(tmpData[i]);
//
//                         }
//                     }
//                     // fs.writeFileSync(".modified.json", this.a);
//
//                 }
//             }
//         );
//
//         return JSON.stringify(a);// 저장되는 데이터는 1시간 간격으로 업데이트 처리됨
//     }
// }
// console.log(a);
// module.exports = main;


// 사전에 필요한 패키지
// 필요한 항목 : 체감온도 데이터(구현 완료) + 앞으로의 3시간의 데이터(구현 완료)
// 7~12 까지의 데이터 추출 필요함

// 사전에 필요한 패키지
// let requests = require('request');
//
//
// let convert = require('xml-js');
// let fs = require('fs');
// let moment = require('moment');
//
// // 데이터를 추출할 기준값인 날짜 4개를 변수에 저장
// let nowDate = moment().format('YYYYMMDDHH00');
// let oneHoursLaterDate = moment().add(1, 'h').format('YYYYMMDDHH00');
// let twoHoursLaterDate = moment().add(2, 'h').format('YYYYMMDDHH00');
// let threeHoursLaterDate = moment().add(3, 'h').format('YYYYMMDDHH00');
//
// // 현재 데이터 + 앞으로의 3시간에 대한 데이터를 추출하기 위한 시간 데이터 배열 정의
// let existableHoursArray = [];
// existableHoursArray[0] = nowDate;
// existableHoursArray[1] = oneHoursLaterDate;
// existableHoursArray[2] = twoHoursLaterDate;
// existableHoursArray[3] = threeHoursLaterDate;

// let url = 'http://apis.data.go.kr/3160000/guroPointFocInfoSvc/getGuro10PointFocInfoSvc';
// let queryParams = '?' + encodeURIComponent('serviceKey') + '=XXsK%2F1XwVTPaVFfkrpoBQapqSlNiziqMMJJRcS549BH3B2gH1ph4mkRwBJgDbI20uZDnt9SiLbsVlFT5%2FAHCBQ%3D%3D'; /* Service Key*/
// queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('xml'); /* */
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /* */
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */


request.get(url + queryParams, (err, res, body) => {
    if (err) {
        console.log(`err => ${err}`);
    }
    else {
        if (res.statusCode === 200) {
            var result = body;
           var selectedData = JSON.parse(convert.xml2json(result, {compact:true, spaces: 4}));
            a += "{" +  "\"" + "data" + "\"" + ":" + "[" + "{" + "\"" + "3hoursLater" + "\"" +  ":";
            var tmpData = selectedData.response.body.items.item;

            for (let i = 0; i < tmpData.length; i++) {
                if ((tmpData[i]['localCode']._text === "GURO_F08")
                    && (tmpData[i]['fcsDate']._text === existableHoursArray[0])) {
                    a +="," + "\"" + "nowWeather" + "\"" +  ":";a += JSON.stringify(tmpData[i]);
                }
                if((tmpData[i]['localCode']._text === "GURO_F08")
                    && (tmpData[i]['fcsDate']._text === existableHoursArray[1])) {

                    a += "," + "\"" + "1hoursLater" + "\"" +  ":";a += JSON.stringify(tmpData[i]); // 회대 지역(GURO_F08)의 내용만 추출하여 json 파일에 저장함
                }
                if((tmpData[i]['localCode']._text === "GURO_F08")
                    && (tmpData[i]['fcsDate']._text === existableHoursArray[2])) {
                    a += "," + "\"" + "2hoursLater" + "\"" +  ":"; a += JSON.stringify(tmpData[i]);
                }
                if((tmpData[i]['localCode']._text === "GURO_F08")
                    && (tmpData[i]['fcsDate']._text === existableHoursArray[3])) {
                    a += JSON.stringify(tmpData[i]);
                }
            }
            a += "} ] }"; // 데이터 추가 전의 "{ [ {" 기호에 알맞게 대응되도록 "} ] }" 기호 추가

            fs.writeFileSync("/Users/hwangjaehyeon/Downloads/skhuweather.github.io-main 3/back-part_2/modified.json",a); // 저장되는 데이터는 1시간 간격으로 업데이트 처리됨
        }
    }
})
