const mic = require('markdown-it-container')
const utils = require('./utils')

const vueMarkdown = {
  preprocess: (markdownIt, source) => {
    markdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    markdownIt.renderer.rules.fence = utils.wrapCustomClass(markdownIt.renderer.rules.fence)

    const fence = markdownIt.renderer.rules.fence
    markdownIt.renderer.rules.fence = function (...args) {
      args[0][args[1]].attrJoin('v-hlt', '')
      return fence(...args)
    }

    const code_inline = markdownIt.renderer.rules.code_inline
    markdownIt.renderer.rules.code_inline = function (...args) {
      args[0][args[1]].attrJoin('class', 'code_inline')
      return code_inline(...args)
    }

    return source
  },
  use: [
    [mic, 'demo', {
      validate: params => params.trim().match(/^demo\s*(.*)$/),
      render: function (tokens, idx) {

        if (tokens[idx].nesting === 1) {
          const html = utils.convertHtml(tokens[idx + 1].content)
          tokens[idx + 2].children = [];

          return `<demo-panel>
                        <div slot="desc">${html}</div>
                        <div slot="highlight">`;
        }
        return '</div></demo-panel>\n';
      }
    }],
    [mic, 'mk', {
      validate: params => params.trim().match(/^mk\s*(.*)$/),
      render: function (tokens, idx) {

        if (tokens[idx].nesting === 1) {
          const html = utils.convertHtml(tokens[idx + 1].content)
          tokens[idx + 2].children = [];

          return `<markdown>
                        <div slot="desc">${html}</div>
                        <div slot="highlight">`;
        }
        return '</div></markdown>\n';
      }
    }]
  ]
}

module.exports = vueMarkdown
