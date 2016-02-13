
   function canvasPrograms() {

   			var w = window.innerWidth
			|| document.documentElement.clientWidth
			|| document.body.clientWidth;
			var w1=0;
			if(w<760){
				w1=w-80;	
			}else{
				w1="550";
			}
			

   	          var chart1 = new CanvasJS.Chart("chartContainer1", {
			backgroundColor: "rgba(0,0,0,0.4)",
			responsive: true,
		    maintainAspectRatio: true,
            animationEnabled: true,
            width: w1,
            axisX:{
				interval: 1,
				gridThickness: 0,
				labelFontSize: 10,
				labelFontStyle: "normal",
				labelFontWeight: "normal",
				labelFontFamily: "Lucida Sans Unicode",
				labelFontColor :"white"

			},
			axisY2:{
				interlacedColor: "rgba(1,77,101,.2)",
				gridColor: "rgba(1,77,101,.1)"

			},

			legend: {
		fontSize: 10,
		fontColor: "#4D8293"
	},

			data: [
			{     

				type: "bar",
                name: "programming Languages",
                showInLegend: true,           
		legendText: "NOTE: 1-3:beginner 3-5:familiar 5-7:expert 7-10:master",

				axisYType: "secondary",
				color: "#014D65",				
				dataPoints: [
				
{y: 7,label:"RequireJS"},
{y: 7,label:"UnderscoreJS"},
{y: 8,label:"BackBoneJS"},
{y: 8,label:"AngularJS"},
{y: 10,label:"Cascading Style Sheet"},
{y: 9,label:"XML"},
{y: 10,label:"HTML5"},
{y: 8,label:"Flash"},
{y: 9,label:"JavaScript(JSON, AJAX)"},
{y: 6,label:"VB Script"},
{y: 9,label:"PHP"},
{y: 7,label:"Pascal"},
{y: 9,label:"Basic"},
{y: 9,label:"J2EE"},
{y: 10,label:"J2SE(utility class,SWING/AWT)"},
{y: 8,label:"C++"},
{y: 8,label:"C#"},
{y: 8,label:"Turbo C"},
{y: 7,label:"Visual Basic,NET"},
{y: 7,label:"Visual Basic"}				]
			}
			
			]
		});

chart1.render();

    }


  function mycanvas() {

   			var w = window.innerWidth
			|| document.documentElement.clientWidth
			|| document.body.clientWidth;
			var w1=0;
			if(w<760){
				w1=w-80;	
			}else{
				w1="550";
			}
			


       var chart = new CanvasJS.Chart("chartContainer", {
			backgroundColor: "rgba(0,0,0,0.4)",
			
			 responsive: true,
    			maintainAspectRatio: true,
                        animationEnabled: true,
                        width: w1,
			axisX:{
				interval: 1,
				gridThickness: 0,
				labelFontSize: 10,
				labelFontStyle: "normal",
				labelFontWeight: "normal",
				labelFontFamily: "Lucida Sans Unicode",
				labelFontColor :"white"

			},
			axisY2:{
				interlacedColor: "rgba(1,77,101,.2)",
				gridColor: "rgba(1,77,101,.1)"

			},
			legend: {
		fontSize: 10,
				fontColor: "#4D8293"
	},

			data: [
			{     
				type: "bar",
                name: "framework",
                showInLegend: true,           
		legendText: "NOTE: 1-3:beginner 3-5:familiar 5-7:expert 7-10:master",
				axisYType: "secondary",
				color: "#014D65",				
				dataPoints: [
				

{y: 9,label:"Adobe Dreamweaver"},
{y: 8,label:"Adobe Photoshop"},
{y: 8,label:"Adobe Flash"},
{y: 10,label:"Bootstrap"},
{y: 7,label:"Jquery"},
{y: 7,label:"Code Igniter"},
{y: 8,label:"Eclipse"},
{y: 10,label:"Sublime Text"},
{y: 10,label:"Php Editor"},
{y: 7,label:"joomla"},	
{y: 7,label:"Internet Information Server"},
{y: 9,label:"Apache Tomcat"}
			
				]
			}
			
			]


			
		});

chart.render();
    }



