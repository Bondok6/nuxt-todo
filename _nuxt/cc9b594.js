(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{247:function(t,e,n){"use strict";n.r(e);var o={props:["task"],methods:{toggleDone:function(){this.$store.commit("TOGGLE_TASK",this.task)},removeTask:function(){this.$store.commit("REMOVE_TASK",this.task)}}},l=n(42),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"task "+(t.task.done?"is-complete":"")},[n("div",{staticClass:"content"},[t._v(t._s(t.task.content))]),t._v(" "),n("div",{staticClass:"buttons"},[n("button",{on:{click:t.toggleDone}},[t._v(t._s(t.task.done?"Undo":"Done"))]),t._v(" "),n("button",{staticClass:"delete",on:{click:t.removeTask}},[t._v("Delete")])])])}),[],!1,null,null,null);e.default=component.exports},249:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{newTask:""}},methods:{addTask:function(){this.newTask&&(this.$store.commit("ADD_TASK",this.newTask),this.newTask="")}}},l=n(42),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h1",[t._v("Task Board")]),t._v(" "),n("p",[t._v("Create a list of tasks")]),t._v(" "),n("div",{staticClass:"create-new"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],attrs:{type:"text",placeholder:"Add a new task"},domProps:{value:t.newTask},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask.apply(null,arguments)},input:function(e){e.target.composing||(t.newTask=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.addTask}},[t._v("ADD")])]),t._v(" "),n("div",{staticClass:"tasks"},t._l(t.$store.state.tasks,(function(t){return n("Task",{key:t.content,attrs:{task:t}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Task:n(247).default})}}]);