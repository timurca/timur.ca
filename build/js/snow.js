function generateSnowFlakes(){for(snowflakes=[],i=0;i<particleMax;i++)snowflake=new Snowflake,snowflake.reset(),snowflakes.push(snowflake)}function update(){if(ctx.clearRect(0,0,width,height),active){for(i=0;i<particleCount;i++)snowflake=snowflakes[i],snowflake.y+=snowflake.vy,snowflake.x+=snowflake.vx,ctx.globalAlpha=snowflake.o,ctx.beginPath(),ctx.arc(snowflake.x,snowflake.y,snowflake.r,0,2*Math.PI,!1),ctx.closePath(),ctx.fill(),snowflake.y>height&&snowflake.reset();requestAnimFrame(update)}}function onResize(){width=sky.clientWidth,height=sky.clientHeight,canvas.width=width,canvas.height=height,ctx.fillStyle="#FFF";var e=active;active=width>600,!e&&active&&requestAnimFrame(update)}var particleCount=300,particleMax=1e3,sky=document.querySelector(".sky"),canvas=document.createElement("canvas"),ctx=canvas.getContext("2d"),width=sky.clientWidth,height=sky.clientHeight,i=0,active=!1,snowflakes=[],snowflake;canvas.style.position="absolute",canvas.style.left=canvas.style.top="0";var Snowflake=function(){this.x=0,this.y=0,this.vy=0,this.vx=0,this.r=0,this.reset()};Snowflake.prototype.reset=function(){this.x=Math.random()*width,this.y=Math.random()*-height,this.vy=1+3*Math.random(),this.vx=.5-Math.random(),this.r=1+2*Math.random(),this.o=.5+.5*Math.random()},generateSnowFlakes(),window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),onResize(),window.addEventListener("resize",onResize,!1),sky.appendChild(canvas);var gui=new dat.GUI;gui.add(window,"particleCount").min(1).max(particleMax).step(1).name("Particles count").onFinishChange(function(){requestAnimFrame(update)});