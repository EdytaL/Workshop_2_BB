$(function() {
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
})