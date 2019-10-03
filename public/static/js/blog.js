var app = new Vue({
  el: '#articles',
  data() {
    return { 
      data: []
    }
  },
  mounted() {
    fetch('https://app.radioluzeiros.com/articles')
      .then(res => {
        res.json().then((data) => {
          this.data = data.data;
          this.data.forEach(element => {
            element.attributes['summary'] = `${element.attributes.content.substring(0, 250)}...`;
            element.attributes['date'] = element.attributes.createdAt;
            element['url'] = `articles/${element.id}`;
          });
        });
      })
  }
});