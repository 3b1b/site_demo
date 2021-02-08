var colors = require('colors');
var htmlToText = require('html-to-text');
var wordcount = require('wordcount');

var wordCount = 0,
  WordCount = {
    countWords: function (content) {
       content  =  htmlToText.fromString(content,{
        wordwrap: false,
        ignoreImage: true,
        ignoreHref: true
      });
      var cn = content.match(/[\u4E00-\u9FA5]/g) || [];
      var en = content.replace(/[\u4E00-\u9FA5]/g,'');
      return cn.length + wordcount(en);
    },
    hooks: {
      'init': function () {
        wordCount = 0;
      },

      'page:before': function (page) {
        if (page.content) {
          wordCount += WordCount.countWords(page.content);
        }
        return page;
      },

      'finish': function () {
        console.log('Completed counting with '.green + wordCount.toString().cyan + ' words.'.green);
      }
    }
  };

module.exports = WordCount;