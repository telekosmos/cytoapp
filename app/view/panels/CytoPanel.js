
var graphModel = {
	// you need to specify a data schema for custom attributes!
	dataSchema: {
		nodes: [{
			name: "label",
			type: "string"
		}, {
			name: "foo",
			type: "string"
		}],
		edges: [{
			name: "label",
			type: "string"
		}, {
			name: "bar",
			type: "string"
		}]
	},
	// NOTE the custom attributes on nodes and edges
	data: {
		nodes: [{
			id: "1",
			label: "1",
			foo: "Is this the real life?"
		}, {
			id: "2",
			label: "2",
			foo: "Is this just fantasy?"
		}],

		edges: [{
			id: "2to1",
			target: "1",
			source: "2",
			label: "2 to 1",
			bar: "Caught in a landslide..."
		}]
	}
};

/**
 * A panel with two containers: one container is the cytoscape itself, the
 * other controllers to do operations on the graph
 */
Ext.define('APP.view.panels.CytoPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.cytopanel',
	requires: ['APP.view.cytoscape.CytoScape', 'APP.view.common.TextboxButton'],

	networkModel: undefined,

	layout: {
		type: 'hbox',
		align: 'stretch'
	},

	defaults: {
//		margin: '10 10 10 10',
    margin: '5 5 5 5',
		border: true,
		style: {
			borderColor: 'grey',
			borderStyle: 'solid',
			borderWidth: 1
		}
	},
	items: [{
		xtype: 'cytoscape',
		// html: 'cytoscape here',
		networkModel: graphModel,
		flex: 8
	}, {
		xtype: 'container',
		html: 'controls here',
		flex: 2,
		layout: {
			type: 'vbox'
      // align: 'stretch'
		},
		items: [{
			xtype: 'button',
			text: 'Gene',
			id: 'btnGene',
			margin: '20 0 5 10'
		}, {
			xtype: 'button',
			text: 'Compound',
			id: 'btnComp',
			margin: '5 0 10 10'
		}, {
			xtype: 'textbox-btn',
      btnText: ' + ',
      emtpyText: 'Type a disease',
			margin: '5 0 10 10',
			btnCallback: function (comp, ev) {
        console.log('button "'+comp.getText()+'" clicked');
      }
		}, {
			xtype: 'button',
			text: 'Disease',
			id: 'noId',
			margin: '5 0 10 10',
			handler: function (btn, ev) {
				var controls = btn.up('container');
				btn.hide();
				controls.down('textbox-btn').show();
			}
		}]

	}],


	initComponent: function () {
		this.networkModel = graphModel;
		this.callParent(arguments);

		var controls = this.getComponent(1);
		var textbox = controls.down('textbox-btn');
		textbox.hide();

		console.log("cytopanel panel gatherer...");
	}
})
