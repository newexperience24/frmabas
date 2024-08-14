! function(e) {
    "use strict";
    var t = function() {};
    t.prototype.init = function() {
        e('input[name="dates"]').daterangepicker({
            alwaysShowCalendars: !0
        }), e(".open_picker").show(), e('input[name="daterange"]').daterangepicker({
            opens: "left"
        }, function(t, a, e) {
            console.log("A new date selection was made: " + t.format("YYYY-MM-DD") + " to " + a.format("YYYY-MM-DD"))
        }), e('input[name="datetimes"]').daterangepicker({
            timePicker: !0,
            startDate: moment().startOf("hour"),
            endDate: moment().startOf("hour").add(32, "hour"),
            locale: {
                format: "M/DD hh:mm A"
            }
        }), e('input[name="birthday"]').daterangepicker({
            singleDatePicker: !0,
            showDropdowns: !0,
            minYear: 1901,
            maxYear: parseInt(moment().format("YYYY"), 10)
        }, function(t, a, e) {
            var n = moment().diff(t, "years");
            alert("You are " + n + " years old!")
        });
        var t = moment().subtract(29, "days"),
            a = moment();
        e("#reportrange").daterangepicker({
            startDate: t,
            endDate: a,
            ranges: {
                Today: [moment(), moment()],
                Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                "Last 7 Days": [moment().subtract(6, "days"), moment()],
                "Last 30 Days": [moment().subtract(29, "days"), moment()],
                "This Month": [moment().startOf("month"), moment().endOf("month")],
                "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
            }
        }, function(t, a) {
            e("#reportrange span").html(t.format("MMMM D, YYYY") + " - " + a.format("MMMM D, YYYY"))
        }), e(".select2").select2({
            width: "100%"
        }), e("#b_color-default, #b_color_rgb, #b_color_hsl").colorpicker(), e("#mdate").bootstrapMaterialDatePicker({
            weekStart: 0,
            time: !1
        }), e("#timepicker").bootstrapMaterialDatePicker({
            format: "HH:mm",
            time: !0,
            date: !1
        }), e("#date-format").bootstrapMaterialDatePicker({
            format: "dddd DD MMMM YYYY - HH:mm"
        }), e("#min-date").bootstrapMaterialDatePicker({
            format: "DD/MM/YYYY HH:mm",
            minDate: new Date
        }), e("#date-end").bootstrapMaterialDatePicker({
            weekStart: 0,
            format: "DD/MM/YYYY HH:mm"
        }), e("#date-start").bootstrapMaterialDatePicker({
            weekStart: 0,
            format: "DD/MM/YYYY HH:mm",
            shortTime: !0
        }).on("change", function(t, a) {
            e("#date-end").bootstrapMaterialDatePicker("setMinDate", a)
        }), e("input#defaultconfig").maxlength({
            warningClass: "badge badge-info",
            limitReachedClass: "badge badge-warning"
        }), e("input#thresholdconfig").maxlength({
            threshold: 20,
            warningClass: "badge badge-info",
            limitReachedClass: "badge badge-warning"
        }), e("input#moreoptions").maxlength({
            alwaysShow: !0,
            warningClass: "badge badge-success",
            limitReachedClass: "badge badge-danger"
        }), e("input#alloptions").maxlength({
            alwaysShow: !0,
            warningClass: "badge badge-success",
            limitReachedClass: "badge badge-danger",
            separator: " out of ",
            preText: "You typed ",
            postText: " chars available.",
            validate: !0
        }), e("textarea#textarea").maxlength({
            alwaysShow: !0,
            warningClass: "badge badge-info",
            limitReachedClass: "badge badge-warning"
        }), e("input#placement").maxlength({
            alwaysShow: !0,
            placement: "top-left",
            warningClass: "badge badge-info",
            limitReachedClass: "badge badge-warning"
        }), e(".vertical-spin").TouchSpin({
            verticalbuttons: !0,
            verticalupclass: "ion-plus-round",
            verticaldownclass: "ion-minus-round",
            buttondown_class: "btn btn-primary",
            buttonup_class: "btn btn-primary"
        }), e("input[name='demo1']").TouchSpin({
            min: 0,
            max: 100,
            step: .1,
            decimals: 2,
            boostat: 5,
            maxboostedstep: 10,
            postfix: "%",
            buttondown_class: "btn btn-primary",
            buttonup_class: "btn btn-primary"
        }), e("input[name='demo2']").TouchSpin({
            min: -1e9,
            max: 1e9,
            stepinterval: 50,
            maxboostedstep: 1e7,
            prefix: "$",
            buttondown_class: "btn btn-primary",
            buttonup_class: "btn btn-primary"
        }), e("input[name='demo3']").TouchSpin({
            buttondown_class: "btn btn-primary",
            buttonup_class: "btn btn-primary"
        }), e("input[name='demo3_21']").TouchSpin({
            initval: 40,
            buttondown_class: "btn btn-primary",
            buttonup_class: "btn btn-primary"
        }), e("input[name='demo3_22']").TouchSpin({
            initval: 40,
            buttondown_class: "btn btn-primary",
            buttonup_class: "btn btn-primary"
        }), e("input[name='demo5']").TouchSpin({
            prefix: "pre",
            postfix: "post",
            buttondown_class: "btn btn-primary",
            buttonup_class: "btn btn-primary"
        }), e("input[name='demo0']").TouchSpin({
            buttondown_class: "btn btn-primary",
            buttonup_class: "btn btn-primary"
        })
    }, e.AdvancedForm = new t, e.AdvancedForm.Constructor = t
}(window.jQuery),
function(t) {
    "use strict";
    window.jQuery.AdvancedForm.init()
}();