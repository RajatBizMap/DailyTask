
/*
$(window).on('load', function() {
    frappe.after_ajax(function () {
        if (frappe.boot.whitelabel_setting.show_help_menu) {
            // $('.dropdown-help').css('display','block');
            $('.dropdown-help').attr('style', 'display: block !important');
        }
        if (frappe.boot.whitelabel_setting.logo_width) {
            $('.app-logo').css('width',frappe.boot.whitelabel_setting.logo_width+'px');
        }
        if (frappe.boot.whitelabel_setting.logo_height) {
            $('.app-logo').css('height',frappe.boot.whitelabel_setting.logo_height+'px');
       }
        if (frappe.boot.whitelabel_setting.navbar_background_color) {
            $('.navbar').css('background-color',frappe.boot.whitelabel_setting.navbar_background_color)
        }
        if (frappe.boot.whitelabel_setting.custom_navbar_title_style && frappe.boot.whitelabel_setting.custom_navbar_title) {
            $(`<span style=${frappe.boot.whitelabel_setting.custom_navbar_title_style.replace('\n','')} class="hidden-xs hidden-sm">${frappe.defaults.get_global_default('company')}</span>`).insertAfter("#navbar-breadcrumbs")
        }
    })
})
*/

/*

$(window).on('load', function() {

 $(`<span >${frappe.defaults.get_user_default("Company")}</span>`).insertAfter("#navbar-breadcrumbs")
            
//console.log(frappe.defaults.get_user_default("Company"))

})
*/



function my(){
     
    $(`<span >${frappe.defaults.get_user_default("Company")}</span>`).insertAfter("#navbar-breadcrumbs")

}

window.onload = function(){

my()
console.log(frappe.defaults.get_user_default("Company"))
}


