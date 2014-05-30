// Generated by CoffeeScript 1.4.0
(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1},n={}.hasOwnProperty,r=function(e,t){function i(){this.constructor=e}for(var r in t)n.call(t,r)&&(e[r]=t[r]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e};window.NAN.maximumNumber=1e8,NAN.NumberSet=function(){function n(){this.listFilter=e(this.listFilter,this),this.getDescription=e(this.getDescription,this),this.lengthFilter=e(this.lengthFilter,this),this.description="Interesting Number",this.numbers=[],this.filters=[],this.addFilter(this.lengthFilter)}return n.prototype.lengthFilter=function(e){return console.log(34333333333),console.log(this.minLength),this.minLength&&e.length<this.minLength?{score:0,description:"略短的"}:!0},n.prototype.getDescription=function(){return this.description},n.prototype.listFilter=function(e){var n;return(n=parseInt(e),t.call(this.numbers,n)>=0)?!0:null},n.prototype.primeFilter=function(e){var t;e=parseInt(e);if(e===2)return!0;if(e<2)return null;t=2;while(t*t<=e){if(e%t===0)return null;t+=1}return!0},n.prototype.addFilter=function(e){return this.filters.push(e)},n.prototype.evaluate=function(){return console.log("!!!!")},n.prototype.sqrtEvalutor=function(e){return 100+Math.sqrt(parseInt(e),1)},n.prototype.lengthEvalutor=function(e){return 10*Math.pow(e.length,1)},n.prototype.lengthEvalutor2=function(e){return 10*Math.pow(e.length,1)},n.prototype.lengthEvalutor3=function(e){return 10*Math.pow(e.length,1)},n.prototype.logEvalutor=function(e){return 30+Math.pow(Math.log(parseInt(e)),2.5)},n.prototype.analyze=function(e){var t,n,r,i,s,o;r={score:1,description:""},o=this.filters;for(i=0,s=o.length;i<s;i++){t=o[i],n=t(e),console.log(n);if(n===null)return null;if(n===!0)continue;r.score*=n.score,r.description+=n.description}return console.log(r),r.score*=this.evaluate(e),r.description+=this.getDescription(),console.log(r),r},n}(),NAN.PrimeNumberSet=function(e){function t(){t.__super__.constructor.call(this),this.description="质数",this.addFilter(this.primeFilter),this.evaluate=this.logEvalutor}return r(t,e),t}(NAN.NumberSet),NAN.PureOddNumberSet=function(e){function t(){t.__super__.constructor.call(this),this.description="纯奇数",this.minLength=4,this.addFilter(this.filter),this.evaluate=this.lengthEvalutor}return r(t,e),t.prototype.filter=function(e){var t,n,r;for(n=0,r=e.length;n<r;n++){t=e[n];if(parseInt(t)%2===0)return null}return{score:1,description:""}},t}(NAN.NumberSet),NAN.PureEvenNumberSet=function(e){function t(){t.__super__.constructor.call(this),this.description="纯偶数",this.minLength=4,this.addFilter(this.filter),this.evaluate=this.lengthEvalutor}return r(t,e),t.prototype.filter=function(e){var t,n,r;for(n=0,r=e.length;n<r;n++){t=e[n];if(parseInt(t)%2===1)return null}return{score:1,description:""}},t}(NAN.NumberSet),NAN.PureNumberSet=function(e){function t(){t.__super__.constructor.call(this),this.description="纯数",this.minLength=3,this.addFilter(this.filter),this.evaluate=this.lengthEvalutor2}return r(t,e),t.prototype.filter=function(e){var t,n,r;for(n=0,r=e.length;n<r;n++){t=e[n];if(t!==e[0])return null}return{score:1,description:""}},t}(NAN.NumberSet),NAN.APNumberSet=function(t){function n(){this.filter=e(this.filter,this),n.__super__.constructor.call(this),this.description="等差数列数",this.minLength=3,this.addFilter(this.filter),this.evaluate=this.lengthEvalutor2}return r(n,t),n.prototype.filter=function(e){var t,n,r,i,s;if(e.length<3)return null;t=-1;for(n=i=0,s=e.length-1;0<=s?i<s:i>s;n=0<=s?++i:--i){r=e[n+1]-e[n];if(r===0)return null;if(t===-1)t=r;else if(t!==r)return null}return!0},n}(NAN.NumberSet),NAN.WaveNumberSet=function(t){function n(){this.filter=e(this.filter,this),n.__super__.constructor.call(this),this.description="波浪数",this.minLength=3,this.addFilter(this.filter),this.evaluate=this.lengthEvalutor2}return r(n,t),n.prototype.filter=function(e){var t,n,r,i,s;if(e.length<3)return null;n=0;for(t=i=0,s=e.length-1;0<=s?i<s:i>s;t=0<=s?++i:--i){r=e[t+1]-e[t];if(Math.abs(r)!==1)return null;if(n!==0&&r+n!==0)return null;n=r}return!0},n}(NAN.NumberSet),NAN.PowerNumberSet=function(e){function t(){t.__super__.constructor.call(this)}return r(t,e),t.prototype.analyze=function(e){var t,n,r,i,s,o,u,a;e=parseInt(e),u=function(){a=[];for(s=2;s<=100;s++)a.push(s);return a}.apply(this).reverse();for(i=0,o=u.length;i<o;i++){n=u[i],t=Math.round(Math.pow(e,1/n)),r=""+n+"次方",n===2&&(r="平方"),n===3&&(r="立方");if(Math.pow(t,n)===e)return{score:n*n*t,description:""+t+"的"+r}}return null},t}(NAN.NumberSet),NAN.CloseToSomePowerOf2NumberSet=function(e){function t(){var e,n=this;t.__super__.constructor.call(this),this.description="接近2的幂",e=1;while(e<NAN.maximumNumber)this.numbers.push(e+1),this.numbers.push(e-1),e*=2;this.filters=[this.listFilter],this.evaluate=function(e){return n.sqrtEvalutor(e)/4}}return r(t,e),t}(NAN.NumberSet),NAN.FactorialNumberSet=function(e){function t(){var e,n,r,i=this;t.__super__.constructor.call(this),this.description="阶乘数",e=1;for(n=r=1;r<=100;n=++r){e*=n;if(e>=NAN.maximumNumber)break;this.numbers.push(e)}this.filters=[this.listFilter],this.evaluate=function(e){return i.sqrtEvalutor(e)}}return r(t,e),t}(NAN.NumberSet),NAN.HundredNumberSet=function(e){function t(){var e,n,r,i,s,o=this;t.__super__.constructor.call(this),this.description="除了开头全是0",e=1;for(r=i=1;i<=1e3;r=++i){e*=10;for(n=s=1;s<=9;n=++s){if(e*n>=NAN.maximumNumber)break;this.numbers.push(e*n)}}this.filters=[this.listFilter],this.evaluate=function(e){return o.sqrtEvalutor(e)}}return r(t,e),t}(NAN.NumberSet),NAN.AutomorphicNumberNumberSet=function(e){function t(){var e=this;t.__super__.constructor.call(this),this.description="自守数",this.addFilter(function(e){return Math.pow(parseInt(e),2).toString().reverse().indexOf(e.reverse())===0?!0:null}),this.evaluate=this.sqrtEvalutor}return r(t,e),t}(NAN.NumberSet),NAN.FibonacciNumberSet=function(e){function t(){var e,n,r,i,s,o=this;t.__super__.constructor.call(this),this.description="Fibonacci数",e=0,n=1;for(i=s=1;s<=1e3;i=++s){r=e+n,e=n,n=r;if(e>=NAN.maximumNumber)break;this.numbers.push(e)}this.filters=[this.listFilter],this.evaluate=function(e){return Math.pow(parseInt(e),.6)}}return r(t,e),t}(NAN.NumberSet),NAN.PalindromicNumberSet=function(e){function t(){this.description="回文数",this.evaluate=this.sqrtEvalutor,this.addFilter(function(e){return e.split("").reverse().join("")===e?!0:null})}return r(t,e),t}(NAN.NumberSet),NAN.prefixNumberSet=function(e){function t(){this.numbers=[],this.newNumber({number:"31415926535",description:"圆周率",score:60}),this.newNumber({number:"2718281828",description:"自然常数e",score:60}),this.newNumber({number:"1414213562",description:"根号2",score:40})}return r(t,e),t.prototype.newNumber=function(e){return this.numbers.push({number:e.number,description:e.description,score:e.score})},t.prototype.getResult=function(e){var t,n,r,i;i=this.numbers;for(n=0,r=i.length;n<r;n++){t=i[n];if(t.number.indexOf(e)===0)return console.log(t.score,e.length),{score:t.score*e.length*e.length,description:t.description+("的前"+e.length+"位")}}return null},t.prototype.analyze=function(e){return e.length<3?null:this.getResult(e)},t}(NAN.NumberSet),NAN.meaningfulNumberSet=function(e){function t(){this.numbers=[],this.newNumber({number:42,description:"The answer to life,<br>the universe,<br>and everything",score:100}),this.newNumber({number:59,description:"挂科啦",score:50}),this.newNumber({number:63,description:"南南的生日",score:200}),this.newNumber({number:603,description:"南南的生日",score:200}),this.newNumber({number:60,description:"谢老师不挂之恩",score:70}),this.newNumber({number:360,description:"安全卫士",score:70}),this.newNumber({number:211,description:"开发者的狗窝",score:70}),this.newNumber({number:985,description:"看起来是一所好大学",score:70}),this.newNumber({number:250,description:"大脑似乎出了点问题",score:70}),this.newNumber({number:100,description:"学霸你够了",score:70}),this.newNumber({number:99,description:"学霸你够了",score:70}),this.newNumber({number:233,description:"很好笑的样子",score:70}),this.newNumber({number:119,description:"着火啦",score:70}),this.newNumber({number:1024,description:"给你1024凑个整",score:70}),this.newNumber({number:404,description:"Not Found",score:70}),this.newNumber({number:520,description:"爱的誓言",score:270}),this.newNumber({number:521,description:"爱的誓言",score:270})}return r(t,e),t.prototype.newNumber=function(e){return this.numbers.push({number:e.number,description:e.description,score:e.score})},t.prototype.getResult=function(e){var t,n,r,i;i=this.numbers;for(n=0,r=i.length;n<r;n++){t=i[n];if(t.number===e)return{score:t.score,description:t.description}}return null},t.prototype.analyze=function(e){return e=parseInt(e),this.getResult(e)},t}(NAN.NumberSet),NAN.Analyzer=function(){function e(){var e;this.numberSets=[];for(e in NAN)e.toString().indexOf("NumberSet")>0&&this.numberSets.push(new(NAN[e.toString()]))}return e.prototype.analyze=function(e){var t,n,r,i,s,o,u,a,f;o=0,t=[],i=0,f=this.numberSets;for(u=0,a=f.length;u<a;u++){r=f[u],s=r.analyze(e),console.log(s);if(s===null)continue;s.score=Math.round(s.score),o+=s.score,i+=1,t.push(s.description)}return n={score:Math.floor(o*i),descriptions:t},console.log(n),n},e}()}).call(this);