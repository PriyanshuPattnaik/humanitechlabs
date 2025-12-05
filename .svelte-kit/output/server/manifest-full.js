export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/1.png","images/2.png","images/4.png","images/5.png","images/about-hero.png","images/aboutanimation.mp4","images/hero.png","images/team/priyanshu.png","researchDatafinal.json"]),
	mimeTypes: {".png":"image/png",".mp4":"video/mp4",".json":"application/json"},
	_: {
		client: {start:"_app/immutable/entry/start.Cyil6RkU.js",app:"_app/immutable/entry/app.B1Gl2a8_.js",imports:["_app/immutable/entry/start.Cyil6RkU.js","_app/immutable/chunks/BEuGmtVM.js","_app/immutable/chunks/CqbVljeo.js","_app/immutable/chunks/CbkeNEuD.js","_app/immutable/entry/app.B1Gl2a8_.js","_app/immutable/chunks/CqbVljeo.js","_app/immutable/chunks/Z7qqfB7S.js","_app/immutable/chunks/BDD_ovKZ.js","_app/immutable/chunks/Cc5PE9Rz.js","_app/immutable/chunks/CbkeNEuD.js","_app/immutable/chunks/DOJPaqMw.js","_app/immutable/chunks/U3rIqZvK.js","_app/immutable/chunks/dadbP7c_.js","_app/immutable/chunks/DNicyvd5.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/join-us",
				pattern: /^\/join-us\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/research",
				pattern: /^\/research\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/services/ngos",
				pattern: /^\/services\/ngos\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 10 },
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
