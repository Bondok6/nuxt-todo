(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(e,n,t){t(182),e.exports=t(183)},244:function(e,n,t){var content=t(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(129).default)("199cdc7e",content,!0,{sourceMap:!1})},245:function(e,n,t){var o=t(128)(!1);o.push([e.i,'*{margin:0;padding:0;box-sizing:border-box;font-family:"Fira sans",sans-serif}body{background-color:#262336;color:#fff}main{width:100%;height:100vh;display:flex;flex-direction:column;align-items:center;padding-top:2rem}main h1{font-size:2.5rem;text-transform:capitalize;margin-bottom:.5rem}main h1~p{margin-bottom:2rem}main .create-new{display:flex;justify-content:center;align-items:center;max-width:480px}main .create-new input{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:none;border-bottom:1px solid #fff;background-color:transparent;color:#fff;font-size:1.5rem;padding-top:.5rem;padding-bottom:.5rem;margin:0;transition:.4s}main .create-new input:focus{border-bottom-color:#2fd66f}main .create-new button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;outline:none;background-color:#2fd66f;text-transform:uppercase;font-weight:700;color:#000;font-size:1.5rem;padding:.5rem 1rem;border-radius:.5rem;margin-left:.5rem;cursor:pointer}main .tasks{width:100%;max-width:480px;margin-top:2rem}main .tasks .task{display:flex;align-items:center;justify-content:space-between;background-color:#342f4e;padding:1rem;border-radius:.5rem;margin-bottom:1rem}main .tasks .task .buttons{min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}main .tasks .task button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;outline:none;background-color:#2fd66f;text-transform:uppercase;font-weight:700;color:#000;font-size:.875rem;padding:.5rem 1rem;border-radius:.5rem;margin-left:.5rem;cursor:pointer}main .tasks .task button.delete{background-color:#dc143c;color:#eee}.tasks .task.is-complete{opacity:.7}.tasks .task.is-complete .content{text-decoration:line-through}',""]),e.exports=o},246:function(e,n,t){"use strict";t.r(n),t.d(n,"state",(function(){return o})),t.d(n,"mutations",(function(){return r}));t(172);var o=function(){return{tasks:[]}},r={ADD_TASK:function(e,n){e.tasks.push({content:n,done:!1})},REMOVE_TASK:function(e,n){e.tasks.splice(e.tasks.indexOf(n),1)},TOGGLE_TASK:function(e,n){n.done=!n.done}}}},[[181,5,1,6]]]);