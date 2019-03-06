import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './index.css'
import registerServiceWorker from './registerServiceWorker'
import CheckList from './components/CheckList'

ReactDOM.render(
    <CheckList/>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
