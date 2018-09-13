// Custom Script to get github docs from external repos, couldve used a plugin but though it would be interesting to write my own
const https = require("https");
const marked = require("marked");
var rp = require("request-promise-native");
const fs = require("fs");

var Hexo = require("hexo");
var hexo = new Hexo(process.cwd(), {});

const githubCall = async function(req, res) {
  const reqUrl =
    "https://raw.githubusercontent.com/dasmedium/dmsocial/master/README.md";
  let response;
  try {
    response = await rp(reqUrl);
    toString = JSON.stringify(response.body);
    markdownReadMe = marked(toString);
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }

  return markdownReadMe;
  hexo.extend.generator.register(markdownReadMe, function(locals) {
    return {
      path: "project/index.html",
      data: function() {
        return fs.createWriteStream(".project/index.html");
      }
    };
  });
};
