frappe.ui.form.on('Whitelabel Setting', {
	refresh(frm) {
		
			    frappe.call({
	        method:"hkmvizag.hkmvizag.api.DefaultCompany",
	        callback:function(r){
	            

	            frm.set_value("custom_navbar_title",r.message)
	            frm.save()
	        }
	        
	    })
           
		
	}
	
})
