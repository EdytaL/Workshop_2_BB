$(function() {
    
    //-------variables - list in section info
    var $infoList = $(".info ul");
    var $checkBoxMenu = $(".menu-hamburger input");
    var $checkBoxLabel = $(".menu-hamburger label");
    var $navItems = $(".nav-item");
    var $container = $(".container");
    
    
    //-------function responsibile for counting installment
    $(".slider1").slider({ 
        range: "max",
        min: 1000,
        step: 1000,
        max: 10000,
        value: 1000,
        slide: function(event, response) {
            $(".kwota").text(response.value)

        }
    });
      $(".slider2").slider({ 
        range: "max",
        min: 10,
        step: 1,
        max: 60,
        value: 12,
        slide: function(event, response) {
            $(".rata").text(response.value)
            calc_value_to_pay(response.value, $(".kwota").text())

        }
    });
    
    function calc_value_to_pay(months, value){
        $(".raty").text(Math.round(((value/months)*1.03)*100)/100);
    }
    calc_value_to_pay(12, 1000);
    
    $("#nav-icon").click(function(){
		$(this).toggleClass('open');
	});
    
    //--------event on checkbox, menu-hamburger
    $checkBoxMenu.change(function() {
        if(this.checked) {
        $navItems.css({"display": "block"})
        $container.css({
            "left": "100px",
            "transition": "left 0.2s"
        });
        } else {
            $container.css({
                "left": "0",
                "transition": "left 0.2s" 
            });
            $navItems.css({"display": "none"})
        }
    })
    
    
    //--------event on info box
    $infoList.on("click", function(event) {
        var $this = $(this);
        var $listElements = $this.children();
        
        $listElements.slideToggle(1000)
        
    })
})