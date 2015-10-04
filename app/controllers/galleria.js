export default Ember.Controller.extend({
  url: '',
  front: 'http://pac.lfpl.org/polaris/search/searchresults.aspx?ctx=1.1033.0.0.2&type=Keyword&term=',
  back: '&by=KW&sort=RELEVANCE&limit=TOM=*&query=&page=0',
  makeUrl: function() {
    var middle = '';
    var terms = $('#query').val().split(' ');
    for (var i = 0; i < terms.length; i += 1) {
      middle += terms[i] + '%20';
    }
      return this.front + middle + this.back; 
  },
  actions: {
    setUrl: function() {
      this.set('url', this.makeUrl());
    }
  }
});
