import * as React from 'react'
import { Color } from '../constants'

const Busy: React.SFC<any> = (props: any) => (
  <div
    style={{
      position: 'absolute',
      background: 'rgba(255, 255, 255, 0.25)',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 10000000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <div className="cog-rotate">
      <i style={{ color: Color.PRIMARY_LIGHT, fontSize: 75 }} className="fas fa-cog" />
    </div>
  </div>
)

export default Busy
