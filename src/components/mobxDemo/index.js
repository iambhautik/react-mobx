import { toJS } from 'mobx';
import { Observer } from 'mobx-react';
import React, { Fragment } from 'react'
import { useMainStore } from '../../container'

const MobXDemo = () => {

  const mainStore = useMainStore()

  const { MobXDemoStore } = mainStore;

  console.log(MobXDemoStore, "mobXStore111111")

  return (
    <Observer>
      {() => {
        const { title, changeTitle, clickCount } = MobXDemoStore;
        return (
          <Fragment>
            {title} {clickCount}
            <button onClick={() => changeTitle(clickCount)} >Change Title</button>
          </Fragment>
        )
      }}
    </Observer>
  )
}

export default MobXDemo