import frappe


@frappe.whitelist()
def DefaultCompany():
    #Company=frappe.defaults.get_user_default("Company")
    #Company=frappe.db.get_default("Company")
    Company = frappe.defaults.get_global_default('company')
    
    
    return Company
    
    
   #default_company:frappe.defaults.get_global_default('company')
   #<div>{{default_company}}</div>
   #log(frappe.defaults.get_user_default("Company"))
   #log(frappe.db.default_company("Company"))
