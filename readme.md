## Microsoft-Translator

收藏便签网址

```
javascript:(function(){var s = document.createElement('script'); s.type = 'text/javascript'; s.src = 'https://anla.io/tao/tao.js'; document.body.insertBefore(s, document.body.firstChild);})()
```



把 `Translator.js` 发布到服务器上 

把如上收藏便签代码的 `https://anla.io/tao/tao.js` 改为服务器发布的地址

切记 `Translator.js` 存放的 `url` 地址一定是 `https` 协议


> 由于嵌入微软翻译的话 需要使用 `appId`，去微软站点申请

> 每个 `appId` 的翻译字节数有限制，可以申请多个 `appId` 定时更换

> 所以把配置文件放在了 服务器上，可以随时修改，而不需要每次让客户端修改


开发者 appID 申请

https://datamarket.azure.com/dataset/bing/microsofttranslator


bing翻译接口appID申请教程

http://blog.csdn.net/lilien1010/article/details/39931899


