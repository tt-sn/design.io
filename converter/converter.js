function convert( obj ){

    var textData = Box_form.textbox.value; //フォームからの入力を受け付ける
    var vData = obj.title;  //どのボタンから押されたか識別

    //alert(vData);
    //半角→全角 : 1
    //全角→半角 : 2
    //かな→カナ : 3　
    //カナ→かな : 4　一旦全角に変換してから再度変換

    if      (vData == 1){ textData = Half_Width(textData);}
    else if (vData == 2){ textData = Full_Width(textData);}
    else if (vData == 3){ textData = KanaFullHalfconverter(textData , 3);}
    else if (vData == 4){ textData = Full_Width(textData);
                          textData = KanaFullHalfconverter(textData , 4);}

    document.getElementById("Output").value = textData;
}

function toBig(){
let textData = Box_form.textbox.value;
let afterText = textData.toUpperCase();
document.getElementById("Output").value = afterText;
}

function toSmall(){
var textData = Box_form.textbox.value;
var afterText = textData.toLowerCase();
document.getElementById("Output").value = afterText;
}

function insertMark(){
    let beforeText = Box_form.textbox.value; //フォームからの入力を受け付ける
    let afterText = "";

    let a = beforeText.replace(/\r\n|\r|\n/g,'%SP');

    for(let i = 0;i < a.length; i++){
        if(a.charAt(i)=="%"){
            if(a.charAt(i+1)=="S"){
                if(a.charAt(i+2)=="P"){
                    afterText += "%SP";
                    i+=3;
                }
            }
        }
        afterText += a.charAt(i); //i文字目を抽出
        afterText += "゛";
    }
    alert(afterText);
    a = afterText.replace(/%SP/g,'\n');

    document.getElementById("Output").value = a;
}

function insertSpace(){
    let beforeText = Box_form.textbox.value; //フォームからの入力を受け付ける
    let afterText = "";

    for(let i = 0;i < beforeText.length; i++){
        afterText += beforeText.charAt(i); //i文字目を抽出
        if(beforeText.charAt(i) != /[^\r\n] * (\r\n|\r|\n|$)/g){
            afterText += " ";
        }
    }
    document.getElementById("Output").value = afterText;
}

function deleatSpace(){
    let beforeText = Box_form.textbox.value; //フォームからの入力を受け付ける
    let a = beforeText.replace(/\r\n|\r|\n/g,'<gg>');
    let c = a.replace(/\s+/g , "");
    a = c.replace(/<gg>/g,'\n');
    
    let afterText = "";
    afterText = a;
    document.getElementById("Output").value = afterText;
}

//半角へのプログラム
function Half_Width(text){      
    text = text.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) - 65248);
    }); 
    //16進数の場合
    text = text.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
});
    text = KanaFullHalfconverter(text , 1);
    return text;
}

//全角へのプログラム
function Full_Width(text){
    //10進数の場合
    text = text.replace(/[A-Za-z0-9]/g, (s) => {
        return String.fromCharCode(s.charCodeAt(0) + 65248);
    });
    //16進数の場合
    text = text.replace(/[A-Za-z0-9]/g, (s) => {
        return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
    });
    text = KanaFullHalfconverter(text , 2);
    return text;
}

function KanaFullHalfconverter(beforeText , vData){
    let Full = new Array(
       'ア','イ','ウ','エ','オ','カ','キ','ク','ケ','コ'
      ,'サ','シ','ス','セ','ソ','タ','チ','ツ','テ','ト'
      ,'ナ','ニ','ヌ','ネ','ノ','ハ','ヒ','フ','ヘ','ホ'
      ,'マ','ミ','ム','メ','モ','ヤ','ヰ','ユ','ヱ','ヨ'
      ,'ラ','リ','ル','レ','ロ','ワ','ヲ','ン'
      ,'ガ','ギ','グ','ゲ','ゴ','ザ','ジ','ズ','ゼ','ゾ'
      ,'ダ','ヂ','ヅ','デ','ド','バ','ビ','ブ','ベ','ボ'
      ,'パ','ピ','プ','ペ','ポ'
      ,'ァ','ィ','ゥ','ェ','ォ','ャ','ュ','ョ','ッ'
      ,'゛','°','、','。','「','」','ー','・'
    );
   
    let Half = new Array(
       'ｱ','ｲ','ｳ','ｴ','ｵ','ｶ','ｷ','ｸ','ｹ','ｺ'
      ,'ｻ','ｼ','ｽ','ｾ','ｿ','ﾀ','ﾁ','ﾂ','ﾃ','ﾄ'
      ,'ﾅ','ﾆ','ﾇ','ﾈ','ﾉ','ﾊ','ﾋ','ﾌ','ﾍ','ﾎ'
      ,'ﾏ','ﾐ','ﾑ','ﾒ','ﾓ','ﾔ','ｲ','ﾕ','ｴ','ﾖ'
      ,'ﾗ','ﾘ','ﾙ','ﾚ','ﾛ','ﾜ','ｦ','ﾝ'
      ,'ｶﾞ','ｷﾞ','ｸﾞ','ｹﾞ','ｺﾞ','ｻﾞ','ｼﾞ','ｽﾞ','ｾﾞ','ｿﾞ'
      ,'ﾀﾞ','ﾁﾞ','ﾂﾞ','ﾃﾞ','ﾄﾞ','ﾊﾞ','ﾋﾞ','ﾌﾞ','ﾍﾞ','ﾎﾞ'
      ,'ﾊﾟ','ﾋﾟ','ﾌﾟ','ﾍﾟ','ﾎﾟ'
      ,'ｧ','ｨ','ｩ','ｪ','ｫ','ｬ','ｭ','ｮ','ｯ'
      ,'ﾞ','ﾟ','､','｡','｢','｣','ｰ','･'
    );

    let Kana = new Array(
       'あ','い','う','え','お','か','き','く','け','こ'
      ,'さ','し','す','せ','そ','た','ち','つ','て','と'
      ,'な','に','ぬ','ね','の','は','ひ','ふ','へ','ほ'
      ,'ま','み','む','め','も','や','い','ゆ','え','よ'
      ,'ら','り','る','れ','ろ','わ','を','ん'
      ,'が','ぎ','ぐ','げ','ご','ざ','じ','ず','ぜ','ぞ'
      ,'だ','ぢ','づ','で','ど','ば','び','ぶ','べ','ぼ'
      ,'ぱ','ぴ','ぷ','ぺ','ぽ'
      ,'ぁ','ぃ','ぅ','ぇ','ぉ','ゃ','ゅ','ょ','っ'
      ,'゛','°','、','。','「','」','ー','・'
    );

    //変換後の文字を格納する
    let afterText = "";

    //全角→半角
    if(vData ==  1){
        for (let i=0;i<beforeText.length;i++){
            let firstWord = beforeText.charAt(i); //i文字目を抽出
            let index = Full.indexOf(firstWord); //構造体から場所を見つけてくる
            if(index >= 0){
                firstWord = Half[index]; //見つけた番号を半角から見つけ格納
            }
            afterText += firstWord;
        }
    }
    //半角→全角
    else if(vData == 2){
        for (let i=0;i<beforeText.length;i++){
            let firstWord = beforeText.charAt(i); //1文字目を抽出
            let index = Half.indexOf(firstWord); //構造体から場所を見つけてくる
            if(index >= 0){
                firstWord = Full[index]; //見つけた番号を半角から見つけ格納
            }
            afterText += firstWord;
        }
    }
    //かな→カナ
    else if(vData == 3){
        for (let i=0;i<beforeText.length;i++){
            let firstWord = beforeText.charAt(i); //1文字目を抽出
            let index = Kana.indexOf(firstWord); //構造体から場所を見つけてくる
            if(index >= 0){
                firstWord = Full[index]; //見つけた番号を半角から見つけ格納
            }
            afterText += firstWord;
        }
    }
    //カナ→かな
    else if(vData == 4){
        for (let i=0;i<beforeText.length;i++){
            let firstWord = beforeText.charAt(i); //1文字目を抽出
            let index = Full.indexOf(firstWord); //構造体から場所を見つけてくる
            if(index >= 0){
                firstWord = Kana[index]; //見つけた番号を半角から見つけ格納
            }
            afterText += firstWord;
        }
    }
    return afterText;
}