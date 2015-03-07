window.addEventListener('load', function() {
	
	options.channels.value = localStorage.channels ? localStorage.channels : 'default'
	options.host.value = localStorage.host ? localStorage.host : ''
	options.channels.onchange = saveChannels
	options.host.onchange = saveHost

	options.save.onclick = function() {
		saveChannels()
		saveHost()
		chrome.runtime.reload()
		window.close()
	}

	function saveChannels() {
		var channels = options.channels.value.replace(/ /ig,'')
		localStorage.channels = channels
	}

	function saveHost() {
		localStorage.host = options.host.value.replace(/http:\/\//i,'').replace(/https:\/\//i,'')
	}
})
