var vm = new Vue({
  el: '.app',
  data: {
    properties: [
      { property: 'width',  value: '' },
      { property: 'height', value: '' }
    ],
    inputText: '',
    style: ''
  },
  methods: {
    addProperty: function() {
      this.properties.push({property: this.inputText});
      this.inputText = '';
    },
    setStyle: function() {
      var l = this.properties.length;
      var style = '';
      for (var i = 0; i < l; i++) {
        var property = this.properties[i].property;
        var value = this.properties[i].value;
        style = style + property + ':' + value + 'px;';
      }
      this.style = style;
    }
  }
});