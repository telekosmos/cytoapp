/*

 This file is part of Ext JS 4

 Copyright (c) 2011 Sencha Inc

 Contact:  http://www.sencha.com/contact

 GNU General Public License Usage
 This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

 If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

 */

Ext.Loader.setConfig({
  enabled:true,
  disableCaching:false
});

Ext.application({
	name:'APP',

	// All the paths for custom classes
	paths:{
		// 'Ext.ux':'../../../examples/ux/',
		'APP': 'app'
	},

	// Define all the controllers that should initialize at boot up of your application
	controllers: [
//		'Articles',	'Feeds'
		'Panels'
	],

	autoCreateViewport:true
});

