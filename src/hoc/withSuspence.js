import React, { Suspense } from 'react'
import Preloader from '../components/Common/Preloader/Preloader';
let withSuspence = (Component) => {
    return (props) => {
        return <Suspense fallback={<Preloader />}>
            <Component {...props} />
        </Suspense>
    }

}


export default withSuspence;