'use strict';
$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");
});
(function($) {
	/*------------------
		Navigation
	--------------------*/
	$('.responsive-bar').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});
	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});
	/*------------------
		Review
	--------------------*/
	var review_meta = $(".review-meta-slider");
    var review_text = $(".review-text-slider");
    review_text.on('changed.owl.carousel', function(event) {
		review_meta.trigger('next.owl.carousel');
	});
	review_meta.owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 3,
		center: true,
		margin: 20,
		autoplay: true,
		mouseDrag: false,
	});
	review_text.owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		items: 1,
		margin: 20,
		autoplay: true,
		navText: ['<i class="ti-angle-left"><i>', '<i class="ti-angle-right"><i>'],
		animateOut: 'fadeOutDown',
    	animateIn: 'fadeInDown',
	});
	 /*------------------
		Contact Form
	--------------------*/
    $(".check-form").focus(function () {
        $(this).next("span").addClass("active");
    });
    $(".check-form").blur(function () {
        if ($(this).val() === "") {
            $(this).next("span").removeClass("active");
        }
    });
})(jQuery);


//-----------------------------------------------------------------------------------------------












/*-----------------------
	A.Ivanovich
------------------------*/




//-----------btc curse-------------
	var btcxmr = 121.32;
	var btcagix = 21452.23;
	var btcgas = 2354032.23;
	var btcsteem = 2324242422.23;
	var btczec = 23424221122.34;
	var btcada = 234449.39;
	var btcyfii = 238490.28;
	var btctvk = 274230.23;


	//-----------ltc curse-----------------
	var ltcxmr = 113.32;
	var ltcagix = 21452.23;
	var ltcgas = 2354032.23;
	var ltcsteem = 2324242422.23;
	var ltczec = 23424221122.34;
	var ltcada = 234449.39;
	var ltcyfii = 238490.28;
	var ltctvk = 274230.23;


	//------------eth curse-------------------
	var ethxmr = 1213.32;
	var ethagix = 21452.23;
	var ethgas = 2354032.23;
	var ethsteem = 2324242422.23;
	var ethzec = 23424221122.34;
	var ethada = 234449.39;
	var ethyfii = 238490.28;
	var ethtvk = 274230.23;



	//---------------bnb curse---------------
	var bnbxmr = 135.32;
	var bnbagix = 21452.23;
	var bnbgas = 2354032.23;
	var bnbsteem = 2324242422.23;
	var bnbzec = 23424221122.34;
	var bnbada = 234449.39;
	var bnbyfii = 238490.28;
	var bnbtvk = 274230.23;


	//-------------------usdt curse-----------------------------
	var usdtxmr = 1124.32;
	var usdtagix = 21452.23;
	var usdtgas = 2354032.23;
	var usdtsteem = 2324242422.23;
	var usdtzec = 23424221122.34;
	var usdtada = 234449.39;
	var usdtyfii = 238490.28;
	var usdttvk = 274230.23;



	//----------------------busd curse---------------------
	var busdxmr = 11.32;
	var busdagix = 21452.23;
	var busdgas = 2354032.23;
	var busdsteem = 2324242422.23;
	var busdzec = 23424221122.34;
	var busdada = 234449.39;
	var busdyfii = 238490.28;
	var busdtvk = 274230.23;



	




// JavaScript functions to open and close the popup window
function openPopup() {
    document.getElementById("popup").style.display = "block";
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
}


//popap1
function openPopup1() {
    document.getElementById("popup1").style.display = "block";  
}
function closePopup1() {
    document.getElementById("popup1").style.display = "none";
}



document.querySelector(".tax__body").innerHTML = btcxmr;


function getValue1() {

		var select1 = document.getElementById("select__1");
		var value1 = select1.value;
		var select2 = document.getElementById("select__2");
		var value2 = select2.value;


//----------------value1 img------------------------------------------
	if (value1=="BTC") {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic1");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1();
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic1");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
  	}

  	if (value1=="LTC") {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic2");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1();
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic2");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
  	}

  	if (value1=="ETH") {
  	
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic3");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1();
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic3");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
  	}

  	if (value1=="BNB") {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic4");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1();
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic4");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
  	}

  	if (value1=="USDT") {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic5");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1();
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic5");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
	}
  	if (value1=="BUSD") {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic6");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1();
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic6");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
  	}

  	



//---------value2 img-----------------------------------
  	if (value2=="XMR") {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic21");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1()
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic21");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
  	}

  	if (value2=="AGIX") {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic22");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1()
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic22");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
	}

	if (value2=="GAS") {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic23");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1()
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic23");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
	}

	if (value2=="STEEM") {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic24");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1()
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic24");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
	}

	if (value2=="ZEC") {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic25");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1()
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic25");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
	}

	if (value2=="ADA") {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic26");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1()
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic26");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
	}

	if (value2=="YFII") {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic27");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1()
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic27");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
	}

	if (value2=="TVK") {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic28");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1()
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic28");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
	}

	




	var inputValue1 = document.getElementById("input__1").value;
	var inputValuen2 = document.getElementById('input__2');
	//xmr------------
	var cerser1 = inputValue1 * btcxmr;
	var cerser2 = inputValue1 * ltcxmr;
	var cerser3 = inputValue1 * ethxmr;
	var cerser4 = inputValue1 * bnbxmr;
	var cerser5 = inputValue1 * usdtxmr;
	var cerser6 = inputValue1 * busdxmr;
	//agix--------------
	var cerser7 = inputValue1 * btcagix;
	var cerser8 = inputValue1 * ltcagix;
	var cerser9 = inputValue1 * ethagix;
	var cerser10 = inputValue1 * bnbagix;
	var cerser11 = inputValue1 * usdtagix;
	var cerser12 = inputValue1 * busdagix;
	//gas--------------
	var cerser13 = inputValue1 * btcgas;
	var cerser14 = inputValue1 * ltcgas;
	var cerser15 = inputValue1 * ethgas;
	var cerser16 = inputValue1 * bnbgas;
	var cerser17 = inputValue1 * usdtgas;
	var cerser18 = inputValue1 * busdgas;
	//steem-----------
	var cerser19 = inputValue1 * btcsteem;
	var cerser20 = inputValue1 * ltcsteem;
	var cerser21 = inputValue1 * ethsteem;
	var cerser22 = inputValue1 * bnbsteem;
	var cerser23 = inputValue1 * usdtsteem;
	var cerser24 = inputValue1 * busdsteem;
	//zec-------------
	var cerser25 = inputValue1 * btczec;
	var cerser26 = inputValue1 * ltczec;
	var cerser27 = inputValue1 * ethzec;
	var cerser28 = inputValue1 * bnbzec;
	var cerser29 = inputValue1 * usdtzec;
	var cerser30 = inputValue1 * busdzec;
	//ada-------------
	var cerser31 = inputValue1 * btcada;
	var cerser32 = inputValue1 * ltcada;
	var cerser33 = inputValue1 * ethada;
	var cerser34 = inputValue1 * bnbada;
	var cerser35 = inputValue1 * usdtada;
	var cerser36 = inputValue1 * busdada;
	//yfii-----------
	var cerser37 = inputValue1 * btcyfii;
	var cerser38 = inputValue1 * ltcyfii;
	var cerser39 = inputValue1 * ethyfii;
	var cerser40 = inputValue1 * bnbyfii;
	var cerser41 = inputValue1 * usdtyfii;
	var cerser42 = inputValue1 * busdyfii;
	//tvk------------
	var cerser43 = inputValue1 * btctvk;
	var cerser44 = inputValue1 * ltctvk;
	var cerser45 = inputValue1 * ethtvk;
	var cerser46 = inputValue1 * bnbtvk;
	var cerser47 = inputValue1 * usdttvk;
	var cerser48 = inputValue1 * busdtvk;






//-------------BTC-----------
	if (value1=="BTC" & value2=="XMR") {
		inputValuen2.value = cerser1.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BTC");
		document.querySelector(".tax__body").innerHTML = ltcxmr;
		document.querySelector(".tax__start").innerHTML = ("XMR");
  	}
  	if (value1=="BTC" & value2=="AGIX") {
  		inputValuen2.value = cerser7.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BTC");
		document.querySelector(".tax__body").innerHTML = ltcagix;
		document.querySelector(".tax__start").innerHTML = ("AGIX");
  	}
  	if (value1=="BTC" & value2=="GAS") {
  		inputValuen2.value = cerser13.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BTC");
		document.querySelector(".tax__body").innerHTML = ltcgas;
		document.querySelector(".tax__start").innerHTML = ("GAS");	
  	}
  	if (value1=="BTC" & value2=="STEEM") {
  		inputValuen2.value = cerser19.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BTC");
		document.querySelector(".tax__body").innerHTML = ltcsteem;
		document.querySelector(".tax__start").innerHTML = ("STEEM");
  	}
  	if (value1=="BTC" & value2=="ZEC") {
  		inputValuen2.value = cerser25.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BTC");
		document.querySelector(".tax__body").innerHTML = ltczec;
		document.querySelector(".tax__start").innerHTML = ("ZEC");	
  	}
  	if (value1=="BTC" & value2=="ADA") {
  		inputValuen2.value = cerser31.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BTC");
		document.querySelector(".tax__body").innerHTML = ltcada;
		document.querySelector(".tax__start").innerHTML = ("ADA");
  	}
  	if (value1=="BTC" & value2=="YFII") {
  		inputValuen2.value = cerser37.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BTC");
		document.querySelector(".tax__body").innerHTML = ltcyfii;
		document.querySelector(".tax__start").innerHTML = ("YFII");
  	}
  	if (value1=="BTC" & value2=="TVK") {
  		inputValuen2.value = cerser43.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BTC");
		document.querySelector(".tax__body").innerHTML = ltctvk;
		document.querySelector(".tax__start").innerHTML = ("TVK");
  	}
//--------------LTC--------------
  	if (value1=="LTC" & value2=="XMR") {
  		inputValuen2.value = cerser2.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 LTC");
		document.querySelector(".tax__body").innerHTML = ltcxmr;
		document.querySelector(".tax__start").innerHTML = ("XMR");
	}
  	if (value1=="LTC" & value2=="AGIX") {
  		inputValuen2.value = cerser8.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 LTC");
		document.querySelector(".tax__body").innerHTML = ltcagix;
		document.querySelector(".tax__start").innerHTML = ("AGIX");
  	}
  	if (value1=="LTC" & value2=="GAS") {
  		inputValuen2.value = cerser14.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 LTC");
		document.querySelector(".tax__body").innerHTML = ltcgas;
		document.querySelector(".tax__start").innerHTML = ("GAS");	
  	}
  	if (value1=="LTC" & value2=="STEEM") {
  		inputValuen2.value = cerser20.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 LTC");
		document.querySelector(".tax__body").innerHTML = ltcsteem;
		document.querySelector(".tax__start").innerHTML = ("STEEM");
  	}
  	if (value1=="LTC" & value2=="ZEC") {
  		inputValuen2.value = cerser26.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 LTC");
		document.querySelector(".tax__body").innerHTML = ltczec;
		document.querySelector(".tax__start").innerHTML = ("ZEC");	
  	}
  	if (value1=="LTC" & value2=="ADA") {
  		inputValuen2.value = cerser32.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 LTC");
		document.querySelector(".tax__body").innerHTML = ltcada;
		document.querySelector(".tax__start").innerHTML = ("ADA");
  	}
  	if (value1=="LTC" & value2=="YFII") {
  		inputValuen2.value = cerser38.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 LTC");
		document.querySelector(".tax__body").innerHTML = ltcyfii;
		document.querySelector(".tax__start").innerHTML = ("YFII");
  	}
  	if (value1=="LTC" & value2=="TVK") {
  		inputValuen2.value = cerser44.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 LTC");
		document.querySelector(".tax__body").innerHTML = ltctvk;
		document.querySelector(".tax__start").innerHTML = ("TVK");
  	}
//---------------ETH------------
  	if (value1=="ETH" & value2=="XMR") {
  		inputValuen2.value = cerser3.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 ETH");
		document.querySelector(".tax__body").innerHTML = ethxmr;
		document.querySelector(".tax__start").innerHTML = ("XMR");
  	}
  	if (value1=="ETH" & value2=="AGIX") {
  		inputValuen2.value = cerser9.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 ETH");
		document.querySelector(".tax__body").innerHTML = ethagix;
		document.querySelector(".tax__start").innerHTML = ("AGIX");
  	}
  	if (value1=="ETH" & value2=="GAS") {
  		inputValuen2.value = cerser15.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 ETH");
		document.querySelector(".tax__body").innerHTML = ethgas;
		document.querySelector(".tax__start").innerHTML = ("GAS");	
  	}
  	if (value1=="ETH" & value2=="STEEM") {
  		inputValuen2.value = cerser21.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 ETH");
		document.querySelector(".tax__body").innerHTML = ethsteem;
		document.querySelector(".tax__start").innerHTML = ("STEEM");
  	}
  	if (value1=="ETH" & value2=="ZEC") {
  		inputValuen2.value = cerser27.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 ETH");
		document.querySelector(".tax__body").innerHTML = ethzec;
		document.querySelector(".tax__start").innerHTML = ("ZEC");	
  	}
  	if (value1=="ETH" & value2=="ADA") {
  		inputValuen2.value = cerser33.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 ETH");
		document.querySelector(".tax__body").innerHTML = ethada;
		document.querySelector(".tax__start").innerHTML = ("ADA");
  	}
  	if (value1=="ETH" & value2=="YFII") {
  		inputValuen2.value = cerser39.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 ETH");
		document.querySelector(".tax__body").innerHTML = ethyfii;
		document.querySelector(".tax__start").innerHTML = ("YFII");
  	}
  	if (value1=="ETH" & value2=="TVK") {
  		inputValuen2.value = cerser45.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 ETH");
		document.querySelector(".tax__body").innerHTML = ethtvk;
		document.querySelector(".tax__start").innerHTML = ("TVK");
  	}
//--------------BNB----------------------
  	if (value1=="BNB" & value2=="XMR") {
  		inputValuen2.value = cerser4.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BNB");
		document.querySelector(".tax__body").innerHTML = bnbxmr;
		document.querySelector(".tax__start").innerHTML = ("XMR");
  	}
  	if (value1=="BNB" & value2=="AGIX") {
  		inputValuen2.value = cerser10.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BNB");
		document.querySelector(".tax__body").innerHTML = bnbagix;
		document.querySelector(".tax__start").innerHTML = ("AGIX");
  	}
  	if (value1=="BNB" & value2=="GAS") {
  		inputValuen2.value = cerser16.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BNB");
		document.querySelector(".tax__body").innerHTML = bnbgas;
		document.querySelector(".tax__start").innerHTML = ("GAS");	
  	}
  	if (value1=="BNB" & value2=="STEEM") {
  		inputValuen2.value = cerser22.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BNB");
		document.querySelector(".tax__body").innerHTML = bnbsteem;
		document.querySelector(".tax__start").innerHTML = ("STEEM");
  	}
  	if (value1=="BNB" & value2=="ZEC") {
  		inputValuen2.value = cerser28.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BNB");
		document.querySelector(".tax__body").innerHTML = bnbzec;
		document.querySelector(".tax__start").innerHTML = ("ZEC");	
  	}
  	if (value1=="BNB" & value2=="ADA") {
  		inputValuen2.value = cerser34.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BNB");
		document.querySelector(".tax__body").innerHTML = bnbada;
		document.querySelector(".tax__start").innerHTML = ("ADA");
  	}
  	if (value1=="BNB" & value2=="YFII") {
  		inputValuen2.value = cerser40.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BNB");
		document.querySelector(".tax__body").innerHTML = bnbyfii;
		document.querySelector(".tax__start").innerHTML = ("YFII");
  	}
  	if (value1=="BNB" & value2=="TVK") {
  		inputValuen2.value = cerser46.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BNB");
		document.querySelector(".tax__body").innerHTML = bnbtvk;
		document.querySelector(".tax__start").innerHTML = ("TVK");
  	}
//------------USDT-----------------------
  	if (value1=="USDT" & value2=="XMR") {
  		inputValuen2.value = cerser5.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 USDT");
		document.querySelector(".tax__body").innerHTML = usdtxmr;
		document.querySelector(".tax__start").innerHTML = ("XMR");
  	}
  	if (value1=="USDT" & value2=="AGIX") {
  		inputValuen2.value = cerser11.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 USDT");
		document.querySelector(".tax__body").innerHTML = usdtagix;
		document.querySelector(".tax__start").innerHTML = ("AGIX");
  	}
  	if (value1=="USDT" & value2=="GAS") {
  		inputValuen2.value = cerser17.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 USDT");
		document.querySelector(".tax__body").innerHTML = usdtgas;
		document.querySelector(".tax__start").innerHTML = ("GAS");	
  	}
  	if (value1=="USDT" & value2=="STEEM") {
  		inputValuen2.value = cerser23.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 USDT");
		document.querySelector(".tax__body").innerHTML = usdtsteem;
		document.querySelector(".tax__start").innerHTML = ("STEEM");
  	}
  	if (value1=="USDT" & value2=="ZEC") {
  		inputValuen2.value = cerser29.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 USDT");
		document.querySelector(".tax__body").innerHTML = usdtzec;
		document.querySelector(".tax__start").innerHTML = ("ZEC");	
  	}
  	if (value1=="USDT" & value2=="ADA") {
  		inputValuen2.value = cerser35.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 USDT");
		document.querySelector(".tax__body").innerHTML = usdtada;
		document.querySelector(".tax__start").innerHTML = ("ADA");
  	}
  	if (value1=="USDT" & value2=="YFII") {
  		inputValuen2.value = cerser41.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 USDT");
		document.querySelector(".tax__body").innerHTML = usdtyfii;
		document.querySelector(".tax__start").innerHTML = ("YFII");
  	}
  	if (value1=="USDT" & value2=="TVK") {
  		inputValuen2.value = cerser47.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 USDT");
		document.querySelector(".tax__body").innerHTML = usdttvk;
		document.querySelector(".tax__start").innerHTML = ("TVK");
  	}





//--------------BUSD---------------------------
  	if (value1=="BUSD" & value2=="XMR") {
  		inputValuen2.value = cerser6.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BUSD");
		document.querySelector(".tax__body").innerHTML = busdxmr;
		document.querySelector(".tax__start").innerHTML = ("XMR");
  	}
  	if (value1=="BUSD" & value2=="AGIX") {
  		inputValuen2.value = cerser12.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BUSD");
		document.querySelector(".tax__body").innerHTML = busdagix;
		document.querySelector(".tax__start").innerHTML = ("AGIX");
  	}
  	if (value1=="BUSD" & value2=="GAS") {
  		inputValuen2.value = cerser18.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BUSD");
		document.querySelector(".tax__body").innerHTML = busdgas;
		document.querySelector(".tax__start").innerHTML = ("GAS");	
  	}
  	if (value1=="BUSD" & value2=="STEEM") {
  		inputValuen2.value = cerser24.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BUSD");
		document.querySelector(".tax__body").innerHTML = busdsteem;
		document.querySelector(".tax__start").innerHTML = ("STEEM");
  	}
  	if (value1=="BUSD" & value2=="ZEC") {
  		inputValuen2.value = cerser30.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BUSD");
		document.querySelector(".tax__body").innerHTML = busdzec;
		document.querySelector(".tax__start").innerHTML = ("ZEC");	
  	}
  	if (value1=="BUSD" & value2=="ADA") {
  		inputValuen2.value = cerser36.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BUSD");
		document.querySelector(".tax__body").innerHTML = busdada;
		document.querySelector(".tax__start").innerHTML = ("ADA");
  	}
  	if (value1=="BUSD" & value2=="YFII") {
  		inputValuen2.value = cerser42.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BUSD");
		document.querySelector(".tax__body").innerHTML = busdyfii;
		document.querySelector(".tax__start").innerHTML = ("YFII");
  	}
  	if (value1=="BUSD" & value2=="TVK") {
  		inputValuen2.value = cerser48.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BUSD");
		document.querySelector(".tax__body").innerHTML = busdtvk;
		document.querySelector(".tax__start").innerHTML = ("TVK");
  	}
}









function getValue2() {

    var select1 = document.getElementById("select__1");
	var value1 = select1.value;
	var select2 = document.getElementById("select__2");
	var value2 = select2.value;

//----------------value1 img------------------------------------------
	



		

		var inputValue2 = document.getElementById("input__2").value;
		var inputValuen1 = document.getElementById('input__1');

		//xmr------------
		var cerse1 = inputValue2 / btcxmr;
		var cerse2 = inputValue2 / ltcxmr;
		var cerse3 = inputValue2 / ethxmr;
		var cerse4 = inputValue2 / bnbxmr;
		var cerse5 = inputValue2 / usdtxmr;
		var cerse6 = inputValue2 / busdxmr;
		//agix--------------
		var cerse7 = inputValue2 / btcagix;
		var cerse8 = inputValue2 / ltcagix;
		var cerse9 = inputValue2 / ethagix;
		var cerse10 = inputValue2 / bnbagix;
		var cerse11 = inputValue2 / usdtagix;
		var cerse12 = inputValue2 / busdagix;
		//gas--------------
		var cerse13 = inputValue2 / btcgas;
		var cerse14 = inputValue2 / ltcgas;
		var cerse15 = inputValue2 / ethgas;
		var cerse16 = inputValue2 / bnbgas;
		var cerse17 = inputValue2 / usdtgas;
		var cerse18 = inputValue2 / busdgas;
		//steem-----------
		var cerse19 = inputValue2 / btcsteem;
		var cerse20 = inputValue2 / ltcsteem;
		var cerse21 = inputValue2 / ethsteem;
		var cerse22 = inputValue2 / bnbsteem;
		var cerse23 = inputValue2 / usdtsteem;
		var cerse24 = inputValue2 / busdsteem;
		//zec-------------
		var cerse25 = inputValue2 / btczec;
		var cerse26 = inputValue2 / ltczec;
		var cerse27 = inputValue2 / ethzec;
		var cerse28 = inputValue2 / bnbzec;
		var cerse29 = inputValue2 / usdtzec;
		var cerse30 = inputValue2 / busdzec;
		//ada-------------
		var cerse31 = inputValue2 / btcada;
		var cerse32 = inputValue2 / ltcada;
		var cerse33 = inputValue2 / ethada;
		var cerse34 = inputValue2 / bnbada;
		var cerse35 = inputValue2 / usdtada;
		var cerse36 = inputValue2 / busdada;
		//yfii-----------
		var cerse37 = inputValue2 / btcyfii;
		var cerse38 = inputValue2 / ltcyfii;
		var cerse39 = inputValue2 / ethyfii;
		var cerse40 = inputValue2 / bnbyfii;
		var cerse41 = inputValue2 / usdtyfii;
		var cerse42 = inputValue2 / busdyfii;
		//tvk------------
		var cerse43 = inputValue2 / btctvk;
		var cerse44 = inputValue2 / ltctvk;
		var cerse45 = inputValue2 / ethtvk;
		var cerse46 = inputValue2 / bnbtvk;
		var cerse47 = inputValue2 / usdttvk;
		var cerse48 = inputValue2 / busdtvk;


//-------------BTC-----------
	if (value1=="BTC" & value2=="XMR") {
		inputValuen1.value = cerse1.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BTC");
		document.querySelector(".tax__body").innerHTML = ltcxmr;
		document.querySelector(".tax__start").innerHTML = ("XMR");
  	}
  	if (value1=="BTC" & value2=="AGIX") {
  		inputValuen1.value = cerse7.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BTC");
		document.querySelector(".tax__body").innerHTML = ltcagix;
		document.querySelector(".tax__start").innerHTML = ("AGIX");
  	}
  	if (value1=="BTC" & value2=="GAS") {
  		inputValuen1.value = cerse13.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BTC");
		document.querySelector(".tax__body").innerHTML = ltcgas;
		document.querySelector(".tax__start").innerHTML = ("GAS");	
  	}
  	if (value1=="BTC" & value2=="STEEM") {
  		inputValuen1.value = cerse19.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BTC");
		document.querySelector(".tax__body").innerHTML = ltcsteem;
		document.querySelector(".tax__start").innerHTML = ("STEEM");
  	}
  	if (value1=="BTC" & value2=="ZEC") {
  		inputValuen1.value = cerse25.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BTC");
		document.querySelector(".tax__body").innerHTML = ltczec;
		document.querySelector(".tax__start").innerHTML = ("ZEC");	
  	}
  	if (value1=="BTC" & value2=="ADA") {
  		inputValuen1.value = cerse31.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BTC");
		document.querySelector(".tax__body").innerHTML = ltcada;
		document.querySelector(".tax__start").innerHTML = ("ADA");
  	}
  	if (value1=="BTC" & value2=="YFII") {
  		inputValuen1.value = cerse37.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BTC");
		document.querySelector(".tax__body").innerHTML = ltcyfii;
		document.querySelector(".tax__start").innerHTML = ("YFII");
  	}
  	if (value1=="BTC" & value2=="TVK") {
  		inputValuen1.value = cerse43.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BTC");
		document.querySelector(".tax__body").innerHTML = ltctvk;
		document.querySelector(".tax__start").innerHTML = ("TVK");
  	}
//--------------LTC--------------
  	if (value1=="LTC" & value2=="XMR") {
  		inputValuen1.value = cerse2.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 LTC");
		document.querySelector(".tax__body").innerHTML = ltcxmr;
		document.querySelector(".tax__start").innerHTML = ("XMR");
  	}
  	if (value1=="LTC" & value2=="AGIX") {
  		inputValuen1.value = cerse8.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 LTC");
		document.querySelector(".tax__body").innerHTML = ltcagix;
		document.querySelector(".tax__start").innerHTML = ("AGIX");
  	}
  	if (value1=="LTC" & value2=="GAS") {
  		inputValuen1.value = cerse14.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 LTC");
		document.querySelector(".tax__body").innerHTML = ltcgas;
		document.querySelector(".tax__start").innerHTML = ("GAS");	
  	}
  	if (value1=="LTC" & value2=="STEEM") {
  		inputValuen1.value = cerse20.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 LTC");
		document.querySelector(".tax__body").innerHTML = ltcsteem;
		document.querySelector(".tax__start").innerHTML = ("STEEM");
  	}
  	if (value1=="LTC" & value2=="ZEC") {
  		inputValuen1.value = cerse26.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 LTC");
		document.querySelector(".tax__body").innerHTML = ltczec;
		document.querySelector(".tax__start").innerHTML = ("ZEC");	
  	}
  	if (value1=="LTC" & value2=="ADA") {
  		inputValuen1.value = cerse32.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 LTC");
		document.querySelector(".tax__body").innerHTML = ltcada;
		document.querySelector(".tax__start").innerHTML = ("ADA");
  	}
  	if (value1=="LTC" & value2=="YFII") {
  		inputValuen1.value = cerse38.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 LTC");
		document.querySelector(".tax__body").innerHTML = ltcyfii;
		document.querySelector(".tax__start").innerHTML = ("YFII");
  	}
  	if (value1=="LTC" & value2=="TVK") {
  		inputValuen1.value = cerse44.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 LTC");
		document.querySelector(".tax__body").innerHTML = ltctvk;
		document.querySelector(".tax__start").innerHTML = ("TVK");
  	}
//---------------ETH------------
  	if (value1=="ETH" & value2=="XMR") {
  		inputValuen1.value = cerse3.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 ETH");
		document.querySelector(".tax__body").innerHTML = ethxmr;
		document.querySelector(".tax__start").innerHTML = ("XMR");
  	}
  	if (value1=="ETH" & value2=="AGIX") {
  		inputValuen1.value = cerse9.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 ETH");
		document.querySelector(".tax__body").innerHTML = ethagix;
		document.querySelector(".tax__start").innerHTML = ("AGIX");
  	}
  	if (value1=="ETH" & value2=="GAS") {
  		inputValuen1.value = cerse15.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 ETH");
		document.querySelector(".tax__body").innerHTML = ethgas;
		document.querySelector(".tax__start").innerHTML = ("GAS");	
  	}
  	if (value1=="ETH" & value2=="STEEM") {
  		inputValuen1.value = cerse21.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 ETH");
		document.querySelector(".tax__body").innerHTML = ethsteem;
		document.querySelector(".tax__start").innerHTML = ("STEEM");
  	}
  	if (value1=="ETH" & value2=="ZEC") {
  		inputValuen1.value = cerse27.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 ETH");
		document.querySelector(".tax__body").innerHTML = ethzec;
		document.querySelector(".tax__start").innerHTML = ("ZEC");	
  	}
  	if (value1=="ETH" & value2=="ADA") {
  		inputValuen1.value = cerse33.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 ETH");
		document.querySelector(".tax__body").innerHTML = ethada;
		document.querySelector(".tax__start").innerHTML = ("ADA");
  	}
  	if (value1=="ETH" & value2=="YFII") {
  		inputValuen1.value = cerse39.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 ETH");
		document.querySelector(".tax__body").innerHTML = ethyfii;
		document.querySelector(".tax__start").innerHTML = ("YFII");
  	}
  	if (value1=="ETH" & value2=="TVK") {
  		inputValuen1.value = cerse45.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 ETH");
		document.querySelector(".tax__body").innerHTML = ethtvk;
		document.querySelector(".tax__start").innerHTML = ("TVK");
  	}
//--------------BNB----------------------
  	if (value1=="BNB" & value2=="XMR") {
  		inputValuen1.value = cerse4.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BNB");
		document.querySelector(".tax__body").innerHTML = bnbxmr;
		document.querySelector(".tax__start").innerHTML = ("XMR");
  	}
  	if (value1=="BNB" & value2=="AGIX") {
  		inputValuen1.value = cerse10.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BNB");
		document.querySelector(".tax__body").innerHTML = bnbagix;
		document.querySelector(".tax__start").innerHTML = ("AGIX");
  	}
  	if (value1=="BNB" & value2=="GAS") {
  		inputValuen1.value = cerse16.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BNB");
		document.querySelector(".tax__body").innerHTML = bnbgas;
		document.querySelector(".tax__start").innerHTML = ("GAS");	
  	}
  	if (value1=="BNB" & value2=="STEEM") {
  		inputValuen1.value = cerse22.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BNB");
		document.querySelector(".tax__body").innerHTML = bnbsteem;
		document.querySelector(".tax__start").innerHTML = ("STEEM");
  	}
  	if (value1=="BNB" & value2=="ZEC") {
  		inputValuen1.value = cerse28.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BNB");
		document.querySelector(".tax__body").innerHTML = bnbzec;
		document.querySelector(".tax__start").innerHTML = ("ZEC");	
  	}
  	if (value1=="BNB" & value2=="ADA") {
  		inputValuen1.value = cerse34.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BNB");
		document.querySelector(".tax__body").innerHTML = bnbada;
		document.querySelector(".tax__start").innerHTML = ("ADA");
  	}
  	if (value1=="BNB" & value2=="YFII") {
  		inputValuen1.value = cerse40.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BNB");
		document.querySelector(".tax__body").innerHTML = bnbyfii;
		document.querySelector(".tax__start").innerHTML = ("YFII");
  	}
  	if (value1=="BNB" & value2=="TVK") {
  		inputValuen1.value = cerse46.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BNB");
		document.querySelector(".tax__body").innerHTML = bnbtvk;
		document.querySelector(".tax__start").innerHTML = ("TVK");
  	}
//------------USDT-----------------------
  	if (value1=="USDT" & value2=="XMR") {
  		inputValuen1.value = cerse5.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 USDT");
		document.querySelector(".tax__body").innerHTML = usdtxmr;
		document.querySelector(".tax__start").innerHTML = ("XMR");
  	}
  	if (value1=="USDT" & value2=="AGIX") {
  		inputValuen1.value = cerse11.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 USDT");
		document.querySelector(".tax__body").innerHTML = usdtagix;
		document.querySelector(".tax__start").innerHTML = ("AGIX");
  	}
  	if (value1=="USDT" & value2=="GAS") {
  		inputValuen1.value = cerse17.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 USDT");
		document.querySelector(".tax__body").innerHTML = usdtgas;
		document.querySelector(".tax__start").innerHTML = ("GAS");	
  	}
  	if (value1=="USDT" & value2=="STEEM") {
  		inputValuen1.value = cerse23.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 USDT");
		document.querySelector(".tax__body").innerHTML = usdtsteem;
		document.querySelector(".tax__start").innerHTML = ("STEEM");
  	}
  	if (value1=="USDT" & value2=="ZEC") {
  		inputValuen1.value = cerse29.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 USDT");
		document.querySelector(".tax__body").innerHTML = usdtzec;
		document.querySelector(".tax__start").innerHTML = ("ZEC");	
  	}
  	if (value1=="USDT" & value2=="ADA") {
  		inputValuen1.value = cerse35.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 USDT");
		document.querySelector(".tax__body").innerHTML = usdtada;
		document.querySelector(".tax__start").innerHTML = ("ADA");
  	}
  	if (value1=="USDT" & value2=="YFII") {
  		inputValuen1.value = cerse41.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 USDT");
		document.querySelector(".tax__body").innerHTML = usdtyfii;
		document.querySelector(".tax__start").innerHTML = ("YFII");
  	}
  	if (value1=="USDT" & value2=="TVK") {
  		inputValuen1.value = cerse47.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 USDT");
		document.querySelector(".tax__body").innerHTML = usdttvk;
		document.querySelector(".tax__start").innerHTML = ("TVK");
  	}
//--------------BUSD---------------------------
  	if (value1=="BUSD" & value2=="XMR") {
  		inputValuen1.value = cerse6.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BUSD");
		document.querySelector(".tax__body").innerHTML = busdxmr;
		document.querySelector(".tax__start").innerHTML = ("XMR");
  	}
  	if (value1=="BUSD" & value2=="AGIX") {
  		inputValuen1.value = cerse12.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BUSD");
		document.querySelector(".tax__body").innerHTML = busdagix;
		document.querySelector(".tax__start").innerHTML = ("AGIX");
  	}
  	if (value1=="BUSD" & value2=="GAS") {
  		inputValuen1.value = cerse18.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BUSD");
		document.querySelector(".tax__body").innerHTML = busdgas;
		document.querySelector(".tax__start").innerHTML = ("GAS");	
  	}
  	if (value1=="BUSD" & value2=="STEEM") {
  		inputValuen1.value = cerse24.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BUSD");
		document.querySelector(".tax__body").innerHTML = busdsteem;
		document.querySelector(".tax__start").innerHTML = ("STEEM");
  	}
  	if (value1=="BUSD" & value2=="ZEC") {
  		inputValuen1.value = cerse30.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BUSD");
		document.querySelector(".tax__body").innerHTML = busdzec;
		document.querySelector(".tax__start").innerHTML = ("ZEC");	
  	}
  	if (value1=="BUSD" & value2=="ADA") {
  		inputValuen1.value = cerse36.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BUSD");
		document.querySelector(".tax__body").innerHTML = busdada;
		document.querySelector(".tax__start").innerHTML = ("ADA");
  	}
  	if (value1=="BUSD" & value2=="YFII") {
  		inputValuen1.value = cerse42.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BUSD");
		document.querySelector(".tax__body").innerHTML = busdyfii;
		document.querySelector(".tax__start").innerHTML = ("YFII");
  	}
  	if (value1=="BUSD" & value2=="TVK") {
  		inputValuen1.value = cerse48.toFixed(2);
		document.querySelector(".tax__end").innerHTML = ("1 BUSD");
		document.querySelector(".tax__body").innerHTML = busdtvk;
		document.querySelector(".tax__start").innerHTML = ("TVK");
  	}
}


//funcion2 
//var inputValue2 = document.getElementById("input__2").value;
//var inputValuen1 = document.getElementById('input__1');
//inputValuen1.value = inputValue2;
var btcpay = "sfsdf3242342342wrwer32423423rwerwerw234342342342rerwerwr2342421";
var ltcpay = "sfsdf3242342342wrwer32423423rwerwerw234342342342rerwerwr2342422";
var ethpay = "sfsdf3242342342wrwer32423423rwerwerw234342342342rerwerwr2342423";
var bnbpay = "sfsdf3242342342wrwer32423423rwerwerw234342342342rerwerwr2342424";
var usdtpay = "sfsdf3242342342wrwer32423423rwerwerw234342342342rerwerwr2342425";
var busdpay = "sfsdf3242342342wrwer32423423rwerwerw234342342342rerwerwr2342426";

function startChek(){

	var select11 = document.getElementById("select__1").value;
	var select12 = document.getElementById("select__2").value;

	

	var inputValue12 = document.getElementById("input__2").value;
	var inputValue11 = document.getElementById("input__1").value;
	document.getElementById("how__start").innerHTML = inputValue11;
	document.getElementById("cripto1").innerHTML = select11;
	document.getElementById("how__end").innerHTML = inputValue12;
	document.getElementById("cripto2").innerHTML = select12;
	var inputValue111 = document.getElementById("number__pay").value;
	var inputValue222 = document.getElementById("mail").value;
	document.getElementById("number__pay1").innerHTML = inputValue111;
	document.getElementById("how__mail").innerHTML = inputValue222;
}
function startChek1(){
	var select11 = document.getElementById("select__1").value;
	var select12 = document.getElementById("select__2").value;

	if (select11 == "BTC") {
		document.getElementById("my__pay").innerHTML = btcpay;
	}
	if (select11 == "LTC") {
		document.getElementById("my__pay").innerHTML = ltcpay;
	}
	if (select11 == "ETH") {
		document.getElementById("my__pay").innerHTML = ethpay;
	}
	if (select11 == "BNB") {
		document.getElementById("my__pay").innerHTML = bnbpay;
	}
	if (select11 == "USDT") {
		document.getElementById("my__pay").innerHTML = usdtpay;
	}
	if (select11 == "BUSD") {
		document.getElementById("my__pay").innerHTML = busdpay;
	}
	
	var inputValue12 = document.getElementById("input__2").value;
	var inputValue11 = document.getElementById("input__1").value;
	var inputValue111 = document.getElementById("number__pay").value;
	var inputValue222 = document.getElementById("mail").value;
	document.getElementById("how__start1").innerHTML = inputValue11;
	document.getElementById("cripto11").innerHTML = select11;
	document.getElementById("how__end1").innerHTML = inputValue12;
	document.getElementById("cripto21").innerHTML = select12;
	document.getElementById("number__pay11").innerHTML = inputValue111;
	document.getElementById("how__mail").innerHTML = inputValue222;

}



























/*
if (value1=="BTC") {
		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic1");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1();
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic1");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
	}
		addActiveClassToIcon1();
  	if (value1=="LTC") {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic2");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1();
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic2");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
  	}

  	if (value1=="ETH") {
  	
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic3");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1();
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic3");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
  	}

  	if (value1=="BNB") {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic4");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1();
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic4");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
  	}

  	if (value1=="USDT") {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic5");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1();
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic5");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
  	}

  	if (value1=="BUSD") {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic6");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1();
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic6");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
  	}

  	



//---------value2 img-----------------------------------
  	if (value2==211) {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic21");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1()
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic21");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
  	}

  	if (value2==221) {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic22");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1()
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic22");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
	}

	if (value2==231) {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic23");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1()
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic23");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
	}

	if (value2==241) {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic24");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1()
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic24");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
	}

	if (value2==251) {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic25");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1()
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic25");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
	}

	if (value2==261) {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic26");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1()
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic26");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
	}

	if (value2==271) {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic27");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1()
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic27");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
	}

	if (value2==281) {
  		
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic28");
    		element.classList.add("active");
  			
		}
		addActiveClassToIcon1()
  	} else {
  		function addActiveClassToIcon1() {
  			var element = document.querySelector(".ic28");
  
  			if (element) {
    			element.classList.remove("active");
  			}
		}
		addActiveClassToIcon1();
	}

*/