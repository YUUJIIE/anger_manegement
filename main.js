'use strict' 
{
    var question1 = document.getElementsByName('q1');
    var question2 = document.getElementsByName('q2');
    var question3 = document.getElementsByName('q3');
    var question4 = document.getElementsByName('q4');
    var question5 = document.getElementsByName('q5');
    var question6 = document.getElementsByName('q6');
    var question7 = document.getElementsByName('q7');
    var question8 = document.getElementsByName('q8');
    var question9 = document.getElementsByName('q9');
    var question10 = document.getElementsByName('q10');
    var question11 = document.getElementsByName('q11');
    var question12 = document.getElementsByName('q12');

    var submit = document.getElementById('submit');
    var angerType = document.getElementById('anger-type');

    var q1;
    var q2;
    var q3;
    var q4;
    var q5;
    var q6;
    var q7;
    var q8;
    var q9;
    var q10;
    var q11;
    var q12;

    //ラジオボタンのValueを取得する
    function getq1() {
        for(var i = 0; i < question1.length; i++) {
            if(question1[i].checked == true) {
                q1 = question1[i].value;
            } 
        }
        return q1;        
    }

    function getq2() {
        for(var i = 0; i < question2.length; i++) {
            if(question2[i].checked == true) {
                q2 = question2[i].value;
            } 
        }
        return q2;        
    }

    function getq3() {
        for(var i = 0; i < question3.length; i++) {
            if(question3[i].checked == true) {
                q3 = question3[i].value;
            } 
        }
        return q3;        
    }

    function getq4() {
        for(var i = 0; i < question4.length; i++) {
            if(question4[i].checked == true) {
                q4 = question4[i].value;
            } 
        }
        return q4;        
    }

    function getq5() {
        for(var i = 0; i < question5.length; i++) {
            if(question5[i].checked == true) {
                q5 = question5[i].value;
            } 
        }
        return q5;        
    }

    function getq6() {
        for(var i = 0; i < question6.length; i++) {
            if(question6[i].checked == true) {
                q6 = question1[i].value;
                //console.log(question1[i].value);
            }
        return q6;
        }
    }
    
    function getq7() {
        for(var i = 0; i < question7.length; i++) {
            if(question7[i].checked == true) {
                q7 = question7[i].value;
            } 
        }
        return q7;        
    }

    function getq8() {
        for(var i = 0; i < question8.length; i++) {
            if(question8[i].checked == true) {
                q8 = question8[i].value;
            } 
        }
        return q8;        
    }

    function getq9() {
        for(var i = 0; i < question9.length; i++) {
            if(question9[i].checked == true) {
                q9 = question9[i].value;
            } 
        }
        return q9;        
    }

    function getq10() {
        for(var i = 0; i < question10.length; i++) {
            if(question10[i].checked == true) {
                q10 = question10[i].value;
            } 
        }
        return q10;        
    }

    function getq11() {
        for(var i = 0; i < question11.length; i++) {
            if(question11[i].checked == true) {
                q11 = question11[i].value;
            } 
        }
        return q11;        
    }

    function getq12() {
        for(var i = 0; i < question12.length; i++) {
            if(question12[i].checked == true) {
                q12 = question12[i].value;
            } 
        }
        return q12;        
    }

    //「診断する」をクリックすると結果を表示
    submit.addEventListener('click', () => {
        //質問結果を取得
    getq1();
    getq2();
    getq3();
    getq4();
    getq5();
    getq6();
    getq7();
    getq8();
    getq9();
    getq10();
    getq11();
    getq12();

    //診断結果を配列に格納
    var results = [];
    var typeA = parseInt(q1) + parseInt(q7);
    var typeB = parseInt(q2) + parseInt(q8);;
    var typeC = parseInt(q3) + parseInt(q9);;
    var typeD = parseInt(q4) + parseInt(q10);;
    var typeE = parseInt(q5) + parseInt(q11);;
    var typeF = parseInt(q6) + parseInt(q12);;

    results.push(typeA,typeB,typeC,typeD,typeE,typeF);
    console.log(results);

    //配列の最大値を取得
    var max = Math.max(...results);
    console.log(max);

    //最大値のインデックスを取得
    var resultsIndex = [];
    var index = results.indexOf(max);

    while(index !== -1) {
        resultsIndex.push(index);
        index= results.indexOf(max, index + 1);
    }
    console.log(resultsIndex);

    //インデックスから何タイプが表示する
    var angerTypes = [];

    for(var result in resultsIndex) {
        var types = ['A','B','C','D','E','F'];
        if(resultsIndex[result] == 0) {
            console.log(types[0]);
            angerTypes.push(types[0]);
        } else if(resultsIndex[result] == 1) {
            console.log(types[1]);
            angerTypes.push(types[1]);
        } else if(resultsIndex[result] == 2) {
            console.log(types[2]);
            angerTypes.push(types[2]);
        } else if(resultsIndex[result] == 3) {
            console.log(types[3]);
            angerTypes.push(types[3]);
        } else if(resultsIndex[result] == 4) {
            console.log(types[4]);
            angerTypes.push(types[4]);
        } else if(resultsIndex[result] == 5) {
            console.log(types[5]);
            angerTypes.push(types[5]);
        } 
    }
    angerType.textContent = angerTypes;
    });

}