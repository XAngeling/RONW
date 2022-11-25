{
	"name": "roBrowser",
	"main": "window.html",
	"version": "0.0.1",
	"single-instance": false,
 	"window": {
		"title": "Ragnarok Online",
	
		"width":  1024,
		"height":  768,
	
		"min_width": 1024,
		"max_width": 2560,
	
		"min_height": 768,
		"max_height": 1440,
	
		"fullscreen": false,
		"frame":      true,
		"icon":       "applications/icon_128.png",
		"toolbar":    true
	},
	"chromium-args": "--enable-webgl --ignore-gpu-blacklist --enable-node-worker"
}