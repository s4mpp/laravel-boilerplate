<?php

return [

    'prefix' => 'painel',

	'has_context' => false,

	'logs' => false,

	'logo' => [
		//'light' => 'images/logo-light.png',
		//'dark' => 'images/logo-dark.png'
	],

	'vite' => [
		'css' => ['resources/css/app.css'],
		'js' => ['resources/js/app.js']
	],

	'middlewares' => [
		//
	],

	'can_disable_users' => false,

	'super_admin_id' => env('SUPER_ADMIN_ID'),
];
