export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/1.png","images/2.png","images/4.png","images/5.png","images/about-hero.png","images/aboutanimation.mp4","images/hero.png"]),
	mimeTypes: {".png":"image/png",".mp4":"video/mp4"},
	_: {
		client: {start:"_app/immutable/entry/start.DLe515Bj.js",app:"_app/immutable/entry/app.Ddx22UN7.js",imports:["_app/immutable/entry/start.DLe515Bj.js","_app/immutable/chunks/DzmF5C4Y.js","_app/immutable/chunks/7xBTOzLY.js","_app/immutable/entry/app.Ddx22UN7.js","_app/immutable/chunks/7xBTOzLY.js","_app/immutable/chunks/BySl41Hv.js","_app/immutable/chunks/ntbwUQCz.js","_app/immutable/chunks/B-7RzW72.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
