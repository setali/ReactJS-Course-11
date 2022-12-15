import React, { Component } from 'react'
// import Counter from './1-Counter'
// import LifeCycle from './2-LifeCycle'
// import ForceUpdate from './3-ForceUpdate'
// import LegacyLifeCycle from './4-LegacyLifeCycle'
// import UnMounting from './5-UnMounting'
// import ErrorBoundaries from './6-ErrorBoundaries'
// import DefaultProps from './7-DefaultProps'
// import ListKeys from './8-ListKeys'
// import Fragment from './9-Fragment'
// import Portal from './10-Portal'
import Form from './11-Form'

export default class App extends Component {
  render () {
    return (
      <div>
        <Form />
        {/* <Portal /> */}
        {/* <Fragment /> */}
        {/* <ListKeys /> */}
        {/* <DefaultProps />
        <DefaultProps color='blue' />
        <DefaultProps title='Eli' />
        <DefaultProps title='Ali' color='red' /> */}
        {/* <ErrorBoundaries /> */}
        {/* <UnMounting /> */}
        {/* <LegacyLifeCycle /> */}
        {/* <ForceUpdate /> */}
        {/* <LifeCycle /> */}
        {/* <Counter />
        <Counter defaultCounter={10}/>
        <Counter defaultCounter={50} /> */}
      </div>
    )
  }
}
