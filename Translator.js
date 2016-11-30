window._mstAppId = 'TPvEkFj3mbZLKxpS8tnTLr25l0EM0mDTYbzkITfQGncI7otWvKTGWdmOW4oKgOShO';
window._mstToLang = 'zh-chs';

var sAppId = window._mstAppId || '';
var sToLang = window._mstToLang || 'en';

var sDocText = document.body.innerText || document.body.textContent || '';
var aDetectText = [];

if( window.location.host.indexOf('.de') > 0 ){
	var sDetectedLanguage1 = 'de';
}else if( window.location.host.indexOf('.jp') > 0 ){
	var sDetectedLanguage1 = 'ja';
} else if( window.location.host.indexOf('es') > 0 ) {
	var sDetectedLanguage1 = 'es';
}else{
	var sDetectedLanguage1 = 'en';
}

window._mstondetectcomplete = function (sDetectedLanguage)
{
	sDetectedLanguage = sDetectedLanguage || 'en';

	var eWidgetDiv = document.getElementById('MicrosoftTranslatorWidget');
	if (!eWidgetDiv)
	{
		var eWidgetDiv = document.createElement('div');
		eWidgetDiv.id = 'MicrosoftTranslatorWidget';
		eWidgetDiv.style.display = 'none';
		document.body.insertBefore(eWidgetDiv, document.body.firstChild);
	}

	var eWidgetScript = document.createElement('script');
	eWidgetScript.type = 'text/javascript';
	eWidgetScript.src = 'https://www.microsofttranslator.com/ajax/v2/widget.aspx?from=_' + sDetectedLanguage + '&toolbar=thin';
	document.body.insertBefore(eWidgetScript, document.body.firstChild);

	var nLoadTries = 0;
	var oLoadLoop = setInterval(function ()
	{
		++nLoadTries
		if (window.Microsoft && window.Microsoft.Translator)
		{
			clearInterval(oLoadLoop);
			Microsoft.Translator.translate(document.body, sDetectedLanguage, sDetectedLanguage == sToLang ? (sToLang == 'en' ? 'es' : 'en') : sToLang);
		}
		else if (nLoadTries > 10)
		{
			clearInterval(oLoadLoop);
		}
	}, 1000);
}

_mstondetectcomplete(sDetectedLanguage1);
