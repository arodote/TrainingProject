(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+qrf":function(t,i,e){"use strict";e.d(i,"a",function(){return o});var n=e("67Y/"),r=e("CcnG"),s=e("t/Na"),o=function(){function t(t){this.httpClient=t,this.api="https://api-base.herokuapp.com/api/pub/projects",this.projectListObs$=null,this.projectListLengthObs$=null}return t.prototype.findProject=function(t){return"id"==t.crit?(this.projectListObs$=this.httpClient.get(this.api).pipe(Object(n.a)(this.transformData)),this.projectListObs$.pipe(Object(n.a)(function(i){return i.filter(function(i){return i.id==t.project.id})}))):"name"==t.crit?(this.projectListObs$=this.httpClient.get(this.api).pipe(Object(n.a)(this.transformData)),this.projectListObs$.pipe(Object(n.a)(function(i){return i.filter(function(i){return i.name.includes(t.project.name)})}))):void 0},t.prototype.newProject=function(t){return""!=t.name&&(this.httpClient.post(this.api,t).subscribe(),!0)},t.prototype.getProjectList=function(){return this.projectListObs$=this.httpClient.get(this.api).pipe(Object(n.a)(this.transformData)),this.projectListObs$},t.prototype.getProjectListById=function(t){return this.projectListObs$=this.httpClient.get(this.api).pipe(Object(n.a)(this.transformData)),this.projectListObs$.pipe(Object(n.a)(function(i){return i.filter(function(i){return i.id==t})}))},t.prototype.transformData=function(t){return t.forEach(function(t){return t.id=t._id}),t},t.prototype.getProjectListSize=function(){return this.projectListLengthObs$=this.httpClient.get(this.api).pipe(Object(n.a)(function(t){return t.length})),this.projectListLengthObs$},t.ngInjectableDef=r.S({factory:function(){return new t(r.W(s.c))},token:t,providedIn:"root"}),t}()}}]);