genRandomText = function() {
  var that = {
    numWordsParagraph: localStorage["numWordsParagraphs"], //Numbers of words per paragraph
    numParagraphs: localStorage["numParagraphs"], //Number of paragraphs
    dummyWords: ["integer","vut","nunc","risus","a","sagittis","turpis", "nunc","eu","urna","urna", "pellentesque",
                  "porttitor","est","ut","augue","cursus","scelerisque", "in","hac","habitasse","platea","dictumst",
                  "sed","ut","odio","a","dolor","ultricies","dapibus", "cum","sociis","natoque","penatibus","et","magnis",
                  "dis","parturient","montes","nascetur","ridiculus","mus", "etiam","vel","lacus","magna","nec","aliquam",
                  "augue", "lundium", "integer","porttitor","porta","porta", "in","rhoncus","adipiscing","diam","sit","amet",
                  "ultrices","turpis","auctor","sit","amet", "aenean","pulvinar","egestas","lorem","ac","placerat", "sed","lectus",
                  "mauris","rhoncus","mid","tincidunt","dignissim","elementum","in","odio", "duis","vel","magna","elit", "phasellus",
                  "tincidunt","nisi","pid","pulvinar","placerat","purus","augue","aliquet","tortor","et","tristique","turpis","enim",
                  "nec","nisi", "proin","facilisis","adipiscing","enim","ac","mattis","arcu","elementum","et", "cras","massa","non",
                  "velit","tempor","scelerisque","ac","quis","eros"],
    punctuation: ["!","?","."]
  }

  that.getRandomWord = function(x) {
    return x[that.getRandomNumber(x.length)];
  }

  that.getRandomNumber = function (x) {
    return Math.floor(Math.random()*parseInt(x));
  }

  that.upperFirst = function(x) {
    var er = /[<p>|\?|\!|\.]\W([a-z])/g;
    var ex = x.replace(er,function (s) { return s.toUpperCase(); });
    return ex;
  }

  that.getRandomPunctuation = function (x) {
    if (x > 0)
    {
      if (x % that.getRandomNumber(30) == 0)
      {
        return that.getRandomWord(that.punctuation) + ' ';
      }
      else if (x % that.getRandomNumber(20) == 0)
      {
        return ', ';
      }
      else
      {
        return ' ';
      }
    }
    return ' ';
  }

  that.compileText = function () {
    html = '<p>';

    for (var x=0,y=that.numWordsParagraph*that.numParagraphs;x<=y;x++)
    {
      if ((x > 0) && (x % that.numWordsParagraph == 0))
      {
        html += '.</p>\n\n<p>';
      }
      else
      {
        if (html.substring(html.length - 3, html.length) != "<p>")
        {
          html += that.getRandomPunctuation(x);
        }

        html += that.getRandomWord(that.dummyWords);
      }
    }
    return that.upperFirst(html.substring(0, html.length - 3));
  }

  return that;
}
