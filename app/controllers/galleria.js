export default Ember.Controller.extend({
  prefix: 'http://pac.lfpl.org/polaris/search/searchresults.aspx?ctx=1.1033.0.0.2&type=Keyword&term=',
  postfix: '&by=KW&sort=RELEVANCE&limit=TOM=*&query=&page=0',
  url: '',
  results: function(response) {
    alert(response);
  },
  actions: {
    catSearch: function() {
      var terms = $('#query').val().split(' ');
      this.url += this.prefix;
      for (var i = 0; i < terms.length; i+=1) {
        this.url += terms[i] + '%20';
      }
      this.url += this.postfix;
      $.ajax(this.url, this.results); 
    }
  }
});
