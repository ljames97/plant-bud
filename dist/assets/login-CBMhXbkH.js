import{n as r,L as i,M as l,v as d,x as c,a as o}from"./globalEventHandlers-BDzsa7tx.js";const u=()=>{g()},g=()=>{const e=document.getElementById("login-button"),s=document.getElementById("signup-button");r.addEventListener(e,"click",n=>{m(n)}),r.addEventListener(s,"click",n=>{h(n)})},m=e=>{e.preventDefault();const s=document.getElementById("email").value,n=document.getElementById("password").value;i(o,s,n).then(t=>{window.location.href="/index.html"}).catch(t=>{console.error("Error logging in: ",t),a(t)})},h=e=>{e.preventDefault();const s=document.getElementById("email").value,n=document.getElementById("password").value;l(o,s,n).then(t=>{window.location.href="/index.html"}).catch(t=>{console.error("Error signing up: ",t),a(t)})},a=e=>{p();const s=document.querySelector(".plantbud-logo"),n=w(e.code),t=d({tagName:"p",textContent:n,classEl:["login-error-message"]});c(s,t)},p=()=>{const e=document.querySelector(".login-error-message");e&&e.remove()},w=e=>({"auth/invalid-email":"Invalid email address","auth/invalid-credential":"Incorrect password","auth/user-disabled":"User account is disabled","auth/user-not-found":"No user found with this email","auth/wrong-password":"Incorrect password","auth/email-already-in-use":"Email is already in use","auth/weak-password":"Password is too weak","auth/missing-password":"Please enter password","auth/missing-email":"Please enter email address"})[e]||"An unknown error occurred. Please try again.";u();
