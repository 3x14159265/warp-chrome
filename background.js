// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/*
	Displays a notification with the current time. Requires "notifications"
	permission in the manifest file (or calling
	"Notification.requestPermission" beforehand).
*/


function show(msg) {  
	new Notification('warp-engine message', {
		icon: '64.png',
		body: msg
	});
}

// Test for notification support.
if (window.Notification) {
	 connect()
}

function connect() {
	if(localStorage.host && localStorage.channels) {
		var warp = new Warp({'debug': true, 'endpoint': localStorage.host})
			
		var channels = localStorage.channels.split(',')
			
		channels.forEach(function(channel) {
			if(channel.length > 0) {
				warp.subscribe("default", function(msg) {
					show(JSON.stringify(msg))
				})
			}
		})
	}		
}
