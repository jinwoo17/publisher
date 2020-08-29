
// Ajax Common Function
function ajaxLoad(selector, frmName, callUrl, callback){
	var dataString = $("#"+frmName).serialize();

	if (callback) {
		$(selector).load(callUrl, dataString, callback);
	} else {
		$(selector).load(callUrl, dataString, function(data, textStatus, xhr){
			if (textStatus == 'success') {

			} else {
				if (xhr.status == 401) {
				} else if (xhr.status == 403) {
				}
				//alert(xhr.responseText);
				$(selector).html(xhr.responseText);
			}
		});
	}
}

function ajaxCall(selector, frmName, callUrl, callback) {
	var dataString = $("#"+frmName).serialize();

	$.ajax({
		type:"POST",
		url:callUrl,
		cache:false,
		async:false,
		dataType:"html",
		data:dataString,
		timeout:6000,
		success:function(data){
			if (selector !=="") {
				// 통신이 성공적으로 이루어졌을때 이 함수를 타게 된다.
				$(selector).html(data);
			}

			if (callback){
				callback;
			}

		},
		/*complete:function(data){
			//통신이 실패했어도 완료가 되었을때 이함수를 타게된다.
			// success 와 complete 둘 중 하나만 이용, 그렇지 않으면 두번실행
		},*/
		error:function(xhr, status, error){
			alert(xhr.responseText);
		}

	});
}

//loading
function showLoading() {
	var $loading = $("<div id='Loading' class='loading'><span class='fa fa-spinner fa-spin'></span></div>");

	if ($("#Loading").length == 0) {
		$loading.appendTo("body").show();
	}
}

function hideLoading() {
	if ($("#Loading").length > 0) {
		$("#Loading").hide();
	}
}

/*jQuery(document).ready(function(e) {
	// Loading
	$(window).ajaxStart(function() {
		showLoading();
	});
	$(window).ajaxError(function() {
		alert('ajax처리중 에러가 발생하였습니다!');
		showLoading();
	});
	$(window).ajaxStop(function() {
		hideLoading();
	});
});*/

/**** Common Check Functions ****/

//공백체크
function isNull(nval) {
   for (var i = 0 ; i < nval.length ; i++){
       tst = nval.substring(i,i+1)
       if ((tst != ' ')&&(tst != '\r')&&(tst != '\n')&&(tst != '\t')&&(tst != '\b')&&(tst != '\v')&&(tst != '\f')) {
          return false;
       }
   }
   return true;
}

// 허용문자체크
function isAllowStr(str, allowStr) {
   var i;
   var ch;

   for (i=0;i<str.length;i++) {
       ch = str.charAt(i);

       if (allowStr.indexOf(ch) < 0) {
          return false;
       }
   }

   return true;
}

//글자수제한
function getTextByte(text) {
	str = new String(text);
    var strLen = str.length;
    var strByte = 0;
    for (var i=0; i<strLen; i++) {
    	tmp = new String(str.charCodeAt(i));
        strByte++;
        if (tmp.length > 3) {
            strByte++;
        }
    }
    return strByte;
}

//숫자인지 체크
function isNumber(str) {
    var src = new String(str);
    var tar = true;
    var i, len=src.length;
    for (i=0; i < len; i++) {
        if ((src.charAt(i) < '0') || (src.charAt(i) > '9'))
            return false;
    }
    return true;
}

//숫자인지와 숫자의 길이 체크
function isNumLen(str,len) {
    var src = new String(str);
    var tar = true;
    var i

	if (src.length !== len) {
		return false;
	} else {
		for (i=0; i<len; i++) {
			if ((src.charAt(i) < '0') || (src.charAt(i) > '9')) {
				return false;
			}
		}
	}
	return true;
}

//숫자입력체크
function checkNumber(frmFld) {
   var comp="0123456789";
   var string = frmFld.value;
   var len = string.length;

   for (i=0;i<len;i++) {
      if (comp.indexOf(string.substring(i,i+1))<0) {
           alert("숫자로만 입력 가능합니다. 다시 입력해 주십시오");
           frmFld.value = "";
           frmFld.focus();
           return;
      }
   }
}

// Add Comma
function addComma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
 
// Del Comma
function delComma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}

//이미지인지체크
function isImage(sFileVal) {
	var fileExt = sFileVal.slice(sFileVal.indexOf(".")+1).toLowerCase();

	if (fileExt == "jpg" || fileExt == "png" || fileExt == "gif" || fileExt == "bmp") {
		return true;
	} else {
		return false;
	}
}

// Check ID 
function checkId(el) {
	var $el = $(el);
		
	if (isNull($el.val())) {
		alert("관리자 아이디를 입력해 주세요!");
		$el.focus();
		return false;
	}
		
	var idReg = /^[a-z]{1}[a-z0-9]{4,11}$/g;
	if (!idReg.test($el.val())) {
		alert("아이디는 첫글자 영문, 영문숫자조합 5~12자 이내이어야 합니다!");
		$el.val('');
		$el.focus();
		return false; 
	}	
	
	return true;
}

// Check Password 
function checkPwd(el1, el2) {
	var $el1 = $(el1);
	var $el2 = $(el2);
	
	if (isNull($el1.val())) {
		alert("비밀번호를 입력해 주세요!");
		$el1.focus();
		return false;
	}
	
	// 정규식 종류선택
	var pwdReg1 = /^[a-zA-Z]{1}[a-zA-z0-9]{4,11}$/g; //첫글자 영문 + 영문,숫자조합의 5~12자 이내 
	var pwdReg2 = /^([a-zA-Z])((?=.*\d)|(?=.*\W)).{4,11}$/  //첫글자 영문 대소문자, 최소 1개의 숫자 혹은 특수 문자를 포함한 5~12자
	var pwdReg3 = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{5,12}$/ // 5~12자 영문 대소문자, 최소 1개의 숫자 혹은 특수 문자를 포함

	
	if (!pwdReg2.test($el1.val())) {
		alert("비밀번호는 첫글자 영문자, 최소 1개의 숫자 혹은 특수문자를 포함한 5~12자 이내이어야 합니다!");
		$el1.val('');
		$el1.focus();
		return false;
	}
	
	if (isNull($el2.val())) {
		alert("비밀번호 확인을 입력해 주세요!");
		$el2.focus();
		return false;		
	}
	
	if ($el1.val() !== $el2.val()){
		alert("비밀번호가 일치하지 않습니다!");
		$el2.val('');
		$el2.focus();
		return false;
	}
	
	return true;
}

// 휴대폰번호 체크
function checkMphone (mn1, mn2, mn3) {
	var $mn1 = $(mn1);
	var $mn2 = $(mn2);
	var $mn3 = $(mn3);

	if (isNull($mn1.val())) {
		alert("휴대폰번호 첫째자리를 선택해 주세요!");
		$mn1.focus();
		return false;
	}

	if (isNull($mn2.val())) {
		alert("휴대폰번호 둘째자리를 입력해 주세요!");
		$mn2.focus();
		return false;
	} else if (!isNumLen($mn2.val(),4)){
		alert("정확한 휴대폰번호를 입력해 주세요!");
		$mn2.val('');
		$mn2.focus();
		return false;
	}

	if (isNull($mn3.val())) {
		alert("휴대폰번호 세째자리를 입력해 주세요!");
		$mn3.focus();
		return false;
	} else if (!isNumLen($mn3.val(),4)){
		alert("정확한 휴대폰번호를 입력해 주세요!");
		$mn3.val('');
		$mn3.focus();
		return false;
	}
	return true;
}


// 휴대폰번호 체크
function checkPhone (mn1, mn2, mn3) {
	var $mn1 = $(mn1);
	var $mn2 = $(mn2);
	var $mn3 = $(mn3);

	if (isNull($mn1.val())) {
		alert("전화번호 첫째자리를 선택해 주세요!");
		$mn1.focus();
		return false;
	}

	if (isNull($mn2.val())) {
		alert("전화번호 둘째자리를 입력해 주세요!");
		$mn2.focus();
		return false;
	}

	if (isNull($mn3.val())) {
		alert("전화번호 세째자리를 입력해 주세요!");
		$mn3.focus();
		return false;
	} else if (!isNumLen($mn3.val(),4)){
		alert("정확한 휴대폰번호를 입력해 주세요!");
		$mn3.val('');
		$mn3.focus();
		return false;
	}
	return true;
}
// 이메일선택
function selEmail(tObj, sObj) {	
	var emailVal = $(sObj).val();
	
	$(tObj).val(emailVal);
	
	if (emailVal !== "") {
		$(tObj).attr("readonly","true");
	} else {
		$(tObj).removeAttr("readonly");
	}
}

function checkEmail(str) {
	var regExp = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
	
	if (!regExp.test(str)) {
		return false;
	} else {
		return true;
	}
}



// 쿠키저장
function setCookie(cKey, cValue, cDateAdd) {
    var date = new Date();

    date.setDate(date.getDate() + cDateAdd);
    document.cookie = cKey + '=' + escape(cValue) + '; path=/; expires=' + date.toGMTString() + ";";
}

// 쿠키값 얻기
function getCookie(cKey) {
    var allcookies = document.cookie;
    var cookies = allcookies.split("; ");

    for (var i = 0; i < cookies.length; i++) {
        var keyValues = cookies[i].split("=");

        if (keyValues[0] == cKey) {
            return unescape(keyValues[1]);
        }
    }
    return "";
}

//쿠키값 삭제
function delCookie(cKey) {
	var today = new Date();

	today.setDate(today.getDate() - 1);
	document.cookie = cKey + "=; path=/; expires=" + today.toGMTString() + ";";
}


// Change Input File Path
function setFilePath(el) {
	var $el = $(el);
	
	$el.next(".input_filePath").val($el.val());
}

// Add Input File
function addFileInput(el, maxLen) {
	var $el = $(el);
	var $fileList = $el.closest(".input-fileList").prev(".fileList");
	var maxUploadLen = maxLen;
	var htmlStr;
	
	if ($fileList.length > 0) {
		maxUploadLen = maxUploadLen - $fileList.find("li").length;
	}
	
	if ($(".input-fileList li").length < maxLen) {
		var $fileList = $(".input-fileList");
		var uf = $(".input-fileList li").length + 1;
				
		htmlStr = "<li>\r\n"
				+ "	<label class='ui-input-file w385'>\r\n"
				+ "		<input type='file' name='sUpFile' id='sUpFile"+ uf +"' onChange=\"javascript:setFilePath(this)\" class='input_file'>\r\n"
				+ "		<input type='text' name='sUpFilePath' id='sUpFilePath"+ uf +"' class='input_filePath' readonly>\r\n"			
				+ "	</label>\r\n"
				+ "	<button type='button' onClick=\"javascript:delFileInput(this);\" class='btn btn-md btn-third btn_delFile'><span class='ico-only fa fa-minus'>첨부삭제</span></button>\r\n"
				+ "</li>"
				
		$fileList.append(htmlStr);

	} else {
		alert("한 게시물에 최대 " + maxLen + "개의 파일을 첨부하실수 있습니다!");
	}
}

// Delete Input File
function delFileInput(el) {	
	var $el = $(el);
	var $list = $el.closest(".input-fileList");
	 
	$el.parent("li").remove();
	
	$list.find("li").each(function(index, element) {
		$(this).find(".input_file").attr("id","sUpFile"+(index+1));
		$(this).find(".input_filePath").attr("id","sUpFilePath"+(index+1));
	});	
}

function goFileList() {
	var nbytes = 0;
	var oFiles = document.getElementById("RF_sUpFile").files;
	var tFiles = document.getElementById("RF_sAddFileList");

	//파일리스트 초기화
	tFiles.options.length = 0;

	if (oFiles.length <= 5) {
		for(var i=0; i<oFiles.length; i++) {
			 try {
				//tFiles.options.add(new Option(oFiles(i).name, oFiles(i).name));

				tFiles[tFiles.length] = new Option(oFiles[i].name + " ("+ oFiles[i].size +" bytes)", oFiles[i].name);
				nbytes += parseInt(oFiles[i].size);
			 } catch(e) {}
		}
		$("#AddFileInfo").html("( 총 <strong class='red'>"+ oFiles.length +"</strong> Files / <strong class='red'>"+ nbytes +"</strong> bytes )");
	} else {
		alert("최대 5개의 파일을 첨부하실수 있습니다!");
	}
}



// Window Popup
function winPop(url, name ,sWidth, sHight, sLeft, sTop, isScroll, isResize, isTool, isMenu) {
	window.open(url,name,'width='+sWidth+',height='+sHight+',left='+sLeft+',top='+sTop+',scrollbars='+isScroll+',resizable='+isResize+',toolbar='+isTool+',menubar='+isMenu+',location=no');
}

/* 파일 업로드 파일명 쓰기 */
/*$(document).ready(function(){
  var fileTarget = $('.upload-hidden');

    fileTarget.each(function() {
		$(this).on('change', function(){
			if(window.FileReader){
				var filename = $(this)[0].files[0].name;
			} else {
				var filename = $(this).val().split('/').pop().split('\\').pop();
			}

			$(this).siblings('.upload-name').val(filename);
		});
	});
});*/
function MaskPhon( obj ) { 

	obj.value =  PhonNumStr( obj.value ); 

} 

function PhonNumStr( str ){ 
	var RegNotNum  = /[^0-9]/g; 
	var RegPhonNum = ""; 
	var DataForm   = ""; 
	
	// return blank     
	if( str == "" || str == null ) return ""; 
	// delete not number
	str = str.replace(RegNotNum,''); 

	if( str.length < 4 ) return str; 

	if( str.length > 3 && str.length < 7 ) { 
	   	DataForm = "$1-$2"; 
		RegPhonNum = /([0-9]{3})([0-9]+)/; 
	} else if(str.length == 7 ) {
		DataForm = "$1-$2"; 
		RegPhonNum = /([0-9]{3})([0-9]{4})/; 
	} else if(str.length == 9 ) {
		DataForm = "$1-$2-$3"; 
		RegPhonNum = /([0-9]{2})([0-9]{3})([0-9]+)/; 	
	} else if(str.length == 8 ) {
		DataForm = "$1-$2-$3"; 
		RegPhonNum = /([0-9]{2})([0-9]{3})([0-9]+)/; 
	} else if(str.length == 10){ 
		if(str.substring(0,2)=="02"){
			DataForm = "$1-$2-$3"; 
			RegPhonNum = /([0-9]{2})([0-9]{4})([0-9]+)/; 
		}else{
			DataForm = "$1-$2-$3"; 
			RegPhonNum = /([0-9]{3})([0-9]{3})([0-9]+)/;
		}
	} else if(str.length > 10){ 
		DataForm = "$1-$2-$3"; 
		RegPhonNum = /([0-9]{3})([0-9]{4})([0-9]+)/; 
	} 
	
	//alert(RegPhonNum);
	while( RegPhonNum.test(str) ) {  
		str = str.replace(RegPhonNum, DataForm);  
	}
	return str; 
} 
