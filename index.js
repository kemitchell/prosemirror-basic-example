var EditorState = require('prosemirror-state').EditorState
var EditorView = require('prosemirror-view').EditorView
var Plugin = require('prosemirror-state').Plugin
var Schema = require('prosemirror-model').Schema
var exampleSetup = require('prosemirror-example-setup').exampleSetup
var schema = require('prosemirror-schema-basic').schema

window.view = new EditorView(
  document.getElementById('editor'),
  {
    state: EditorState.create({
      doc: schema.node('doc', {}, [
        schema.node('paragraph', {}, [
          schema.text('test')
        ])
      ]),
      plugins: exampleSetup({schema}).concat(
        new Plugin({
          props: {
            decorations: function (state) {
              console.log(
                state.selection.empty ? 'empty' : 'selected'
              )
            }
          }
        })
      )
    })
  }
)
