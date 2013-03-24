/**
 * Just a textbox + button ready to embed whatever...
 */
Ext.define('APP.view.common.TextboxButton', {
	extend: 'Ext.container.Container',
	alias: 'widget.textbox-btn',

	bodyPadding: '0 0 10 0',
	margin: '10 5 10 5',
	border: false,
	layout: 'column',

  emptyText: '',
  btnCallback: undefined,
/*
	items: [{
		xtype: 'textfield',
		columnWidth: .80,
		enableKeyEvents: true,
    emptyText: this.emptyText,
	}, {
		xtype: 'button',
		text: ' Add ',
		columnWidth: .20,
    handler: this.btnCallback
	}], // EO items
*/

  initComponent: function () {
    var me = this;

    this.items = [{
      xtype: 'textfield',
      columnWidth: .80,
      enableKeyEvents: true,
      emptyText: 'merdiña'
    }, {
      xtype: 'button',
      text: ' Add ',
      columnWidth: .20,
      handler: me.btnCallback
    }]; // EO items

    this.callParent(arguments);
  }

})
