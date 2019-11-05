const https = require("https");
const { URL } = require("url");
let url = new URL(process.env.JOIN_DISCORD_WEBHOOK);

exports.handler = function(event, context, callback) {
	let email;
	event.body.split("&").forEach(part => {
		if (part.split("=")[0] == "email") {
			email = decodeURIComponent(part.split("=")[1]);
		}
	});
	if (email && email.trim().length > 0) {
		let req = https.request({
			hostname: url.hostname,
			path: url.pathname,
			method: "POST"
		}, res => {
			res.on("end", () => {
				callback(null, {
					statusCode: 302,
					headers: {
						Location: "/thanks.html"
					}
				});
			});
		});

		req.write(JSON.stringify({
			"content": "<@325680444974694410> New member signed up: `" + email.trim() + "@soton.ac.uk`"
		}));
		req.end();
	} else {
		callback(null, {
			statusCode: 302,
			headers: {
				Location: "/join.html?failed=true"
			}
		});
	}
}