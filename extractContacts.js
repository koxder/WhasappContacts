
var script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(script);

function getWhatsAppAddressBook() {

    /* Switch to the All Contacts view in WhatsApp */
    console.log('Start to script')
    $("button.icon-chat").click();

    var list = {}, position = -1;
    console.log('Init vars')
    if (position != $("div.drawer-body").scrollTop()) {
    	console.log('Go up')
        $("div.chat").each(function(i) {
        	console.log('This is the element')

            /* Get the profile picture of the WhatsApp contact */
            var img   = $(this).find("img.avatar-image.is-loaded"); 

            /* Extract the Contact Full Name */
            var title = $(this).find("div.chat-title"); 

            /* Extract the WhatsApp Phone number */
            var tel = img[0].src.match(/u=(\d*)/); 

            /* Save the entry in an associated array */
            list[tel[1]] = {name: title[0].innerText}; 
            console.log('Added to list')
        });

        position = $("div.drawer-body").scrollTop();
        $("div.drawer-body").scrollTop(position + 72); 

    }

    console.log(list);

}

getWhatsAppAddressBook()