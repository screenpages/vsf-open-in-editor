import { serverHooks } from '@vue-storefront/core/server/hooks'
import appConfig from 'config'

const openInEditor = require('launch-editor-middleware');

serverHooks.afterApplicationInitialized(({ app, isProd }) => {
  if (!isProd) {
    let openInEditorConfig = appConfig.openInEditor || {}
    const editor = openInEditorConfig.editor || 'code'

    console.log('Open in editor is enabled (' + editor + ')')
    app.use('/__open-in-editor', openInEditor(editor));
  }
})
