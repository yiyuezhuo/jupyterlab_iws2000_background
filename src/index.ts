import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for @yiyuezhuo/jupyterlab_iws2000_background
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@yiyuezhuo/jupyterlab_iws2000_background:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    console.log("jupyterlab_iws2000_background (theme) is activated!")
    const style = '@yiyuezhuo/jupyterlab_iws2000_background/index.css';

    manager.register({
      name: 'jupyterlab_iws2000_background',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
