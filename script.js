$.noConflict();
jQuery(document).ready(function() {
    jQuery(".edit").click(function() {
        jQuery(".b-rignt").css("display", "none");
        jQuery(".b-left").css("display", "block");
        jQuery("textarea").val(jQuery(".texts").html());
    });
    jQuery(".save").click(function() {
        jQuery(".texts").html(jQuery("textarea").val());
        jQuery(".b-left").css("display", "none");

    });
    jQuery(".add").click(function() {
        jQuery(".rem").css("display", "none");
        jQuery(".list-table").css("display", "block");
        jQuery(".table").css("display", "none");
        jQuery(".list").css("display", "none");

    });
    jQuery(".style").click(function() {
        jQuery(".b-left").css("display", "none");
        jQuery(".b-rignt").css("display", "block");
    });
    jQuery(".radio").click(function() {
        jQuery(".texts").children().css('font-size', jQuery(this).val());

    });
    jQuery('.chbx input:checkbox:first').click(function() {
        if (this.checked) {
            jQuery(".texts").children().css('font-weight', jQuery(this).val());

        } else {
            jQuery(".texts").children().css('font-weight', "normal");

        }
    });
    jQuery('.chbx input:checkbox:last').click(function() {
        if (this.checked) {
            jQuery(".texts").children().css('font-style', jQuery(this).val());

        } else {
            jQuery(".texts").children().css('font-style', "normal");

        }
    });
    jQuery('#select').change(function() {
        jQuery(".texts").css('font-family', jQuery('#select option:selected').val());

    });

});
jQuery(".radio2").click(function() {
    if (jQuery('.radio2:first').is(':checked')) {
        jQuery(".table").css("display", "block");
        jQuery(".list").css("display", "none");

    } else {
        jQuery(".list").css("display", "block");
        jQuery(".table").css("display", "none");


    }
});
// table
var select2;
jQuery('#sel3').change(function() {
    select2 = jQuery(this).children("option:selected").val();
    console.log(select2);
});
var select3;
jQuery('#sel4').change(function() {
    select3 = jQuery(this).children("option:selected").val();
    console.log(select3);
});
jQuery(".btn-table").click(function() {
    let num1 = parseInt(jQuery(".cotr").val());
    let num2 = parseInt(jQuery(".cotd").val());
    let wght = parseInt(jQuery(".wdth").val());
    let hght = parseInt(jQuery(".hght").val());
    let brdrwght = parseInt(jQuery(".brdrwght").val());


    var contain;
    contain = '<table>';
    for (let i = 0; i < num1; i++) {
        contain += "<tr>";
        for (let j = 0; j < num2; j++) {
            // contain += '<td width=' + wght + ' height=' + hght + ' > item[' + i + ',' + j + ']</td>';
            contain += '<td style="border: ' + brdrwght + 'px ' + select2 + ' ' + select3 + '" width=' + wght + ' height=' + hght + ' > item[' + i + ',' + j + ']</td>';
        }
        contain += "</tr>";
    }
    contain += "</table>";
    var z2 = jQuery('textarea').val();
    jQuery('textarea').val(z2 + contain);
    jQuery(".rem").css("display", "flex");
    jQuery(".list-table").css("display", "none");
    jQuery(".table").css("display", "none");
    jQuery(".list").css("display", "none");
    console.log(contain);
});
// li
var select;
jQuery('#sel2').change(function() {
    select = jQuery(this).children("option:selected").val();
    console.log(select);
});
jQuery(".btn-li").click(function() {


    var num = parseInt(jQuery(".countli").val());
    var content = "<ul>";
    for (i = 0; i < num; i++) {
        content += '<li style="list-style-type:' + select + '"> ' + i + ' item' + ' </li>';
    }
    content += "</ul>";
    console.log(content);
    var z = jQuery('textarea').val();
    jQuery('textarea').val(z + content);
    jQuery(".rem").css("display", "flex");
    jQuery(".list-table").css("display", "none");
    jQuery(".table").css("display", "none");
    jQuery(".list").css("display", "none");

});
// text color
document.querySelector(".text-col").onclick = function(event) {
        let bl = document.querySelector(".block");
        jQuery(".block").css('display', "flex");
        let element1 = document.querySelector(".bl1");
        element1.classList.add("red");
        let element2 = document.querySelector(".bl2");
        element2.classList.add("blue");
        let element3 = document.querySelector(".bl3");
        element3.classList.add("yellow");
        let element4 = document.querySelector(".bl4");
        element4.classList.add("purple");
        let element5 = document.querySelector(".bl5");
        element5.classList.add("orange");
        let element6 = document.querySelector(".bl6");
        element6.classList.add("lightblue");
        let element7 = document.querySelector(".bl7");
        element7.classList.add("brown");
        let element8 = document.querySelector(".bl8");
        element8.classList.add("pink");
        let element9 = document.querySelector(".bl9");
        element9.classList.add("seagreen");
        document.querySelector(".block").onclick = function(event) {
            let num = event.target;
            let color = window.getComputedStyle(num).backgroundColor;
            let count = document.querySelector(".texts>*");
            jQuery(".texts").children().css('color', color);
            jQuery(".block").css('display', "none");


        }
    }
    /*background color*/
document.querySelector(".bc-col").onclick = function(event) {
    let bl = document.querySelector(".block");
    jQuery(".block").css('display', "flex");
    let element1 = document.querySelector(".bl1");
    element1.classList.add("red");
    let element2 = document.querySelector(".bl2");
    element2.classList.add("blue");
    let element3 = document.querySelector(".bl3");
    element3.classList.add("yellow");
    let element4 = document.querySelector(".bl4");
    element4.classList.add("purple");
    let element5 = document.querySelector(".bl5");
    element5.classList.add("orange");
    let element6 = document.querySelector(".bl6");
    element6.classList.add("lightblue");
    let element7 = document.querySelector(".bl7");
    element7.classList.add("brown");
    let element8 = document.querySelector(".bl8");
    element8.classList.add("pink");
    let element9 = document.querySelector(".bl9");
    element9.classList.add("seagreen");
    document.querySelector(".block").onclick = function(event) {
        let num = event.target;
        let color = window.getComputedStyle(num).backgroundColor;
        let count = document.querySelector(".texts>*");
        jQuery(".texts").css('background-color', color);
        jQuery(".block").css('display', "none");


    };
};