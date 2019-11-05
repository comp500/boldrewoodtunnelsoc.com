const https = require("https");
const { URL } = require("url");
let url = new URL(process.env.JOIN_DISCORD_WEBHOOK);

exports.handler = function(event, context, callback) {
	let body = JSON.parse(event.body);
	if (body.email && body.email.trim().length > 0) {
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
			"content": "<@325680444974694410> New member signed up: `" + body.email.trim() + "@soton.ac.uk`"
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