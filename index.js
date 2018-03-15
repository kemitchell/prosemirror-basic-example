var EditorState = require('prosemirror-state').EditorState
var EditorView = require('prosemirror-view').EditorView
var Schema = require('prosemirror-model').Schema
var schema = require('prosemirror-schema-basic').schema
var exampleSetup = require('prosemirror-example-setup').exampleSetup

window.view = new EditorView(
  document.getElementById('editor'),
  {
    state: EditorState.create({
      doc: schema.node('doc', {}, [
        schema.node('paragraph', {}, [
          schema.text('test')
        ])
      ]),
      plugins: exampleSetup({schema})
    })
  }
)
